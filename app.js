const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('PUBLIC'));

//app.get('/', (req, res) => res.send(' this is cloud computing DEVOPS ; CI-CD PIPELINE CREATED WITH AWS THIS PACE INDICATES SUCCESS !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
