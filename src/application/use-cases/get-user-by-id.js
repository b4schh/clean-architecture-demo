class GetUserById {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error('Không tìm thấy người dùng!');
        }
        return user;
    }
}

export default GetUserById;