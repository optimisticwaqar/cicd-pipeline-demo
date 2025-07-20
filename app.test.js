const request = require('supertest');
const app = require('./app');

describe('Application Tests', () => {
    test('GET / should return welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Welcome to CI/CD Pipeline Demo!');
    });

    test('GET /health should return health status', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('healthy');
        expect(response.body.version).toBe('1.0.0');
    });
});