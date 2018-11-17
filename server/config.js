if (process.env.ENV == 'test') {
	module.exports = {
		db     : {
			user     : 'postgres',
			database : 'sellmystuff_test',
			port     : 5432
		},
		server : {
			port : 3000
		}
	};
} else throw new Error('Missing DB config');
