#include "../../../utils/checkIsLayer.jsx"
#include "./moveBeforeLayer.jsx"

function sortRGBLayersInOrder(layersRGB, layersNames) {

    var counter = 0;

    for (var j = 0; j < layersNames.length; j++) {

        if (!checkIsLayer(layersRGB, layersNames[j])) {
            continue;
        }

        var RGBLayer = layersRGB.getByName(layersNames[j]);
        moveBeforeLayer(RGBLayer, layersRGB[counter]);
        counter += 1;
    }
}
