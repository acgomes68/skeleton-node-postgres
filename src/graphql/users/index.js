import { GraphQLInputObjectType, GraphQLString, GraphQLList } from 'graphql';

import UserType from './UserType';
import { getUsers, saveUser } from './UserResolver';

export const queries = {
    getUsers: {
        type: GraphQLList(UserType),
        resolve: getUsers,
    },
    saveUser: {
        type: UserType,
        resolve: saveUser,
        args: {
            input: {
                type: new GraphQLInputObjectType({
                    name: 'UserInput',
                    fields: {
                        name: {
                            type: GraphQLString,
                        },
                        email: {
                            type: GraphQLString,
                        },
                    },
                }),
            },
        },
    },
};

export const mutations = {};
