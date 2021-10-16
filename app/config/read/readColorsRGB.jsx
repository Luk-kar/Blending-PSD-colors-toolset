#include "./utils/getConfigValue.jsx"
#include "../configDefaultValues.jsx"

function readColorsRGB() {

    var R = getConfigValue(configDefaultValues.colorsRGB.R.key).split(",")
    var G = getConfigValue(configDefaultValues.colorsRGB.G.key).split(",")
    var B = getConfigValue(configDefaultValues.colorsRGB.B.key).split(",")

    var colors = [
        { red: R[0], green: R[1], blue: R[2] },
        { red: G[0], green: G[1], blue: G[2] },
        { red: B[0], green: B[1], blue: B[2] },
    ];

    return colors;
}