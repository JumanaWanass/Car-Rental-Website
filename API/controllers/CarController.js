const Car = require('../models/Car');


exports.registerCar = async (req, res) => {
    try {
      // Assuming your form data is sent in the request body
      
      console.log('Received car registration request');
      
      const carData = req.body;


      console.log('Received car registration request:', carData);
      // Create a new Car instance
      const newCar = new Car(carData);
  
      // Save the new car to the database
      await newCar.save();
  
      res.status(201).json({ message: 'Car registered successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


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

exports.getByAttributes = async (req, res) => 
{
    const attribute = req.query.attribute; // Extract the attribute from the query parameter
    const value = req.query.value; // Extract the value from the query parameter

    try 
    {
        const attributes = { [attribute]: value };
        const [result, _] = await Car.findByAttributes(attributes);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

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
    }
};
