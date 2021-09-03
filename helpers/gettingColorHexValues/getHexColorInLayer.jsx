#include "../checking/isLayerEmptyCheck.jsx";
#include "./getLayerLeftUpperCornerColorHex.jsx";

function getHexColorInLayer(RBGLayers) {

    var RGBHexes = [];

    for (var j = 0; j < RBGLayers.length; j++) {

        var layer = RBGLayers[j];

        if (isLayerEmptyCheck(layer)) {
            RGBHexes.push("null");
            continue;
        }

        RGBHexes.push(getLayerLeftUpperCornerColorHex(layer));
        layer.visible = false;
    }

    return RGBHexes;
}
