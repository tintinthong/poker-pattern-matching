## Poker Matching Algoritm

### Description
The most difficult part of making a poker game is the pattern-matching algorithm. 
Out of the combination of the total 7 cards (5 from flop, 2 from hand), how do you extract the highest scoring pattern? 

This repository does two things:
1. Finds the highest scoring pattern obtained from 7 cards.
2. Compares two hands to account for same pattern and ties.

#### Poker Hands 

These are the patterns accounted for:

1. Royal Flush
2. Straight Flush 
3. Straight Flush (Low Ace)
4. Four of a Kind
5. Full House
6. Flush
7. Straight
8. Straight (Low Ace)
9. Three of A Kind
10. Two Pair
11. One Pair
12. High Card 

#### mapBestPokerHand.js

Map best poker hand is the main function that is used to get the best 5 hand from the 7 hand. I explain the logic as below (it is sligtly convulated):

If you have competing pairs, straight, three, four-of-a-kind, fullhouse: 
1. Find the highest number in the pair. 
2. If the highest number in the pair is the same, find the highest number outside of the pattern.

If you have competing full houses:
1. Find the highest three (threeHigh)
2. If the highest three is the same, find the highest pair (twoHigh). 

If you have competing two pairs (NOT DONE YET):
1. Find the highest number in the pattern. It does not matter which pair you are looking at (max.inArray).
2. If the highest number is the same, look at the lowest pair and find the highest number in the lowest pair.

If you have no pattern: 
1. Find the highest number in the pattern.
2. If the highest number is the same, then "tie" 


Below is the format output of the best poker hand:

```
{
  hand: [
    { suit: 'D', number: 9 },
    { suit: 'C', number: 9 },
    { suit: 'H', number: 11 },
    { suit: 'S', number: 11 },
    { suit: 'H', number: 11 }
  ],
  suits: [ 'D', 'C', 'H', 'S', 'H' ],
  numbers: [ 9, 9, 11, 11, 11 ],
  suitsReady: [ 8, 2, 4, 1, 4 ],
  pattern: 'FullHouse',
  posList: { '9': [ 0, 1 ], '11': [ 2, 3, 4 ] },
  pos: [ 0, 1, 2, 3, 4 ],
  array: { inArray: [ 9, 9, 11, 11, 11 ], outArray: [] },
  arrayRefine: {
    '9': { inArray: [Array], outArray: [Array] },
    '11': { inArray: [Array], outArray: [Array] }
  },
  max: { inArray: 11, outArray: -Infinity },
  twoHigh: 9,
  threeHigh: 11
}
```

### Installation

Will be made into npm repository soon.

### References

[Senzee Poker Algorithm](http://senzee.blogspot.com/2007/01/7.html)

[Cactus Kev 7-hand Algo](http://suffe.cool/poker/evaluator.html)

[Bit Manipulation Algorithm](https://www.codeproject.com/Articles/569271/A-Poker-hand-analyzer-in-JavaScript-using-bit-math)

[Js Fiddle for Bit Manipulation Algorithm](http://jsfiddle.net/subskybox/r4mSF/)

[Forum](http://archives1.twoplustwo.com/showflat.php?Cat=0&Number=8513906&amp;amp;amp;page=2&fpart=1&vc=1)

[Stack Exchange Question](https://stackoverflow.com/questions/42379988/how-do-i-evaluate-texas-hold-em-hands-with-javascript)

[Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

[Find all k-combinations](https://gist.github.com/axelpale/3118596)
