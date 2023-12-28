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

exports.getByPhone = async (req, res) => {
    try {
        const tel = req.params.tel;
        const [result, _] = await Office.findByAttributes({ telephone: tel });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
