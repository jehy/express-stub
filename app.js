/* eslint-disable no-console*/

const
  express = require('express'),
  // Создаем инстанс вебсервера
  app     = express(),
  routes  = require('./routes/index'),
  // Настройки приложения и middleware
  config  = require('./config/default.js')(app, express);

// Все урлы перехватываются соответсвующими модулями из ./routes
// при необходимости в require можно передавать кроме app другие параметры

routes.forEach(module=>module(app));

app.listen(app.get('port'));

console.log('Express is up on port %d in %s mode', app.get('port'), app.settings.env);

module.exports = app;
