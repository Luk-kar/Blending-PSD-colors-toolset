#include "../changeLayersFolderAttributes/doLayersVisible.jsx"
#include "./getHexColorInLayer.jsx"
#include "../gettingLayers/getRGBLayers.jsx";
#include "../CSV/writeInCSVFile.jsx"

function getAllHexValues(RGBfolders, layersNames) {

    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        var RBGLayers = getRGBLayers(layers, layersNames);
        doLayersVisible(RBGLayers);
        writeInCSVFile(folderRGB.name + " ,") // writeinCSVFile
        getHexColorInLayer(RBGLayers);
    }

}
