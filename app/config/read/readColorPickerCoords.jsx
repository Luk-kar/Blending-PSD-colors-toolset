#include "./readRGBLayersNames.jsx"
#include "./utils/getConfigValue.jsx"

function readColorPickerCoords() {
    var RGBLayersNames = readRGBLayersNames()
    var coords = []

    for (var i = 0; i < RGBLayersNames.length; i++) {
        var layerName = RGBLayersNames[i]
        var coordLayer = getConfigValue(layerName + "_coords").split(",")
        coords.push(coordLayer)
    }

    return coords
}