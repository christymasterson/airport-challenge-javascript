'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['landPlane'])
  })

  it('airport is initially empty', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can land planes', function(){
    airport.clearForLanding(plane)
    expect(airport.planes()).toEqual([plane]);
  });
});
