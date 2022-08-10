import { connection } from 'mongoose';
import connectDB from '../';
import MusicLink from '../models/music-link';
import RegularLink from '../models/regular-link';

const seed = async () => {
    console.log('Cleaning database');

    await connectDB();
    await connection.dropDatabase();

    console.log('Database clean');

    const regularLinks = [
        new RegularLink({ title: 'Link 1', link: 'https://be-present.atlassian.net/wiki/spaces/~47645395/pages/edit-v2/36896786?draftShareId=be681bcf-dc29-498e-979f-2f7b7f06dc70&inEditorTemplatesPanel=open', userId: '123e4567-e89b-12d3-a456-426614174000', dateCreated: new Date().toUTCString() }),
        new RegularLink({ title: 'Link 2', link: 'https://2.com', userId: '123e4567-e89b-12d3-a456-426614174011', dateCreated: new Date().toUTCString() }),
    ];

    const musicLinks = [
        new MusicLink({
            title: 'Music Link', link: 'https://3.com', userId: '123e4567-e89b-12d3-a456-426614174000', dateCreated: new Date().toUTCString(), platformPartners: [
                { partner: 'SPOTIFY', embeddedAudio: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4GKphhKJprqrPkLuU8Vsyu?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>' },
                { partner: 'SOUNDCLOUD' },
            ]
        }),
    ]

    const saveThisData = [
        ...regularLinks.map((regularLink) => regularLink.save()),
        ...musicLinks.map((musicLink) => musicLink.save())
    ];

    await Promise.all(saveThisData);

    console.log('Database seeded');

    connection.close();
};

seed();