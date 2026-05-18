const db = require("../config/db");

exports.getInstitutes = (req, res) => {
  db.query("SELECT * FROM institutes", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};
