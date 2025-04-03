import express from 'express';
import userRoutes from './routes/user-routes.js';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

export default app;


