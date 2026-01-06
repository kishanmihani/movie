
const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");
const { YOUTUBE_API_KEY,YOUTUBE_PLAYLIST_ID } = require("../config");

router.get("/", movieController.getPlaylistMovies);
router.get("/play/:videoId", movieController.playMovie);
router.post("/add", movieController.addMovie);
router.get("/debug", (req, res) => {
  res.json({
    key: YOUTUBE_API_KEY ? "KEY_LOADED" : "KEY_MISSING",
    playlist: YOUTUBE_PLAYLIST_ID
  });
});
module.exports = router;
