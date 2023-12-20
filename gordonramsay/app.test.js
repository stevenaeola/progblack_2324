'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test the things service', () => {
    test('GET /tags succeeds', () => {
        return request(app)
	    .get('/tags')
	    .expect(200);
    });

    test('GET /thing/list returns JSON', () => {
        return request(app)
	    .get('/thing/list')
	    .expect('Content-type', /json/);
    });

    test('GET /tags to include geography', () => {
        return request(app)
	    .get('/tags')
	    .expect(/geography/);
    });

    test('GET /thing/1 succeeds', () => {
        return request(app)
	    .get('/thing/1')
	    .expect(200);
    });

    test('GET /thing/1 returns JSON', () => {
        return request(app)
	    .get('/thing/1')
	    .expect('Content-type', /json/);
    });

    test('GET /thing/1 includes 40', () => {
        return request(app)
	    .get('/thing/1')
	    .expect(/40/);
    });

    test('POST /thing/add succeeds', () => {
        const params = { newthing: 'TechUp' };
        return request(app)
        .post('/thing/add')
        .send(params)
	    .expect(200);
    });
});
