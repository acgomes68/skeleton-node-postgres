import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
} from 'graphql';

import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLID),
        },
        name: {
            type: GraphQLNonNull(GraphQLString),
        },
        email: {
            type: GraphQLNonNull(GraphQLString),
        },
        createdAt: {
            type: GraphQLNonNull(GraphQLDateTime),
        },
        updatedAt: {
            type: GraphQLDateTime,
        },
    },
});
