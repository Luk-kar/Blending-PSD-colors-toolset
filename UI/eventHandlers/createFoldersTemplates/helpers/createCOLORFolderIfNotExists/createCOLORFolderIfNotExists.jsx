#include "../../../utils/checkIfHasItBlendingColorFolder.jsx"
#include "./createFolderIn.jsx"
#include "./createRGBLayerIn.jsx"

function createCOLORFolderIfNotExists() {
    var doc = app.activeDocument;

    var hasItBlendingColorsFolder = checkIfHasItBlendingColorFolder();
    if (hasItBlendingColorsFolder) {
        alert('There is already "COLORS" folder in top hierarchy');

    } else {
        var COLORSFolder = doc.layerSets.add();
        COLORSFolder.name = "COLORS";

        var folders = createFolderIn(COLORSFolder, folders);

        create_RGB_layer_in(folders);
    }
}