#include "./doInvisible.jsx"

function doInvisibleFolders() {
    var doc = app.activeDocument;
    var folders = doc.layerSets;

    doInvisible(folders);
}
