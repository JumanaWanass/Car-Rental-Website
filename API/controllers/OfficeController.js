const Office = require('../models/Office');

exports.getAll = async (req, res) => {
    try {
        const [result, _] = await Office.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByID = async (req, res) => {
    try {
        const id = req.params.id;
        const [result, _] = await Office.findByAttributes({ officeID: id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByTelephone = async (req, res) => {
    try {
        const telephone = req.params.telephone;
        const [result, _] = await Office.findByAttributes({ telephone: telephone });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteByTelephone = async (req, res) => {
    try {
        const telephone = req.params.telephone;
        const [result, _] = await Office.deleteByAttributes({ telephone: telephone });
        res.status(200).json({ message: `Office with telephone ${telephone} deleted successfully` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateByTelephone = async (req, res) => {
    try {
        const telephone = req.params.telephone;
        const newValues = req.body; // Assuming the new values are provided in the request body
        const [result, _] = await Office.updateByAttributes({ telephone: telephone }, newValues);
        res.status(200).json({ message: `Office with telephone ${telephone} updated successfully` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
