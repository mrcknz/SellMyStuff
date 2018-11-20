const mongoose = require('mongoose');
const config = require('./config').db;

mongoose.connect(config.urlString, config.options);
const adsModel = {};

adsModel.Ad = mongoose.model('Ad', {
  title       : { type: String, text: true },
  price       : Number,
  description : String,
  pictureURL  : String,
  length      : Number,
  width       : Number,
  height      : Number,
  weight      : Number,
  postcode    : String,
  city        : String,
  country     : String
});

adsModel.getAll = async function() {
  return await adsModel.Ad.find().exec();
};

adsModel.search = async function(searchTerm) {
  const res = await adsModel.Ad.find({ $text: { $search: searchTerm } }).exec();
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
    pictureURL  : '',
    length      : '',
    width       : '',
    height      : '',
    weight      : '',
    postcode    : '',
    city        : '',
    country     : ''
  };
  return await adsModel.Ad.create(Object.assign(newAd, ad));
};

adsModel.delete = async function(id) {
  return await adsModel.Ad.deleteOne({ _id: id });
};

module.exports = adsModel;
