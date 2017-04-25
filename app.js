const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');

app.set('view engine', 'ejs');

//serve public assets at /public
app.use('/public/', express.static('./public'));
app.use('/static', express.static('./static'));

let routes = require('./routes');
app.use(routes);


if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading
  console.log('running in dev mode');
  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!

  // RE-ENABLE WHEN YOU REFACTOR TO SERVER FOLDER
  // var watcher = chokidar.watch('./server');
  // watcher.on('ready', function() {
  //   watcher.on('all', function() {
  //     console.log('Clearing /server/ module cache from server');
  //     Object.keys(require.cache).forEach(function(id) {
  //       if (/\/server\//.test(id)) {
  //         delete require.cache[id];
  //       }
  //     });
  //   });
  // });
};


// LAUNCH THE SERVER
const server = http.createServer(app);
const port = process.env.PORT || 8080;
server.listen(8080);
server.on('listening', ()=>{
  console.log('listening on port ' + port);
});
