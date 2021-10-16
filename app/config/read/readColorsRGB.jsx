#include "./utils/getConfigValue.jsx"
#include "../configDefaultValues.jsx"

function readColorsRGB() {

    // get all colors from config as loop todo

    var R = getConfigValue(configDefaultValues.colorsRGB.R.key)
    var G = getConfigValue(configDefaultValues.colorsRGB.G.key)
    var B = getConfigValue(configDefaultValues.colorsRGB.B.key)

    var colors = [
        R,
        G,
        B,
    ];

    return colors;
}