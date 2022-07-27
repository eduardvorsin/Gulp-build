# Сборка `Gulp`

## `npm` скрипты для работы со сборкой
- `npm run dev` - запускает `gulp` сборку
- `npm run build` - запускает процес сборки продакшн версии проекта Перед самой таской сборки выполняется линтинг джаваскрипта и стилей
- `npm run stylelint-fix` - отдельный скрипт для линтинга стилей и исправлений некоторых стилей линтером
- `npm run eslint-fix` - отдельный скрипт для линтинга js кода и исправлений его линтером
- `lighthouse-desktop-test` - запускает проверку `lighthouse` с конфигом для декстоп устройств 
- `lighthouse-mobile-test` - запускает проверку `lighthouse` с конфигом для мобильных устройств 

## Структура папок и файлов
```
── #source/                           - исходники
──── css/                             - css стили
────── libs/                          - внешние библиотеки
──────── .gitkeep                     
──── fonts/                           - шрифты
────── .gitkeep                       
──── html/                            - разметка
────── ? components/                  - компоненты страниц
──────── .gitkeep
────── ? pages/                       - страницы
──────── index.html                   - главный html файл
──── images/                          - картинки
────── icons/                         - иконки
──────── .gitkeep
────── .gitkeep
──── js/                              - js код
────── libs/                          - внешние библиотеки
──────── focus-visible.min.js         - плагин для управление фокусом
──────── inert.min.js                 - плагин для управления инертностью
────── ? scripts/                     - скрипты
──────── _lazyloading.js              - ленивая загрузка картинок
────── main.js                        - главны js файл
──── ? pug                            - шаблонизатор pug
────── ? components/                  - компоненты страниц
──────── .gitkeep
────── ? pages/                       - страницы
──────── index.pug                    - главный pug файл
──── scss/                            - scss стили
────── ? abstracts/                   - scss хелперы
──────── ? _$abstracts.scss           - импорты файлов текущей директории
──────── ? _functions.scss            - scss функции
──────── ? _mixins.scss               - scss миксины
──────  ? base/                       - базовые стили
──────── ? _$base.scss                - импорты файлов текущей директории
──────── ? _common.scss               - общие стили
──────── ? _fonts.scss                - подключение шрифтов
──────── ? _reset.scss                - обнуляющие стили
──────── ? _variables.scss            - стилевые переменные
────── ? blocks/                      - блоки
──────── ? _$blocks.scss              - импорты файлов текущей директории
────── ? components/                  - компоненты
──────── ? _$components.scss          - импорты файлов текущей директории
────── style.scss                     - главный scss файл
── gulp_modules                       - gulp модули
──── tasks                            - gulp таски
────── browserSync.js                 - browser-sync таск
────── clean.js                       - таск для очистки директории
────── criticalStyles.js              - таск для создания критических стилей
────── fonts.js                       - таск обрабатывающий шрифты
────── html.js                        - таск для html
────── images.js                      - таск обрабатывающий картинки
────── otf2ttf.js                     - таск для конвертации шрифтов
────── scripts.js                     - таск обрабатывающий js
────── sprite.js                      - таск для создания svg спрайтов
────── styles.js                      - таск обрабатывающий стили
────── transferLibraries.js           - таск переносящий css и js библиотеки
──── path.js                          - пути к файлам сборки
──── plugins.js                       - общие галп плагины
── lighthouseReports                  - отчеты lighthouse тестов
── .eslintignore                      - игнор файл для eslint
── .eslintrc.json                     - eslint конфиг
── .gitignore                         - игнор файл для git
── .stylelintignore.json              - игнор файл для stylelint
── .stylelintrc.json                  - конфиг для stylelint
── gulpfile.js                        - главный gulp файл
── package.json                       - список npm зависимостей
── README.md                          - документация к сборке

```

- `/` - директория
- `?` - необязательные файлы или папки
- `.gitkeep` - пустой файл для того чтобы в git сохранилась правильная структура папок
- `_filename` - файлы которые не наблюдаются тасками галпа

## Список плагинов
- `@babel/cli`, `@babel/core`, `@babel/plugin-transform-runtime`, `@babel/preset-env`, `babel-loader`,  - плагины для правильной работы транспилятора
- `autoprefixer` - расставляет браузерные префиксы в css 
- `browser-sync` - обновляет страницу при изменениях в коде
- `critical` - генерирует критические стили
- `del` - удаляет директории
- `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `eslint-plugin-promise` - js линтер и конфиг
- `gulp` - gulp плагин
- `gulp-csso` - минимизация css
- `gulp-file-include` - плагин для импортирования html и js файлов
- `gulp-fonter` - конвентер шрифтов
- `gulp-htmlmin` - минификатор html
- `gulp-if` - условные выражения в gulp скриптах
- `gulp-imagemin` - минификатор картинок
- `gulp-postcss` - postcss плагин для gulp
- `gulp-pug` - шаблонизатор pug
- `gulp-rename` - переименовывает файлы
- `gulp-sass` - gulp плагин для sass и scss
- `gulp-svg-sprite` - генератор svg спрайтов
- `gulp-ttf2woff` - конвертация из ttf в woff
- `gulp-ttf2woff2` - конвертация из ttf в woff2
- `gulp-webp` - преобразование картинок в webp
- `npm-check-updates` - проверка обновлений npm пакетов
- `postcss` - postcss плагин
- `postcss-custom-properties` - автополифил css переменных
- `postcss-preset-env` - автополифилы нового css синтаксиса
- `postcss-sort-media-queries` - сортировка медиа выражений
- `sass` - sass плагин
- `stylelint`, `stylelint-config-standard`,`stylelint-order` - css линтер и конфиг            
- `webpack`, `webpack-stream` - вебпак

## Таски которые вызываются вручную
- `npm run sprite` - генерация svg спрайта
- `npm run otf2ttf` - конвертация из otf в ttf
- `npm run criticalStyles` - генерация критических стилей


