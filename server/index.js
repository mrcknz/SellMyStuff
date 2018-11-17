const server = require('./server');
const config = require('./config').server;

server.listen(config.port, () => {
	console.log('✔️ ', `Express listening on port ${config.port}!`); // eslint-disable-line no-console
});
