const axios = require("axios");
const { YOUTUBE_PLAYLIST_ID, YOUTUBE_API_KEY } = require("../config");
const { readExcel, writeExcel } = require("../services/excel.service");
const { v4: uuid } = require("uuid");

/* ===============================
   GET MOVIES FROM YOUTUBE PLAYLIST
================================ */
exports.getPlaylistMovies = async (req, res) => {
  try {
    if (!YOUTUBE_API_KEY || !YOUTUBE_PLAYLIST_ID) {
      return res.status(500).json({
        success: false,
        message: "YouTube API key or Playlist ID missing",
      });
    }

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId: YOUTUBE_PLAYLIST_ID,
          maxResults: 10,
          key: YOUTUBE_API_KEY,
        },
      }
    );

    const movies = response.data.items.map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    res.json({
      success: true,
      movies,
    });
  } catch (error) {
    console.error("YOUTUBE ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
      error: error.response?.data || error.message,
    });
  }
};
exports.playMovie = async (req, res) => {
  try {
    const { videoId } = req.params;

    if (!videoId) {
      return res.status(400).json({
        success: false,
        message: "Video ID required",
      });
    }

    // ✅ ONLY SAFE WAY TO PLAY
    res.json({
      success: true,
      play_url: `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&controls=0&showinfo=0&rel=0`,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to play movie",
    });
  }
};
/* ===============================
   ADD MOVIE TO EXCEL
================================ */
exports.addMovie = async (req, res) => {
  try {
    const {
      title,
      category,
      language,
      poster,
      watch_url,
      download_url,
      is_free
    } = req.body;

    // validation
    if (!title || !category || !watch_url) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const movies = await readExcel("movies.xlsx");

    movies.push({
      id: uuid(),
      title,
      category,
      language: language || "Unknown",
      poster: poster || "",
      watch_url,
      download_url: download_url || "",
      is_free: is_free ?? "yes",
      created_at: new Date().toISOString(),
    });

    await writeExcel("movies.xlsx", movies);

    res.json({
      success: true,
      message: "Movie added successfully",
    });

  } catch (error) {
    console.error("ADD MOVIE ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add movie",
    });
  }
};
