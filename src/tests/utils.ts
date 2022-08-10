import request from 'supertest';
import app from '../app';

export const createRegularLink = async (input: any) => {
    return request(app).post('/graphql')
        .set('Accept', 'application/json')
        .send({
            query: 'mutation Mutation ($input: RegularLinkInput!) { \
            createRegularLink(input: $input) { \
                title, \
                link, \
                userId, \
          } \
        }',
            'variables': {
                'input': input
            }
        })
}

export const createMusicLink = async (input: any) => {
    return request(app).post('/graphql')
        .set('Accept', 'application/json')
        .send({
            query: 'mutation Mutation ($input: MusicLinkInput!) { \
            createMusicLink(input: $input) { \
                title, \
                link, \
                userId, \
                platformPartners { \
                    partner, \
                    embeddedAudio \
                } \
          } \
        }',
            'variables': {
                'input': input
            }
        })
}

export const createShowLink = async (input: any) => {
    return request(app).post('/graphql')
        .set('Accept', 'application/json')
        .send({
            query: 'mutation Mutation ($input: ShowLinkInput!) { \
                createShowLink(input: $input) { \
                title, \
                link, \
                userId, \
                shows { \
                    status, \
                    saleLink \
                } \
          } \
        }',
            'variables': {
                'input': input
            }
        })
}

export const getAllLinks = async (input: any) => {
    return request(app).post('/graphql')
        .set('Accept', 'application/json')
        .send({
            query: 'query Query($input: QueryAllLinksInput!) { \
            allLinksByUserId(input: $input) { \
                ... on RegularLink { \
                        id \
                        title \
                        link \
                        userId \
                        dateCreated \
                      } \
                      ... on MusicLink { \
                        id \
                        title \
                        link \
                        userId \
                        dateCreated \
                      } \
                      ... on ShowLink { \
                        title \
                        link \
                        userId \
                        dateCreated \
                      } \
                    } \
                  }',
            'variables': {
                'input': input
            }
        })
}