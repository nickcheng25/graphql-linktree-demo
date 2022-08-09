import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import { DateTimeTypeDefinition } from "graphql-scalars"

import resolvers from './resolvers/index';
const gqlFiles = readdirSync(join(__dirname, './typedefs'));

let typeDefs = '';

gqlFiles.forEach((file) => {
    typeDefs += readFileSync(join(__dirname, './typedefs', file), {
        encoding: 'utf8',
    });
});

const schema = makeExecutableSchema({
    typeDefs: [typeDefs, constraintDirectiveTypeDefs, DateTimeTypeDefinition],
    resolvers: [resolvers]
});

const constraintedSchema = constraintDirective()(schema);

export default constraintedSchema;