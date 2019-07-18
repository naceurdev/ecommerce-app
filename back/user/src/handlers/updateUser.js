import User from '../models/User';

export default async function updateUser(ctx) {
  const { request: { body: user } } = ctx;
  try {
    const { _id: id } = user;
    const updatedUser = await User.findOneAndUpdate({ _id: id }, { $set: user });
    if (updatedUser) {
      ctx.status = 200;
      const findUpdated = await User.findById(id);
      ctx.body = findUpdated;
    } else {
      ctx.status = 400;
      ctx.body = { message: `User with userId: ${id} is not found` };
    }
  } catch (e) {
    console.log(`getUserDetails: ${e.message}`);
    if (e.httpCode) {
      ctx.throw(e.httpCode, e.message);
    }
  }
}
