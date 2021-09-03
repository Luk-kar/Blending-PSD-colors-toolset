#include "../checking/isLayerEmptyCheck.jsx"
#include "./getLayerLeftUpperCornerColorHex.jsx"

function getHexColorInLayer(layers, layersNames) {
    var RGBHexes = [];

    var RBGLayers = [];
    for (var i = 0; i < layersNames.length; i++) {

        try {
            RBGLayers.push(layers.getByName(layersNames[i]));
        }
        catch(e){
            continue;
        }

    }

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
