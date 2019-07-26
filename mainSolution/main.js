//MAIN FILE (PATTERN MATCHES)

//this require format is called destructuring in node js
const { generateDeck, shuffle, drawHand } = require('./generate.js');
const {sort} = require('./sort.js')
const {k_combinations}=require('./findAllHands.js')
const {formatHand,formatAllHands}=require('./formatHand.js')
const {mapBestPokerHand}=require('./mapBestPokerHand.js')
const {fullPrint}=require('./fullPrint.js')

//example 
//follows principals of functional programming, i.e. not mutating the deck.
let deck=generateDeck(); 
let shuffledDeck=shuffle(deck);
// let hand= drawHand(7,shuffledDeck);

let hand=[
    { suit: 'D', number: 9 },
    { suit: 'C', number: 9 },
    { suit: 'H', number: 11 },
    { suit: 'S', number: 11 },
    { suit: 'D', number: 3 },
    { suit: 'H', number: 11 },
    { suit: 'D', number: 8 }
]

let allPossibleHands=k_combinations(hand,5)
console.log("Number of all possible hands= "+ allPossibleHands.length)
let formattedHands= formatAllHands(allPossibleHands);


mapBestPokerHand(formattedHands);


formattedHands.forEach(hand => {
    if(hand.pattern=="FullHouse"){
        console.log(hand);
    }
    
});




