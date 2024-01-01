


const CarCustomerReservation = require('../models/adminSearch');

exports.getByAttributes = async (req, res) => {
    const attribute = req.query.attribute; // Extract the attribute from the query parameter
    const value = req.query.value; // Extract the value from the query parameter

    try {
        const attributes = { [attribute]: value };
        const result = await CarCustomerReservation.findByAttributes(attributes);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};