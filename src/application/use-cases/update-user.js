import User from '../../domain/entities/user.js'

class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(id, { name, email }) {
        const user = new User(id, name, email);
        user.validate();
        return await this.userRepository.update(id, user);
    }
}

export default UpdateUser;

