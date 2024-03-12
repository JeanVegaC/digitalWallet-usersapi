import userRoutes from './presentation/users/userRoute.js';
import authRoutes from './presentation/auth/authRoute.js';
import express from 'express';
import { globalException } from './domain/exceptions/globalExceptions.js';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/usersapi', userRoutes);
app.use('/usersapi', authRoutes);


app.use((err, req, res, next) => {
  console.log('err asd', err);
  const { statusCode, message } = err;
  globalException(req, res, statusCode, message);
})

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});