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
    const attribute = req.query.attribute;
    const value = req.query.value;

    if (!attribute || !value) {
      return res.status(400).json({ error: 'Both attribute and value are required.' });
    }

    const attributes = { [attribute]: value };
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

exports.createOffice = async (req, res) => {
  try {
    const office = req.body; // assuming you send office in the request body
    await Office.createOffice(office);
    res.status(200).json({ message: 'Office created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
