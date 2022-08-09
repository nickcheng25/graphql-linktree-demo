import { MutationCreateRegularLinkArgs } from 'src/graphql/types/resolvers';
import RegularLink from '../../../db/models/regular-link';

const musicLinkMutations = {
    createRegularLink: async (_parent: any, { ...regularLink }: MutationCreateRegularLinkArgs) => {
        // @note, the userId should be passed in as a parameter
        // @todo, perhaps the user should pass in a link as well
        const link = 'https://www.google.com';
        const dateCreated = new Date().toUTCString();
        const linkObject = {
            ...regularLink.input,
            link,
            dateCreated
        }
        console.log(linkObject);
        const newLink = await RegularLink.create(linkObject);
        return newLink.save();
    },
    // @todo only delete allowed 
    updateRegularLink: async (_parent: any, { ...regularLink }: MutationCreateRegularLinkArgs) => { },
};

export default musicLinkMutations;