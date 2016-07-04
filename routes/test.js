'use strict';

// Модуль обрабатывает запросы, связанные с ним логически.
// кроме app в модуль можно передать нужные переменные - например обработчик базы данных и т.п.

module.exports = function ( app ) {

  app.get('/test', function (req, res){
    res.sendResult('GET /test OK');
  });

  app.post('/test', function (req, res){
    res.send('POST /test OK');
  });

}
