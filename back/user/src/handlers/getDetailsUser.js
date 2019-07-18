import User from '../models/User';

export default async function getUserDetails(ctx) {
  const { userid: userId, email } = ctx.request.query;
  try {
    if (!email && !userId) {
      ctx.status = 400;
      ctx.body = { message: 'Error in fetching User: Bad parameters' };
    }
    if (email) {
      const user = await User.find({ email });
      ctx.status = 200;
      ctx.body = user;
    } else if (userId) {
      const user = await User.findById(userId);
      ctx.status = 200;
      ctx.body = user;
    }
  } catch (e) {
    console.log(`getUserDetails: ${e.message}`);
    if (e.httpCode) {
      ctx.throw(e.httpCode, e.message);
    }
  }
}
