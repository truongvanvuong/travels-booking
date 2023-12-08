import Tour from '../models/Tour.js';

const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const saveTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: 'Tour saved successfully',
      data: saveTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Tour failed to create' + error,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const id = req.params.id;

    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: 'Tour updated successfully',
      data: updateTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Tour failed to update' + error,
    });
  }
};
const deleteTour = async (req, res) => {
  try {
    const id = req.params.id;

    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Successfully delete',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Tour failed to delete' + error,
    });
  }
};
const getSingleTour = async (req, res) => {
  try {
    const id = req.params.id;

    const tour = await Tour.findById(id).populate('reviews');
    res.status(200).json({
      success: true,
      message: 'result',
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Not found' + error,
    });
  }
};
const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({})
      .populate('reviews')
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      message: 'result',
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Not found' + error,
    });
  }
};
// get by search
const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, 'i');
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate('reviews');
    res.status(200).json({
      success: true,
      message: 'result',
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Not found' + error,
    });
  }
};
const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate('reviews')
      .limit(8);

    res.status(200).json({
      success: true,
      message: 'result',
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Not found' + error,
    });
  }
};

const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: 'failed to fetch' });
  }
};
export {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
};
