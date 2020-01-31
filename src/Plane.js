'use strict';

class Plane {
  constructor() {}

  landPlane(airport){
    airport.clearForLanding(this)
  };
}
