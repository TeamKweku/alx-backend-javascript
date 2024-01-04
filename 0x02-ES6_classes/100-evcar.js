/* eslint-disable class-methods-use-this */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Setter for range
  set range(newRange) {
    this._range = newRange;
  }

  cloneCar() {
    return new Car();
  }
}
