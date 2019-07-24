
//FIND BEST POKER HAND FROM 5 CARDS
//- applies find BestPokerHand()
//- stores largest card
//- formattedHands is output of formatAllHands()
//- get an array of objects and return an array of objects

const {findBestPokerHand}= require('./findBestPokerHand.js')

function mapBestPokerHand(formattedHands){

    //gives pattern of each
    let out= formattedHands.map((formattedHand)=> findBestPokerHand(formattedHand.numbers, formattedHand.suitsReady) )
    return out 

}

module.exports={mapBestPokerHand}


//examples 
let formattedHands=[
    {
        suits: [ 'S', 'H', 'D', 'D', 'S' ],
        numbers: [ 1, 5, 6, 7, 9 ],
        suitsReady: [ 1, 4, 8, 8, 1 ]
      },
      {
        suits: [ 'H', 'D', 'D', 'S', 'H' ],
        numbers: [ 5, 6, 7, 9, 10 ],
        suitsReady: [ 4, 8, 8, 1, 4 ]
      },
      {
        suits: [ 'S', 'D', 'D', 'S', 'H' ],
        numbers: [ 1, 6, 7, 9, 10 ],
        suitsReady: [ 1, 8, 8, 1, 4 ]
      },
      {
        suits: [ 'S', 'H', 'D', 'S', 'H' ],
        numbers: [ 1, 5, 7, 9, 10 ],
        suitsReady: [ 1, 4, 8, 1, 4 ]
      },
      {
        suits: [ 'S', 'H', 'D', 'S', 'H' ],
        numbers: [ 1, 5, 6, 9, 10 ],
        suitsReady: [ 1, 4, 8, 1, 4 ]
      }
    ]


console.log(mapBestPokerHand(formattedHands))

