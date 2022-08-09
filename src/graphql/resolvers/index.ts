import allLinkQueries from './all-links/queries';
import { musicLinkMutations, musicLinkQueries } from './music-links';
import { regularLinkQueries, regularLinkMutations } from './regular-links';

const resolvers = {
    LinkSearch: {
        __resolveType: (obj: any) => {
            if (obj.platformPartners) {
                console.log("music: ", obj);
                return 'MusicLink';
            }
            console.log("regular: ", obj);
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