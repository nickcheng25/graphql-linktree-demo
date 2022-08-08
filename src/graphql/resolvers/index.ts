import allLinkQueries from './all-links/queries';
import { musicLinkMutations, musicLinkQueries } from './music-links';
import { regularLinkQueries, regularLinkMutations } from './regular-links';

const resolvers = {
    LinkSearch: {
        __resolveType: (obj: any) => {
            console.log("obj: ", obj);
            if (obj.platformLinks) return 'MusicLink';
            return 'RegularLink';
        }
    },
    Query: {
        ...regularLinkQueries,
        ...musicLinkQueries,
        ...allLinkQueries
    },
    Mutation: {
        ...regularLinkMutations,
        ...musicLinkMutations
    },
};

export default resolvers;