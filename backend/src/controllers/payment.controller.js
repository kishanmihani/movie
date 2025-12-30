const { readExcel, writeExcel } = require("../services/excel.service");
const { v4: uuid } = require("uuid");

// ===============================
// CREATE PAYMENT
// ===============================
exports.createPayment = async (req, res) => {
  console.log("post create Payment api");
  try {
    const {
      user_id,
      plan,
      amount,
      transaction_id
    } = req.body;

    if (!user_id || !plan || !amount || !transaction_id) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    const payments = await readExcel("payments.xlsx");
    const users = await readExcel("users.xlsx");

    // Find user
    const userIndex = users.findIndex(u => u.id === user_id);
    if (userIndex === -1) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Save payment
    payments.push({
      payment_id: uuid(),
      user_id,
      plan,
      amount,
      method: "UPI",
      upi_id: "yourupi@bank",
      transaction_id,
      status: "success",
      paid_at: new Date().toISOString()
    });

    await writeExcel("payments.xlsx", payments);

    // Update user plan
    users[userIndex].plan = plan;

    if (plan === "advance") users[userIndex].device_limit = 1;
    if (plan === "super") users[userIndex].device_limit = "unlimited";

    await writeExcel("users.xlsx", users);

    res.json({
      success: true,
      msg: "Payment successful & plan activated"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Payment failed" });
  }
};

// ===============================
// PAYMENT HISTORY
// ===============================
exports.getHistory = async (req, res) => {
  console.log("get Payment histroy api");
  try {
    const { userId } = req.params;

    const payments = await readExcel("payments.xlsx");
    const history = payments.filter(p => p.user_id === userId);

    res.json(history);

  } catch (error) {
    res.status(500).json({ msg: "Unable to fetch history" });
  }
};
