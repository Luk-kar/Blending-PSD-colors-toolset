#include "../casting/convertValueStringToInt.jsx"

function getLayerLeftUpperCornerColorHex(layer) {

    var doc = app.activeDocument;

    doc.colorSamplers.removeAll(); // Remove any Color Samplers that may already exist to avoid bug when stack samples is full and it is 4, in that case you can't do any new measurements

    doc.selection.deselect(); // deselct any selection that may already exist.

    var LayerBounds = layer.bounds;

    var x = convertValueStringToInt(LayerBounds[0]);
    var y = convertValueStringToInt(LayerBounds[1]);

    var pixelLocalisation_X_Y = [x, y];

    var colorSampleObject = null;

    colorSampleObject = doc.colorSamplers.add(pixelLocalisation_X_Y); // "try catch" does not work here

    var sampledColor = colorSampleObject.color.rgb.hexValue;
    colorSampleObject.remove();

    return sampledColor;
}
