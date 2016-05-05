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
    
    describe('countUnique function', function () {
      
      it('should handle an empty array correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([])).toEqual(0);
      });
      
      it('should handle a single value array correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([1])).toEqual(1);
      });
      
      it('should handle a simple int array [1,2,3,2] correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([1,2,3,2])).toEqual(2);
      });
      
      it('should handle a simple unique int array [1,2,3,4] correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([1,2,3,4])).toEqual(4);
      });
      
      it('should handle multiple same value arrays [1,1,1,1] correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([1,1,1,1])).toEqual(0);
      });
      
      it('should handle a single string array correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique(['a'])).toEqual(1);
      });
      
      it('should handle multiple same string arrays correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique(['a','a','a','a'])).toEqual(0);
      });
      
      it('should handle a simple unique string array  correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique(['a','b','c','d'])).toEqual(4);
      });
      
      it('should handle a simple string array  correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique(['a','b','d','d'])).toEqual(2);
      });
      
      it('should handle a single object array correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([{a:'asd'}])).toEqual(1);
      });
      
      it('should handle a simple object array correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([{a:'asd'}, {b:'bsd'}])).toEqual(2);
      });
      
      it('should handle an array of objects with the same keys correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([{a:'asd'}, {a:'bsd'}])).toEqual(2);
      });
      
      it('should handle an array of objects with the same values correctly', function () {
        arrayOps = new ArrayOps();        
        expect(arrayOps.countUnique([{a:'asd'}, {b:'asd'}])).toEqual(2);
      });

    });
  });
})();
