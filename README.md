# LiveHTML Gulp сборщик. Версия с Pug + Sass/SCSS

Сборка для автоматизации задач в повседневной front-end разработке. Компилируйте SCSS и Pug, сжимайте файлы, оптимизируйте картинки, пишите на ES6. При  каждом сохранении файла в редакторе кода браузер автоматически перезагружает страницу. Не волнуйтесь о том, что вам придётся выполнять рутинную работу.

Сборка адаптирована под LiveHTML, вы разворачиваете всё в папке проекта в Dropbox. Создана определённая структура, отключена синхронизация "мусора" в виде node_modules и др.

## Как развернуть?

* Node версии 14+ должен быть [установлен](https://nodejs.org/en/download/);
<details><summary>pnpm должен быть установлен...</summary>
<p>

```sh
npm install -g pnpm
```  

</p>
</details>
<details><summary>gulp-cli должен быть установлен...</summary>
<p>

```sh
npm install -g gulp-cli
```  

</p>
</details>
<details><summary>дополнительно для Windows может понадобиться...</summary>
<p>

* [Git for Windows](https://gitforwindows.org/);  
* в PowerShell, запущенной от имени адмиинистратора:   
```sh
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

Советы:
1. Обратите внимание, чтобы использовался именно powershell, а не bash консоль;
2. Проверьте, не просит ли винда после Dropbox или работой с консолью обновиться и перезагрузиться. А если устанавливали только что Dropbox, npm или другие вещи — перезагрузка обязательна в любом случае.

</p>
</details>
<details><summary>дополнительно для Linux может понадобиться...</summary>
<p>

* на примере Ubuntu 18.04+:  
```sh
sudo apt install -y build-essential attr autoconf libjpeg-dev libpng-dev libtiff-dev libgif-dev
```  

</p>
</details>

* переходим в консоли в папку проекта в Dropbox (там уже есть папка ```html``` и **нет** ```sources```);
* далее чистая магия,  

macOS:
```sh
git clone --depth 1 https://github.com/livehtml/lh-gulp.git && cd lh-gulp && mv sources ../ && mv README-client.md ../README.md && mv README-en.md ../ && cd ../ && rm -rf lh-gulp && cd sources && mkdir node_modules && xattr -w com.dropbox.ignored 1 node_modules && pnpm i --frozen-lockfile
```

Linux:
```sh
git clone --depth 1 https://github.com/livehtml/lh-gulp.git && cd lh-gulp && mv sources ../ && mv README-client.md ../README.md && mv README-en.md ../ && cd ../ && rm -rf lh-gulp && cd sources && mkdir node_modules && attr -s com.dropbox.ignored -V 1 node_modules && pnpm i --frozen-lockfile
```

Windows PowerShell:
```sh
git clone --depth 1 https://github.com/livehtml/lh-gulp.git ; cd lh-gulp ; Start-Sleep -s 7 ; mv sources ../ ; mv README-client.md ../README.md ; mv README-en.md ../ ; cd ../ ; rm -r -fo lh-gulp ; cd sources ; mkdir node_modules ; Set-Content -Path node_modules -Stream com.dropbox.ignored -Value 1 ; pnpm i --frozen-lockfile
```


## Как работать?

```sh
gulp fresh
```
По умолчанию сборщик содержит в себе шаблон с примерами. В работе над реальными проектами это, конечно же, не нужно и очистить можно вышеуказанной командой.

Очистка отрабатывает корректно только для test файлов и кода, который идёт по умолчанию с данным сборщиком. Основной скелет остаётся, удаляется только то, что вы удаляли ранее вручную. Любые ваши тестовые изменения до данной команды могут остаться или, наоборот, может удалиться нужное. Поэтому если нужна чистая сборка — клонируем снова с github, далее ```gulp fresh``` и запускаем в работу:
```sh
gulp
```

## Команды (таски) сборщика

Зачастую, для готового проекта требуется изменение только отдельных элементов (стилей, изображений, скриптов, html), не запуская сборку целиком по новой.
В сборщике доступны следующие команды обновления:  
```gulp pug``` — html код  
```gulp styles``` — стили  
```gulp styles_min``` — стили с минификацией  
```gulp styles_unmin``` — стили без минификации  
```gulp scripts``` — скрипты  
```gulp scripts_min``` — скрипты с минификацией  
```gulp scripts_unmin``` — скрипты без минификации*  
```gulp favicons``` — favicon  
```gulp images``` — изображения  
```gulp sprite``` — svg-спрайт (после чего обязательно обновление стилей, см.выше)  
```gulp html_direct_copying``` — прямое копирование всего из ```sources/src/html_direct_copying``` в папку ```html```

Копирование вновь добавленных библиотек:  
```gulp libs``` (после чего обязательно обновление скриптов, см.выше)

Команды сборки всего проекта, но без запуска мониторинга:  
```gulp build```  
```gulp build_min``` — сборка c минификацией  
```gulp build_unmin``` — сборка без минификации*

Запуск только мониторинга:  
```gulp watch```  
```gulp watch_min``` — с минификацией  
```gulp watch_unmin``` — без минификации*

Проверка W3C HTML валидации собранных страниц:  
```gulp validateHtml```

\* — обратите внимание на необходимость подключения js библиотек по отдельности в ```sources/src/pug/base/_layout.pug```.

## Проект на английском?

1. В вёрстке, исходниках, комментариях, где угодно — не должно быть ни одного кириллического символа;
2. ```html(lang="en")``` в ```pug/base/_layout.pug```;
3. Переименовываем README-en.md в README.md (удалив русский) — если заказчик иностранец;
4. Яндекса фавиконки убрать ```link(rel="yandex-tableau-widget" href="images/favicons/yandex-browser-manifest.json")```


## Недоступность файла на сервере LiveHTML

Просьба обратить внимание на следующее:

1. Наш серевер работает на Linux. Эта ОС использует Case Sensitive файловую систему, т.е. там, к примеру, graph.svg и Graph.svg — это два совершенно разных файла!

2. Если вы сохранили у себя на macOS/Windows файл как Graph.svg, а затем переименовали в graph.svg — Dropbox такое переименование может не увидеть и ничего не синхронизирует. Лучше всего удалить везде этот файл и сохранить уже как graph.svg. Кроме того, учитывая специфику работы со сборщиком, даже полное переименование: Graph.svg -> 123.svg -> graph.svg — не всегда может привести к нужному результату и/или останется мусор в виде копий данного файла (Graph.svg, 123.svg) до перезапуска сборщика.

Итого: как файл сохранили, так и прописываем к нему путь во всех местах. Лучше всего сразу сохранять lower case.


## Сдача проекта

Убеждаемся, что не забыли сделать фавиконку ```sources/src/images/favicons/fav.png```

После завершения работы, необходимо остановить watcher (```ctrl + c``` в консоли, если запущен) и запустить сборку снова
```sh
gulp build
```

Как вы уже знаете, запуск полностью очищает ```html``` и собирает всё с нуля. При работе с мониторингом, удаленные файлы с ```sources/src``` не удаляются автоматически из ```html``` и там может остаться мусор.

Проверяем на валидность:
```sh
gulp validateHtml
```

Проверяем Google PageSpeed — все страницы в зеленой зоне для пк и мобильных.  


# Более детально

## Что включает в себя сборка?
* [browser-sync](https://browsersync.io/docs/gulp) - живая перезагрузка веб-страницы при внесении изменений в файлы вашего проекта;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - использование ECMAScript с [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация JS-файлов;
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция Sass/SCSS в CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация CSS-файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - карта стилей;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - объединение файлов;
* [gulp-add-src](https://www.npmjs.com/package/gulp-add-src) — добавление файлов для объединения;
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — сжатие изображений PNG, JPG, GIF и SVG;
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) — дополнение к gulp-imagemin для работы с PNG-изображениями;
* [imagemin-jpeg-recompress](https://www.npmjs.com/package/imagemin-jpeg-recompress) — дополнение к gulp-imagemin для работы с JPG-изображениями;
* [gulp-webp](https://github.com/sindresorhus/gulp-webp) — создание и оптимизация изображений в формате WebP;
* [gulp-favicons](https://github.com/evilebottnawi/favicons) — генератор фавиконок для вашего проекта;
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание SVG-спрайтов;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - замена строк в исходных файлах;
* [gulp-newer](https://www.npmjs.com/package/gulp-newer) — дополнительный плагин к ```gulp-imagemin```, позволяет сжимать только новые изображения;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) — оповещения в командной строке (например, ошибки в Sass/SCSS);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) — отладка в терминале;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в ваших файлах проекта;
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — удаление файлов и папок.


## Как собрать?

Проект собирается в папку ```html``` рядом с ```sources```.

У нас открыт терминал, рабочая директория — ```sources```
Запускаем: ```gulp```

![](https://myscreen.onl/rv6wj)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером и работающим browser-sync. Мониторинг настроен на:
* ```sources/src/pug/**/*.pug```
* ```sources/src/sass/**/*.{scss,sass}```
* ```sources/src/fonts/**/*```
* ```sources/src/images/**/*``` — все картинки проходят автоматическое сжатие
* ```sources/src/images/favicons/*``` — из одной картинки генерируется необходимый набор фавиконок
* ```sources/src/images/skip-optimization/**/*``` — здесь картинки минуют оптимизацию
* ```sources/src/images/sprite-svg/*.svg``` — здесь svg собираются в один спрайт
* ```sources/src/js/**/*.js``` — из js файлов собирается один main.min.js
* ```sources/src/html_direct_copying/**/*``` — статичные файлы/папки, копируются прямиком в ```html```

Соответственно всю работу ведём внутри ```sources/src/```.
Содержимое ```html``` полностью собирается автоматически, при запуске очищается, так что ничего туда вручную не сохраняйте. Если что-то нужно, то сюда ```sources/src/html_direct_copying``` — скопируется прямиком в ```html```.

## Сборка не удалась?

Пробуем сбросить кеш и установить проект заново. Для этого в ```sources``` удаляем следующие папки и файлы (при наличии):  
```sh
node_modules
pnpm-lock.yaml
.yarn
.yarnrc.yml
.pnp.js
yarn.lock
package-lock.json
```

Далее в зависимости от системы:

macOS:
```sh
mkdir node_modules && xattr -w com.dropbox.ignored 1 node_modules && pnpm install
```

Linux:
```sh
mkdir node_modules && attr -s com.dropbox.ignored -V 1 node_modules && pnpm install
```

Windows PowerShell:
```sh
mkdir node_modules ; Set-Content -Path node_modules -Stream com.dropbox.ignored -Value 1 ; pnpm install
```

И в итоге пробуем снова:
```sh
gulp
```

## Sass vs SCSS

Пишите как вам нравится! Сборщик поддерживает оба формата. Единственное условие — один .sass или .scss файл должен быть написан либо на чистом sass синтаксисе, либо scss. При этом разные файлы, которые вы имортируете, могут быть по разному и написаны. Для примера см. текущую структуру.

## Оптимизация изображений

**JPG**: оптимизация настроена и отлично работает, ничего мудрить не надо, главное — сохранять JPG с качеством 100% (без какого-либо сжатия).

**PNG**: оптимизация настроена и работает хорошо. В некоторых случаях TinyPNG будет лучше (по качеству и/или степени сжатия), но в целом результат близкий. PNG также сохранять оригинальный (PNG24), без сжатия и/или каких-либо оптимизаций.

**SVG**: оптимизация настроена и работает отлично. Однако сам по себе формат svg очень сложный, он может включать внутри в том числе и растровую графику(!), анимации, поэтому не исключена потеря/искажение svg на выходе (в таком случае воспользуйтесь советом ниже). Тем не менее, при тестировании, каких-либо проблем с данным оптимизатором не выявлено.

На особый случай присутствует папка ```sources/src/images/skip-optimization/``` — все файлы из неё копируются без какого-либо вмешательства сразу в ```html/images/```.
Сделано на случай, если оптимизатор сработал плохо для того или иного изображения (оптимизируем вручную в таком случае).
**Внимание:** сохраняя файл в ```sources/src/images/skip-optimization/``` убедитесь, что нет файла с таким же именем в основной папке ```sources/src/images/```!

В этом таске также есть нюанс: оптимизируются только те изображения, которых ещё нет в ```html/images/```.
В случае запуска полной сборки, ```html``` очищается и всё ок, все изображения снова оптимизируются.
В случае отдельного запуска ```gulp images``` или работает watcher и вы снова сохраняете изображение под тем же именем — оно сразу не пройдет оптимизацию. Нужно предварительно удалить такой же файл с ```html/images/```.

## Изображения в формате WebP

В сборщик встроено автоматическое создание и оптимизация формата WebP. Все растровые изображения из ```sources/src/images/webp/``` автоматически конвертируются в формат WebP и сохраняются в основной поток ```html/images/```. Качество оптимизации — 85. Достаточно для большинства случаев, но если нужен меньший вес или, наоборот, лучшее качество, то данный параметр можно изменить в ```sources/gulp/tasks/images.js``` и перезапустить gulp.

В шаблон сборщика добавлен пример правильной (кроссбраузерной) вставки изображений, включая поддержку WebP и @2x одновременно.
А также в папках найдете примеры других форматов. После ознакомления и старта проекта — не забываем удалять все данные временные файлы.

## Фавиконки

Генерируются автоматически из ```sources/src/images/favicons/fav.png```. Обязательно делаем фавиконку в каждом проекте. Вырезая из логотипа, например, или запрашивая у заказчика.

## Иконочный шрифт? Больше не используем!

Вместо него — svg спрайты. Шрифт использовали ранее для максимальной кроссбраузерности, сейчас это не актуально. Подробное сравнение [здесь](https://css-tricks.com/icon-fonts-vs-svg/).

По спрайтам смотрите описание и примеры в рабочем шаблоне.


## Bower или подключение либ (в том числе таких как jQuery, slick и др.)

Раньше для автоматического скачивания либ, плагинов был популярен Bower, сейчас практически все поддерживают добавление через PNPM.

Например, вам нужен [jQuery](https://jquery.com/) (уже используется в сборке в качестве примера), вводим команду: ```pnpm add jquery```.

Либа скачается в "недра" ```node_modules```, а также будет прописана зависимость в ```sources/package.json```, секция ```dependencies```.
Когда зависимость уже прописана — данные команды не нужны, все автоматически скачается при развертывании проекта (```pnpm install```).
Для удаления: ```pnpm remove jquery```. Также можно вручную почистить ```sources/package.json``` и запустить ```pnpm install```.
Примечание: удаленные таким образом либы автоматически **не удаляются** из ```sources/src/libs```. Всё лишнее чистим там вручную.

Далее запускаем: ```gulp libs``` (или полную сборку снова ```gulp```) — либы целиком скопируются в ```sources/src/libs```. Там будут в том числе исходные файлы, документация. Вас интересуют только собранные минифицированные дистрибутивы, чаще всего они в папке ```dist```.

Остаётся только прописать путь к данной библиотеке в ```sources/src/js/_libs_concat.cjs```.
Вуаля — весь наш JS собирается в один файл ```html/js/main.min.js``` он и подключен в pug ```sources/src/pug/base/_layout.pug```.
Также с либ можно прописать импорт стилей, см. пример в ```sources/src/sass/base/_layout.scss```.

Для примера в данной сборке подключен jQuery (см. ```package.json``` секция ```dependencies```).

Команды и точное название плагинов всегда указываются на сайтах данных плагинов.
