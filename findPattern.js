//FINDING BEST POKER HAND (DONE)
//- finding the best pattern from 5 cards (doesn't work with 7 cards)
//- This only works for one deck. It does not account for more than one deck. 

// Configured Variables 
let hands = [
  "Four", "StraightFlush", "Straight", "Flush", "High", "Pair", "TwoPair", "RoyalFlush", "Three", "FullHouse"
]
let A = 14, K = 13, Q = 12, J = 11
let _ = { "S": 1, "C": 2, "H": 4, "D": 8 };

//Calculates the Rank of a 5 card Poker hand using bit manipulations.
function findPattern(cs, ss) {
  var v, i, o, s = 1 << cs[0] | 1 << cs[1] | 1 << cs[2] | 1 << cs[3] | 1 << cs[4];
  for (i = -1, v = o = 0; i < 5; i++ , o = Math.pow(2, cs[i] * 4)) { v += o * ((v / o & 15) + 1); }
  v = v % 15 - ((s / (s & -s) == 31) || (s == 0x403c) ? 3 : 1);
  v -= (ss[0] == (ss[1] | ss[2] | ss[3] | ss[4])) * ((s == 0x7c00) ? -5 : 1);

  return hands[v] + ((s == 0x403c) ? "AceLow" : "")
  // console.log("Hand: "+hands[v]+((s == 0x403c)?" (Ace low)":""));
}

//Examples
// console.log(findPattern( [ 10, J, Q, K, A],  [ _["S"], _["S"], _["S"], _["S"], _["S"] ] ));
// console.log(findPattern( [ A, 2, 3, 4, 5],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] ));
// console.log(findPattern( [ 2, A, 3, 4, 5],  [ _["H"], _["H"], _["H"], _["H"], _["H"] ] ));
// console.log(findPattern( [ 3, 4, 4, 2, 2 ],  [ _["H"], _["S"], _["H"], _["H"], _["D"] ] ));

// console.log(findPattern( [ 8,9,10, J, Q, K, A],  [_["S"],_["S"], _["S"], _["S"], _["S"], _["S"], _["S"] ] ));
//does not work for 7 cards
//this gives a straightflush

module.exports = { findPattern };


