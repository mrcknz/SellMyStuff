const Ads = require('./model');

module.exports.createAd = async (req, res) => {
	const ads = await Ads.create(req.body);
	res.status(201).send(ads.rows[0]);
};

module.exports.deleteAd = async (req, res) => {
	try {
		const result = await Ads.delete(req.params.id);
		if (result.rowCount) res.status(200).end();
		else res.status(404).end();
	} catch (err) {
		res.status(500).end();
	}
};

module.exports.getAllAds = async (req, res) => {
	const ads = await Ads.getAll();
	res.status(200).send(ads.rows);
};

module.exports.getAd = async (req, res) => {
	const ads = await Ads.getOne(req.params.id);
	if (ads.rows.length) res.status(200).send(ads.rows[0]);
	else res.status(404).end();
};
