


const CarCustomerReservation = require('../models/adminSearch');

exports.getByAttributes = async (req, res) => {
    const attributes = req.query; // Extract all query parameters
  
    try {
        const result = await CarCustomerReservation.findByAttributes(attributes);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  