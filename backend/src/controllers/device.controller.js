const { readExcel, writeExcel } = require("../services/excel.service");
const { v4: uuid } = require("uuid");

// ===============================
// REGISTER DEVICE
// ===============================
exports.getDevicesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    console.log("GET DEVICES FOR USER:", userId);

    const devices = await readExcel("devices.xlsx");

    const userDevices = devices.filter(
      d => d.user_id === userId
    );

    res.json({
      success: true,
      total: userDevices.length,
      devices: userDevices
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to fetch devices" });
  }
};
exports.registerDevice = async (req, res) => {
  try {
    const { user_id, device_id, device_type } = req.body;
    const ip = req.ip;

    if (!user_id || !device_id) {
      return res.status(400).json({ msg: "Missing parameters" });
    }

    const devices = await readExcel("devices.xlsx");

    // prevent duplicate device
    const exists = devices.find(
      d => d.user_id === user_id && d.device_id === device_id
    );

    if (exists) {
      return res.json({ msg: "Device already registered" });
    }

    devices.push({
      id: uuid(),
      user_id,
      device_id,
      device_type: device_type || "unknown",
      ip,
      created_at: new Date().toISOString()
    });

    await writeExcel("devices.xlsx", devices);

    console.log("DEVICE REGISTERED:", device_id);

    res.json({
      success: true,
      message: "Device registered successfully"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Device registration failed" });
  }
};
