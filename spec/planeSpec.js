'use strict';

describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  it('can land at an airport', function(){
    plane.landPlane(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){
    plane.landPlane(airport);
    plane.takeOffPlane(plane);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });
});
