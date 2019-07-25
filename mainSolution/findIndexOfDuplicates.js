
// FIND INDEX OF DUPLICATES IN A NUMBER ARRAY
//- note: there can be two duplicates

let x= [1,1,2,3,3];

function findIndexOfDuplicates(numbers){

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


// function findIndexOfDuplicates(numbers){

//     var duplicates ={};
//     for (var i = 0; i < numbers.length; i++) {
//         if(duplicates.hasOwnProperty(numbers[i])) {
//             duplicates[numbers[i]].push(i);
//         } 
        
//         else if (numbers.lastIndexOf(numbers[i]) !== i) {
//             duplicates[numbers[i]] = [i];
//         }
//     }
//     return duplicates;

// }

// console.log(findIndexOfDuplicates(x) )


module.exports={findIndexOfDuplicates};

// Array.prototype.getDuplicates = function () {
//     var duplicates = {};
//     for (var i = 0; i < this.length; i++) {
//         if(duplicates.hasOwnProperty(this[i])) {
//             duplicates[this[i]].push(i);
//         } else if (this.lastIndexOf(this[i]) !== i) {
//             duplicates[this[i]] = [i];
//         }
//     }

//     return duplicates;
// };