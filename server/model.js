const { query } = require('./db');

module.exports = {
	getAll : () => {
		const q = {
			name : 'getAll Ads',
			text : 'SELECT * FROM ads;'
		};
		return query(q);
	},

	getOne : async (id) => {
		const q = {
			name : 'getAll Ads',
			text : `SELECT * FROM ads WHERE id = '${id}';`
		};
		return query(q);
	},

	delete : (id) => {
		const q = {
			name : 'delete Ad',
			text : `DELETE FROM ads WHERE id = '${id}' RETURNING *;`
		};
		return query(q);
		// return query(q);
	},

	create : (ad) => {
		const values = Object.values(ad).map((value) => `'${escape(value)}'`).join(',');
		const q = {
			name : 'create Ad',
			text : `INSERT INTO ads(${Object.keys(ad)},created_at) VALUES(${values}, 'now') RETURNING *;`
		};
		return query(q);
	}
};
