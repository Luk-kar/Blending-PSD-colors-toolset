#include "./createColoredPixel.jsx"
#include "../../../../config/read/readRGBLayersNames.jsx"
#include "../../../../config/read/readColorsRGB.jsx"

function createRGBLayerIn(folders) {

    var layers = readRGBLayersNames().reverse(); // to create last one first, first one last to have right order in PSD
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

