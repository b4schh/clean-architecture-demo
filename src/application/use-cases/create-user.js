import User from '../../domain/entities/user.js'

class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ name, email }) {
        const user = new User(null, name, email);
        user.validate();
        return await this.userRepository.create(user);
    }
}

export default CreateUser;

