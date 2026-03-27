import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Healer',
    tagline: 'Rebuild Yourself. One Day at a Time.',
    description: 'A gamified self-growth app that helps you rebuild habits after breakups or life changes. Complete quests, gain EXP, and level up your life.',
    author: 'Xun Yang Leong'
  });
});

export default router;