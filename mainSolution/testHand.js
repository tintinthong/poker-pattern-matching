
let hand=[
    { suit: 'D', number: 9 },
    { suit: 'D', number: 9 },
    { suit: 'D', number: 2 },
    { suit: 'S', number: 11 },
    { suit: 'D', number: 3 },
    { suit: 'H', number: 11 },
    { suit: 'D', number: 8 }
]


var list = {"you": [1,2,334], "me": [2], "foo": [1.23,5,23,5,235,346], "bar": [1,2,3,5,5]};
keysSorted = Object.keys(list).sort(function(a,b){return list[a].length-list[b].length}).reverse()
console.log(keysSorted)