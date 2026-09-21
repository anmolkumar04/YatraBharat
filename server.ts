import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

// Ensure dirname support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure GEMINI_API_KEY fallback check from /app/.dev.env.json if running in dev environment
if (!process.env.GEMINI_API_KEY) {
  try {
    if (fs.existsSync("/app/.dev.env.json")) {
      const devEnv = JSON.parse(fs.readFileSync("/app/.dev.env.json", "utf8"));
      if (devEnv.GEMINI_API_KEY) {
        process.env.GEMINI_API_KEY = devEnv.GEMINI_API_KEY;
      }
    }
  } catch (e) {
    // Ignore fallback read error
  }
}

// Lazy initialization of Gemini client
let geminiClient: GoogleGenAI | null = null;
let activeApiKey: string | null = null;

function getGeminiClient(): GoogleGenAI | null {
  let apiKey = process.env.GEMINI_API_KEY;

  // Fallback to .env or /app/.dev.env.json if unset or placeholder
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    try {
      if (fs.existsSync(path.join(process.cwd(), ".env"))) {
        const envContent = fs.readFileSync(path.join(process.cwd(), ".env"), "utf8");
        const match = envContent.match(/GEMINI_API_KEY=["']?([^"'\r\n]+)["']?/);
        if (match && match[1]) {
          apiKey = match[1].trim();
          process.env.GEMINI_API_KEY = apiKey;
        }
      }
    } catch (e) {}
  }

  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    try {
      if (fs.existsSync("/app/.dev.env.json")) {
        const devEnv = JSON.parse(fs.readFileSync("/app/.dev.env.json", "utf8"));
        if (devEnv.GEMINI_API_KEY) {
          apiKey = devEnv.GEMINI_API_KEY;
          process.env.GEMINI_API_KEY = apiKey;
        }
      }
    } catch (e) {}
  }

  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }

  if (!geminiClient || activeApiKey !== apiKey) {
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    activeApiKey = apiKey;
  }
  return geminiClient;
}

const SUPPORTED_LANGUAGES: Record<string, { name: string; nativeName: string; bcp47: string }> = {
  hi: { name: "Hindi", nativeName: "हिन्दी", bcp47: "hi-IN" },
  en: { name: "English (India)", nativeName: "English", bcp47: "en-IN" },
  bn: { name: "Bengali", nativeName: "বাংলা", bcp47: "bn-IN" },
  ta: { name: "Tamil", nativeName: "தமிழ்", bcp47: "ta-IN" },
  te: { name: "Telugu", nativeName: "తెలుగు", bcp47: "te-IN" },
  mr: { name: "Marathi", nativeName: "मराठी", bcp47: "mr-IN" },
  gu: { name: "Gujarati", nativeName: "ગુજરાતી", bcp47: "gu-IN" },
  kn: { name: "Kannada", nativeName: "ಕನ್ನಡ", bcp47: "kn-IN" },
  ml: { name: "Malayalam", nativeName: "മലയാളം", bcp47: "ml-IN" },
  pa: { name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", bcp47: "pa-IN" },
  ur: { name: "Urdu", nativeName: "اردو", bcp47: "ur-IN" },
  or: { name: "Odia", nativeName: "ଓଡ଼ିଆ", bcp47: "or-IN" },
  as: { name: "Assamese", nativeName: "অসমীয়া", bcp47: "as-IN" },
  sa: { name: "Sanskrit", nativeName: "संस्कृतम्", bcp47: "sa-IN" },
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON request body parser
  app.use(express.json());

  // 1. Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "YatraBharat API",
    });
  });

  // 2. Translation provider status check
  app.get("/api/translate/status", (req, res) => {
    const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY");
    res.json({
      provider: "gemini",
      model: "gemini-3.8-flash",
      configured: hasKey,
      supportedLanguages: Object.entries(SUPPORTED_LANGUAGES).map(([id, info]) => ({
        id,
        ...info,
      })),
      instructions: hasKey
        ? "Translation backend is ready."
        : "GEMINI_API_KEY is not configured. Please configure it in the AI Studio Settings > Secrets menu.",
    });
  });

  // 3. Real translation endpoint
  app.post("/api/translate", async (req, res) => {
    const { text, sourceLang = "en", targetLang = "hi" } = req.body;

    if (!text || typeof text !== "string" || !text.trim()) {
      return res.status(400).json({
        success: false,
        error: "EMPTY_TEXT",
        message: "Text to translate cannot be empty.",
      });
    }

    const cleanText = text.trim();
    const sourceInfo = SUPPORTED_LANGUAGES[sourceLang] || {
      name: sourceLang,
      nativeName: sourceLang,
      bcp47: sourceLang,
    };
    const targetInfo = SUPPORTED_LANGUAGES[targetLang] || {
      name: targetLang,
      nativeName: targetLang,
      bcp47: targetLang,
    };

    // If source and target are identical
    if (sourceLang.toLowerCase() === targetLang.toLowerCase()) {
      return res.json({
        success: true,
        translatedText: cleanText,
        phonetic: cleanText,
        detectedSource: sourceInfo.name,
        provider: "direct-match",
      });
    }

    // Check if backend API provider is configured
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        success: false,
        error: "PROVIDER_NOT_CONFIGURED",
        message:
          "Gemini Translation API key is not configured on the server. Please add your GEMINI_API_KEY in the AI Studio Settings > Secrets panel.",
      });
    }

    const candidateModels = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
    let lastError: any = null;

    for (const modelName of candidateModels) {
      try {
        const prompt = `You are a real-time multilingual translator for India tourism (Yatra Bharat).
Translate the following travel dialogue/text accurately from ${sourceInfo.name} (${sourceInfo.nativeName}) to ${targetInfo.name} (${targetInfo.nativeName}).

Traveler's text: "${cleanText}"

Requirements:
1. Translate into the authentic script of ${targetInfo.name} with natural colloquial and polite travel phrasing.
2. Provide an easy-to-read romanized phonetic pronunciation (in English letters) so a traveler can pronounce it out loud.
3. If the input is in English or Romanized speech (Hinglish/transliteration), detect and translate it correctly.`;

        const geminiResponse = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            systemInstruction:
              "You are a dedicated multilingual speech and text translator for Indian travel and tourism. Output accurate translations in native scripts with helpful phonetic pronunciations. Always respond strictly in valid JSON format.",
            temperature: 0.1,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                translatedText: {
                  type: Type.STRING,
                  description:
                    "The direct translation in the target language's official native script (e.g. Devanagari for Hindi/Marathi, Tamil script for Tamil, Bengali script for Bengali, Latin for English).",
                },
                phonetic: {
                  type: Type.STRING,
                  description:
                    "Romanized Latin phonetic guide showing how to pronounce the translated sentence.",
                },
                detectedSource: {
                  type: Type.STRING,
                  description: "Name of the detected source language.",
                },
              },
              required: ["translatedText", "phonetic"],
            },
          },
        });

        const responseText = geminiResponse.text?.trim() || "";
        let parsed: { translatedText?: string; phonetic?: string; detectedSource?: string } = {};

        try {
          parsed = JSON.parse(responseText);
        } catch (parseErr) {
          const match = responseText.match(/\{[\s\S]*\}/);
          if (match) {
            parsed = JSON.parse(match[0]);
          } else {
            throw new Error("Invalid format received from translation model.");
          }
        }

        if (!parsed.translatedText) {
          throw new Error("Translation model did not return translated text.");
        }

        return res.json({
          success: true,
          translatedText: parsed.translatedText,
          phonetic: parsed.phonetic || `Spoken in ${targetInfo.name}`,
          detectedSource: parsed.detectedSource || sourceInfo.name,
          provider: modelName,
        });
      } catch (err: any) {
        console.warn(`Model ${modelName} failed or unavailable:`, err?.message || err);
        lastError = err;
        // continue loop to next model in fallback chain
      }
    }

    console.error("All translation models failed:", lastError);
    return res.status(500).json({
      success: false,
      error: "TRANSLATION_API_ERROR",
      message: lastError?.message || "All translation models were unavailable. Please try again in a moment.",
    });
  });

  // 4. Vite middleware for development or Static files for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`YatraBharat Full-Stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
