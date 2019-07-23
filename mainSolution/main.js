//MAIN FILE (PATTERN MATCHES)

//this require format is called destructuring in node js

const { generateDeck, shuffle, drawHand } = require('./generate.js');
const {sort} = require('./sort.js')
const {k_combinations}=require('./findAllHands.js')


//example 
//follows principals of functional programming, i.e. not mutating the deck.
let deck=generateDeck(); 
let shuffledDeck=shuffle(deck);
let hand= drawHand(7,shuffledDeck);
let allPossibleHands=k_combinations(hand,5)
let allPossibleHandsSorted= allPossibleHands.map((hand)=>{return sort(hand)})
console.log(allPossibleHandsSorted)







