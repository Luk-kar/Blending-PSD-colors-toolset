#include "../changeLayersFolderAttributes/doLayersVisible.jsx"
#include "./getHexColorInLayer.jsx"
#include "./getRGBLayers.jsx";

function getAllHexValues(RGBfolders, layersNames) {
    var HexColorValues = [];

    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        doLayersVisible(layers);
        var RBGLayers = getRGBLayers(layers, layersNames);
        HexColorValues.push([folderRGB.name, getHexColorInLayer(RBGLayers)]);
    }

    return HexColorValues;
}
