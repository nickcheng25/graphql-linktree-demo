
import { Schema, model } from 'mongoose';

const musicLinkSchema = new Schema(
    {
        title: { type: String, required: true },
        link: { type: String, required: true },
        userId: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now },
        platformPartners: [{
            partner: { type: String, required: false },
            embeddedAudio: { type: String, required: false },
        }]
    }
);

export default model('MusicLink', musicLinkSchema);