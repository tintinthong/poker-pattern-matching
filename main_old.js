let numbers=[];

for (var i=1; i<14; i++) {
    numbers.push(i)
}

let patterns=["s",
"d","h","c"];

let hand={
    
    number:1,
    pattern:"s"
    
}





function generateCard(){
    
    //size
    let randp=Math.floor(4*Math.random()) //0,1,2,3
    let randn=  Math.floor(13*Math.random()) 
    
    return {number:numbers[randn],  pattern:patterns[randp]}
    
}




function generate7(){
    
    let flop=[];
    for (var i=0; i<7; i++) {
        flop.push(generateCard());
    }
    return flop
}




function findPairs(flop){
    
    
    flop.sort((a, b) => (a.number > b.number) ? 1 : -1)
    
    
    function pairs(obj) {
        var res = [];
        let l= Object.keys(obj).length;
        for(let i=0; i<l; ++i){
            for(let j=i+1; j<l; ++j){
                if(obj[i].number==obj[j].number){
                    res.push([obj[i], obj[j]]);
                }
                
            }
        }
        return res
    }
    
    
    // console.log(flop);
    // console.log(pairs(flop));
    
    
}

function findSimilar(flop){
    // const values = [{number: 10, name: 'someName1'}, {number: 10, name: 'someName2'}, {number: 11, name:'someName3'}, {id: 12, name: 'someName4'}];
    
    const lookup = flop.reduce((a, e) => {
        a[e.number] = e.number in a ? ++a[e.number] : 0;
        return a;
    }, {});
    
    return flop.filter(e => lookup[e.number]);
    
}

// let flop =generate7();
// console.log(flop)
// // findPairs(flop);
// console.log(findSimilar(flop));

function findThree(){
    
    
}

function findFour(){
    
    
}


function findStraight(flop){
    
    flop.sort((a, b) => (a.number > b.number) ? 1 : -1)
    
    for (var k=0; k<=2; k++) {
        let listTrue=[];
        for (let i=0; i<4; i++) {
            if(flop[i].number+1==(flop[i+1].number)){
                listTrue.push(true)
            }else{
                listTrue.push(false);
            }
        }
        
        function  isTrue(bool){
            return bool==true;
        }
        
        return listTrue.every(isTrue);
        
    }

    //first true then straight begins from 1st card
    
}

// flop=[
    
//     {number:2,pattern:"c"},
//     {number:3,pattern:"c"},
//     {number:4,pattern:"c"},
//     {number:5,pattern:"c"},
//     {number:6,pattern:"c"},
//     {number:10,pattern:"c"},
//     {number:12,pattern:"c"}
    
// ]

// console.log(findStraight(flop));

function findFlush(flop){

    function findSimilar2(flop){
        // const values = [{number: 10, name: 'someName1'}, {number: 10, name: 'someName2'}, {number: 11, name:'someName3'}, {id: 12, name: 'someName4'}];
        
        const lookup = flop.reduce((a, e) => {
            a[e.pattern] = e.pattern in a ? ++a[e.pattern] : 0;
            return a;
        }, {});

        
        
    
        let res= flop.filter(e => lookup[e.pattern]);
        
        if(res.length==5){
            return res;
        }else{
            return "no flush"
        }
    }

    return findSimilar2(flop)



}


flop =generate7();
console.log(flop);
console.log(findFlush(flop));



flop=[
    
    {number:2,pattern:"s"},
    {number:3,pattern:"s"},
    {number:4,pattern:"q"},
    {number:5,pattern:"q"},
    {number:6,pattern:"s"},
    {number:10,pattern:"s"},
    {number:12,pattern:"s"}
    
]

function findSimilar2(flop){
    // const values = [{number: 10, name: 'someName1'}, {number: 10, name: 'someName2'}, {number: 11, name:'someName3'}, {id: 12, name: 'someName4'}];
    
    const lookup = flop.reduce((a, e) => {
        a[e.pattern] = e.pattern in a ? ++a[e.pattern] : 0;
        return a;
    }, {}

    );

    console.log(lookup)

    return flop.filter(e => lookup[e.pattern]);
    
}

console.log(findSimilar2(flop))
