const Employee = require('../models/Employee');

exports.getAll = async (req, res) => {
    try {
        const [result, _] = await Employee.findAll();
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
        const [result, _] = await Employee.findByAttributes(attributes);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteByAttributes = async (req, res) => {
    try {
        const attributes = req.body; // Assuming attributes are sent in the request body
        const [result, _] = await Employee.deleteByAttributes(attributes);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.updateByAttributes = async (req, res) => {
    try {
        const attributes = req.body.attributes; // Assuming attributes are sent in the request body
        const newValues = req.body.newValues; // Assuming new values are sent in the request body
        const [result, _] = await Employee.updateByAttributes(attributes, newValues);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const employee = req.body; // Assuming employee is sent in the request body
        const [result, _] = await Employee.createEmployee(employee);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
