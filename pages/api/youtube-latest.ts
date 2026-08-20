import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return res.status(500).json({ error: "Missing YouTube configuration" });
  }

  try {
    // Use the uploads playlist (replace UC with UU in channel ID) for true chronological order
    const uploadsPlaylistId = channelId.replace("UC", "UU");
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(502).json({ error: "YouTube API request failed" });
    }

    const data = await response.json();
    const item = data.items?.[0];

    if (!item) {
      return res.status(404).json({ error: "No videos found" });
    }

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    return res.status(200).json({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url ?? item.snippet.thumbnails.medium?.url,
    });
  } catch {
    return res.status(500).json({ error: "Failed to fetch latest video" });
  }
}
