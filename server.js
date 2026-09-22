// server.ts
import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
if (!process.env.GEMINI_API_KEY) {
  try {
    if (fs.existsSync("/app/.dev.env.json")) {
      const devEnv = JSON.parse(fs.readFileSync("/app/.dev.env.json", "utf8"));
      if (devEnv.GEMINI_API_KEY) {
        process.env.GEMINI_API_KEY = devEnv.GEMINI_API_KEY;
      }
    }
  } catch (e) {
  }
}
var geminiClient = null;
var activeApiKey = null;
function getGeminiClient() {
  let apiKey = process.env.GEMINI_API_KEY;
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
    } catch (e) {
    }
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
    } catch (e) {
    }
  }
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  if (!geminiClient || activeApiKey !== apiKey) {
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    activeApiKey = apiKey;
  }
  return geminiClient;
}
var SUPPORTED_LANGUAGES = {
  hi: { name: "Hindi", nativeName: "\u0939\u093F\u0928\u094D\u0926\u0940", bcp47: "hi-IN" },
  en: { name: "English (India)", nativeName: "English", bcp47: "en-IN" },
  bn: { name: "Bengali", nativeName: "\u09AC\u09BE\u0982\u09B2\u09BE", bcp47: "bn-IN" },
  ta: { name: "Tamil", nativeName: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", bcp47: "ta-IN" },
  te: { name: "Telugu", nativeName: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", bcp47: "te-IN" },
  mr: { name: "Marathi", nativeName: "\u092E\u0930\u093E\u0920\u0940", bcp47: "mr-IN" },
  gu: { name: "Gujarati", nativeName: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0", bcp47: "gu-IN" },
  kn: { name: "Kannada", nativeName: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", bcp47: "kn-IN" },
  ml: { name: "Malayalam", nativeName: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02", bcp47: "ml-IN" },
  pa: { name: "Punjabi", nativeName: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40", bcp47: "pa-IN" },
  ur: { name: "Urdu", nativeName: "\u0627\u0631\u062F\u0648", bcp47: "ur-IN" },
  or: { name: "Odia", nativeName: "\u0B13\u0B21\u0B3C\u0B3F\u0B06", bcp47: "or-IN" },
  as: { name: "Assamese", nativeName: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE", bcp47: "as-IN" },
  sa: { name: "Sanskrit", nativeName: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D", bcp47: "sa-IN" }
};
async function startServer() {
  const app = express();
  const PORT = 3e3;
  app.use(express.json());
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      service: "YatraBharat API"
    });
  });
  app.get("/api/translate/status", (req, res) => {
    const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY");
    res.json({
      provider: "gemini",
      model: "gemini-3.8-flash",
      configured: hasKey,
      supportedLanguages: Object.entries(SUPPORTED_LANGUAGES).map(([id, info]) => ({
        id,
        ...info
      })),
      instructions: hasKey ? "Translation backend is ready." : "GEMINI_API_KEY is not configured. Please configure it in the AI Studio Settings > Secrets menu."
    });
  });
  app.post("/api/translate", async (req, res) => {
    const { text, sourceLang = "en", targetLang = "hi" } = req.body;
    if (!text || typeof text !== "string" || !text.trim()) {
      return res.status(400).json({
        success: false,
        error: "EMPTY_TEXT",
        message: "Text to translate cannot be empty."
      });
    }
    const cleanText = text.trim();
    const sourceInfo = SUPPORTED_LANGUAGES[sourceLang] || {
      name: sourceLang,
      nativeName: sourceLang,
      bcp47: sourceLang
    };
    const targetInfo = SUPPORTED_LANGUAGES[targetLang] || {
      name: targetLang,
      nativeName: targetLang,
      bcp47: targetLang
    };
    if (sourceLang.toLowerCase() === targetLang.toLowerCase()) {
      return res.json({
        success: true,
        translatedText: cleanText,
        phonetic: cleanText,
        detectedSource: sourceInfo.name,
        provider: "direct-match"
      });
    }
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        success: false,
        error: "PROVIDER_NOT_CONFIGURED",
        message: "Gemini Translation API key is not configured on the server. Please add your GEMINI_API_KEY in the AI Studio Settings > Secrets panel."
      });
    }
    const candidateModels = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
    let lastError = null;
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
            systemInstruction: "You are a dedicated multilingual speech and text translator for Indian travel and tourism. Output accurate translations in native scripts with helpful phonetic pronunciations. Always respond strictly in valid JSON format.",
            temperature: 0.1,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                translatedText: {
                  type: Type.STRING,
                  description: "The direct translation in the target language's official native script (e.g. Devanagari for Hindi/Marathi, Tamil script for Tamil, Bengali script for Bengali, Latin for English)."
                },
                phonetic: {
                  type: Type.STRING,
                  description: "Romanized Latin phonetic guide showing how to pronounce the translated sentence."
                },
                detectedSource: {
                  type: Type.STRING,
                  description: "Name of the detected source language."
                }
              },
              required: ["translatedText", "phonetic"]
            }
          }
        });
        const responseText = geminiResponse.text?.trim() || "";
        let parsed = {};
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
          provider: modelName
        });
      } catch (err) {
        console.warn(`Model ${modelName} failed or unavailable:`, err?.message || err);
        lastError = err;
      }
    }
    console.error("All translation models failed:", lastError);
    return res.status(500).json({
      success: false,
      error: "TRANSLATION_API_ERROR",
      message: lastError?.message || "All translation models were unavailable. Please try again in a moment."
    });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
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
//# sourceMappingURL=server.js.map
