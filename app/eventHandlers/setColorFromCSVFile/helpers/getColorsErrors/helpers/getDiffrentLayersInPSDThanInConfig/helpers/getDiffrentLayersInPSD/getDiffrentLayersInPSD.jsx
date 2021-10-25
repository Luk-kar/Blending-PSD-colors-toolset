#include "./helpers/getDiffrentLayersNames/getDiffrentLayersNames.jsx"

function getDiffrentLayersInPSD(foldersInColorFolder, colorLayersNames, diffrentLayersInPSD) {

    var diffrentLayersInPSD = "";

    for (var i = 0; i < foldersInColorFolder.length; i++) {

        var colorFolder = foldersInColorFolder[i];
        var colorLayers = colorFolder.artLayers;

        var diffrentLayersInFolder = "";

        diffrentLayersInFolder = getDiffrentLayersNames(colorLayers, colorLayersNames, colorFolder);

        if (diffrentLayersInFolder) {
            diffrentLayersInPSD += colorFolder.name + "," + diffrentLayersInFolder + "\n";
        }

    }

    return diffrentLayersInPSD;
}
