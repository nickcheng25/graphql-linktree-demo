import { AllLinksArgs } from '../../types/types';
import MusicLink from '../../../db/models/music-link'
import RegularLink from '../../../db/models/regular-link';

const allLinkQueries = {
    allLinks: async () => {
        const musicLinks = await MusicLink.find();
        const regularLinks = await RegularLink.find();
        console.log("allLinks: ", [...musicLinks, ...regularLinks]);
        return [...musicLinks, ...regularLinks];
    },
    allLinksByUserId: async (_parent: any, args: AllLinksArgs) => {
        // update this to user the userId from Args
        const musicLinks = await MusicLink.find({ userId: args.userId });
        const regularLinks = await RegularLink.find({ userId: args.userId });
        console.log("args.userId: ", args.userId);
        console.log("allLinksByUserId: ", [...musicLinks, ...regularLinks]);
        return [...musicLinks, ...regularLinks];
    },
}

export default allLinkQueries;