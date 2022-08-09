import ShowLink from '../../../db/models/show-link';
import { ObjectId } from 'mongodb'
import { QueryShowLinksArgs } from 'src/graphql/types/resolvers';

const showLinkQueries = {
    showLinks: async () => {
        const showLinks = await ShowLink.find();
        return showLinks

    },
    showLink: async (_parent: any, args: QueryShowLinksArgs) => {
        const regularLink = await ShowLink.findOne({ _id: new ObjectId(args.id) });
        return regularLink

    },
};

export default showLinkQueries;