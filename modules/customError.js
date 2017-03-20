// Возможность кидать самодельные ошибки - очень полезна для промисов


function CustomError(name, message, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = name;
  this.message = message || '';
  if (code === undefined) {
    this.code = 500;
  } else {
    this.code = code;
  }

}

require('util').inherits(CustomError, Error);

module.exports = CustomError;
