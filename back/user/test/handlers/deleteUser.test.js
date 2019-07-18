import request from 'supertest';
import app from '../../src/index';
import dbHelpers from '../dbConfig/dbHelper';
import User from '../../src/models/User';

describe('Testing delete User handler', () => {
  beforeAll((done) => {
    dbHelpers.beforeAll(done);
  });

  afterAll((done) => {
    dbHelpers.afterAll(done);
  });

  afterEach((done) => {
    dbHelpers.afterEach(done);
  });

  it('Should return an error user with id not found', async () => {
    await request(app.listen())
      .delete('/delete?userid=5b3c8df98021a33eb4100d91')
      .set('Content-Type', 'application/json')
      .expect(400);
  });

  it('Should delete a user', async () => {
    const user = {
      _id: '5b3c8df98021a33eb4100d99',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '123',
    };
    await User.create(user);
    await request(app.listen())
      .delete('/delete?userid=5b3c8df98021a33eb4100d99')
      .expect(200);
  });
});
