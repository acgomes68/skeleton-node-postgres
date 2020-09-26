import User from '../../app/models/User';

export async function saveUser(_, { input }) {
    const user = await User.create(input);
    return user;
}

export async function getUsers() {
    const users = await User.find();
    return users;
}
