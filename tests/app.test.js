const request = require('supertest');
const app = require('../src/app');

describe('Application Tests', () => {
    describe('GET /', () => {
        test('should return welcome message', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Welcome to CI/CD Pipeline Demo!');
            expect(response.body.features).toBeDefined();
        });
    });

    describe('GET /health', () => {
        test('should return health status', async () => {
            const response = await request(app).get('/health');
            expect(response.status).toBe(200);
            expect(response.body.status).toBe('healthy');
            expect(response.body.version).toBeDefined();
            expect(response.body.timestamp).toBeDefined();
        });
    });

    describe('GET /api/users', () => {
        test('should return users list', async () => {
            const response = await request(app).get('/api/users');
            expect(response.status).toBe(200);
            expect(response.body.users).toBeDefined();
            expect(Array.isArray(response.body.users)).toBe(true);
            expect(response.body.count).toBe(3);
        });
    });

    describe('GET /nonexistent', () => {
        test('should return 404 for nonexistent routes', async () => {
            const response = await request(app).get('/nonexistent');
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Route not found');
        });
    });
});
