//FINDING BEST POKER HAND 
//- finding the best poker hand from 5 cards 
//- does not work finding the best poker hand from 7 cards (although that would be tremendously useful)

//Configure Variables
// let hands=["4 of a Kind", "Straight Flush", "Straight", "Flush", "High Card",
//        "1 Pair", "2 Pair", "Royal Flush", "3 of a Kind", "Full House" ];



let hands= [
  "Four", "StraightFlush","Straight", "Flush", "High","Pair","TwoPair","RoyalFlush","Three","FullHouse"
]
let A=14, K=13, Q=12, J=11
let _ = { "S":1, "C":2, "H":4, "D":8 };

//Calculates the Rank of a 5 card Poker hand using bit manipulations.
function findBestPokerHand(cs,ss) {
  var v, i, o, s = 1<<cs[0]|1<<cs[1]|1<<cs[2]|1<<cs[3]|1<<cs[4];
  for (i=-1, v=o=0; i<5; i++, o=Math.pow(2,cs[i]*4)) {v += o*((v/o&15)+1);}
  v = v % 15 - ((s/(s&-s) == 31) || (s == 0x403c) ? 3 : 1);
  v -= (ss[0] == (ss[1]|ss[2]|ss[3]|ss[4])) * ((s == 0x7c00) ? -5 : 1);

  return hands[v]+((s == 0x403c)?" (Ace low)":"")
  // console.log("Hand: "+hands[v]+((s == 0x403c)?" (Ace low)":""));
}

//Examples
// findBestPokerHand( [ 10, J, Q, K, A],  [ _["S"], _["S"], _["S"], _["S"], _["S"] ] );
// findBestPokerHand( [ A, 2, 3, 4, 5],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] );
// findBestPokerHand( [ 2, A, 3, 4, 5],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] );
// findBestPokerHand( [ 3, 5, K, 3, 3 ],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] );

//findBestPokerHand( [ 8,9,10, J, Q, K, A],  [_["S"],_["S"], _["S"], _["S"], _["S"], _["S"], _["S"] ] );
//does not work for 7 cards
//this gives a straightflush

module.exports={findBestPokerHand};

// Reference
//https://stackoverflow.com/questions/2829883/7-card-poker-hand-evaluator
//http://jsfiddle.net/subskybox/r4mSF/

// Bitwise Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

