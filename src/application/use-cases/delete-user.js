class DeleteUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error('Không tìm thấy người dùng!');
        }
        await this.userRepository.delete(id);
    }
}

export default DeleteUser;

