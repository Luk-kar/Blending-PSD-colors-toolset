#include "./doInvisible.jsx"

function doInvisibleAllTopFolders() {
    var doc = app.activeDocument;
    var folders = doc.layerSets;

    doInvisible(folders);
}
