'use strict';

// Кастомная отправка результатов для API
// на входе может быть как JSON, текст или промис.

var _ = require('underscore');

module.exports = function (req, res, next) {

  res.sendError = function (error) {
	  res.status(error.errorCode || 500)
			 .json( { 'error': error.message, code: error.errorCode || 500 } );
	}

	res.sendResult = function (promise) {
		if (!promise.then || !promise.catch) {
			// Пришли данные
			res.json(promise);
		} else {
			// Пришел промис
			promise.then( function (result) {
				// Промис успешно завершился и вернул данные
				res.json(result);
			}).catch( function (error) {
				// Промис завершился ошибкой
				res.sendError(error, res);
			});
		}
	}

  next();

};
