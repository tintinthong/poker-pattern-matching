
// FORMAT OBJECT FORMAT TO BE ATTACKED WITH ALGORITHM (DONE)

//key value-pair (to be used for algorithm)
let _ = { "S":1, "C":2, "H":4, "D":8 };

//format a single hand to be used by algorithhm findPattern
//- takes an array and returns an object
function formatHand(hand){

    let suits=[];
    let numbers=[]; 
    let suitsReady=[];

    hand.map((hand)=>{
        suits.push(hand.suit);
        numbers.push(hand.number);
        suitsReady.push(_[hand.suit]); //suitsReady to mean "ready to be attacked by algorithm"
    })

    return {
        hand: hand,
        suits: suits,
        numbers: numbers,
        suitsReady: suitsReady
    }
}

//format an array of hands 
//- takes an array of arrays and leaves an array of objects
function formatAllHands(hands){ 
    return hands.map(hand=>formatHand(hand));
}


//exporting modules
module.exports={formatHand, formatAllHands}


//Example below:

let hand= [
    { suit: 'S', number: 2 },
    { suit: 'D', number: 5 },
    { suit: 'S', number: 6 },
    { suit: 'C', number: 11 },
    { suit: 'D', number: 13 }
  ]

//Example above have to be in this format
// [2,5,6,11,13], [_["S"],_["D"],_["S"],_["C"],_["D"]]

let hands=
[
[
    { suit: 'D', number: 1 },
    { suit: 'C', number: 7 },
    { suit: 'H', number: 11 },
    { suit: 'D', number: 11 },
    { suit: 'H', number: 12 }
  ],
  [
    { suit: 'D', number: 1 },
    { suit: 'S', number: 3 },
    { suit: 'C', number: 7 },
    { suit: 'D', number: 11 },
    { suit: 'H', number: 12 }
  ]
]

// formatHand(hand);
// formatAllHands( hands);
