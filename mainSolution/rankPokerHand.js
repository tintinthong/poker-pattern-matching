

//Configure Variables
let hands=["4 of a Kind", "Straight Flush", "Straight", "Flush", "High Card",
       "1 Pair", "2 Pair", "Royal Flush", "3 of a Kind", "Full House" ];
let A=14, K=13, Q=12, J=11
let _ = { "S":1, "C":2, "H":4, "D":8 };

//Calculates the Rank of a 5 card Poker hand using bit manipulations.
function rankPokerHand(cs,ss) {
  var v, i, o, s = 1<<cs[0]|1<<cs[1]|1<<cs[2]|1<<cs[3]|1<<cs[4];
  for (i=-1, v=o=0; i<5; i++, o=Math.pow(2,cs[i]*4)) {v += o*((v/o&15)+1);}
  v = v % 15 - ((s/(s&-s) == 31) || (s == 0x403c) ? 3 : 1);
  v -= (ss[0] == (ss[1]|ss[2]|ss[3]|ss[4])) * ((s == 0x7c00) ? -5 : 1);

  console.log("Hand: "+hands[v]+((s == 0x403c)?" (Ace low)":""));
}

//Examples
rankPokerHand( [ 10, J, Q, K, A],  [ _["S"], _["S"], _["S"], _["S"], _["S"] ] );
rankPokerHand( [ A, 2, 3, 4, 5],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] );
rankPokerHand( [ 2, A, 3, 4, 5],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] );
rankPokerHand( [ 3, 5, K, 3, 3 ],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] );

// Reference
//https://stackoverflow.com/questions/2829883/7-card-poker-hand-evaluator
//http://jsfiddle.net/subskybox/r4mSF/

// Bitwise Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
