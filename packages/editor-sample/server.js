import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory under /email-builder-js/
app.use('/email-builder-js', express.static(join(__dirname, 'dist')));

// Redirect root to /email-builder-js/
app.get('/', (req, res) => {
  res.redirect('/email-builder-js/');
});

// Handle all routes under /email-builder-js/ by serving index.html (for SPA)
app.get('/email-builder-js/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 