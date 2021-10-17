#include "../../../config/read/readRGBLayersNames.jsx"

function getPSDFoldersInCOLORSFolder() {

    var doc = app.activeDocument;
    var COLORSFolder = doc.layerSets.getByName(readColorFolderName());
    return COLORSFolder.layerSets;
}
