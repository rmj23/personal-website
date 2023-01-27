const express = require('express');
const path = require('path');
const app = express(); 
const port = process.env.PORT || 5000; 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: "You're calling froggy 101" }); 
}); 

app.get('/react', (req, res) => { //Line 9
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
}); 