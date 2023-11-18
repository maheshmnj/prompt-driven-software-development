// authService.ts
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import pool from '../db';

class AuthService {
  async signUp(username: string, password: string): Promise<string | null> {
    try {
      // Check if the username is already taken
      const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      if (existingUser.rows.length > 0) {
        return null; // Username already exists
      }

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Store the user in the database
      const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [
        username,
        hashedPassword,
      ]);

      // Return the user's ID
      return result.rows[0].id;
    } catch (error) {
      console.error('Error during sign-up:', error);
      return null; // Handle errors appropriately (log, return error message, etc.)
    }
  }

  async logIn(username: string, password: string): Promise<string | null> {
    try {
      // Retrieve the user from the database
      const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      const user = result.rows[0];

      // Check if the user exists
      if (!user) {
        return null; // User not found
      }

      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      // If passwords match, generate a JWT token
      if (passwordMatch) {
        const token = jwt.sign({ userId: user.id, username: user.username }, 'your-secret-key', {
          expiresIn: '1h', // Adjust the expiration time as needed
        });
        return token;
      } else {
        return null; // Passwords do not match
      }
    } catch (error) {
      console.error('Error during login:', error);
      return null; // Handle errors appropriately (log, return error message, etc.)
    }
  }
}

export default new AuthService();
