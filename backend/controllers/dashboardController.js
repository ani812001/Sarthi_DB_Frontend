const db = require("../config/db");

exports.getDashboardData = (req, res) => {
  db.query(
    "SELECT COUNT(*) AS totalCompanies FROM companies",
    (err, companiesResult) => {
      if (err) {
        return res.status(500).json(err);
      }

      db.query(
        "SELECT COUNT(*) AS totalInstitutes FROM institutes",
        (err, institutesResult) => {
          if (err) {
            return res.status(500).json(err);
          }

          db.query(
            "SELECT COUNT(*) AS totalUploads FROM uploads",
            (err, uploadsResult) => {
              if (err) {
                return res.status(500).json(err);
              }

              res.json({
                totalCompanies: companiesResult[0].totalCompanies,

                totalInstitutes: institutesResult[0].totalInstitutes,

                totalUploads: uploadsResult[0].totalUploads,

                apiFetchCount: 128500,
              });
            },
          );
        },
      );
    },
  );
};
