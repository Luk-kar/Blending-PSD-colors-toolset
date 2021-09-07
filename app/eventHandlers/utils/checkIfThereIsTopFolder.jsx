function checkIfThereIsTopFolder(folderName) {
    var doc = app.activeDocument;

    var topFoldersInPSD = doc.layerSets;
    var itHasFolder = false;

    for (var i = 0; i < topFoldersInPSD.length; i++) {
        if (topFoldersInPSD[i].name === folderName) {
            itHasFolder = true;
        }
    }
    return itHasFolder;
}
