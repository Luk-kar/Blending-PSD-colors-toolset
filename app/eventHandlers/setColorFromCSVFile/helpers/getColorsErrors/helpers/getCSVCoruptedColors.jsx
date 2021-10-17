#include "../../isHexColor.jsx"

function getCSVCoruptedColors(rows, configColorsTypes) {

    var corruptedColors = "";
    var corruptedColorsCounter = 0;

    for (var i = 1; i < rows.length; i++) { // first line is columns
        var folder = rows[i][0];
        var colors = rows[i].slice(1, rows[i].length);
        var corruptedColorsInFolder = [];

        for (var j = 0; j < colors.length; j++) {
            if (!isHexColor(colors[j])) {
                alert('Color: "' + configColorsTypes[j] + '" in folder: "' + folder + '" is corrupted in chosen CSV file');
                corruptedColorsInFolder.push(configColorsTypes[j]);
                corruptedColorsCounter++;
            }
        }

        if (corruptedColorsInFolder.length) {
            corruptedColors += folder + "," + corruptedColorsInFolder.join(" ") + "\n";
        }
    }

    if (corruptedColors.length) {

        var PluralOrSingular = "";
        if (corruptedColorsCounter === 1) {
            PluralOrSingular = "color is ";
        } else {
            PluralOrSingular = "colors are ";
        }

        alert(corruptedColorsCounter + " " + PluralOrSingular + "corrupted in chosen CSV file");

        corruptedColors = "corrupted colors\n" + "folder,layers\n" + corruptedColors;

    }

    return corruptedColors;
}
