
//COMPARE HANDS BASED ON THE PATTERN
//- the only complexity is reached during a tie in pattern
//- the hands have to be formatted
//-must account for low ace?

const patternTable= require('./patternTable').patternTable
const {k_combinations}=require('./findAllHands.js')
const {formatAllHands}=require('./formatHand.js')
const {mapBestPokerHand}=require('./mapBestPokerHand.js')


function compareHands(formattedHand1,formattedHand2){

    //case: pattern is the same
    if(formattedHand1.pattern== formattedHand2.pattern){
        console.log("pattern of both hands match");

        //case: high card 
        if(formattedHand1.pattern=="High"){
            if(Math.max(...formattedHand1.numbers)==Math.max(...formattedHand2.numbers)){
                console.log("tie");
            }else if(Math.max(...formattedHand1.numbers)>Math.max(...formattedHand2.numbers)){
                console.log("former hand has won")
                return formattedHand1
            }else{
                console.log("latter hand has won ")
                return formattedHand2
            }

        }

        //case: full house
        if(formattedHand1.pattern=="FullHouse"){
            if(formattedHand1.threeHigh==formattedHand2.threeHigh ){
                if(formattedHand1.twoHigh==formattedHand2.twoHigh){
                    console.log("It's a tie")
                    return "tie"
                }else if(formattedHand1.twoHigh>formattedHand2.twoHigh){
                    console.log("former hand has won")
                    return formattedHand1
                }else{
                    console.log("latter hand has won ")
                    return formattedHand2
                }
                
            }else{

                if(formattedHand1.threeHigh==formattedHand2.threeHigh){
                    console.log("it is a tie")
                    return "tie"
                }else if(formattedHand1.threeHigh>formattedHand2.threeHigh){
                    console.log("former hand has won")
                    return formattedHand1
                }
                else{
                    console.log("latter hand has won")
                    return formattedHand2
                }
            }

        }else{
            // if everything else othher than a full house
                if(Math.max(...formattedHand1.array.inArray)==Math.max(...formattedHand2.array.inArray) ){
                    console.log("it is a tie")
                    return "tie"
                }else if(Math.max(...formattedHand1.array.inArray)>Math.max(...formattedHand2.array.inArray)){
                    console.log("former hand has won")
                    return formattedHand1
                }
                else{
                    console.log("latter hand has won")
                    return formattedHand2 
                }
        }
      
    //pattern is not the same 
    }else{

        //finding which pattern is better
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
let formattedHands= formatAllHands(allPossibleHands)
mapBestPokerHand(formattedHands);

let testHand1= formattedHands[10];
let testHand2= formattedHands[2];
console.log(testHand1);
console.log(testHand2);
compareHands(testHand1,testHand2);

module.exports={compareHands};


