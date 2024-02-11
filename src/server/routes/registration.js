import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const isSuccess = Math.random() < 0.5;

  if (isSuccess) {
    res.status(200).json({ message: 'Registration successful!' });
  } else {
    res.status(400).json({ error: 'Registration failed.' });
  }
});

export default router;
