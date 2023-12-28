const Car = require('../models/Car');

exports.getAll = async (req, res) => {
    try {
        const [result, _] = await Car.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByID = async (req, res) => {
    try {
        const id = req.params.id;
        const [result, _] = await Car.findByAttributes({ carID: id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByPlateID = async (req, res) => {
    try {
        const plateID = req.params.plateID;
        const [result, _] = await Car.findByAttributes({ plateID: plateID });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByStatus = async (req, res) => {
    try {
        const status = req.params.status;
        const [result, _] = await Car.findByAttributes({ status: status });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
