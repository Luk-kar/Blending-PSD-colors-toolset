#include "./doBlendingModesNormal.jsx"

function doBlendingModesNormalAllLayersInAllFolders(RGBfolders) {
    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        doBlendingModesNormal(layers);
    }
}
