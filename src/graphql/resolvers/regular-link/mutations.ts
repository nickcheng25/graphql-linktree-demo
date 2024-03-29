import { MutationCreateRegularLinkArgs, MutationUpdateRegularLinkArgs } from 'src/graphql/types/types';
import RegularLink from '../../../db/models/regular-link';

const regularLinkMutations = {
    createRegularLink: async (_parent: any, { ...regularLink }: MutationCreateRegularLinkArgs) => {
        const dateCreated = new Date().toUTCString();
        const linkObject = {
            ...regularLink.input,
            dateCreated
        }
        const newLink = await RegularLink.create(linkObject);
        return newLink.save();
    },
    // @todo only delete allowed 
    updateRegularLink: async (_parent: any, { ...regularLink }: MutationUpdateRegularLinkArgs) => { return },
};

export default regularLinkMutations;
