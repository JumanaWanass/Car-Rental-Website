const report = require('../models/reports125');

exports.rep1= async (req, res) => 
{
    // const attribute = req.query.attribute; // Extract the attribute from the query parameter
    // const value = req.query.value; // Extract the value from the query parameter
    const data = req.body;
    try {
      if (!data) {
        return res.status(400).json({ error: 'Both attribute and value are required.' });
      }

      const [result, _] = await report.getRep1(data);
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.rep2 = async (req, res) => {
    const attribute = req.query.attribute; // Extract the attribute from the query parameter
    const value = req.query.value; // Extract the value from the query parameter
  
    try {
      if (!attribute || !value) {
        return res.status(400).json({ error: 'Both attribute and value are required.' });
      }
  
      const attributes = { [attribute]: value };
      const [result, _] = await report.getRep2(attributes);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  exports.rep5= async (req, res) => 
{
    const attribute = req.query.attribute; // Extract the attribute from the query parameter
    const value = req.query.value; // Extract the value from the query parameter
  
    try {
      if (!attribute || !value) {
        return res.status(400).json({ error: 'Both attribute and value are required.' });
      }
  
      const attributes = { [attribute]: value };
      const [result, _] = await report.getRep5(attributes);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};