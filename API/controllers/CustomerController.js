const Customer = require("../models/Customer");

exports.getAll = async (req, res) => {
  try {
    const [result, _] = await Customer.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByAttributes = async (req, res) => {
  try {
    const attributes = req.body; // Assuming attributes are sent in the request body
    const [result, _] = await Customer.findByAttributes(attributes);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteByAttributes = async (req, res) => {
  try {
    const attributes = req.body; // Assuming attributes are sent in the request body
    const [result, _] = await Customer.deleteByAttributes(attributes);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.updateByAttributes = async (req, res) => {
  try {
    const attributes = req.body.attributes; // Assuming attributes are sent in the request body
    const newValues = req.body.newValues; // Assuming new values are sent in the request body
    const [result, _] = await Customer.updateByAttributes(
      attributes,
      newValues
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
