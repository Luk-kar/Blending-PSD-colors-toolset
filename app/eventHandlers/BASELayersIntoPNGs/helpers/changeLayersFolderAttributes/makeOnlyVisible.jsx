#include "../../../readColorFromLayers/helpers/changeLayersFolderAttributes/doInvisibleAllTopLayers.jsx"
#include "../../../readColorFromLayers/helpers/changeLayersFolderAttributes/doInvisibleAllTopFolders.jsx"

function makeOnlyVisible(copyFolder) {

    doInvisibleAllTopLayers();
    doInvisibleAllTopFolders();

    copyFolder.visible = true;
}
