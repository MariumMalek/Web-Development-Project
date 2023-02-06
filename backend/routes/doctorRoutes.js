import express from 'express';
import Doctor from '../models/doctorModel.js';
import expressAsyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../utils.js';

const doctorRouter = express.Router();


doctorRouter.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.send(doctors);
});
doctorRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newDoctor = new Doctor({
      name: 'sample name ' + Date.now(),
      slug: 'sample-name-' + Date.now(),
      
      fee: 0,
      category: 'sample category',
      
      available: 0,
      rating: 0,
      numReviews: 0,
      description: 'sample description',
    });
    const doctor = await newDoctor.save();
    res.send({ message: 'Doctor Created', doctor });
  })
);
doctorRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (doctor) {
      doctor.name = req.body.name;
      doctor.slug = req.body.slug;
      doctor.fee = req.body.fee;
      
      doctor.category = req.body.category;
     
      doctor.available = req.body.available;
      doctor.description = req.body.description;
      await doctor.save();
      res.send({ message: 'Doctor Updated' });
    } else {
      res.status(404).send({ message: 'Doctor Not Found' });
    }
  })
);
doctorRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);
    if (doctor) {
      await doctor.remove();
      res.send({ message: 'Doctor Deleted' });
    } else {
      res.status(404).send({ message: 'Doctor Not Found' });
    }
  })
);

const PAGE_SIZE = 3;
doctorRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const doctors = await Doctor.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countDoctors = await Doctor.countDocuments();
    res.send({
      doctors,
      countDoctors,
      page,
      pages: Math.ceil(countDoctors / pageSize),
    });
  })
);
doctorRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Doctor.find().distinct('category');
    res.send(categories);
  })
);


doctorRouter.get('/slug/:slug', async (req, res) => {
    const doctor = await Doctor.findOne({ slug: req.params.slug });
  if (doctor) {
    res.send(doctor);
  } else {
    res.status(404).send({ message: 'Doctor Not Found' });
  }
}); 
doctorRouter.get('/:id', async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (doctor) {
    res.send(doctor);
  } else {
    res.status(404).send({ message: 'Doctor Not Found' });
  }
});

export default doctorRouter;