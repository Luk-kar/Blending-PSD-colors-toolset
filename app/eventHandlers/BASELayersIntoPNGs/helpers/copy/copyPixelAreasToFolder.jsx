#include "../../../readColorFromLayers/helpers/checkingConditions/isLayerEmptyCheck.jsx"
#include "../selection/selectLayerPixels.jsx"
#include "../copy/copyPixelsDocArea.jsx"
#include "../paste/pastePixelsDocArea.jsx"

function copyPixelAreasToFolder(layerToBeCopied, folderToCopyInto) {

    var doc = app.activeDocument;

    for (var i = layerToBeCopied.length - 1; i >= 0; i--) {

        doc.activeLayer = layerToBeCopied[i];

        if (isLayerEmptyCheck(layerToBeCopied[i])) {
            continue;
        }

        selectLayerPixels();
        copyPixelsDocArea();

        var newLayer = folderToCopyInto.artLayers.add();
        newLayer.name = layerToBeCopied[i].name;
        // it pastes into newly created layer
        pastePixelsDocArea();
    }
}
