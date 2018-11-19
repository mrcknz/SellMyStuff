const adsModel = require('./model');

module.exports.getAllAds = async (req, res) => {
  res.status(200);
  res.send(await adsModel.getAll());
};

module.exports.search = async (req, res) => {
  console.log('asdfsdfdasfsd');
  const query = req.query.q;

  res.status(200);
  res.send(await adsModel.getAll(query));
};

module.exports.getAd = async (req, res) => {
  res.status(200);
  res.send(await adsModel.getAd(req.params.id));
  res.end();
};

module.exports.createAd = async (req, res) => {
  await adsModel.create(req.body);
  res.status(201);
  res.send(await adsModel.getAll());
};

module.exports.deleteAd = async (req, res) => {
  try {
    const result = await adsModel.delete(req.params.id);
    if (result) res.status(200).end();
    else res.status(404).end();
  } catch (err) {
    res.status(500).end();
  }
};
