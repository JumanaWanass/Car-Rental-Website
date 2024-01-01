const Customer = require("../models/Customer");
const bcrypt = require("bcrypt");

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
      return res
        .status(400)
        .json({ error: "Both attribute and value are required." });
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

// CustomerController.js
exports.createCustomer = async (req, res) => 
{
  try {
    const customerDataString = Object.keys(req.body);
    console.log(customerDataString)
    const customerData = req.body;

    // Extract email, ssn, and country from customerData
    const { Email, SSN, Country, Password } = req.body;

    // Validate registration
    const validation = await Customer.validateRegistration(Email, SSN, Country);
    if (!validation.success) {
      return res.status(400).json({ error: validation.message });
    }

    // Hash the password
    const saltRounds = 10;
    customerData.Password = await bcrypt.hash(Password, saltRounds);

    // Create the customer
    const result = await Customer.createCustomer(customerData);

    // Set session data
    req.session.userID = SSN;
    req.session.admin = false;
    req.session.auth = true;

    res.status(200).json(result);
  } catch (error) {
    console.error(error); // Log the error for debugging

    // Handle specific validation errors
    if (error.success === false) {
      return res.status(400).json({ error: error.error });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.login = async (req, res) => {
  try {
    const data = req.body; // Assuming customer is sent in the request body
    if (req.session.userID) {
      res.status(200).json({ message: "Already logged in " });
    } else {
      if (!(data.Email && data.Password)) {
        res.status(304).json({ message: "Missing email or password" });
      } else {
        const [result, _] = await Customer.findByAttributes({
          Email: data.Email,
        });

        if (!result) {
          res.status(301).json({ message: "Unauthorized" });
        } else {
          const match = await bcrypt.compare(data.Password, result[0].Password);
          if (match) {
            console.log(result[0].custID);
            req.session.userID = result[0].custID;
            req.session.admin = false;
            req.session.auth = true;
            res.status(200).json({ message: "Logged in success" });
          } else {
            res.status(301).json({ message: "Unauthorized" });
          }
        }
      }
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
