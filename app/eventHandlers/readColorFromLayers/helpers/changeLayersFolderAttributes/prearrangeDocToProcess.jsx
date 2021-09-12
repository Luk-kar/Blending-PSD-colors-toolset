#include "./doInvisibleAllTopFolders.jsx"
#include "./doInvisibleAllTopLayers.jsx"
#include "./doBlendingModesNormal.jsx"
#include "./doBlendingModesNormalAllLayersInAllFolders.jsx"

function prearrangeDocToProcess(COLORSFolder, RGBfolders, layersNames) {

    doInvisibleAllTopLayers();
    doInvisibleAllTopFolders();

    COLORSFolder.visible = true;
    COLORSFolder.blendMode = BlendMode.NORMAL;

    doBlendingModesNormal(RGBfolders);
    doBlendingModesNormalAllLayersInAllFolders(RGBfolders, layersNames);
}
