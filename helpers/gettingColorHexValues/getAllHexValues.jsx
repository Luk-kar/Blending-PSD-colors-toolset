#include "../changeLayersFolderAttributes/doLayersVisible.jsx"

function getAllHexValues(RGBfolders) {
    var HexColorValues = [];

    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        doLayersVisible(layers);
        HexColorValues.push([folderRGB.name, getHexColorInLayers(layers)]);
    }

    return HexColorValues;
}
