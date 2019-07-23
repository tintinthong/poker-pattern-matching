hands=["4 of a Kind", "Straight Flush", "Straight", "Flush", "High Card",
       "1 Pair", "2 Pair", "Royal Flush", "3 of a Kind", "Full House" ];
var A=14, K=13, Q=12, J=11, _ = { "♠":1, "♣":2, "♥":4, "♦":8 };

//Calculates the Rank of a 5 card Poker hand using bit manipulations.
function rankPokerHand(cs,ss) {
  var v, i, o, s = 1<<cs[0]|1<<cs[1]|1<<cs[2]|1<<cs[3]|1<<cs[4];
  for (i=-1, v=o=0; i<5; i++, o=Math.pow(2,cs[i]*4)) {v += o*((v/o&15)+1);}
  v = v % 15 - ((s/(s&-s) == 31) || (s == 0x403c) ? 3 : 1);
  v -= (ss[0] == (ss[1]|ss[2]|ss[3]|ss[4])) * ((s == 0x7c00) ? -5 : 1);

  console.log("Hand: "+hands[v]+((s == 0x403c)?" (Ace low)":""));
}

//Royal Flush   
rankPokerHand( [ 10, J, Q, K, A],  [ _["♠"], _["♠"], _["♠"], _["♠"], _["♠"] ] );


var A=14, K=13, Q=12, J=11
_ = { "♠":1, "♣":2, "♥":4, "♦":8 };
console.log(_)


//https://stackoverflow.com/questions/2829883/7-card-poker-hand-evaluator
//http://jsfiddle.net/subskybox/r4mSF/