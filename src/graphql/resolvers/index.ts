import allLinkQueries from './all-links/queries';
import { musicLinkMutations, musicLinkQueries } from './music-link';
import { regularLinkQueries, regularLinkMutations } from './regular-link';
import { showLinkMutations, showLinkQueries } from './show-link';

const resolvers = {
    LinkSearch: {
        __resolveType: (obj: any) => {
            if (obj.platformPartners) {
                console.log("music: ", obj);
                return 'MusicLink';
            } else if (obj.shows) {
                return 'ShowLink';
            }
            console.log("regular: ", obj);
            return 'RegularLink';
        }
    },
    Query: {
        ...regularLinkQueries,
        ...musicLinkQueries,
        ...showLinkQueries,
        ...allLinkQueries
    },
    Mutation: {
        ...regularLinkMutations,
        ...musicLinkMutations,
        ...showLinkMutations
    },
};

export default resolvers;