#include "./helpers/setOptionsToSelectionFillToWork.jsx"
#include "../getCSVColorsAndFoldersNames.jsx"
#include "./helpers/setColorsInLayers/setColorsInLayers.jsx"

function setColorsToLayers(CSV) {

    // Color will be changed during usage
    var startingFGColor = app.foregroundColor;
    var startingBGColor = app.backgroundColor;

    setOptionsToSelectionFillToWork();

    var COLORSFolders = getCSVColorsAndFoldersNames(CSV);

    for (var i = 1; i < COLORSFolders.length; i++) {

        var COLORFolder = COLORSFolders[i];

        setColorsInLayers(COLORFolder);
    }

    // Setting colors to starting values
    app.foregroundColor = startingFGColor;
    app.backgroundColor = startingBGColor;
}
