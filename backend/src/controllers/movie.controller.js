const { readExcel, writeExcel } = require("../services/excel.service");
const { v4: uuid } = require("uuid");

exports.getMovies = async (req, res) => {
  console.log("get movie api");
  const movies = await readExcel("movies.xlsx");
  res.json(movies);
};
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
      return res.status(400).json({ msg: "Required fields missing" });
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
      is_free: is_free || "yes",
      created_at: new Date().toISOString()
    });

    await writeExcel("movies.xlsx", movies);

    console.log("MOVIE ADDED:", title);

    res.json({
      success: true,
      message: "Movie added successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to add movie" });
  }
};