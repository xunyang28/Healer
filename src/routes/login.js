import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('login');
});

// TODO: add POST route when backend is ready

export default router;