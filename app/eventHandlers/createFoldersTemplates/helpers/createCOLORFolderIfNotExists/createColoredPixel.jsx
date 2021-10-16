function createColoredPixel(color) {

    var doc = app.activeDocument;

    //(topleft, bottomleft, bottomright, topright)
    var shapeRef = [[0, 0], [0, 1], [1, 1], [1, 0]];
    var selectedPixel = doc.selection;
    selectedPixel.select(shapeRef);

    var colorToFill = new SolidColor();
    colorToFill.rgb.hexValue = color;

    selectedPixel.fill(colorToFill); //fills background layer with white.
    selectedPixel.deselect();
}
