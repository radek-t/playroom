function NumberOps(){
}

charToDigit = { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000},

NumberOps.prototype.romanToArabic = function(number){
    if (typeof number != 'string') return false; 
    number = number.toLowerCase().replace(/(\s)/g, '');
        
    var stack = [charToDigit[number[0]]], 
        sum = 0;
    
    for(var i=1; i<number.length; i++){
        var current = charToDigit[number[i]], 
            prev = charToDigit[number[i-1]];
        
        if (current > prev){
            sum += current - stack.pop();
        } else {
            stack.push(current);
        }
    }
    
    stack.map(function(item){ sum += item; });
    return sum;
}

module.exports = NumberOps;