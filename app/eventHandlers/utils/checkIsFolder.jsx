function checkIsFolder(layerSets, folderName) {

    for (var j = 0; j < layerSets.length; j++) {
        if (layerSets[j].name === folderName) {
            return true;
        }
    }

    return false;
}
