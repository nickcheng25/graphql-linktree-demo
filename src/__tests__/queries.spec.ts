import { connection } from 'mongoose';
import app from '../app';
import { port } from '../config/environment';
import connectDB from '../db';
import { createMusicLink, createRegularLink, createShowLink, getAllLinks } from '../testUtils/utils';

describe('Queries', () => {
    beforeAll(async () => {
        await connectDB();
        await connection.dropDatabase();
    })

    afterAll(async () => {
        await connection.close();
    })

    it('should return a list of all Links regardless of type', async () => {
        const musicLink = {
            title: 'Musical',
            link: 'www.music.spotify.com',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            platformPartners:
                [{
                    'partner': 'SPOTIFY',
                    'embeddedAudio': '<iframe></iframe>'
                }]
        }
        const showLink = {
            title: 'show',
            link: 'www.bandcamp.com',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            shows:
                [{
                    'saleLink': 'showSale.com',
                    'status': 'ON_SALE'
                }]
        }

        const regularLink = {
            userId: '123e4567-e89b-12d3-a456-426614174000',
            link: 'whatisisalink.com',
            title: 'Second in'
        }

        const input = {
            userId: '123e4567-e89b-12d3-a456-426614174000',
        }
        await createRegularLink(regularLink);
        await createShowLink(showLink);
        await createMusicLink(musicLink);
        const res = await getAllLinks(input);
        console.log("res: ", res);
        expect(res.body.data.allLinksByUserId).toHaveLength(3);
    });
})

export { }