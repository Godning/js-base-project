function main(x){

    var last_part = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";

    var part = "";
    for (var i = x; i > 2; i--) {
        part += i + " bottles of beer on the wall, "+i+" bottles of beer.\n";
        part += "Take one down and pass it around, "+ (i-1) +" bottles of beer on the wall.\n";
    }
    if(x > 1){
        part += "2 bottles of beer on the wall, 2 bottles of beer.\n";
        part += "Take one down and pass it around, 1 bottle of beer on the wall.\n";
    }
    if(x > 0){
        part += "1 bottle of beer on the wall, 1 bottle of beer.\n";
        part += "Take one down and pass it around, no more bottles of beer on the wall.\n";
    }
    part += last_part;
    return part;
}

module.exports = main;
