import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');   // ← keep it simple, no variables needed
});

// TODO: add POST route when backend is ready


export default router;