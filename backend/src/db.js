let db;

const setDB = (database) => {
  db = database;
};

const getDB = () => db;

module.exports = { setDB, getDB };
