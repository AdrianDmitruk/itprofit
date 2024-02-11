import cors from 'cors';
import express from 'express';
import pingRoute from './routes/ping.js';
import registrationRoute from './routes/registration.js';

const app = express();
const port = 9090;

app.use(cors());
app.use(express.json());

app.use('/api/ping', pingRoute);
app.use('/api/registration', registrationRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
