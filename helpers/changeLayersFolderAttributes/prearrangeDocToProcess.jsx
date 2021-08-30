#include "./doInvisibleFolders.jsx"
#include "./doInvisibleLayers.jsx"
#include "./doBlendingModesNormal.jsx"
#include "./doBlendingModesNormalAllLayersInAllFolders.jsx"

function prearrangeDocToProcess(COLORSFolder, RGBfolders) {

    doInvisibleLayers();
    doInvisibleFolders();

    COLORSFolder.visible = true;
    COLORSFolder.blendMode = BlendMode.NORMAL;

    doBlendingModesNormal(RGBfolders);
    doBlendingModesNormalAllLayersInAllFolders(RGBfolders);
}
