const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');

app.set('render-engine', 'ejs');






// LAUNCH THE SERVER
const server = http.createServer(app);
const port = process.env.PORT || 8080;
server.listen(8080);
server.on('listening', ()=>{
  console.log('listening on port ' + port);
})
