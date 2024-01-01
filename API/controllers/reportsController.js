const report = require('../models/reports125');

exports.rep1 = async (req, res) => {
  const startDate = req.query.startDate; // Extract the startDate from the query parameter
  const endDate = req.query.endDate; // Extract the endDate from the query parameter

  try {
      if (!startDate || !endDate) {
          return res.status(400).json({ error: 'Both startDate and endDate are required.' });
      }

      // Assuming report.getRep1 takes an object with startDate and endDate properties
      const [result, _] = await report.getRep1(startDate, endDate);

      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


exports.rep2 = async (req, res) => {
  const startDate = req.query.startDate; // Extract the startDate from the query parameter
  const endDate = req.query.endDate; // Extract the endDate from the query parameter

  try {
      if (!startDate || !endDate) {
          return res.status(400).json({ error: 'Both startDate and endDate are required.' });
      }

      // Assuming report.getRep1 takes an object with startDate and endDate properties
      const [result, _] = await report.getRep2(startDate, endDate);

      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.rep5= async (req, res) => 
{
  const startDate = req.query.startDate; // Extract the startDate from the query parameter
  const endDate = req.query.endDate; // Extract the endDate from the query parameter

  try {
      if (!startDate || !endDate) {
          return res.status(400).json({ error: 'Both startDate and endDate are required.' });
      }

      // Assuming report.getRep1 takes an object with startDate and endDate properties
      const [result, _] = await report.getRep5(startDate, endDate);

      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};