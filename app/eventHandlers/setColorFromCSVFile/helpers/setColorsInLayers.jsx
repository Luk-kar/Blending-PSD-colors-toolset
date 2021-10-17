#include "./getPSDFoldersInCOLORS.jsx"
#include "./checkIsFolder.jsx"
#include "./getFolderInFolders.jsx"
#include "../../../config/read/readRGBLayersNames.jsx"
#include "../../writeColorsFromLayersToCSV/helpers/checkingConditions/checkIsLayer.jsx"
#include "./getCOLORLayer.jsx"
#include "./getColorTofill.jsx"

function setColorsInLayers(COLORFolder) {

    var doc = app.activeDocument;

    var folderName = COLORFolder[0];
    var folderLayersColors = COLORFolder.slice(1, COLORFolder.length);

    var foldersInCOLORS = getPSDFoldersInCOLORS();

    if (checkIsFolder(foldersInCOLORS, folderName)) {

        var folderCOLOR = getFolderInFolders(folderName, foldersInCOLORS);
        var colorsLayersNames = readRGBLayersNames();

        for (var i = 0; i < colorsLayersNames.length; i++) {

            if (checkIsLayer(folderCOLOR.artLayers, colorsLayersNames[i])) {
                var colorLayer = getCOLORLayer(folderCOLOR, colorsLayersNames[i]);
                doc.activeLayer = colorLayer;

                var myColor = getColorTofill(folderLayersColors[i]);
                var isLayerTransparentAlready = colorLayer.transparentPixelsLocked;
                colorLayer.transparentPixelsLocked = true; // to fill only non-transparent pixels
                doc.selection.selectAll();
                doc.selection.fill(myColor);

                // clean up selection
                colorLayer.transparentPixelsLocked = isLayerTransparentAlready;
                doc.selection.deselect();
            }
        }
    }
}
