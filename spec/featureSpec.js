'use strict';

describe('Feature test', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes land at an airport', function(){
    plane.landPlane(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes take off from an airport', function(){
    plane.landPlane(airport);
    plane.takeOffPlane(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('throws an error when trying to add a the 21st plane', function() {
    for (var i = 0; i < 20; i++) {
      plane.landPlane(airport);
    }
    expect(function() {plane.landPlane(airport)}).toThrowError("Airport is full");
  });


});
