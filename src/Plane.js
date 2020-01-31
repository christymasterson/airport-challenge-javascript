'use strict';

class Plane {
  constructor() {
    this._location;
  }
  landPlane(airport) {
    airport.clearForLanding(this)
    this._location = airport
  };

  takeOffPlane(airport) {
    this._location.clearForTakeOff(this)
  };
};
