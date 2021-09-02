#include "../checking/isLayerEmptyCheck.jsx"
#include "./getLayerLeftUpperCornerColorHex.jsx"

function getHexColorInLayer(layers, layersNames) {
    var RGBHexes = [];

    for (var j = 0; j < layersNames.length; j++) {

        try {
            var validLayer = layers.getByName(layersNames[j]);
        }
        catch(e){
            continue;
        } 
        

        if (isLayerEmptyCheck(validLayer)) {
            RGBHexes.push("null");
            continue;
        }

        RGBHexes.push(getLayerLeftUpperCornerColorHex(validLayer));
        validLayer.visible = false;
    }

    return RGBHexes;
}
