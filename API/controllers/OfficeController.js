const Office = require('../models/Office');

exports.getAll = async (req, res) => {
    try {
      const [result, _] = await Office.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getByAttributes = async (req, res) => {
    try {
      const attributes = req.body; // assuming you send attributes in the request body
      const [result, _] = await Office.findByAttributes(attributes);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteByAttributes = async (req, res) => {
    try {
      const attributes = req.body; // assuming you send attributes in the request body
      await Office.deleteByAttributes(attributes);
      res.status(200).json({ message: 'Office deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updateByAttributes = async (req, res) => {
    try {
      const attributes = req.body.attributes; // attributes to find the office
      const newValues = req.body.newValues; // new values to update
      await Office.updateByAttributes(attributes, newValues);
      res.status(200).json({ message: 'Office updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  