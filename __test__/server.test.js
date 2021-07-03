'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const mockRequest = supertest(server.server);

let id;

describe('API server', () => {
    it('right path', async () => {
        const response = await mockRequest.get('/');
        expect(response.status).toEqual(200);
    })
    it('wrong path', async () => {
        const response = await mockRequest.get('/bad');
        expect(response.status).toEqual(500);
    })

    it('post method', async () => {
        const obj = { name: 'ayah' };
        const response = await mockRequest.post('/api/vi/food').send(obj);
        expect(response.status).toEqual(201);
        // console.log('response', response.body);
        expect(response.body.data.name).toEqual('ayah');
        id = response.body.id;
        console.log('id :', id);
    })
    it('read from the record', async () => {
        const obj2 = { name: 'ali' };
        await mockRequest.post('/api/vi/food').send(obj2);
        const response = await mockRequest.get('/api/vi/food');
        console.log('response from get', response.body);
        expect(response.status).toEqual(200);
    })
    it('update arecord', async () => {
        const obj = { name: 'ahmad' };
        const response = await mockRequest.put(`/api/vi/food/${id}`).send(obj);
        console.log('response from get', response.body);
        expect(response.body.data.name).toEqual('ahmad');
    })
    it('delete arecord', async () => {

        const response = await mockRequest.delete(`/api/vi/food/${id}`);
        console.log('response from get', response.body);
        expect(response.status).toEqual(200);
    })

})