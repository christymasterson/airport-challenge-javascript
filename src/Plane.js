
class Plane {
  constructor() {
    this._location;
  }
  landPlane(airport) {
    airport.clearForLanding(this)
    this._location = airport
  };

  takeOffPlane() {
    this._location.clearForTakeOff(this)
  };
};
