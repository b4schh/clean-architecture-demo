import CreateUser from '../../../application/use-cases/create-user.js';
import GetAllUsers from '../../../application/use-cases/get-all-users.js';
import GetUserById from '../../../application/use-cases/get-user-by-id.js';
import UpdateUser from '../../../application/use-cases/update-user.js';
import DeleteUser from '../../../application/use-cases/delete-user.js';
import MySQLUserRepository from '../../repositories/mysql-user-repository.js';

const userRepository = new MySQLUserRepository();

class UserController {
    static async createUser(req, res) {
        try {
            const createUser = new CreateUser(userRepository);
            const user = await createUser.execute(req.body);
            res.status(201).json({ message: 'Tạo user mới thành công!', user });
        } catch (error) {
            res.status(400).json({ message: 'Lỗi khi tạo user mới!', error: error.message });
        }
    }

    static async getAllUsers(req, res) {
        try {
            const getAllUsers = new GetAllUsers(userRepository);
            const users = await getAllUsers.execute();
            res.status(200).json({ message: 'Lấy danh sách users thành công!', users });
        } catch (error) {
            res.status(500).json({ message: 'Lấy danh sách users thất bại!', error: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const getUserById = new GetUserById(userRepository);
            const user = await getUserById.execute(req.params.id);
            res.status(200).json({ message: 'Lấy user theo id thành công!', user });
        } catch (error) {
            res.status(404).json({ message: 'User không tồn tại!', error: error.message });
        }
    }

    static async updateUser(req, res) {
        try {
            const updateUser = new UpdateUser(userRepository);
            const user = await updateUser.execute(req.params.id, req.body);
            res.status(200).json({ message: 'Cập nhật user thành công!', user });
        } catch (error) {
            res.status(400).json({ message: 'Cập nhật user thất bại!', error: error.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const deleteUser = new DeleteUser(userRepository);
            await deleteUser.execute(req.params.id);
            res.status(204).json({ message: 'Xóa user thành công!' });
        } catch (error) {
            res.status(404).json({ message: 'Xóa user thất bại!', error: error.message });
        }
    }
}

export default UserController;
