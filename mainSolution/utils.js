
// LIBRARY OF UTILITY FUNCTIONS

//generate sequence of numbers
exports.seq = function (start,end){
    var result = [];
    for (var i = start; i<=end; ++i) result.push(i)
    return result;
}
