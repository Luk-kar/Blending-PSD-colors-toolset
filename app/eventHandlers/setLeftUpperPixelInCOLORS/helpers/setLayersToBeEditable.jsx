#include "../../utils/checkIsLayer.jsx"

function setLayersToBeEditable(COLORSfolders, layersNames) {

    var doc = app.activeDocument;

    for (var i = 0; i < COLORSfolders.length; i++) {

        var ColorFolder = COLORSfolders[i];
        var layersRGB = ColorFolder.artLayers;

        for (var j = 0; j < layersRGB.length; j++) {

            if(!checkIsLayer(layersNames[j])) {
                continue
            }
            
            var RGBLayer = layersRGB.getByName(layersNames[j]);
            doc.activeLayer = RGBLayer;
            RGBLayer.transparentPixelsLocked = false;
        }

        ColorFolder.visible = true;
    }
}
