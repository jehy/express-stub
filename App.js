/* eslint-disable no-console*/

const
  express = require('express'),
  // Создаем инстанс вебсервера
  app     = express(),
  Routes  = require('./routes/index'),
  // Настройки приложения и middleware
  config  = require('./config/default.js')(app, express);

// Все урлы перехватываются соответсвующими модулями из ./routes
// при необходимости в require можно передавать кроме app другие параметры

for (let i = 0; i < Routes.length; i++) {
  Routes[i](app);
}

app.listen(app.get('port'));

console.log('Express is up on port %d in %s mode', app.get('port'), app.settings.env);

module.exports = app;
