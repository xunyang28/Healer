import express from 'express';
import { registerUsers } from '../controllers/authController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');   // ← keep it simple, no variables needed
});

// add POST route when backend is ready
router.post('/', registerUsers);

export default router;