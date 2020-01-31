'use strict';

describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport;
  })

  it('airport is initially empty', function(){
    expect(airport.planes()).toEqual([]);
  });
});
