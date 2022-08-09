
import { Schema, model } from 'mongoose';

const showLinkSchema = new Schema(
    {
        title: { type: String, required: true },
        link: { type: String, required: true },
        userId: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now },
        shows: [{
            status: { type: String, required: false },
            saleLink: { type: String, required: false },
        }]
    }
);

export default model('ShowLink', showLinkSchema);