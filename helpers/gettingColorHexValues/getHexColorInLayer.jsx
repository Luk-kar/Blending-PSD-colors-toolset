#include "../checking/isLayerEmptyCheck.jsx";
#include "./getLayerLeftUpperCornerColorHex.jsx";
#include "../CSV/writeInCSVFile.jsx"

function getHexColorInLayer(RBGLayers) {

    for (var j = 0; j < RBGLayers.length; j++) {

        var layer = RBGLayers[j];

        if (isLayerEmptyCheck(layer)) {
            writeInCSVFile("null ,");
            continue;
        }

        writeInCSVFile(getLayerLeftUpperCornerColorHex(layer) + " ,");
        layer.visible = false;
    }

    writeInCSVFile("\n");
}
