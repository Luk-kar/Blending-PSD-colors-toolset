#include "../../../config/read/readRGBLayersNames.jsx"

function getFoldersInCOLORS() {

    var doc = app.activeDocument;
    var COLORSFolder = doc.layerSets.getByName(readColorFolderName());
    return COLORSFolder.layerSets;
}
