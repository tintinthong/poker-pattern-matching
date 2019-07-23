
//The format of a hand:
//   "facesuit, facesuit, facesuit, facesuit"

const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const SUITS = ['♥', '♦', '♣', '♠'];

//for any givenHand, find the strongest pattern
function analyzeHand(hand){

    //changing hand string into array
    let cards  = hand.split(' ').filter(x => x !== 'joker');

    //counting number of jokers
    let jokers = hand.split(' ').length - cards.length;
    // console.log(jokers)

    //gets the index of the face in array
    let faces = cards.map( card => FACES.indexOf(card.slice(0,-1)) );
    // console.log("faces is", faces)

    //gets the index of the suit in array
    let suits = cards.map( card => SUITS.indexOf(card.slice(-1)) );
    
    //checks if there is at least one duplicate
    if( cards.some( (card, i, self) => i !== self.indexOf(card)|| faces.some(face => face === -1) || suits.some(suit => suit === -1) ) ) 
    return 'invalid';
    //removed this in conditional

    //check if flush(logical)
    let flush    = suits.every(suit => suit === suits[0]);

    //count "of a kind" of faces
    //do not know why sort 
    let groups   = FACES.map( (face,i) => faces.filter(j => i === j).length).sort( (x, y) => y - x );
    // console.log("groups is ", groups)

    //to handle edge case of a,2,3,4,5
    let shifted  = faces.map(x => (x + 1) % 13);
    // console.log("shifted is", shifted)

    //to be used when checking straight
    let distance = Math.min( Math.max(...faces) - Math.min(...faces), Math.max(...shifted) - Math.min(...shifted));
    // console.log("distance is ", distance)

    //to check if it is a straight
    let straight = groups[0] === 1 && distance < 5;
    // console.log("straight is ", straight)

    //adding number of jokers
    //why do this? seems wrong
    groups[0] += jokers;
    // console.log("groups[0] is ", groups[0])

    //print which pattern based on precedence
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


//testing many hands
for(hand of testHands) console.log(hand + ": " + analyzeHand(hand));




