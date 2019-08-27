
// LIBRARY OF UTILITY FUNCTIONS

//generate sequence of numbers
exports.seq = function (start,end){
    var result = [];
    for (var i = start; i<=end; ++i) result.push(i)
    return result;
}


//get array sepcified by index 
exports.getArrayByIndex = function( array, indexes){
    
    return {
        inArray: array.filter((number,i) => indexes.includes(i)),
        outArray: array.filter((number,i) => !indexes.includes(i))
    }
}


//finds index of duplicates 
exports.findIndexOfDuplicates =function (numbers){
    
    var duplicates ={};
    for (var i = 0; i < numbers.length; i++) {
        if(duplicates.hasOwnProperty(numbers[i])) {
            duplicates[numbers[i]].push(i);
        } else if (numbers.lastIndexOf(numbers[i]) !== i) {
            duplicates[numbers[i]] = [i];
        }
    }
    return duplicates;
}

//getting all pairs from an array
exports.allPairs= function(array) {
    if (array.length < 2) { return []; }
    var first = array[0],
    rest  = array.slice(1),
    pairs = rest.map(function (x) { return [first, x]; });
    return pairs.concat(allPairs(rest));
}

