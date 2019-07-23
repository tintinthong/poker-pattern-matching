//SORTING CARDS 

//-- need to add functionality of knowing whether pattern or not

//sort cards based on number value
exports.sort= function(cards){
    return cards.sort(
        function (a, b) {
        return a.number- b.number //downside is that number is particular property name
    });
}






