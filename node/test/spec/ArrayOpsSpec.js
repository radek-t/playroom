(function () {
  'use strict';
  
  var ArrayOps = require('../../src/ArrayOps'), arrayOps;

  describe('ArrayOps module suite', function () {
    describe('sumArray function', function () {
      
      it('should sum array with integers correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.sumArray([1,2,3,4])).toEqual(10);
      });
      
      it('should sum array with strings correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.sumArray(['a', 'b', 'c', 19, 1])).toEqual('abc191');
      });
      
      it('should sum nested arrays with integers correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.sumArray([1,[2],3,4])).toEqual(10);
      });
      
      it('should sum weird nested arrays with integers correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.sumArray([1,[2,666,7,9,159],3,4])).toEqual(851);
      });
      
      it('should handle empty arrays correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.sumArray([])).toEqual(0);
      });
      
    });
  });
})();
