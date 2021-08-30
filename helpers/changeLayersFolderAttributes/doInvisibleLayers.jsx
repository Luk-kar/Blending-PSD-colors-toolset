#include "./doInvisible.jsx"

function doInvisibleLayers() {
    var doc = app.activeDocument;
    var notFolderLayers = doc.artLayers;

    doInvisible(notFolderLayers);
}
