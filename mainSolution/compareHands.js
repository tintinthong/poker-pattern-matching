
//COMPARE HANDS BASED ON THE PATTERN
//- the only complexity is reached during a tie in pattern
//- the hands have to be formatted

const patternTable= require('./patternTable').patternTable


const { generateDeck, shuffle, drawHand } = require('./generate.js');
const {sort} = require('./sort.js')
const {k_combinations}=require('./findAllHands.js')
const {formatHand,formatAllHands}=require('./formatHand.js')
const {mapBestPokerHand}=require('./mapBestPokerHand.js')


function compareHands(formattedHand1,formattedHand2){

    //case: pattern is the same
    if(formattedHand1.pattern== formattedHand2.pattern){
        console.log("pattern of both hands match");

        //case: high card 
        if(formattedHand1.pattern=="High"){

            if(Math.max(...formattedHand1.numbers)>Math.max(...formattedHand2.numbers)){
                console.log("former hand has won")
            }else{
                console.log("latter hand has won ")
            }

        }

        //case: full house or two pair 
        if(formattedHand1.pattern=="FullHouse"||formattedHand1.pattern=="TwoPair"){


        }

        //case: any other pattern 
        
            
        
        

            
     

      
    //pattern is not the same 
    }else{

        if(patternTable[formattedHand1.pattern]> patternTable[formattedHand2.pattern]){
            console.log("former hand has won")
            return formattedHand1
        }else{
            console.log("latter hand has won")
            return formattedHand2
        }
        
    }
    
    
    // if same 
    
}


let hand=[
    { suit: 'D', number: 9 },
    { suit: 'D', number: 9 },
    { suit: 'D', number: 2 },
    { suit: 'S', number: 11 },
    { suit: 'D', number: 3 },
    { suit: 'H', number: 11 },
    { suit: 'D', number: 8 }
]

let allPossibleHands=k_combinations(hand,5)
let allPossibleHandsSorted= allPossibleHands.map((hand)=>{return sort(hand)})
let formattedHands= formatAllHands(allPossibleHandsSorted)
let handScores= mapBestPokerHand(formattedHands);
// console.log(formattedHands);
console.log(formattedHands.length+ " different combinations");

let testHand1= formattedHands[0];
let testHand2= formattedHands[1];
console.log(testHand1);
console.log(testHand2);
compareHands(testHand1,testHand2);

module.exports={compareHands};


