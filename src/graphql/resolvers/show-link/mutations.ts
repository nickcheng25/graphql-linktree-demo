import { MutationCreateShowLinkArgs, MutationUpdateShowLinkArgs } from 'src/graphql/types/types';
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
    updateRegularLink: async (_parent: any, { ...showLink }: MutationUpdateShowLinkArgs) => { return },
};

export default showLinkMutations;