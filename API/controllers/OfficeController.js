const office = require('../models/Office');

exports.getAll = 
async (req, res) => {
    try {
        const [result, _] = await office.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

exports.getByID = 
async (req, res) => {
    try {
        const id = req.params.id;
        const [result, _] = await office.findById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

exports.getByPhone = 
async (req, res) => {
    try {
        const tel = req.params.tel;
        const [result, _] = await office.findByPhone(tel);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error});
    }
}