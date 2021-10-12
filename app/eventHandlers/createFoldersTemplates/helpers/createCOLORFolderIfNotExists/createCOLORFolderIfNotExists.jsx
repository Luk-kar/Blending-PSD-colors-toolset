#include "../../../utils/checkIfHasItBlendingColorFolder.jsx"
#include "./createFolderIn.jsx"
#include "./createRGBLayersIn.jsx"
#include "../../../../config/read/readColorFolderName.jsx"

function createCOLORFolderIfNotExists() {
    var doc = app.activeDocument;

    var hasItBlendingColorsFolder = checkIfHasItBlendingColorFolder();
    if (hasItBlendingColorsFolder) {
        alert('There is already "' + readColorFolderName() + '" folder in top hierarchy');

    } else {
        var COLORSFolder = doc.layerSets.add();
        COLORSFolder.name = readColorFolderName();

        var folders = createFolderIn(COLORSFolder);

        createRGBLayersIn(folders);
    }
}
