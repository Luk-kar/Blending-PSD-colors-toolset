#include "../changeLayersFolderAttributes/doLayersVisible.jsx"
#include "./writeCSVHexRGBLayers.jsx"
#include "../gettingLayers/getRGBLayers.jsx";
#include "../CSV/writeInCSVFile.jsx"

function writeCSVAllHexValues(RGBfolders, layersNames) {

    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        var RBGLayers = getRGBLayers(layers, layersNames);
        doLayersVisible(RBGLayers);
        writeInCSVFile(folderRGB.name + " ,") // writeinCSVFile
        writeCSVHexRGBLayers(RBGLayers);
    }

}
