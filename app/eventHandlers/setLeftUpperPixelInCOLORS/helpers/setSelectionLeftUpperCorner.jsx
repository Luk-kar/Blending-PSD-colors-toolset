function setSelectionLeftUpperCorner() {

    var doc = app.activeDocument;

    var topLeft = [0, 0];
    var bottomLeft = [0, 1];
    var bottomRight = [1, 1];
    var topRight = [1, 0];

    var shapeRef = [topLeft, bottomLeft, bottomRight, topRight];
    var selectedPixel = doc.selection;
    selectedPixel.select(shapeRef);

    return selectedPixel;
}
