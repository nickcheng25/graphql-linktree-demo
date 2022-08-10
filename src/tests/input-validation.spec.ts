import { connection } from 'mongoose';
import app from '../app';
import { port } from '../config/environment';
import connectDB from '../db';
import { createRegularLink, createMusicLink, createShowLink } from './utils';

describe('Input Validation', () => {
    let server: any;
    beforeAll(async () => {
        await connectDB();
        await connection.dropDatabase();
        server = app.listen(port)
    })

    afterAll(async () => {
        await connection.close();
        await server.close();
    })

    it('should be able to insert a regular link if there are no input errors', async () => {
        const input = {
            userId: '123e4567-e89b-12d3-a456-426614174000',
            link: 'whatisisalink.com',
            title: 'This is a link'
        }
        const res = await createRegularLink(input)
        expect(res.body.data.createRegularLink).toMatchObject(input);
        expect(res.body.errors).toBeUndefined();

    });

    it('should flag errors if the user given link is not in URI format', async () => {
        const input = {
            userId: '123e4567-e89b-12d3-a456-426614174000',
            link: 'thisIsNotALink',
            title: 'This is a link'
        }
        const res = await createRegularLink(input)
        expect(res.body.errors[0].message).toContain('Must be in URI format')
    });

    it('should flag errors if the userID is not in uuid format', async () => {
        const input = {
            userId: 'notAnId',
            link: 'link.com',
            title: 'This is a link'
        }
        const res = await createRegularLink(input)
        expect(res.body.errors[0].message).toContain('Must be in UUID format')
    });

    it('should flag errors if the title is over 144 characters', async () => {
        const input = {
            userId: '123e4567-e89b-12d3-a456-426614174000',
            link: 'link.com',
            title: 'GraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQlGraphQl'
        }
        const res = await createRegularLink(input)
        expect(res.body.errors[0].message).toContain('Must be no more than 144 characters in length')
    });

    it('should insert a music link if no input errors', async () => {
        const input = {
            title: 'Musical',
            link: 'www.sdf.spotify.com',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            platformPartners:
                [{
                    'partner': 'SPOTIFY',
                    'embeddedAudio': '<iframe style=\'border-radius:12px\' src=\'https://open.spotify.com/embed/track/4GKphhKJprqrPkLuU8Vsyu?utm_source=generator&theme=0\' width=\'100%\' height=\'380\'></iframe>'

                }]
        }
        const res = await createMusicLink(input)
        expect(res.body.data.createMusicLink).toMatchObject(input);
    });

    it('should not flag errors if the platform partner object is malformed', async () => {
        const input = {
            title: 'Musical',
            link: 'www.sdf.spotify.com',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            platformPartners:
                [{
                    'invalidField': 'SPOTIFY',
                    'embeddedAudio': '<iframe style=\'border-radius:12px\' src=\'https://open.spotify.com/embed/track/4GKphhKJprqrPkLuU8Vsyu?utm_source=generator&theme=0\' width=\'100%\' height=\'380\'></iframe>'
                }]
        }
        const res = await createMusicLink(input)
        expect(res.statusCode).toBe(400);
    });

    it('should not flag errors if the embedded audio HTML is malformed', async () => {
        const input = {
            title: 'Musical',
            link: 'www.sdf.spotify.com',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            platformPartners:
                [{
                    'partner': 'SPOTIFY',
                    'embeddedAudio': '<This is a zero day exploit!>'
                }]
        }
        const res = await createMusicLink(input)
        expect(res.body.errors[0].message).toContain('Must match ^<iframe.*</iframe>$')
    });

    it('should insert a show link if there are no input errors', async () => {
        const input = {
            title: 'Musical',
            link: 'www.sdf.spotify.com',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            shows:
                [{
                    'saleLink': 'showSale.com',
                    'status': 'ON_SALE'
                }]
        }
        const res = await createShowLink(input)
        expect(res.body.data.createShowLink).toMatchObject(input);
        expect(res.body.errors).toBeUndefined();
    });

    it('should insert a show link if there are no input errors', async () => {
        const input = {
            title: 'Musical',
            link: 'www.sdf.spotify.com',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            shows:
                [{
                    'saleLink': 'showSale.com',
                    'status': 'FREE'
                }]
        }
        const res = await createShowLink(input)
        expect(res.body.errors[0].message).toContain('Value "FREE" does not exist in "Status" enum.')
        // @todo - a better error message should be displayed to tell the client what the enums are
    });
})
// @todo - fix tests so that they don't hang