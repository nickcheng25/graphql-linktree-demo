import MusicLink from '../../../db/models/music-link'
import { ObjectId } from 'mongodb'
import { QueryRegularLinkArgs } from 'src/graphql/types/types';

const musicLinkQueries = {
    musicLinks: async () => {
        const musicLinks = await MusicLink.find();
        return musicLinks

    },
    musicLink: async (_parent: any, args: QueryRegularLinkArgs) => {
        const musicLink = await MusicLink.findOne({ _id: new ObjectId(args.id) });
        return musicLink;

    },
};

export default musicLinkQueries;