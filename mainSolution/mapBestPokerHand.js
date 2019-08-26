
//FIND BEST POKER HAND FROM 5 CARDS

//- applies find BestPokerHand()
//- stores largest card
//- formattedHands is output of formatAllHands()
//- get an array of objects and return an array of objects

const {findPattern}= require('./findPattern.js')
const {getArrayByIndex, findIndexOfDuplicates}= require('./utils.js')
const {compareHands}=require('./compareHands.js')

function mapBestPokerHand(formattedHands){
  
  //gives pattern of each
  formattedHands.map((formattedHand)=> {
    
    //adding pattern
    formattedHand.pattern= findPattern(formattedHand.numbers, formattedHand.suitsReady)
    
    //add position for each duplicate 
    //only to be used for full house and double pair
    formattedHand.posList= findIndexOfDuplicates(formattedHand.numbers);
    
    
    //making position
    formattedHand.pos=[]
    let arrays= Object.values(formattedHand.posList)
    for(const index in arrays){
      formattedHand.pos=formattedHand.pos.concat(arrays[index])
    }
    
    //making array from positionss
    formattedHand.array=getArrayByIndex(formattedHand.numbers,formattedHand.pos)
    
    //making refined array from positions 
    //to be used for full house and double pair 
    formattedHand.arrayRefine={};
    for(const key of Object.keys(formattedHand.posList) ){
      formattedHand.arrayRefine[key]=getArrayByIndex(formattedHand.numbers,formattedHand.posList[key]);
    }
    
    formattedHand.max={}
    formattedHand.max['inArray']=Math.max(...formattedHand.array.inArray)
    formattedHand.max['outArray']=Math.max(...formattedHand.array.outArray)
    
    
    //if full house
    if(formattedHand.pattern=="FullHouse"){
      for(const key of Object.keys(formattedHand.arrayRefine)){
        if(formattedHand.arrayRefine[key].inArray.length==3){
          formattedHand.threeHigh=formattedHand.arrayRefine[key].inArray[0]
        }else{
          formattedHand.twoHigh=formattedHand.arrayRefine[key].inArray[0]
        }
      }
    }

  
    
  })
  //--- outside of map

  // using compareHand
  let bestHand= formattedHands[0]

  for(let i=1;i<formattedHands.length;i++){

    bestHand= compareHands(bestHand,formattedHands[i])
  }
  console.log("Applied algorithm to all poker hands")
  console.log("the best hand is", bestHand)
  return bestHand


}


module.exports={mapBestPokerHand}


