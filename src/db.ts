// db.ts
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'user_service',
    password: 'mac2021',
    port: 67385, // Change to your database port
});

export default pool;