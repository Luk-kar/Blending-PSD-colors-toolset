#include "../../../utils/doInvisibleAllTopFolders.jsx"
#include "../../../utils//doInvisibleAllTopLayers.jsx"
#include "../../../utils//checkIsLayer.jsx"
#include "./doBlendingModesNormal.jsx"
#include "./doBlendingModesNormalAllLayersInAllFolders.jsx"

function prearrangeDocToProcess(COLORSFolder, RGBfolders, layersNames) {

    doInvisibleAllTopLayers();
    doInvisibleAllTopFolders();

    COLORSFolder.visible = true;
    COLORSFolder.blendMode = BlendMode.NORMAL;

    doBlendingModesNormal(RGBfolders);
    doBlendingModesNormalAllLayersInAllFolders(RGBfolders, layersNames);

    sortRGBLayersInOrderInFolders(RGBfolders, layersNames)
}

function sortRGBLayersInOrderInFolders(RGBfolders, layersNames) {

    for (var i = 0; i < RGBfolders.length; i++) {

        var folderRGB = RGBfolders[i]
        var layersRGB = folderRGB.artLayers

        sortRGBLayersInOrder(layersRGB, layersNames)
    }
}

function sortRGBLayersInOrder(layersRGB, layersNames) {

    var counter = 0

    for (var j = 0; j < layersNames.length; j++) {

        if (!checkIsLayer(layersRGB, layersNames[j])) {
            continue
        }

        var RGBLayer = layersRGB.getByName(layersNames[j])
        moveBeforeLayer(RGBLayer, layersRGB[counter])
        counter += 1
    }
}

function moveBeforeLayer(LayerToMove, LayerBefore) {
    LayerToMove.move(LayerBefore, ElementPlacement.PLACEBEFORE)
}