import request from 'supertest';
import { app } from '../src/app';

describe('GET /api/hello', () => {
  it('return status 200', async () => {
    await request(app)
      .get('/api/hello')
      .expect(200, { message: 'Hello World!' });
  });
});
