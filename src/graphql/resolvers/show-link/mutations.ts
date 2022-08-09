import { MutationCreateShowLinkArgs } from 'src/graphql/types/resolvers';
import ShowLink from '../../../db/models/show-link';

const showLinkMutations = {
    createShowLink: async (_parent: any, { ...showLink }: MutationCreateShowLinkArgs) => {
        const dateCreated = new Date().toUTCString();
        const linkObject = {
            ...showLink.input,
            dateCreated
        }
        const newLink = await ShowLink.create(linkObject);
        return newLink.save();
    },
    // @todo only delete allowed 
    updateRegularLink: async (_parent: any, { ...regularLink }: MutationCreateShowLinkArgs) => { },
};

export default showLinkMutations;