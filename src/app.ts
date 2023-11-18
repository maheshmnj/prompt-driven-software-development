// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import authRouter from './routes/authRouter';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/auth', authRouter); // Use the authRouter here

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
