function ArrayOps() {
}

ArrayOps.prototype.sumArray = function(array){
    if(!Array.isArray(array)) return false;
    
    var sum = array.length == 0 || typeof array[0] == 'number' ? 0 : '';
    array.map(function(item){
        sum += Array.isArray(item) ? ArrayOps.prototype.sumArray(item) : item;
    })
    return sum;
}

module.exports = ArrayOps;