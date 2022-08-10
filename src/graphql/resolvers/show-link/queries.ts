import ShowLink from '../../../db/models/show-link';
import { ObjectId } from 'mongodb'
import { QueryShowLinkArgs } from '../../../graphql/types/types';

const showLinkQueries = {
    showLinks: async () => {
        const showLinks = await ShowLink.find();
        return showLinks

    },
    showLink: async (_parent: any, args: QueryShowLinkArgs) => {
        const regularLink = await ShowLink.findOne({ _id: new ObjectId(args.id) });
        return regularLink

    },
};

export default showLinkQueries;