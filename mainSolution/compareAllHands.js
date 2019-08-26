// COMPARE ALL HANDS (DONE)

const compareHands = require('./compareHands.js');

exports.compareAllHands = function (arrayOfFormattedHands) {
    //assume first is the largest 
    let maxFormattedHand = arrayOfFormattedHands[0]
    for (var i = 1; i < arrayOfFormattedHands.length; i++) {
        if (compareHands(maxFormattedHand, arrayOfFormattedHands[i]) == "tie") {
            maxFormattedHand = compareHands(maxFormattedHand, arrayOfFormattedHands[i])
        }
    }
    return maxFormattedHand
}





