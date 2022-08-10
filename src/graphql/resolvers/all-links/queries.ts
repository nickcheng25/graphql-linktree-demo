import MusicLink from '../../../db/models/music-link'
import RegularLink from '../../../db/models/regular-link';
import ShowLink from '../../../db/models/show-link';
import { QueryAllLinksByUserIdArgs } from 'src/graphql/types/types';

const allLinkQueries = {
    allLinks: async () => {
        const musicLinks = await MusicLink.find();
        const regularLinks = await RegularLink.find();
        const showLinks = await ShowLink.find();
        return [...musicLinks, ...regularLinks, ...showLinks];
    },
    allLinksByUserId: async (_parent: any, args: QueryAllLinksByUserIdArgs) => {
        // update this to user the userId from Args
        const musicLinks = await MusicLink.find({ userId: args.userId });
        const regularLinks = await RegularLink.find({ userId: args.userId });
        const showLinks = await ShowLink.find({ userId: args.userId });
        return [...musicLinks, ...regularLinks, ...showLinks];
    },
}

export default allLinkQueries;