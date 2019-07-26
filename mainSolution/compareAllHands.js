// COMPARE ALL HANDS

const compareHands= require('./compareHands.js');
const patternTable= require('./patternTable').patternTable
const {k_combinations}=require('./findAllHands.js')
const {formatAllHands}=require('./formatHand.js')
const {mapBestPokerHand}=require('./mapBestPokerHand.js')

function compareAllHands(arrayOfFormattedHands){
    //assume first is the largest 
    let maxFormattedHand= arrayOfFormattedHands[0]
    for (var i=1; i<arrayOfFormattedHands.length; i++) {
        if(compareHands(maxFormattedHand,arrayOfFormattedHands[i])=="tie"){
            maxFormattedHand=compareHands(maxFormattedHand,arrayOfFormattedHands[i])
        }


    }
    return maxFormattedHand
}



    

