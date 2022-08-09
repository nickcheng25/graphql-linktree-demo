import { QueryRegularLinkArgs } from 'src/graphql/types/resolvers';
import MusicLink from '../../../db/models/music-link'
import RegularLink from '../../../db/models/regular-link';

const allLinkQueries = {
    allLinks: async () => {
        const musicLinks = await MusicLink.find();
        const regularLinks = await RegularLink.find();
        console.log("allLinks: ", [...musicLinks, ...regularLinks]);
        return [...musicLinks, ...regularLinks];
    },
    // allLinksByUserId: async (_parent: any, args: QueryRegularLinkArgs) => {
    //     // update this to user the userId from Args
    //     const musicLink = await MusicLink.findOne({ userId: new ObjectId(args.id) });
    //     return musicLink;

    // },
};

export default allLinkQueries;