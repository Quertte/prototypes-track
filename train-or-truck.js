// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}
function Train(driver) {
  Vehicle.call(this, driver)
  this.type = 'passenger'; // 'passenger', 'freight', 'mail'
}

Vehicle.prototype.drive = function (kmh) {
  this.speed = kmh;
  return `${this.driver} driving at ${kmh} kilometers per hour`;
}

Vehicle.prototype.stop = function () {
  this.speed = 0;
  return `${this.driver} has stopped`;
}

function Truck(driver) {
  Vehicle.call(this, driver);
  this.cargo = [];
}

Object.setPrototypeOf(Train.prototype, Vehicle.prototype);
Object.setPrototypeOf(Truck.prototype, Vehicle.prototype);

Truck.prototype.loadCargo = function (cargo) {
  this.cargo.push(cargo)
  return this.cargo;
}
Truck.prototype.unloadCargo = function () {
  return this.cargo.pop();
};
// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
