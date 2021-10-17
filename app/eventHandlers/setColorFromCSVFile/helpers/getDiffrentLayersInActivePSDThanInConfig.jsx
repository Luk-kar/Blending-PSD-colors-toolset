#include "../../../config/read/utils/getConfigPath.jsx"
#include "./getFullActivePSDPath.jsx"
#include "./alertWrongColorNameInPSD.jsx"

function getDiffrentLayersInActivePSDThanInConfig(foldersInColorFolder, colorLayersNames) {

    var diffrentLayersInPSD = "";
    var diffrentLayersInTitle = "\n\ndiffrent layers in PSD compare to config file\n" +
        "PSD," + getFullActivePSDPath() + "\n" +
        "config CSV," + getConfigPath() + "\n";
    var diffrentLayersInColumns = "folder, layers\n";

    for (var i = 0; i < foldersInColorFolder.length; i++) {

        var colorFolder = foldersInColorFolder[i];
        var colorLayers = colorFolder.artLayers;

        var diffrentLayersInFolder = "";

        // in layers
        for (var k = 0; k < colorLayers.length; k++) {

            var thereIs = false;
            for (var j = 0; j < colorLayersNames.length; j++) {
                if (colorLayers[k].name === colorLayersNames[j]) {
                    thereIs = true;
                    break;
                }
            }

            if (!thereIs) {
                diffrentLayersInFolder += colorLayers[k].name + " ";
                alertWrongColorNameInPSD(colorFolder.name, colorLayers[k].name);
            }
        }

        // in config
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

        if (diffrentLayersInFolder) {
            diffrentLayersInPSD += colorFolder.name + "," + diffrentLayersInFolder + "\n";
        }

    }

    if (diffrentLayersInPSD) {
        return diffrentLayersInTitle + diffrentLayersInColumns + diffrentLayersInPSD;
    }

    return "";
}
