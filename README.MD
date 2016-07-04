# Пример работы с Express.js

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
