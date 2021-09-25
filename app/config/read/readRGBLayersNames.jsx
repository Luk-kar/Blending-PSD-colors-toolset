#include "../utils/getConfigValue.jsx"
#include "../configDefaultValues.jsx"

function readRGBLayersNames() {

    var layersNames = getConfigValue(configDefaultValues.fileStructure.color_folder.layers.key).split(",")
    return layersNames;
}