import MusicLink from '../../../db/models/music-link'
import RegularLink from '../../../db/models/regular-link';
import ShowLink from '../../../db/models/show-link';
import { QueryAllLinksByUserIdArgs } from 'src/graphql/types/types';

const allLinkQueries = {
    allLinks: async () => {
        const musicLinks = await MusicLink.find();
        const regularLinks = await RegularLink.find();
        const showLinks = await ShowLink.find();
        console.log("links: ", [...musicLinks, ...regularLinks, ...showLinks]);
        return sortedDesc([...musicLinks, ...regularLinks, ...showLinks]);
    },
    allLinksByUserId: async (_parent: any, args: QueryAllLinksByUserIdArgs) => {
        // update this to user the userId from Args
        const musicLinks = await MusicLink.find({ userId: args.input.userId });
        const regularLinks = await RegularLink.find({ userId: args.input.userId });
        const showLinks = await ShowLink.find({ userId: args.input.userId });
        return sortedDesc([...musicLinks, ...regularLinks, ...showLinks]);
    },
}

const sortedDesc = (arrayOfLinks: any[]) => {
    return arrayOfLinks.sort((a: any, b: any) => {
        return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
    });
}

export default allLinkQueries;