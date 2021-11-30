#include "../../../utils/checkIfHasItBlendingColorFolder.jsx"
#include "./createFoldersIn.jsx"
#include "./createRGBLayersIn.jsx"
#include "../../../../config/read/readColorFolderName.jsx"

function createCOLORFolderIfNotExists() {
    var doc = app.activeDocument;

    var hasItBlendingColorsFolder = checkIfHasItBlendingColorFolder();
    if (hasItBlendingColorsFolder) {
        alert('There is already "' + readColorFolderName() + '" folder in top hierarchy');

    } else {
        var COLORSFolder = doc.layerSets.add();
        COLORSFolder.blendMode = BlendMode.OVERLAY;
        COLORSFolder.name = readColorFolderName();

        var folders = createFoldersIn(COLORSFolder);

        createRGBLayersIn(folders);
    }
}
