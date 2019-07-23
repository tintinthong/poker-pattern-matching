


// D, C, S, H

const deck = [{number: 1, pattern: "D"}, {number: 1, pattern: "H"}, {number: 2, pattern: "A"}, 
              {number: 1, pattern: "C"}, {number: 4, pattern: "C"}, {number: 4, pattern: "S"}]

const results = deck.reduce((acc, item) => {
  if (!acc[item.number]) {
    acc[item.number] = [];
  }

  acc[item.number].push(item);
  return acc;
}, {})




console.log(results)
console.log(Object.keys(results).length)

for (let [card, pattern] of Object.entries(results)) {
  console.log(`Card is ${card}`, pattern)
  // DO STUFF HERE
}