const { readExcel, writeExcel } = require("../services/excel.service");
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
  console.log("post login api")
  const users = await readExcel("users.xlsx");

  const user = users.find(
    u => u.email === req.body.email && u.password === req.body.password
  );

  if (!user) return res.status(401).json({ msg: "Invalid" });

  user.last_login = new Date();
  await writeExcel("users.xlsx", users);

  res.json(user);
};
