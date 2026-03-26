import express from 'express';
import homeRoute from './routes/home.js';  // import your route

const app = express();
const PORT = process.env.PORT || 3000;

// Tell Express to use EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', './views');  // tell Express where your .ejs files are

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ──────────────────────────────────────────────────
app.use('/', homeRoute);  // use your home route

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// ─── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server is running → http://localhost:${PORT}`);
  console.log(`Health check     → http://localhost:${PORT}/health`);
});