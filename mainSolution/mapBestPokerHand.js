
//FIND BEST POKER HAND FROM 5 CARDS

//this is a mutable library

//- applies find BestPokerHand()
//- stores largest card
//- formattedHands is output of formatAllHands()
//- get an array of objects and return an array of objects

const {findBestPokerHand}= require('./findBestPokerHand.js')
const {getArrayByIndex, findIndexOfDuplicates}= require('./utils.js')

function mapBestPokerHand(formattedHands){

    //gives pattern of each
    formattedHands.map((formattedHand)=> {

        //adding pattern
        formattedHand.pattern= findBestPokerHand(formattedHand.numbers, formattedHand.suitsReady)
  
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
        // formattedHand.arrayRefine=
        formattedHand.arrayRefine={};
        for(const key of Object.keys(formattedHand.posList) ){
          formattedHand.arrayRefine[key]=getArrayByIndex(formattedHand.numbers,formattedHand.posList[key]);
        }

        formattedHand.max={}
        formattedHand.max['inArray']=Math.max(...formattedHand.array.inArray)
        formattedHand.max['outArray']=Math.max(...formattedHand.array.outArray)


    })
    return "Applied algorithm to all poker hands"
}






module.exports={mapBestPokerHand}


