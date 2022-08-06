
import { Schema, model } from 'mongoose';

const regularLinkSchema = new Schema(
    {
        title: { type: String, required: true },
        link: { type: String, required: true },

    }
);

export default model('DbRegularLink', regularLinkSchema);