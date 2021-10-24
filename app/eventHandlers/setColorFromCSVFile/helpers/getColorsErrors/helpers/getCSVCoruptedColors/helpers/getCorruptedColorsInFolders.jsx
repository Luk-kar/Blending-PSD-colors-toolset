#include "../../../../utils/isHexColor.jsx"

function getCorruptedColorsInFolders(rows, configColorsTypes, corruptedColorsCounter) {

    var corruptedColors = "";

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

    return {
        corruptedColorsCounter: corruptedColorsCounter,
        corruptedColors: corruptedColors
    };
}
