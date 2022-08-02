import mongoose from 'mongoose';
import { mongo } from '../config/environment';


const connect = () => {
    mongoose
        .connect(mongo.url)
        .then(() => {
            return console.info('Successfully connected to Database');
        })
        .catch((error) => {
            console.error('Error connecting to database: ', error);
            return;
        });
};

export default connect;