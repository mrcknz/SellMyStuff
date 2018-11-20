const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ads', { useNewUrlParser: true });
const adsModel = {};

adsModel.Ad = mongoose.model('Ad', {
  title       : { type: String, text: true },
  price       : Number,
  description : String,
  image       : String,
  length      : Number,
  width       : Number,
  height      : Number,
  Weight      : Number,
  houseNumber : Number,
  street      : String,
  postcode    : String,
  city        : String,
  country     : String,
  lat         : Number,
  long        : Number
});

adsModel.getAll = async function() {
  return await adsModel.Ad.find().exec();
};

adsModel.search = async function(searchTerm) {
  const res = await adsModel.Ad.find({ $text: { $search: searchTerm } }).exec();
  console.log('test', res);
  return res;
};

adsModel.getAd = async function(id) {
  return await adsModel.Ad.findOne({ _id: id }).exec();
};

adsModel.create = async function(ad) {
  const newAd = {
    title       : '',
    price       : '',
    description : '',
    image       : '',
    length      : '',
    width       : '',
    height      : '',
    Weight      : '',
    houseNumber : '',
    street      : '',
    postcode    : '',
    city        : '',
    country     : '',
    lat         : '',
    long        : ''
  };
  return await adsModel.Ad.create(Object.assign(newAd, ad));
};

adsModel.delete = async function(id) {
  await adsModel.Ad.deleteOne({ _id: id });
};

module.exports = adsModel;
