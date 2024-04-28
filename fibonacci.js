var baseFirst = 0;
var baseSecond = 1;
var nextNumber = baseSecond;

document.write("(", baseFirst, ")[", baseFirst.toString().length, "], ");
document.write("(", baseSecond, ")[", baseSecond.toString().length, "], ");

var i = 0;
var limit = 1475;

while (i < limit){
    document.write("(", nextNumber, ")[", nextNumber.toString().length, "], ");
    baseFirst = baseSecond;
    baseSecond = nextNumber;
    nextNumber = baseFirst + baseSecond;
    i++;
}

