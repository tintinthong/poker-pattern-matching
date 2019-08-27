//FUNCTION TO GENERATE HAND/ DECK

//import card types
const {suits, numbers}=require('./cardTypes.js')

//generate 52 cards
exports.generateDeck = function(){

    let deck=[];
    for (let i=0; i<suits.length;i++) {
        for (var j=0; j<numbers.length; j++) {
            deck.push({
                suit:suits[i],
                number:numbers[j]})
        }
    }
    return deck
}

//shuffle deck
exports.shuffle=function(deck) {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    return deck;
}

//draw n number of cards
exports.drawHand=function(n,deck){

    return deck.slice(deck.length-n,deck.length)
}










