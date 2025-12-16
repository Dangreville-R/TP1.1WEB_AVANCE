const express = require('express');
const app = express();
const port = 8080; // Le port sur lequel votre serveur écoutera

// Route d'exemple
app.get('/', (req, res) => {
  res.send('<html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL was not found on this server.</p><hr><address>Apache/2.4.62 (Debian) Server at 172.29.19.33 Port 8080</address></body></html>');});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});