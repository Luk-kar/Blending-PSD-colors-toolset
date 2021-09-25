#include "./utils/getConfigValue.jsx"
#include "./configDefaultValues.jsx"

function readRGBLayersNames() {

    var R = {
        key: configDefaultValues.colorsRGB.R.key,
    };

    var G = {
        key: configDefaultValues.colorsRGB.G.key,
    }

    var B = {
        key: configDefaultValues.colorsRGB.B.key,
    }


    var layersNames = [R.key, G.key, B.key];
    return layersNames;
}