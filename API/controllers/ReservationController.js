const Reservation = require('../models/Reservation');

exports.getAll = async (req, res) => {
  try {
    const [result, _] = await Reservation.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByAttributes = async (req, res) => {
  try {
    const attributes = req.body; // assuming you send attributes in the request body
    const [result, _] = await Reservation.findByAttributes(attributes);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteByAttributes = async (req, res) => {
  try {
    const attributes = req.body; // assuming you send attributes in the request body
    await Reservation.deleteByAttributes(attributes);
    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateByAttributes = async (req, res) => {
  try {
    const attributes = req.body.attributes; // attributes to find the reservation
    const newValues = req.body.newValues; // new values to update
    await Reservation.updateByAttributes(attributes, newValues);
    res.status(200).json({ message: 'Reservation updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
