import asynchHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc   Auth user & get token
// @route  POST /api/users/login
// @access Public
const authUser = asynchHandler(async (req, res) => {
  res.send('auth user');
});

// @desc   Register user
// @route  POST /api/users (creating new user)
// @access Public
const registerUser = asynchHandler(async (req, res) => {
  res.send('register user');
});

// @desc   Logout user / clear cookie
// @route  POST /api/users/logout
// @access Private
const logoutUser = asynchHandler(async (req, res) => {
  res.send('logout user');
});

// @desc   Get user profile
// @route  Get /api/users/profile
// @access Private
const getUserProfile = asynchHandler(async (req, res) => {
  res.send('Get user profile');
});

// @desc   Update user profile
// @route  PUT /api/users/profile
// @access Private
const updateUserProfile = asynchHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc   Get users
// @route  GET /api/users
// @access Private/admin
const getUsers = asynchHandler(async (req, res) => {
  res.send('get users');
});

// @desc   Get user by ID
// @route  GET /api/users/:id
// @access Private/admin
const getUserByID = asynchHandler(async (req, res) => {
  res.send('get user by id');
});

// @desc   delete users
// @route  DELETE /api/users/:id
// @access Private/admin
const deleteUser = asynchHandler(async (req, res) => {
  res.send('delete user');
});

// @desc   update users
// @route  PUT /api/users/:id
// @access Private/admin
const updateUser = asynchHandler(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
