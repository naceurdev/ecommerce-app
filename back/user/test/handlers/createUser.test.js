import request from 'supertest';
import app from '../../src/index';
import dbHelpers from '../dbConfig/dbHelper';

describe('Testing create User handler', () => {
  beforeAll((done) => {
    dbHelpers.beforeAll(done);
  });

  afterAll((done) => {
    dbHelpers.afterAll(done);
  });

  afterEach((done) => {
    dbHelpers.afterEach(done);
  });

  it('Should add a user', async () => {
    const user = {
      _id: '5b3c8df98021a33eb4100d99',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '123',
    };
    await request(app.listen())
      .post('/create')
      .send(JSON.stringify(user))
      .set('Content-Type', 'application/json')
      .expect(201);
  });

  it('Should return a duplicate error', async () => {
    const user1 = {
      _id: '5b3c8df98021a33eb4100d99',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '123',
    };
    await request(app.listen())
      .post('/create')
      .send(JSON.stringify(user1))
      .set('Content-Type', 'application/json');

    const user2 = {
      _id: '5b3c8df98021a33eb4100d98',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '123',
    };
    await request(app.listen())
      .post('/create')
      .send(JSON.stringify(user2))
      .set('Content-Type', 'application/json')
      .expect(400);
  });
});
