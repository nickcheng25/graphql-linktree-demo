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
        new RegularLink({ title: 'Link 1', link: 'https://1', userId: 'seededUser', dateCreated: new Date().toUTCString() }),
        new RegularLink({ title: 'Link 2', link: 'https://2', userId: 'seededUser', dateCreated: new Date().toUTCString() }),
    ];

    const musicLinks = [
        new MusicLink({ title: 'Music Link', link: 'https://3', userId: 'seededUser', dateCreated: new Date().toUTCString(), platformPartners: [{ platformLink: 'https://spotify.com' }] }),
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