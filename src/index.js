import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import supabase from './config/supabase.js';

// ─── App Setup ────────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 3000;

// Needed to resolve file paths correctly in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Template Engine ──────────────────────────────────────────
// Tell Express to use EJS for rendering pages
// and where to find the .ejs files
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// ─── Middleware ───────────────────────────────────────────────
// Lets Express read form data (needed for register/login later)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lets Express serve static files (css, js, images)
// from the public folder
app.use(express.static(join(__dirname, 'public')));

// ─── Routes ───────────────────────────────────────────────────
// Import and use your route files
import homeRoute from './routes/home.js';
import loginRoute from './routes/login.js';
import registerRoute from './routes/register.js';

app.use('/', homeRoute);         // handles → localhost/
app.use('/auth', loginRoute);     // handles → localhost/auth/login
app.use('/register',registerRoute);  //handles -> loaclhost/register

// ─── 404 Handler ─────────────────────────────────────────────
// If no route matches, show a 404 message
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// ─── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`─────────────────────────────────────`);
  console.log(`  HEALER app is running!`);
  console.log(`  Local → http://localhost:${PORT}`);
  console.log(`─────────────────────────────────────`);
});