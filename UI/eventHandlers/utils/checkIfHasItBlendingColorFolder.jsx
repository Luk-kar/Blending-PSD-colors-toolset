function checkIfHasItBlendingColorFolder() {
    var doc = app.activeDocument;
    var NameOffolderWithBlendingColors = "COLORS";

    var topFoldersInPSD = doc.layerSets;
    var hasItBlendingColorsFolder = false;

    for (var i = 0; i < topFoldersInPSD.length; i++) {
        if (topFoldersInPSD[i].name === NameOffolderWithBlendingColors) {
            hasItBlendingColorsFolder = true;
        }
    }
    return hasItBlendingColorsFolder;
}
