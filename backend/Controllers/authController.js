import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
const register = async (req, res) => {
  try {
    // hassing password

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: 'User create successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating user, try again' + error,
    });
  }
};

const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    // if user is exist then check the password or compare the password

    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkCorrectPassword) {
      return res
        .status(404)
        .json({ success: false, message: 'Incorrect email or password' });
    }
    const { password, role, ...rest } = user._doc;

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '15d',
      }
    );

    res
      .cookie('accessToken', token, {
        httpOnly: true,
        expiresIn: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: 'successfully login',
        data: { ...rest },
        token,
        role,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to login' });
  }
};

export { register, login };
