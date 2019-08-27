//MAIN FILE (PATTERN MATCHES)

//this require format is called destructuring in node js
const { generateDeck, shuffle, drawHand } = require('./generate.js');
const {k_combinations}=require('./findAllHands.js')
const {formatAllHands}=require('./formatHand.js')
const {mapBestPokerHand}=require('./mapBestPokerHand.js')

//example 
let deck=generateDeck(); 
let shuffledDeck=shuffle(deck);
let hand= drawHand(7,shuffledDeck);

let allPossibleHands=k_combinations(hand,5)
console.log("Number of all possible hands= "+ allPossibleHands.length)
let formattedHands= formatAllHands(allPossibleHands);
mapBestPokerHand(formattedHands);






