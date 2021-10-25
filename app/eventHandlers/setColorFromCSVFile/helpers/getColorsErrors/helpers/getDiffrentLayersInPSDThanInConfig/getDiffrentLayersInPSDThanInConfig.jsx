#include "../../../../../../config/read/utils/getConfigPath.jsx"
#include "../../../utils/getFullActivePSDPath.jsx"
#include "./helpers/alertWrongColorNameInPSD.jsx"

function getDiffrentLayersInPSDThanInConfig(foldersInColorFolder, colorLayersNames) {  //todo

    var diffrentLayersInPSD = "";
    var diffrentLayersInTitle = "\n\ndiffrent layers in PSD compare to config file\n" +
        "PSD," + getFullActivePSDPath() + "\n" +
        "config CSV," + getConfigPath() + "\n";
    var diffrentLayersInColumns = "folder, layers\n";

    for (var i = 0; i < foldersInColorFolder.length; i++) {

        var colorFolder = foldersInColorFolder[i];
        var colorLayers = colorFolder.artLayers;

        var diffrentLayersInFolder = "";

        diffrentLayersInFolder += getDiffrentPSDLayersNames(colorLayers, colorLayersNames, colorFolder)

        diffrentLayersInFolder += getDiffrentConfigLayersNames(colorLayersNames, colorLayers, colorFolder)

        if (diffrentLayersInFolder) {
            diffrentLayersInPSD += colorFolder.name + "," + diffrentLayersInFolder + "\n";
        }

    }

    if (diffrentLayersInPSD) {
        return diffrentLayersInTitle + diffrentLayersInColumns + diffrentLayersInPSD;
    }

    return "";
}

function getDiffrentPSDLayersNames(colorLayers, colorLayersNames, colorFolder) {

    var diffrentLayersInFolder = "";

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

    return diffrentLayersInFolder
}

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

    return diffrentLayersInFolder
}