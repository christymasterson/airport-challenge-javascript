'use strict';

describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });

  describe("landing plane", function() {
    it('responds to land plane', function(){
      expect(plane.landPlane).not.toBeUndefined()
    });

    it('can land at an airport', function(){
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });
});
