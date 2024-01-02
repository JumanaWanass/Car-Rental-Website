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
  
  exports.getAvailableCars = async (req, res) => {
    try {
        const country = req.query.country;
        const city = req.query.city;

        // Query the database based on country and city
        const availableCars = await Car.find({
            country: country,
            city: city,
            isAvailable: true // Assuming there's a field indicating car availability
        });

        res.status(200).json(availableCars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

  
  exports.getAvailableCars = async (req, res) => {
    try {
        const country = req.query.country;
        const city = req.query.city;

        // Query the database based on country and city
        const availableCars = await Car.find({
            country: country,
            city: city,
            isAvailable: true // Assuming there's a field indicating car availability
        });

        res.status(200).json(availableCars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};