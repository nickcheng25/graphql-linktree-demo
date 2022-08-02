import express from 'express';
import graphqlServer from './graphql';

const app = express();

const graphQL = graphqlServer.start().then(
    res => {
        graphqlServer.applyMiddleware({ app })
    }
);

export default app;