import dotenv from 'dotenv';

dotenv.config({ path: `${process.cwd()}/.env` });

const DEFAULT_PORT = 3010;
const DEFAULT_MONGODB_URI = 'mongodb://localhost:27017/user';
 
export default {
  port: process.env.PORT || DEFAULT_PORT,
  mongodbUri: process.env.MONGODB_URI || DEFAULT_MONGODB_URI,
};
