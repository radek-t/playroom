function ArrayOps() {
}

ArrayOps.prototype.sumArray = function(array) {
    if(!Array.isArray(array)) return false;
    
    var sum = array.length == 0 || typeof array[0] == 'number' ? 0 : '';
    array.map(function(item) {
        sum += Array.isArray(item) ? ArrayOps.prototype.sumArray(item) : item;
    })
    return sum;
}

ArrayOps.prototype.countUnique = function(array) {
    if(!Array.isArray(array)) return 0;
        
    var counter = array.length, visited = {};
    for (var i = 0 ; i < array.length ; i++ ) { 
        var el = array[i];
        el = typeof el == "object" ? JSON.stringify(el) : el;
        if(visited[el] != undefined) {
            counter--;
            if(visited[el] === false) {
                counter--;
                visited[el] = true;
            }
        } else {
            visited[el] = false;
        }        
    }
    return counter;
}

module.exports = ArrayOps;