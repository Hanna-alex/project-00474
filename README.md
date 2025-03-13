# Проект 00747

## 1.Постановка ТЗ

## 2. Подходк реализации

## 3.Настройка проекта - пакета:

- npm i -g json-server
- npm i styled-components prop-types react-hook-form yup react-router redux redux-thunk react-redux
- иконочные шрифты ()

# 4.Структура данных приложения:

### Области хранения данных:

- база данных JSON-server
- BFF
- редакс сторе

### Сущности приложения:

- _Пользователь_: БД (users), BFF(сессия текущего пользователя), стор (отображение в браузере)
- _Счета_: БД (accounts), стор (отображение в браузере)
- _Категории_: БД(categories), стор (отображение в браузере)
- _Транзакции_: БД (Transactions), стор (отображение в браузере)

### Таблицы БД

- _Таблица пользователей (Users)_: user_id / login / password_hash / creared_at / updated_at
- _Таблица счетов (Accounts)_: account_id / user_id / name / account_type / balance / created_at / updated_at

- _Таблица категорий (Categories)_: category_id / user_id / name / type / icon / created_at / updated_at

- _Таблица транзакций (Transactions)_: transaction_id / user_id / account_id / category_id / amount / comment / date / created_at / updated_at

### Схема состояний BFF ???

    - сессия текущего пользователя: login / password / Accounts_user / Categories_user / Transactions_user

### Схема для redux store (на клиенте/ отображение)

    - user: id / login / email / session
    - accouts: массив счетов => id / type / name / icon / comment / balance / created_at
    - accout: id / type / name / icon / comment / balance / created_at
    - transactions: массив транзакций => id / type / name / icon / comment / amount / created_at
    - transaction: id / type / name / icon / comment / amount / created_at
    - categories: массив категорий пользователя / id / icon / name
    - category: id / icon / name / type

## 5.Сделать набросок дизайн экранов

    сделано в Figma

## 6.Подготовка JSON Server и базы данных

done

## 7. Первичная реализация BFF

- Создание утилиты
- Реализация ручек для входа и регистрации

## 8. реализация основного компонента

## 9.реализация шапки

## 10. Основной компонент
