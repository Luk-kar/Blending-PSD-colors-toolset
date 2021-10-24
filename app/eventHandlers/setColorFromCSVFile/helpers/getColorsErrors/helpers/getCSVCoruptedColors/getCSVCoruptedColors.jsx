#include "./helpers/getCorruptedColorsInFolders.jsx"
#include "./helpers/alertUserAboutCoruptedColors.jsx"

function getCSVCoruptedColors(rows, configColorsTypes) {

    var corruptedColors = "";
    var corruptedColorsCounter = 0;

    var corruptedColorsInFolders = getCorruptedColorsInFolders(rows, configColorsTypes, corruptedColorsCounter);
    corruptedColors += corruptedColorsInFolders.corruptedColors
    corruptedColorsCounter += corruptedColorsInFolders.corruptedColorsCounter

    if (corruptedColors.length) {

        alertUserAboutCoruptedColors(corruptedColorsCounter);

        corruptedColors = "corrupted colors\n" + "folder,layers\n" + corruptedColors;

    }

    return corruptedColors;
}

