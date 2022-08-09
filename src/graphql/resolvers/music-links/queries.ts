import MusicLink from '../../../db/models/music-link'
import { ObjectId } from 'mongodb'
import { QueryRegularLinkArgs, QueryResolvers } from 'src/graphql/types/resolvers';

const musicLinkQueries = {
    musicLinks: async () => {
        const musicLinks = await MusicLink.find();
        console.log("musicLInks: ", musicLinks);
        return musicLinks

    },
    musicLink: async (_parent: any, args: QueryRegularLinkArgs) => {
        const musicLink = await MusicLink.findOne({ _id: new ObjectId(args.id) });
        return musicLink;

    },
};

export default musicLinkQueries;