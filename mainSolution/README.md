## Poker Matching Algoritm

### Description
The most difficult part of making a poker game is the pattern-matching algorithm. 
Out of the combination of the total 7 cards(5 from flop, 2 from hand), how do you extract the highest scoring pattern. 

This repo does two things: 
1) Randomise 7-hand
2) Give the higest-scoring hand.

### Logic (Technical)

The problem is if you have 7 cards and choose 5 cards from it, which is the best pattern.

There are several bodies of logic:
1) Detection Logic: handles the detection of patterns, e.g. (Ah, 2h, 3h, 4h, 5h)= Straight Flush. 
2) Scoring Logic: if two hands were compared, firstly, each hand goes detection logic and compares score via lookup table, secondly, if there is a tie in pattern then compares high card from pattern, then compares high card outside of pattern. 

When these two logics are solve, one can put it all together by finding all 7 choose 5 combinations.

#### Poker Hands 

1. Royal Flush
2. Straight Flush 
3. Four of a Kind
4. Full House
5. Flush
6. Straight
7. Three of A Kind
8. Two Pair
9. One Pair
10. High Card 

### Installation

### References

http://senzee.blogspot.com/2007/01/7.html
http://suffe.cool/poker/evaluator.html
https://www.codeproject.com/Articles/569271/A-Poker-hand-analyzer-in-JavaScript-using-bit-math
http://archives1.twoplustwo.com/showflat.php?Cat=0&Number=8513906&amp;amp;amp;page=2&fpart=1&vc=1


Follow this one
https://stackoverflow.com/questions/42379988/how-do-i-evaluate-texas-hold-em-hands-with-javascript