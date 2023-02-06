import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Marium',
      email: 'marium@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Malek',
      email: 'malek@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  doctors: [
    {
      name: 'Doctor1',
      slug: 'doctor1',
      category: 'Neuron',
      fee: 500,
      available: 1,
      rating: 4.5,
      numReviews: 10,
      description: 'MBBS',
    },
    {
      name: 'Doctor2',
      slug: 'doctor2',
      category: 'Neuron',
      fee: 500,
      available: 1,
      rating: 4.5,
      numReviews: 10,
      description: 'MBBS',
    },
    
  ],
  products: [
    {
      name: 'Napa',
      slug: 'napa',
      category: 'medicine',
      image: '/images/p1.jpg', // 679px × 829px
      price: 12,
      countInStock: 10,
      brand: 'none',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality ',
    },
    {
      name: 'Napa-extra',
      slug: 'napa_extra',
      category: 'medicine',
      image: '/images/p2.jpg',
      price: 10,
      countInStock: 0,
      brand: 'none',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Amodis',
      slug: 'amodis',
      category: 'medicin',
      image: '/images/p3.jpg',
      price: 5,
      countInStock: 15,
      brand: 'None',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality ',
    },
  ],
};
export default data;
