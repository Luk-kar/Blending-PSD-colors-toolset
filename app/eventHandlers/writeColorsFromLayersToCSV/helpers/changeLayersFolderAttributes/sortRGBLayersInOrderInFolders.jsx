#include "./sortRGBLayersInOrder.jsx"

function sortRGBLayersInOrderInFolders(RGBfolders, layersNames) {

    for (var i = 0; i < RGBfolders.length; i++) {

        var folderRGB = RGBfolders[i];
        var layersRGB = folderRGB.artLayers;

        sortRGBLayersInOrder(layersRGB, layersNames);
    }
}
