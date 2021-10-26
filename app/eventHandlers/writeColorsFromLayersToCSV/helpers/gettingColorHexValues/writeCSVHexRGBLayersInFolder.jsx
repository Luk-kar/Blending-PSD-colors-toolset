#include "../../../utils/isLayerEmptyCheck.jsx";
#include "./getLayerLeftUpperCornerColorHex.jsx";
#include "../CSV/writeInCSVFile.jsx"

function writeCSVHexRGBLayersInFolder(RBGLayers) {

    for (var i = 0; i < RBGLayers.length; i++) {

        var layer = RBGLayers[i];

        if (isLayerEmptyCheck(layer)) {
            writeInCSVFile("null,");
            continue;
        }

        var isNextColumn = "";

        if (i + 1 !== RBGLayers.length) {
            isNextColumn = ",";
        }

        writeInCSVFile(getLayerLeftUpperCornerColorHex(layer) + isNextColumn);
        layer.visible = false;
    }

    writeInCSVFile("\n");
}
