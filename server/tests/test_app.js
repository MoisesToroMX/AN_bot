const request = require('supertest');
const expect = require('chai').expect;
const { server, accessToken } = require('../variables');


describe('Test of Bot', function () {
	describe('Test Cases', function () {
		it('test_bot_response_information', async function () {
			const payload = { "message": "Elvis Presley"};

			const response = await request(server)
				.post('/chat')
				.set('Authorization', `Bearer ${accessToken}`)
				.send(payload);

			expect(response.path).to.equal('/chat');
			expect(response).to.have.status(200);
			expect(response).to.be.a('object');
			expect(response.text).to.be.a('string');
			expect(response.text).to.include('Elvis Presley');
		});
	});
});
