#include "../changeLayersFolderAttributes/doLayersVisible.jsx"
#include "./getHexColorInLayer.jsx"

function getAllHexValues(RGBfolders, layersNames) {
    var HexColorValues = [];

    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        doLayersVisible(layers);
        HexColorValues.push([folderRGB.name, getHexColorInLayer(layers, layersNames)]);
    }

    return HexColorValues;
}
