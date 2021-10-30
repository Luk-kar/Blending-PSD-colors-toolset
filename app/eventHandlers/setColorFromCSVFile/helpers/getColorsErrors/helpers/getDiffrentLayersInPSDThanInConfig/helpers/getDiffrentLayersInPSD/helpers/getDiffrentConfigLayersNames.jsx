#include "./alertWrongColorNameInPSD.jsx"

function getDiffrentConfigLayersNames(colorLayersNames, colorLayers, colorFolder) {

    var diffrentLayersInFolder = "";

    for (var l = 0; l < colorLayersNames.length; l++) {

        var thereIs = false;
        for (var j = 0; j < colorLayers.length; j++) {
            if (colorLayersNames[l] === colorLayers[j].name) {
                thereIs = true;
                break;
            }
        }

        if (!thereIs) {
            diffrentLayersInFolder += colorLayersNames[l] + " ";
            alertWrongColorNameInPSD(colorFolder.name, colorLayersNames[l]);
        }
    }

    return diffrentLayersInFolder;
}
