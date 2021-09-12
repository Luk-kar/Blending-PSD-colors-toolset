#include "./doInvisible.jsx"

function doInvisibleAllTopLayers() {
    var doc = app.activeDocument;
    var notFolderLayers = doc.artLayers;

    doInvisible(notFolderLayers);
}
