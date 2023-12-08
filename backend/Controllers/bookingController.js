import Booking from '../models/Booking.js';

const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const saveBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: 'Your tour is booked',
      data: saveBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'internal error',
    });
  }
};

const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: 'Success',
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'not found',
    });
  }
};

const getAllBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const books = await Booking.find({});
    res.status(200).json({
      success: true,
      message: 'Success',
      data: books,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'not found',
    });
  }
};
export { createBooking, getBooking, getAllBooking };
