#include "../../../config/read/readRGBLayersNames.jsx"

function getPSDFoldersInCOLORS() {

    var doc = app.activeDocument;
    var COLORSFolder = doc.layerSets.getByName(readColorFolderName());
    return COLORSFolder.layerSets;
}
