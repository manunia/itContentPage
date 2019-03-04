# ItContentPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Задание:
 выбрать любой дизайн (цветовая схема - строгая, черный/серый/белый) и сверстать контентную страницу для портфолио IT-компании. Страница должна быть адаптивной.

Структура страницы: верхнее меню, заголовок страницы, контент.

Меню:
Сервисы
Галерея
Проекты
Web-проекты
Мобильные приложения


Реализовать роутинг модуля в отдельном классе.
Для каждого роута нужен отдельный компонент содержащий в себе заголов раздела меню.

На роут с разделом "Проекты" повесить guard. Переход же в роут можно осуществить только по всплывающему диалогу и подтверждению пользователя. (никакая авторизация не подразумивается).

По роуту "Проекты" должен быть доступен компонент с заголовком и следующим содержанием.

Заголовок: Threefold dashboard

Контент:

“Lorem ipsum dolor sit amet, zril dicant mollis sed in, nibh laoreet repudiare at sed. Cu eum laudem nostrum voluptatum, exerci soleat platonem ne cum. Dicta iudico admodum ex ius. His te ferri facer pericula, pro an saepe tempor, usu liber sententiae ad. Te sed putent delectus definitionem, sit ceteros forensibus ea.
Qui te purto utamur, ex his tale accumsan expetendis, illud imperdiet dissentias ex vix. Sit timeam latine apeirian et. Sed quodsi reprehendunt cu, eu est vocibus corrumpit vituperata, sea nobis dicunt te. Esse ludus eu mei, in tritani oblique vix, ut quo omnes nusquam. Ei pro similique omittantur. Consetetur dissentias no qui.
Lorem ipsum dolor sit amet:
Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet
Quo cu suscipit sensibus, his graecis principes voluptatibus no, nam agam detracto constituto an. In tacimates conceptam forensibus sit, eos et iudicabit ullamcorper. Antiopam platonem in mei, id clita cetero nec, in euismod accusata honestatis eum. Sed quas numquam imperdiet ut.
Regione hendrerit eos id, ne eum iuvaret hendrerit, posse electram dissentiunt vim eu. His elit pericula at. Vide rebum lucilius ne sea, veri instructior cu pri. Ad debet qualisque complectitur eos, legimus maluisset tincidunt nec ea. Decore numquam nusquam pri te, fierent eloquentiam mei ad.”


В роут "Web-проекты" добавить галерею картинок/табличек. Загружаемые картики должны быть разных размеров. Картинки должны адаптивно обрезаться и приобретать одинаковый размер. Позиционироени должны быть в 5 столбцов. Применять готовые слайдеры не приемлимо. Загрузка картинок должна происходить по скролу, либо пагинацией.

Загрузку картинок реализовать через класс сервис. Методы класса должны быть реализованы с применением rx.js. Также необходимо описать модели/интерфейсы для получаемых данных с удалённого сервиса. Ресурсом картином может быть любой сервис отдающий одним запросом более 10 картинок за раз.

Галерею рекомендуется реализовать из нескольких компонентов. Все компоненты использующие rx.js должны иметь автоматическию отписку от потока на основе жизненого цикла компонента.

Визуальные компоненты должны быть включены только с помощью npm и быть встаиваемыми в angular приложение, либо быть написано саморучно.

Во время загрузки картинок должен отображаться лоудер, любой сложности.

Стек
- Angular 7+
- Rx.js
- HTML
