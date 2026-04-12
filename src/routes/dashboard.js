import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  res.render('/dashboard');
});

// TODO: add POST route when backend is ready

export default router;