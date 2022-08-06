import RegularLink from '../../../db/models/regular-link';
import { ObjectId } from 'mongodb'
import regularLink from '../../../db/models/regular-link';

const regularLinkQueries = {
    regularLinks: async (_parent: any, _args: any) => {
        const regularLinks = await RegularLink.find();
        return regularLinks

    },
    regularLink: async (_parent: any, args: any) => {
        const regularLink = await RegularLink.findOne({ _id: new ObjectId(args.id) });
        return regularLink

    },
};

export default regularLinkQueries;