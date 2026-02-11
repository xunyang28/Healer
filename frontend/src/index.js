import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello from a simple Node.js app!';

  res.send(`
    <html>
      <head>
        <title>Simple Node.js App</title>
        <style>
          body {
            font-family: system-ui, sans-serif;
            text-align: center;
            padding: 80px 20px;
            background: #f0f4f8;
            color: #2d3748;
          }
          h1 { color: #2c5282; margin-bottom: 1.5rem; }
          .info { margin-top: 2rem; color: #4a5568; font-size: 1.1rem; }
        </style>
      </head>
      <body>
        <h1>🚀 ${message}</h1>
        <div class="info">
          Running on port <strong>${PORT}</strong><br>
          Environment: <strong>${process.env.NODE_ENV || 'development'}</strong>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running → http://localhost:${PORT}`);
  console.log(`Health check   → http://localhost:${PORT}/health`);
});