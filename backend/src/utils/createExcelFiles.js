const ExcelJS = require("exceljs");
const path = require("path");
const fs = require("fs");

const dataDir = path.join(__dirname, "../../data");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

async function createFile(fileName, headers) {
  const filePath = path.join(dataDir, fileName);

  if (fs.existsSync(filePath)) return;

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");

  sheet.addRow(headers);

  await workbook.xlsx.writeFile(filePath);
  console.log(`${fileName} created`);
}

async function init() {
  await createFile("users.xlsx", [
    "id", "name", "email", "password", "role",
    "plan", "device_limit", "created_at",
    "last_login", "status"
  ]);

  await createFile("movies.xlsx", [
    "id", "title", "category", "language",
    "poster", "watch_url", "download_url",
    "is_free", "created_at"
  ]);

  await createFile("payments.xlsx", [
    "payment_id", "user_id", "plan", "amount",
    "method", "upi_id", "transaction_id",
    "status", "paid_at"
  ]);
}

init();
