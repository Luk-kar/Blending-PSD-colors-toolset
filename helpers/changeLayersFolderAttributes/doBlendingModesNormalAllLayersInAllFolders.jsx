#include "./doBlendingModesNormal.jsx"

function doBlendingModesNormalAllLayersInAllFolders(RGBfolders, layersNames) {
    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layersInFolder = folderRGB.artLayers;

        var RGBLayers = [];
        for (var j = 0; j < layersNames.length; j++) {
            try {
              var foundLayer = layersInFolder.getByName(layersNames[j])
              RGBLayers.push(foundLayer)
            }
            catch(e){
            } 
        }

        doBlendingModesNormal(RGBLayers);
    }
}
