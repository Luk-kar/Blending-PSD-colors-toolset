#include "./helpers/parseColumnLine.jsx"

function getChosenCSVColors(CSV) {
    CSV.open("r");
    var columnLine = CSV.readln();
    var chosenCSVColors = parseColumnLine(columnLine);
    CSV.close();
    return chosenCSVColors;
}