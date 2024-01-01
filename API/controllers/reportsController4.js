const report = require('../models/report4');

exports.rep4= async (req, res) => 
{
    const attribute = req.query.attribute; // Extract the attribute from the query parameter
    const value = req.query.value; // Extract the value from the query parameter
  
    try {
      if (!attribute || !value) {
        return res.status(400).json({ error: 'Both attribute and value are required.' });
      }
  
      const attributes = { [attribute]: value };
      const [result, _] = await report.getRep4(attributes);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};