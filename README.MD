# Пример работы с Express.js
[![dependencies Status](https://david-dm.org/jehy/express-stub/status.svg)](https://david-dm.org/jehy/express-stub)
[![devDependencies Status](https://david-dm.org/jehy/express-stub/dev-status.svg)](https://david-dm.org/jehy/express-stub?type=dev)

Никогда не используйте коллбеки. Если нет библиотеки с промисами для необходимых функций - используйе `bluebird` и создайте обертку.

Для работы с SQL базами данных используйте `Bookshelf.js` или хотя бы `Knex.js`

При необходимости добавить аутентикацию используйте `Passport.js`

Все обработчики урлов расположены в `./routes` - не обрабатывайте пути в других местах

При использовании базы данных - модели складывайте в `./models`

Кастомные модули типа middleware и прочие хелперы лежат в `./modules`

Для иницализации конфига выполните `cp config/default.js.dist config/default.js`

Для запуска `npm start` или `nodemon start`

### Создание пулл-реквеста:

```
git fetch
git merge origin/master
git reset --soft origin/master
git commit -am "Do some awesome stuff that this feature does."
git push -f
```


###Качество кода

Для отслеживания качества кода используется ESLint. Для установки используйте:

1. `npm install -g npm-install-peers` - установка глобального модуля, который умеет
 ставить секции из peerDependencies.
2. `npm run lint-install`
3. `npm run lint` 

ESLint хорошо интегрируется с 
[WebStorm](https://www.jetbrains.com/help/webstorm/2016.3/eslint.html) и
 [PhpStorm](https://www.jetbrains.com/help/phpstorm/2016.3/eslint.html),
 настройки должны использоваться из локального файла репозитория `eslintrc.json`.
