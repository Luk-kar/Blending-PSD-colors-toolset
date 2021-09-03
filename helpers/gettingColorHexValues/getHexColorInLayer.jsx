#include "../checking/isLayerEmptyCheck.jsx";
#include "./getLayerLeftUpperCornerColorHex.jsx";
#include "./getRGBLayers.jsx";

function getHexColorInLayer(layers, layersNames) {

    var RGBHexes = [];
    var RBGLayers = getRGBLayers(layers, layersNames);

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
