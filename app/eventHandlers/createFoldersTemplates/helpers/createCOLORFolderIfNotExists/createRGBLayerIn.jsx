#include "./createColoredPixel.jsx"
#include "../../../../config/readRGBLayersNames.jsx"
#include "../../../../config/readColorsRGB.jsx"

function createRGBLayerIn(folders) {

    var layers = readRGBLayersNames();
    var colors = readColorsRGB();

    for (var i = 0; i < folders.length; i++) {
        for (var j = 0; j < layers.length; j++) {

            var colorLayer = folders[i].artLayers.add();
            colorLayer.name = layers[j];

            // create on recently created layer
            createColoredPixel(colors[j]);
        }
    }
}

