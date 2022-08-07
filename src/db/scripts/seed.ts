import { connection } from 'mongoose';
import connectDB from '../';
import RegularLink from '../models/regular-link';

const seed = async () => {
    console.log('Cleaning database');

    await connectDB();

    console.log('Database clean');

    const regularLinks = [
        new RegularLink({ title: 'Link 1', link: 'https://1', userId: 'seededUser', dateCreated: new Date().toUTCString() }),
        new RegularLink({ title: 'Link 2', link: 'https://2', userId: 'seededUser', dateCreated: new Date().toUTCString() }),
    ];

    const saveThisData = [
        ...regularLinks.map((regularLink) => regularLink.save()),
    ];

    await Promise.all(saveThisData);

    console.log('Database seeded');

    connection.close();
};

seed();