import { regularLinkQueries, regularLinkMutations } from './regular-links';

const resolvers = {
    Query: {
        ...regularLinkQueries,
    },
    Mutation: {
        ...regularLinkMutations,
    },
};

export default resolvers;