#include "../../../utils/doInvisibleAllTopLayers.jsx"
#include "../../../utils/doInvisibleAllTopFolders.jsx"

function makeOnlyVisible(copyFolder) {

    doInvisibleAllTopLayers();
    doInvisibleAllTopFolders();

    copyFolder.visible = true;
}
