
## LINK
https://rosettacode.org/wiki/Poker_hand_analyser#JavaScript

## TASK
Create a program to parse a single five card poker hand and rank it according to this list of poker hands.

A poker hand is specified as a space separated list of five playing cards. Each input card has two characters indicating face and suit. For example:2d (two of diamonds).

Faces are: a, 2, 3, 4, 5, 6, 7, 8, 9, 10, j, q, k

Suits are: h (hearts), d (diamonds), c (clubs), and s (spades), or alternatively the unicode card-suit characters: ♥ ♦ ♣ ♠

Duplicate cards are illegal.

The program should analyze a single hand and produce one of the following outputs:

```
 straight-flush
 four-of-a-kind
 full-house
 flush
 straight
 three-of-a-kind
 two-pair
 one-pair
 high-card
 invalid
 ```

```
  2♥ 2♦ 2♣ k♣ q♦: three-of-a-kind
   2♥ 5♥ 7♦ 8♣ 9♠: high-card
   a♥ 2♦ 3♣ 4♣ 5♦: straight
   2♥ 3♥ 2♦ 3♣ 3♦: full-house
   2♥ 7♥ 2♦ 3♣ 3♦: two-pair
   2♥ 7♥ 7♦ 7♣ 7♠: four-of-a-kind 
   10♥ j♥ q♥ k♥ a♥: straight-flush
   4♥ 4♠ k♠ 5♦ 10♠: one-pair
   q♣ 10♣ 7♣ 6♣ 4♣: flush
```


## EXPLANATION 


