import express from "express";
import { getTopBusinessHeadlines } from "./api/newsService.js";

const router = express.Router();

router.get("/news", async (_, res) => {
  try {
    const news = await getTopBusinessHeadlines();
    res.json(news);
  } catch (error) {
    console.error("Error in news route:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;
