/* eslint-disable no-console*/

const Promise     = require('bluebird'),
      CustomError = require('../modules/customError');

const envMode = (process.env.NODE_ENV || 'development');
console.log(`Running tests in mode ${envMode}`);

describe('My app', ()=> {
  it('should pass dummy test', function simpleTest() {
    this.slow(200);
    this.timeout(400);
    if ('1'.toString() !== '1') {
      throw new Error('big fail!');
    }
    return Promise.resolve();
  });

  it('should create custom errors', ()=> {
    const err = new CustomError('myError', 'myMessage', 0);
    if (err.stack.toString().length < 5) {
      throw new Error('No error stack!');
    }
    if (err.code !== 0) {
      throw new Error(`Wrong error code ${err.code}!`);
    }
    return true;
  });
});
