import dotenv from 'dotenv';

dotenv.config();

const port = 3000;

const mongo = {
    url: 'mongodb://localhost:27017',
};

// @todo In practice, please pass in the actual userId
const hardCodedUserId = 'getUserIdFromApi'

export { port, mongo };

