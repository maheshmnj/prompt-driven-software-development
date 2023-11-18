// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import authRouter from './routes/authRouter';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app;