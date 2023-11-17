// userService.ts
import pool from '../db';

class UserService {
    async getAllUsers() {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }

    async getUserById(id: number) {
        console.log("querying user by id", id)
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    async createUser(user: any) {
        const { username, password, role, name, contact_email, contact_phone, mailing_address } = user;
        const result = await pool.query(
            'INSERT INTO users (username, password, role, name, contact_email, contact_phone, mailing_address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [username, password, role, name, contact_email, contact_phone, mailing_address]
        );
        return result.rows[0];
    }

    async updateUser(id: number, updatedUser: any) {
        // Implement the update query
    }

    async deleteUser(id: number) {
        // Implement the delete query
    }
}

export default new UserService();