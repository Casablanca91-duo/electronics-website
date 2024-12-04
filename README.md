# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





### my project

# Название проекта

Электронный магазин
Этот проект — веб-приложение, разработанное на React, которое предоставляет пользователю возможность просматривать и взаимодействовать с каталогом электроники. Основные функции приложения включают отображение списка товаров, управление корзиной, работу с задачами (TodoList), а также взаимодействие с пользователями.

## Установка

git clone https://github.com/ваш-репозиторий.git

npm install

npm start

## Основные функции

Получение данных с сервера:

Используется useEffect для загрузки данных о товарах и списке пользователей с помощью метода fetch.
Реализована обработка ошибок, включая проверку успешности ответа (if (!response.ok)).
Работа с корзиной:

Возможность добавления товара в корзину с последующим просмотром добавленных товаров на отдельной странице.
Состояние корзины обновляется автоматически.
TodoList для планирования задач:

Добавление, удаление и просмотр задач.
Автоматическое обновление данных:

Информация о пользователях обновляется каждые 10 секунд благодаря setInterval внутри useEffect.
Обратная связь:

Форма отправки данных с полем ввода и кнопкой.
После отправки данные очищаются, а информация отображается пользователю.
Социальные сети:

В нижнем колонтитуле добавлены ссылки на соцсети.
Применены атрибуты target="_blank" и rel="noopener noreferrer" для защиты пользователя при переходе на внешние сайты.
Роутинг:

Настроены маршруты с переходом между страницами:
Главная
Список дел
Товары и пользователи
Обратная связь
Корзина
Адаптивный дизайн:

Интерфейс приложения автоматически растягивается на весь экран, занимая всё доступное пространство.

## Технологии

React (Hooks: useState, useEffect)
Fetch API
CSS для адаптивного дизайна
React Router для роутинга

## Структура проекта

Components/ — Компоненты приложения
CSS/ — Стили для компонентов
App.js — Основной файл приложения
README.md — Файл документации

## Описание приложения

- Отображает список товаров электроники и пользователей сайта.
- Список компонентов: 
    - App(основной компонент приложения)
    - SiteName(название сайта);
    - Header(главная страница, общая информация о сайте);
    - TodoList(список дел, планирование покупок)
    - UsersList(принимает и отображает список пользователей на данном сайте);
    - ListProduct(принимает и отображает данные о товаре с сервера);
    - ProductFilter(дочерний компонент ListProduct, который фильтрует товары по названию);
    - SendDates(обратная связь)
    - Cart(корзина, для отображения товаров, добавленных в нее)
    - Footer(нижняя часть приложения, содержит контактные данные и ссылки социальные сети)

## Контакты

Если у вас есть предложения или вопросы, пожалуйста, напишите на mail: filimonov111roman@mail.ru или [GitHub](https://github.com/Casablanca91-duo).