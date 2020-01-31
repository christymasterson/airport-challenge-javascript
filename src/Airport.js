'use strict';

class Airport{
  constructor() {
    this.hangar = []
    this.AIRPORT_CAPACITY = 20

  }
  planes() {
    return this.hangar;
  }

  clearForLanding(plane) {
    if (this.isAirportFull()) {
      throw new Error("Airport is full");
    }
    this.hangar.push(plane);
  };

  clearForTakeOff(plane) {

    this.hangar  = [];
  }

  isAirportFull() {
    return this.hangar.length === this.AIRPORT_CAPACITY;
  }

};
