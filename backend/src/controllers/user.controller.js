const { readExcel, writeExcel } = require("../services/excel.service");

exports.getUserDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const users = await readExcel("users.xlsx");

    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found",
      });
    }

    const { password, ...userData } = user;

    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};
