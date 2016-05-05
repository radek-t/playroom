(function () {
  'use strict';
  
  var NumberOps = require('../../src/NumberOps'), numberOps;
  
  describe('NumberOps module suite', function () {

    beforeEach(function(){
      numberOps = new NumberOps();        
    })
    
    describe('romanToArabic function', function () {
      
      it('should convert 1-10 correctly', function () {
        expect(numberOps.romanToArabic('i')).toEqual(1);
        expect(numberOps.romanToArabic('ii')).toEqual(2);
        expect(numberOps.romanToArabic('iii')).toEqual(3);
        expect(numberOps.romanToArabic('iv')).toEqual(4);
        expect(numberOps.romanToArabic('v')).toEqual(5);
        expect(numberOps.romanToArabic('vi')).toEqual(6);
        expect(numberOps.romanToArabic('vii')).toEqual(7);
        expect(numberOps.romanToArabic('viii')).toEqual(8);
        expect(numberOps.romanToArabic('ix')).toEqual(9);
        expect(numberOps.romanToArabic('x')).toEqual(10);
      });
      
      it('should convert 10-20 correctly', function () {
        expect(numberOps.romanToArabic('xi')).toEqual(11);
        expect(numberOps.romanToArabic('xiv')).toEqual(14);
        expect(numberOps.romanToArabic('xvi')).toEqual(16);
      });
      
      it('should convert more advanced examples correctly', function () {
        expect(numberOps.romanToArabic('cmxcix')).toEqual(999);
        expect(numberOps.romanToArabic('xlv')).toEqual(45);
        expect(numberOps.romanToArabic('xl')).toEqual(40);
        expect(numberOps.romanToArabic('mcliv')).toEqual(1154);
        expect(numberOps.romanToArabic('m dcc lxx viii')).toEqual(1778);
        expect(numberOps.romanToArabic('m dccc lxxx viii')).toEqual(1888);
        expect(numberOps.romanToArabic('m dccc lxxx ix')).toEqual(1889);
        expect(numberOps.romanToArabic('d ccc l xx ix')).toEqual(879);
      });
      
    });
    
  });
})();