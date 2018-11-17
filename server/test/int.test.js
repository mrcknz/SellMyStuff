const server = require('../server');
const request = require('supertest');

describe('Routes', () => {
	test('GET /ads should return status 200', async () => {
		const response = await request(server).get('/ads');
		expect(response.status).toEqual(200);
		expect(response.type).toEqual('application/json');
	});

	test('GET /ads/:id should return status 200', async () => {
		const response = await request(server).get('/ads/10');
		expect(response.status).toEqual(200);
		expect(response.type).toEqual('application/json');
	});

	test('DELETE /ads/:id with valid id should return status 200', async () => {
		const response = await request(server).delete('/ads/10');
		expect(response.status).toEqual(200);
		expect(response.type).toEqual('application/json');
	});

	test('DELETE /ads/:id with invalid id should return status 404', async () => {
		const response = await request(server).delete('/ads/0');
		expect(response.status).toEqual(404);
	});

	test('POST /ads should return status 201', async () => {
		const response = await request(server).post('/ads');
		expect(response.status).toEqual(201);
		expect(response.type).toEqual('application/json');
	});

	test('PUT /ads/:id should return status 200', async () => {
		const response = await request(server).put('/ads/:id');
		expect(response.status).toEqual(200);
		expect(response.type).toEqual('application/json');
	});

	test('should return status 404 on undefined routes/methods', async () => {
		const response1 = await request(server).get('/asdf');
		expect(response1.status).toEqual(404);
		const response2 = await request(server).get('/');
		expect(response2.status).toEqual(404);
	});
});
