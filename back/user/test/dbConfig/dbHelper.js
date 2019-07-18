import mongoose from 'mongoose';
import User from '../../src/models/User';

mongoose.Promise = global.Promise;

function beforeAll(done) {
  mongoose.connect('mongodb://localhost:27017/user-test', { poolSize: 100 }, done);
}

function afterEach(done) {
  User.remove({}, done);
}

function afterAll(done) {
  mongoose.disconnect(done);
}

export default {
  beforeAll,
  afterAll,
  afterEach,
};
