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
});
