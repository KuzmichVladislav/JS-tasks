/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

var cars = [
  {
    carBrand: 'BMW',
    price: 100,
    isAvailableForSale: true
  }, {
    carBrand: 'Mercedes',
    price: 150,
    isAvailableForSale: false
  }, {
    carBrand: 'Audi',
    price: 200,
    isAvailableForSale: true
  }];

const newCar = {
  carBrand: 'VW',
  price: 100500,
  isAvailableForSale: false
};

cars.push(newCar);

console.log(cars);