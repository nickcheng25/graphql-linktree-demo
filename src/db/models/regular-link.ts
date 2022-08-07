
import { Schema, model } from 'mongoose';

const regularLinkSchema = new Schema(
    {
        title: { type: String, required: true },
        link: { type: String, required: true },
        userId: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now }

    }
);

export default model('RegularLink', regularLinkSchema);