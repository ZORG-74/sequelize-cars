const sequelize = require('./db');
const Car = require('./models/car');

async function main() {
  try {
    // 1. Проверка подключения
    await sequelize.authenticate();
    console.log('✅ Подключение к SQLite установлено');

    // 2. Синхронизация — создаёт таблицу cars
    await sequelize.sync({ force: true });
    console.log('✅ Таблица "cars" синхронизирована');

    // 3. Наполнение данными (не менее двух объектов)
    await Car.bulkCreate([
      { brand: 'Toyota', model: 'Camry', year: 2022, price: 2450000, isAvailable: true  },
      { brand: 'BMW',    model: 'X5',    year: 2021, price: 5900000, isAvailable: false },
      { brand: 'Lada',   model: 'Vesta', year: 2023, price: 1250000, isAvailable: true  },
      { brand: 'Kia',    model: 'Rio',   year: 2020, price: 1150000, isAvailable: true  },
    ]);
    console.log('✅ Добавлены записи в таблицу "cars"');

    // 4. Выборка всех записей
    const cars = await Car.findAll();

    // 5. Вывод в консоль в читаемом виде
    console.log('\n📋 Список автомобилей:');
    console.log('─'.repeat(90));
    cars.forEach((car, i) => {
      console.log(
        `${i + 1}. ${car.brand} ${car.model} | ` +
        `год: ${car.year} | ` +
        `цена: ${car.price.toLocaleString('ru-RU')} ₽ | ` +
        `доступен: ${car.isAvailable ? 'да' : 'нет'}`
      );
    });
    console.log('─'.repeat(90));
    console.log(`Всего записей: ${cars.length}\n`);
  } catch (err) {
    console.error('❌ Ошибка:', err);
  } finally {
    // 6. Закрытие соединения — чтобы Node.js корректно завершился
    await sequelize.close();
    console.log('🔒 Соединение с базой данных закрыто');
  }
}

main();