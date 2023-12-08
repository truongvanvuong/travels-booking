import User from '../models/Tour.js';

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User failed to update' + error,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Successfully delete',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User failed to delete' + error,
    });
  }
};
const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: 'result',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Not found' + error,
    });
  }
};
const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: 'result',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Not found' + error,
    });
  }
};

export { updateUser, deleteUser, getSingleUser, getAllUser };
