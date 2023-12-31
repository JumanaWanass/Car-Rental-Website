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
      const attribute = req.query.attribute;
      const value = req.query.value;

      if (!attribute || !value) {
          return res.status(400).json({ error: 'Both attribute and value are required.' });
      }

      const attributes = { [attribute]: value };
      const [result, _] = await Customer.findByAttributes(attributes);
      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ error: error.message });
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

exports.createCustomer = async (req, res) => {
  try {
    const customer = req.body; // Assuming customer is sent in the request body
    const [result, _] = await Customer.createCustomer(customer);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
