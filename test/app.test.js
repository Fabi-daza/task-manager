const request = require('supertest');
const app = require('../src/app'); // Adjust the path to your app.js file

describe('Task API', () => {
  it('GET /tasks - should return all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('name');
  });

  it('GET /tasks/:id - should return specific task', async () => {
    const res = await request(app).get('/tasks/2');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Task 2');
  });

  it('GET /tasks/:id - should return 404 for invalid ID', async () => {
    const res = await request(app).get('/tasks/999');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Task not found');
  });
});
