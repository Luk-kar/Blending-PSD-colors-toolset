#include "./getLayerColorHex.jsx"

function setColoredPixelsInFolderLayers(RGBLayers, layersNames, selectedPixel) {

    var doc = app.activeDocument;

    var coordsR = [180, 175]; // read config coord todo
    var coordsG = [140, 274]; // read config coord todo
    var coordsB = [178, 249]; // read config coord todo

    var coords = [coordsR, coordsG, coordsB];

    for (var i = 0; i < layersNames.length; i++) {

        var colorLayer = RGBLayers.getByName(layersNames[i]);

        doc.activeLayer = colorLayer;
        colorLayer.visible = true;

        var layerCoord = coords[i];
        var x = layerCoord[0];
        var y = layerCoord[1];

        var color = getLayerColorHex(x, y);
        var colorToFill = new SolidColor();
        colorToFill.rgb.hexValue = color;

        selectedPixel.fill(colorToFill);

        colorLayer.transparentPixelsLocked = true;
    }
}
