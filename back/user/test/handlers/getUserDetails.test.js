

import request from 'supertest';
import app from '../../src/index';
import User from '../../src/models/User';
import dbHelpers from '../dbConfig/dbHelper';

describe('Testing getUserDetails handler', () => {
  beforeAll((done) => {
    dbHelpers.beforeAll(done);
  });

  afterAll((done) => {
    dbHelpers.afterAll(done);
  });

  afterEach((done) => {
    dbHelpers.afterEach(done);
  });

  it('Sould return error 404 not found', async () => {
    const data = {
      _id: '5b3c8df98021a33eb4100d97',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur2@gmail.com',
      password: '123',
    };
    await User.create(data);
    await request(app.listen())
      .get('/details?userid=5b3c8df98021a33eb41009')
      .expect(404);
  });

  it('Sould return user by id', async () => {
    const data = {
      _id: '5b3c8df98021a33eb4100d98',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur1@gmail.com',
      password: '123',
    };
    await User.create(data);
    const response = await request(app.listen())
      .get('/details?userid=5b3c8df98021a33eb4100d98')
      .expect(200);
    const { body: { _id: id } } = response;
    expect(id).toEqual('5b3c8df98021a33eb4100d98');
  });

  it('Sould return user by email', async () => {
    const data = {
      _id: '5b3c8df98021a33eb4100d99',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '123',
    };
    await User.create(data);
    const response = await request(app.listen())
      .get('/details?email=naceur@gmail.com')
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
