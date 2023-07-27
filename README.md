Функціонал:

Головна сторінка:

1.Отримання даних з API.
2.Фільтрація товарів за категоріями на боці сервера.
3.Сортування товарів за 3 параметрами на стороні фронту.
4.Безкінечна прокрутка товарів, оскільки на боці сервера є всього 20 записів, що може виглядати нецікаво. Розглядав ідею відображати 10 записів, видаляти їх і додавати нові під час прокрутки. Проте, не було впевненості, чи саме такий ефект ви хотіли досягти, тому додав просто новий запит на завантаження додаткових товарів.

Кошик:

1.Додавання товару до кошика.
2.Видалення товару з кошика.
3.Збереження товарів у локальному сховищі (local storage), щоб дані залишалися при оновленні сторінки.

Стек: axios, bootstrap, vue, vue-router, vue-star-rating, vuex

---

Functionality:

Main Page:

1.Data retrieval from the API.
2.Filtering of products by categories on the server-side.
3.Sorting of products based on 3 parameters on the client-side.
4.Infinite scrolling of products due to the limited number (20) of records on the server-side. Considered the idea of displaying 10 records, removing them, and adding new ones during scrolling. However, there was uncertainty about whether such an effect was desired, so a simple approach was adopted with a new request to load additional products.

Shopping Cart:

1.Adding products to the shopping cart.
2.Removing products from the shopping cart.
3.Saving products to local storage to preserve data across page refreshes.

## Stack: axios, bootstrap, vue, vue-router, vue-star-rating, vuex

# vue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
