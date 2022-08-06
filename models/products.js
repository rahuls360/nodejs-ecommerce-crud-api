const mongoose = require('mongoose');
const axios = require('axios');

const getRandomDogImage = async () => {
  const res = await axios.get(
    'https://dog.ceo/api/breed/retriever/golden/images/random'
  );
  return res.data.message;
};
const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: 'zzz', // will be replaced with a random dog image via an API call, if not overwritten
    // 'https://images.dog.ceo/breeds/retriever-golden/Z6A_4193-Edit-Edit_200806.jpg',
  },
  price: {
    type: Number,
    required: true,
    default: Math.floor(Math.random() * 10) * 1000 || 500,
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

productsSchema.pre('save', async function () {
  if (this.image === 'zzz') {
    this.image = await getRandomDogImage();
  }
});

module.exports = mongoose.model('Products', productsSchema);
