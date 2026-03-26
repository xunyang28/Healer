import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // Do some logic here (e.g. fetch data, check login, etc.)
  // Then send the result TO the ejs template
  res.render('home', {
    name: 'Xun Yang Leong',
    port: process.env.PORT || 3000
  });
});

export default router;