#include "./saveCSV.jsx"

function writeValuesToCSV(HexColorValues) {

    var text = "Group, R, G, B\n";

    for (var i = 0; i < HexColorValues.length; i++) {
        var flattenArray = [HexColorValues[i][0]].concat(HexColorValues[i][1]);
        for (var j = 0; j < flattenArray.length; j++) {
            text += flattenArray[j];
            if (j + 1 < flattenArray.length) {
                text += ", ";
            } else {
                text += "\n";
            }
        }
    }

    try {
        var path = saveCSV(text);
        return "You successfully saved values to " + path;

    } catch (error) {
        return error;
    }
}
