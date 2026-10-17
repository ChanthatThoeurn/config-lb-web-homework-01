const express = require('express');
const path = require('path');
const app = express();
const id = process.env.SERVER_ID || 'UNKNOWN';
app.use((req, res, next) => { res.set('X-Server-ID', id); next(); });
app.get('/health', (req, res) => res.sendStatus(200));
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(3000, '0.0.0.0');
