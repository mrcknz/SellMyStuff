const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/ads',
  { useNewUrlParser: true }
);
const adsModel = {};

adsModel.Ad = mongoose.model('Ad', {
  title: String,
  price: Number,
  description: String,
  image: String,
  length: Number,
  width: Number,
  height: Number,
  Weight: Number,
  houseNumber: Number,
  street: String,
  postcode: String,
  city: String,
  country: String,
  lat: Number,
  long: Number
});

adsModel.getAll = async function() {
  return await adsModel.Ad.find().exec();
};

adsModel.search = async function(searchTerm) {
  // adsModel.Ad.createIndex({ title: 'text', description: 'text' });
  const q = await adsModel.Ad.find({ $text: { $search: searchTerm } }).exec();
  console.log('test', q);
  return q;
};

adsModel.getAd = async function(id) {
  return await adsModel.Ad.findOne({ _id: id }).exec();
};

adsModel.create = async function(ad) {
  const newAd = {
    title: '',
    price: '',
    description: '',
    image: '',
    length: '',
    width: '',
    height: '',
    Weight: '',
    houseNumber: '',
    street: '',
    postcode: '',
    city: '',
    country: '',
    lat: '',
    long: ''
  };
  return await adsModel.Ad.create(Object.assign(newAd, ad));
};

adsModel.delete = async function(id) {
  await adsModel.Ad.deleteOne({ _id: id });
};

module.exports = adsModel;
