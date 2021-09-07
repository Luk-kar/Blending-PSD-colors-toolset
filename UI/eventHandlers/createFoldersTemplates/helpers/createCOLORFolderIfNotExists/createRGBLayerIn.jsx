#include "./createColoredPixel.jsx"

function createRGBLayerIn(folders) {


    var layers = ["R", "G", "B"];
    var colors = [
        { red: 255, green: 0, blue: 0 },
        { red: 0, green: 255, blue: 0 },
        { red: 0, green: 0, blue: 255 },
    ];

    for (var i = 0; i < folders.length; i++) {
        for (var j = 0; j < layers.length; j++) {

            var colorLayer = folders[i].artLayers.add();
            colorLayer.name = layers[j];

            // create on recently created layer
            createColoredPixel(colors[j]);
        }
    }
}

