#include "./doInvisible.jsx"

function doInvisibleAllTopLayers() {
    var doc = app.activeDocument;
    var topLayers = doc.artLayers;

    doInvisible(topLayers);
}
