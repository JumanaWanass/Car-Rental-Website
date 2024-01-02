const Adminsearch = require('../models/adminSearch');

exports.getByAttributes = async (req, res) => {
    const attributes = req.query;

    try {
        const result = await Adminsearch.findByAttributes(attributes);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in getByAttributes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

  