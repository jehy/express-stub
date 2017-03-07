// Настройка CORS правил на основе списка разрешенных урлов
// список хранится в app.get('allowed_origins')

const _ = require('underscore');

module.exports = (app, allowedOrigins)=>(req, res, next)=> {
  const origin = req.get('origin');

  if (origin && (allowedOrigins === '*' || _.contains(allowedOrigins, origin))) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
};
