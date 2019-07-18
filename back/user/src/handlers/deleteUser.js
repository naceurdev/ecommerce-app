import User from '../models/User';

export default async function deleteUser(ctx) {
  const { userid: userId } = ctx.request.query;
  try {
    const resp = await User.deleteOne({ _id: userId });
    ctx.status = resp.deletedCount ? 200 : 400;
    ctx.body = { message: `User with ${userId} ${resp.deletedCount ? 'deleted successfully' : 'not found'}` };
  } catch (error) {
    console.log(`getUserDetails: ${error.message}`);
    if (error.httpCode) {
      ctx.throw(error.httpCode, error.message);
    }
  }
}
