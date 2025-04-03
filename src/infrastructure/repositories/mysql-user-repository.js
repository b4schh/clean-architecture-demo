import UserRepository from '../../domain/repositories/user-repository.js';
import User from '../../domain/entities/user.js';
import pool from '../database/mysql-connection.js';

class MySQLUserRepository extends UserRepository {
    async create(user) {
        const [result] = await pool.query(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [user.name, user.email]
        );
        return new User(result.insertId, user.name, user.email);
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows.map(row => new User(row.id, row.name, row.email));
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length === 0) return null;
        const row = rows[0];
        return new User(row.id, row.name, row.email);
    }

    async update(id, user) {
        await pool.query(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [user.name, user.email, id]
        );
        return new User(id, user.name, user.email);
    }

    async delete(id) {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

export default MySQLUserRepository;




