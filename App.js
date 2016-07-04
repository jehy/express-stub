var fs = require('fs-promise'),
    express = require('express'),
    // Создаем инстанс вебсервера
    app = express(),
    // Настройки приложения и middleware
    config = require('./config/default.js')(app, express);

// Все урлы перехватываются соответсвующими модулями из ./routes
// при необходимости в require можно передавать кроме app другие параметры
fs.readdir('./routes')
  .then( function (files) {
    files.map( function( file ) {
      require('./routes/' + file)(app);
    })
  })

app.listen(app.get('port'));

console.log('Express is up on port %d in %s mode', app.get('port'), app.settings.env);

module.exports = app;
