#include "./doBlendingModesNormal.jsx"
#include "../gettingLayers/getRGBLayers.jsx";

function doBlendingModesNormalAllLayersInAllFolders(RGBfolders, layersNames) {

    for (var i = 0; i < RGBfolders.length; i++) {
        
        var folderRGB = RGBfolders[i];
        var layersInFolder = folderRGB.artLayers;

        var RGBLayers = getRGBLayers(layersInFolder, layersNames);

        doBlendingModesNormal(RGBLayers);
    }
}
