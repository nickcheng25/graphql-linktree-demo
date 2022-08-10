import dotenv from 'dotenv';

dotenv.config();

const port = 4000;

const mongo = {
    url: 'mongodb://localhost:27017',
};

export { port, mongo };

