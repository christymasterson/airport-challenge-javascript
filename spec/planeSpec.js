'use strict';

describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

    describe("landing plane", function() {
      it('responds to land plane', function(){
        expect(plane.landPlane).not.toBeUndefined()
      });
    });
});
