const report = require('../models/report4');

exports.rep4= async (req, res) => 
{
    const custID = req.query.custID; 
    
  
    try {
      if (!custID) {
        return res.status(400).json({ error: 'Both attribute and value are required.' });
      }

      const [result, _] = await report.getRep4(custID);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};