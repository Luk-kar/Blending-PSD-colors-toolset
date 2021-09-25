#include "./utils/getConfigValue.jsx"
#include "./configDefaultValues.jsx"

function readRGBLayersNames() {

    var R = {
        key: getConfigValue(configDefaultValues.fileStructure.colorsRGB.R.key),
    };

    var G = {
        key: getConfigValue(configDefaultValues.fileStructure.colorsRGB.G.key),
    }

    var B = {
        key: getConfigValue(configDefaultValues.fileStructure.colorsRGB.B.key),
    }


    var layersNames = [R.key, G.key, B.key];
    return layersNames;
}