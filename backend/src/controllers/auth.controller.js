const { readExcel, writeExcel } = require("../services/excel.service");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

exports.register = async (req, res) => {
  console.log("post register api")
  const users = await readExcel("users.xlsx");

  if (users.find(u => u.email === req.body.email))
    return res.status(400).json({ msg: "User exists" });

  users.push({
    id: uuid(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    plan: "free",
    created_at: new Date(),
    last_login: ""
  });

  await writeExcel("users.xlsx", users);
  res.json({ success: true });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const users = await readExcel("users.xlsx");

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({
      msg: "Email not found"
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      msg: "Incorrect password"
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );

  res.json({
    msg: "Login successful",
    token
  });
};
