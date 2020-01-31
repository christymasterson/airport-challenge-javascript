'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport;
    plane = jasmine.createSpy('plane', ['landPlane'])
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can land planes', function(){
    airport.clearForLanding(plane)
    expect(airport.planes()).toEqual([plane]);
  });
});
