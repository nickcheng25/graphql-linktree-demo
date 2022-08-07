import RegularLink from '../../../db/models/regular-link';
import { ObjectId } from 'mongodb'
import { QueryRegularLinkArgs, QueryResolvers } from 'src/graphql/types/resolvers';

const regularLinkQueries = {
    regularLinks: async () => {
        const regularLinks = await RegularLink.find();
        return regularLinks

    },
    regularLink: async (_parent: any, args: QueryRegularLinkArgs) => {
        const regularLink = await RegularLink.findOne({ _id: new ObjectId(args.id) });
        return regularLink

    },
};

export default regularLinkQueries;