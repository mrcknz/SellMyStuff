const pg = require('pg');
const dbConfig = require('./config').db;

const connect = async (config = dbConfig) => {
	try {
		const pool = new pg.Pool(config);
		const client = await pool.connect();
		client.on('error', (err) => {
			console.error('Error interaction with the DB', err.stack); // eslint-disable-line no-console
		});
		return client;
	} catch (err) {
		console.error('Error connecting to DB', err.stack); // eslint-disable-line no-console
		throw err;
	}
};

const init = async () => {
	const client = await connect();
	createTable(client);
	console.log('✔️ ', 'DB succesfully initialized!'); // eslint-disable-line no-console
	client.release();
};

const query = async (query) => {
	const client = await connect();
	try {
		const res = await client.query(query);
		return res;
	} catch (err) {
		console.error(`DB query couldn't be executed`, err.stack); // eslint-disable-line no-console
	} finally {
		client.release();
	}
};

// ? necessary to store lat/long?
async function createTable() {
	return query(`
    CREATE TABLE IF NOT EXISTS ads(
      id SERIAL,
      title TEXT,
      description TEXT,
      image_url VARCHAR(256),
      price INT,
      username VARCHAR(80),
      lat FLOAT,
      long FLOAT,
      street VARCHAR(256),
      house_number INT,
      postcode VARCHAR(10),
      city VARCHAR(80),
      country VARCHAR(80),
      length INT,
      width INT,
      height INT,
      weight INT,
      created_at TIMESTAMP
    )
  `);
}

init();

module.exports = { query };
