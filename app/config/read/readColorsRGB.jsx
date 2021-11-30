#include "./readRGBLayersNames.jsx"
#include "./utils/getConfigValue.jsx"

function readColorsRGB() {

    var colors = []

    var layersNames = readRGBLayersNames()

    for (var i = 0; i < layersNames.length; i++) {
        colors.unshift(getConfigValue(layersNames[i]))
    }

    return colors;
}