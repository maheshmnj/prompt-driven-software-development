// db.ts
import { Pool } from 'pg';

const pool = new Pool({
    user: 'mahesh',
    host: 'localhost',
    database: 'user_service',
    password: 'postgres',
    port: 5432,
});

export default pool;