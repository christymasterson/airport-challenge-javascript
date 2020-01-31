'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['landPlane'])
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can land planes', function(){
    airport.clearForLanding(plane)
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off ', function(){
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane)
    expect(airport.planes()).toEqual([]);
  });

  it('throws an error when trying to add a the 21st plane', function() {
    for (var i = 0; i < 20; i++) {
      airport.clearForLanding(plane);
    }
    expect(function() { airport.clearForLanding(plane)} ).toThrowError("Airport is full");
  });

});
