#include "../changeLayersFolderAttributes/doLayersVisible.jsx"
#include "./getHexColorInLayer.jsx"
#include "../gettingLayers/getRGBLayers.jsx";

function getAllHexValues(RGBfolders, layersNames) {
    var HexColorValues = [];

    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        var RBGLayers = getRGBLayers(layers, layersNames);
        doLayersVisible(RBGLayers);
        HexColorValues.push([folderRGB.name, getHexColorInLayer(RBGLayers)]);
    }

    return HexColorValues;
}
