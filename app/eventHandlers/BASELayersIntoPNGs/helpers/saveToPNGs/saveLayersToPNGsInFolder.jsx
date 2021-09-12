#include "../selection/selectLayerPixels.jsx"
#include "../crop.jsx"
#include "../getPaths/getSaveFilePath.jsx"
#include "./saveFileToPNG24.jsx"

function saveLayersToPNGsInFolder(layersToSave, folderPath) {

    for (var i = layersToSave.length - 1; i >= 0; i--) {

        var layer = layersToSave[i];

        selectLayerPixels();

        var LayerBounds = layer.bounds;

        crop({
            left: LayerBounds[0],
            top: LayerBounds[1],
            right: LayerBounds[2],
            bottom: LayerBounds[3],
            deleteCropped: false
        });

        var saveFile = getSaveFilePath(layer, folderPath);

        saveFileToPNG24(saveFile);
    }
}
