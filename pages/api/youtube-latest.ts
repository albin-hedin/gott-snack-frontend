import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId?.startsWith("UC")) {
    return res.status(500).json({ error: "Missing YouTube configuration" });
  }

  // Cache failures briefly so a YouTube outage doesn't burn API quota on every request
  const cacheErrors = () =>
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  try {
    // Use the uploads playlist (UC... -> UU...) for true chronological order
    const uploadsPlaylistId = "UU" + channelId.slice(2);
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      cacheErrors();
      return res.status(502).json({ error: "YouTube API request failed" });
    }

    const data = await response.json();
    const snippet = data.items?.[0]?.snippet;
    const thumbnail =
      snippet?.thumbnails?.high?.url ?? snippet?.thumbnails?.medium?.url;

    if (!snippet?.resourceId?.videoId || !thumbnail) {
      cacheErrors();
      return res.status(404).json({ error: "No videos found" });
    }

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({
      videoId: snippet.resourceId.videoId,
      title: snippet.title,
      thumbnail,
    });
  } catch {
    cacheErrors();
    return res.status(500).json({ error: "Failed to fetch latest video" });
  }
}
