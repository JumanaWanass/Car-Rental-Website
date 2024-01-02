const Car = require('../models/Car');

exports.getAll = async (req, res) => 
{
    try {
        const [result, _] = await Car.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
     //   res.status(500).json({ error: error });
    }
};

exports.getByAttributes = async (req, res) => {
    const attribute = req.query.attribute; // Extract the attribute from the query parameter
    const value = req.query.value; // Extract the value from the query parameter
  
    try {
      if (!attribute || !value) {
        return res.status(400).json({ error: 'Both attribute and value are required.' });
      }
  
      const attributes = { [attribute]: value };
      const [result, _] = await Car.findByAttributes(attributes);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.deleteByAttributes = async (req, res) => 
{
    try {
        const attributes = req.body; // Assuming attributes are sent in the request body
        const [result, _] = await Car.deleteByAttributes(attributes);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
     //   res.status(500).json({ error: error });
    }
};

exports.updateByAttributes = async (req, res) => {
    try {
        const attributes = req.body.attributes; // Assuming attributes are sent in the request body
        const newValues = req.body.newValues; // Assuming new values are sent in the request body
        const [result, _] = await Car.updateByAttributes(attributes, newValues);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    //    res.status(500).json({ error: error });

}};

exports.createCar = async (req, res) => {

    console.log(req.file);
    const car = req.body; // Assuming car is sent in the request body
    car.photoID = req.file ? req.file.filename : 'default';

    try {
        const result = await Car.createCar(car);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message, car:car });
    }
};

exports.changeStat = async (req, res) => {

    const car = req.body; // Assuming car is sent in the request body

    try {
        const result = await Car.updateStatusByID(car.carID, car.newStatus);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message, car:car });
    }
};

exports.getUniqueMakeModelCombinations = async (req, res) => {
    try {
        const [result, _] = await Car.findUniqueMakeModelCombinations();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

