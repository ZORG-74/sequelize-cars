# Sequelize + SQLite — практическая работа

Консольное приложение на Node.js с ORM **Sequelize** и встраиваемой БД **SQLite**.

## Предметная область

Таблица **cars** (Автомобили) — каталог автомобилей для продажи.

| Поле          | Тип       | Ограничения                    |
|---------------|-----------|--------------------------------|
| id            | INTEGER   | PK, автоинкремент (Sequelize)  |
| brand         | STRING    | NOT NULL                       |
| model         | STRING    | NOT NULL                       |
| year          | INTEGER   | —                              |
| price         | FLOAT     | —                              |
| isAvailable   | BOOLEAN   | NOT NULL, default: true        |
| createdAt     | DATETIME  | добавляется автоматически      |
| updatedAt     | DATETIME  | добавляется автоматически      |

## Установка и запуск

```bash
npm install
node index.js