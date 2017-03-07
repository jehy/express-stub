const bodyParser = require('body-parser'),
      CORS       = require('../modules/CORS.js'),
      sendResult = require('../modules/sendResult.js');

module.exports = (app, express)=> {
  // Настройки установленные через app.set могут быть получены
  // в любом месте приложения через app.get
  app.set('port', 8000);

  // Список разрешенный ориджинов для CORS
  // можно установить * для любых ориджинов, пустой массив для запрета всех
  app.set('allowed_origins', [
    'http://localhost',
    'http://localhost:8000',
  ]);

  // Используем необходимые middleware включая самодельный CORS
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(CORS(app, app.get('allowed_origins')));
  app.use(express.static('public'));
  app.use(sendResult);

};
