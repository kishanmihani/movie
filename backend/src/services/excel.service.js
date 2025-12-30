const ExcelJS = require("exceljs");
const path = require("path");

const dataPath = path.join(__dirname, "../../data");

async function readExcel(file) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path.join(dataPath, file));

  const sheet = workbook.worksheets[0];
  const headers = [];
  const rows = [];

  sheet.getRow(1).eachCell(cell => headers.push(cell.value));

  sheet.eachRow((row, i) => {
    if (i === 1) return;
    const obj = {};
    row.eachCell((cell, j) => {
      obj[headers[j - 1]] = cell.value;
    });
    rows.push(obj);
  });

  return rows;
}

async function writeExcel(file, data) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");

  sheet.columns = Object.keys(data[0]).map(key => ({
    header: key,
    key,
    width: 20
  }));

  data.forEach(row => sheet.addRow(row));

  await workbook.xlsx.writeFile(path.join(dataPath, file));
}

module.exports = {
  readExcel,
  writeExcel
};
