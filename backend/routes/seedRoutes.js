import express from 'express';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';

import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  await Doctor.remove({});
  const createdDoctors = await Doctor.insertMany(data.doctors);
  res.send({createdDoctors,createdProducts, createdUsers });
});
export default seedRouter;