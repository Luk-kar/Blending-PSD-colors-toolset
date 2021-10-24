#include "./setSelectionLeftUpperCorner.jsx"
#include "./setColoredPixelsInFolderLayers.jsx"

function setColoredLeftUpperPixel(COLORSfolders, layersNames) {

    var selectedPixel = setSelectionLeftUpperCorner();

    for (var i = 0; i < COLORSfolders.length; i++) {

        var RGBFolder = COLORSfolders[i];
        var RGBLayers = COLORSfolders[i].artLayers;

        setColoredPixelsInFolderLayers(RGBLayers, layersNames, selectedPixel);

        RGBFolder.visible = false;
    }
}
