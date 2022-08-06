import dotenv from 'dotenv';

dotenv.config();

const port = 3000;

// You may use this as a boolean value for different situations
const env = {
    development: process.env.NODE_ENV === 'development',
    test: process.env.NODE_ENV === 'test',
    staging: process.env.NODE_ENV === 'staging',
    production: process.env.NODE_ENV === 'production',
};
const mongo = {
    url: 'mongodb://localhost:27017',
};

export { port, env, mongo };

