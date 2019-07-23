// From Rosetta Code 
// https://rosettacode.org/wiki/Poker_hand_analyser#JavaScript

//The format of a hand:
//   "facesuit, facesuit, facesuit, facesuit"

const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const SUITS = ['♥', '♦', '♣', '♠'];

//for any givenHand, find the strongest pattern
function analyzeHand(hand){

    //changing hand string into array
    let cards  = hand.split(' ').filter(x => x !== 'joker');

    //unimportant
    let jokers = hand.split(' ').length - cards.length;
    
    //gets the index of the face in array
    let faces = cards.map( card => FACES.indexOf(card.slice(0,-1)) );

    //gets the index of the suit in array
    let suits = cards.map( card => SUITS.indexOf(card.slice(-1)) );
    

    if( cards.some( (card, i, self) => i !== self.indexOf(card) ) || faces.some(face => face === -1) || suits.some(suit => suit === -1) ) 
    return 'invalid';
    
    let flush    = suits.every(suit => suit === suits[0]);
    let groups   = FACES.map( (face,i) => faces.filter(j => i === j).length).sort( (x, y) => y - x );
    let shifted  = faces.map(x => (x + 1) % 13);
    let distance = Math.min( Math.max(...faces) - Math.min(...faces), Math.max(...shifted) - Math.min(...shifted));
    let straight = groups[0] === 1 && distance < 5;
    groups[0] += jokers;
    
    if      (groups[0] === 5)                    return 'five-of-a-kind'
    else if (straight && flush)                  return 'straight-flush'
    else if (groups[0] === 4)                    return 'four-of-a-kind'
    else if (groups[0] === 3 && groups[1] === 2) return 'full-house'
    else if (flush)                              return 'flush'
    else if (straight)                           return 'straight'
    else if (groups[0] === 3)                    return 'three-of-a-kind'
    else if (groups[0] === 2 && groups[1] === 2) return 'two-pair'
    else if (groups[0] === 2)                    return 'one-pair'
    else                                         return 'high-card';
    
}

let testHands = [
    "2♥ 2♦ 2♣ k♣ q♦", 
    "2♥ 5♥ 7♦ 8♣ 9♠", 
    "a♥ 2♦ 3♣ 4♣ 5♦", 
    "2♥ 3♥ 2♦ 3♣ 3♦", 
    "2♥ 7♥ 2♦ 3♣ 3♦", 
    "2♥ 7♥ 7♦ 7♣ 7♠", 
    "10♥ j♥ q♥ k♥ a♥", 
    "4♥ 4♠ k♠ 5♦ 10♠",
    "q♣ 10♣ 7♣ 6♣ 4♣",
    "joker 4♣ k♣ 5♦ 10♠",
    "joker 2♦ 2♠ k♠ q♦",
    "joker 3♥ 2♦ 3♠ 3♦",
    "joker 7♥ 7♦ 7♠ 7♣",
    "joker 2♦ joker 4♠ 5♠",
    "joker 2♠ joker a♠ 10♠",
    "joker q♦ joker a♦ 10♦"
];

// for(hand of testHands) console.log(hand + ": " + analyzeHand(hand));

// for(hand of testHands) analyzeHand(hand);



let cards="2♥ 2♦ 2♣ k♣ q♦"; 
let cardsArray=cards.split(' '); //creates a new variable
console.log(cardsArray[0].slice(0,-1))
analyzeHand(cards);


// cards.map( card => FACES.indexOf(card.slice(0,-1)) )

