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

    return diffrentLayersInFolder;
}
