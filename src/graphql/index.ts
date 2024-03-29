import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const apolloServer = new ApolloServer({
    schema,
});

export default apolloServer;