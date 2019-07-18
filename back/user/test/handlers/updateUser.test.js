import request from 'supertest';
import app from '../../src/index';
import dbHelpers from '../dbConfig/dbHelper';
import User from '../../src/models/User';

describe('Testing update User handler', () => {
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
    const user = {
      _id: '5b3c8df98021a33eb4100d95',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '123',
    };
    await request(app.listen())
      .post('/update')
      .send(JSON.stringify(user))
      .set('Content-Type', 'application/json')
      .expect(400);
  });

  it('Should update a user', async () => {
    const user = {
      _id: '5b3c8df98021a33eb4100d99',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '123',
    };
    const userToUpdate = {
      _id: '5b3c8df98021a33eb4100d99',
      gender: 'm',
      firstName: 'Ben Yahia',
      lastName: 'Naceur',
      email: 'naceur@gmail.com',
      password: '1234',
    };
    await User.create(user);
    const response = await request(app.listen())
      .post('/update')
      .send(JSON.stringify(userToUpdate))
      .set('Content-Type', 'application/json')
      .expect(200);
    expect(response.body.password).toEqual('1234');
  });
});
