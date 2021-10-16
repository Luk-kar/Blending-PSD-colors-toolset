#include "./setOptionsToSelectionFillToWork.jsx"
#include "./getRGBColorsAndFolderNames.jsx"
#include "./setColorsInLayers.jsx"

function setColorsToLayers(CSV) {

    // Color will be changed during usage
    var startingFGColor = app.foregroundColor;
    var startingBGColor = app.backgroundColor;

    setOptionsToSelectionFillToWork();

    var COLORSFolders = getRGBColorsAndFolderNames(CSV);

    for (var i = 1; i < COLORSFolders.length; i++) {

        var COLORFolder = COLORSFolders[i];

        setColorsInLayers(COLORFolder);
    }

    // Setting colors to starting values
    app.foregroundColor = startingFGColor;
    app.backgroundColor = startingBGColor;
}
