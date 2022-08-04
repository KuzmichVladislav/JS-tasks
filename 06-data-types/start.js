/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const stringValue = 'a';
const numberValue = 1;
const booleanValue = true;
const nullable = null;
const undefinedValue = undefined;
const objectValue = {
  string: stringValue,
  numberValue,
  booleanValue,
  nullable,
  undefinedValue: undefined
};
const arrayValue = [
  stringValue,
  numberValue,
  booleanValue,
  nullable,
  undefinedValue];

console.log(typeof stringValue);
console.log(typeof numberValue);
console.log(typeof booleanValue);
console.log(typeof nullable);
console.log(typeof undefinedValue);
console.log(typeof objectValue);
console.log(typeof arrayValue);
