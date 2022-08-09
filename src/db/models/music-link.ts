
import { Schema, model } from 'mongoose';

const musicLinkSchema = new Schema(
    {
        title: { type: String, required: true },
        link: { type: String, required: true },
        userId: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now },
        platformPartners: [{
            platformLink: { type: String, required: false },
            audioEmbed: { type: String, required: false },
        }]


    }
);

export default model('MusicLink', musicLinkSchema);