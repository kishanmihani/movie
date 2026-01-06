
// Read config from environment with safe defaults
require("dotenv").config();
module.exports = {
	YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
	YOUTUBE_PLAYLIST_ID: process.env.YOUTUBE_PLAYLIST_ID,
	PORT: Number(process.env.PORT) || 4000,
};