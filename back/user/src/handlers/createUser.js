import User from '../models/User';

export default async function createUser(ctx) {
  const user = ctx.request.body;
  try {
    const usersWithSameEmail = await User.find({ email: user.email });
    if (usersWithSameEmail.length) {
      ctx.status = 400;
      ctx.body = { message: `${user.email} is already used. Try with another email.` };
    } else {
      const addedUser = await User.insertMany(user);
      ctx.status = 201;
      ctx.body = addedUser;
    }
  } catch (e) {
    console.log(`createUser: ${e.message}`);
    if (e.httpCode) {
      ctx.throw(e.httpCode, e.message);
    }
  }
}
