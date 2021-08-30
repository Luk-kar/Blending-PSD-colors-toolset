#include "../checking/isLayerEmptyCheck.jsx"
#include "./getLayerLeftUpperCornerColorHex.jsx"

function getHexColorInLayer(layers) {
    var RGBHexes = [];

    for (var j = 0; j < layers.length; j++) {

        if (isLayerEmptyCheck(layers[j])) {
            RGBHexes.push("null");
            continue;
        }

        RGBHexes.push(getLayerLeftUpperCornerColorHex(layers[j]));
        layers[j].visible = false;
    }

    return RGBHexes;
}
