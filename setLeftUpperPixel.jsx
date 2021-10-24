function setLeftUpperPixelForCOLORS() {

    var doc = app.activeDocument

    var folderCOLORS = doc.layerSets.getByName("COLORS")
    var COLORSfolders = folderCOLORS.layerSets

    // Set app settings
    var startingFGColor = app.foregroundColor;
    var startingBGColor = app.backgroundColor;
    var savedDialogs = app.displayDialogs
    app.displayDialogs = DialogModes.ALL;

    var layersNames = ["R", "G", "B"]
    setLayersToBeEditable(COLORSfolders, layersNames);
    setColoredLeftUpperPixel(COLORSfolders, layersNames);

    // Restore app settings
    app.foregroundColor = startingFGColor;
    app.backgroundColor = startingBGColor;
    app.displayDialogs = savedDialogs
    selectedPixel.deselect();
    folderCOLORS.visible = true
    var folderBASE = doc.layerSets.getByName("BASE")
    folderBASE.visible = true

    alert("You succesfully set left upper corner for all COLORS layers")
}

function setColoredLeftUpperPixel(COLORSfolders, layersNames) {

    var selectedPixel = setSelectionLeftUpperCorner();

    for (var i = 0; i < COLORSfolders.length; i++) {

        var RGBFolder = COLORSfolders[i];
        var RGBLayers = COLORSfolders[i].artLayers;

        setColoredPixelsInFolderLayers(RGBLayers, layersNames, selectedPixel);

        RGBFolder.visible = false;
    }
}

function setColoredPixelsInFolderLayers(RGBLayers, layersNames, selectedPixel) {

    var doc = app.activeDocument

    var coordsR = [180, 175]
    var coordsG = [140, 274]
    var coordsB = [178, 249]

    var coords = [coordsR, coordsG, coordsB];

    for (var i = 0; i < layersNames.length; i++) {

        var colorLayer = RGBLayers.getByName(layersNames[i]);

        doc.activeLayer = colorLayer;
        colorLayer.visible = true;

        var layerCoord = coords[i];
        var x = layerCoord[0];
        var y = layerCoord[1];

        var color = getLayerLeftUpperCornerColorHex(x, y);
        var colorToFill = new SolidColor();
        colorToFill.rgb.hexValue = color;

        selectedPixel.fill(colorToFill);

        colorLayer.transparentPixelsLocked = true;
    }
}

function setSelectionLeftUpperCorner() {

    var doc = app.activeDocument

    var topLeft = [0, 0]
    var bottomLeft = [0, 1]
    var bottomRight = [1, 1]
    var topRight = [1, 0]

    var shapeRef = [topLeft, bottomLeft, bottomRight, topRight];
    var selectedPixel = doc.selection;
    selectedPixel.select(shapeRef);

    return selectedPixel;
}

function setLayersToBeEditable(COLORSfolders, layersNames) {

    var doc = app.activeDocument

    for (var i = 0; i < COLORSfolders.length; i++) {

        var ColorFolder = COLORSfolders[i];
        var layersRGB = ColorFolder.artLayers;

        for (var j = 0; j < layersRGB.length; j++) {
            var RGBLayer = layersRGB.getByName(layersNames[j])
            doc.activeLayer = RGBLayer
            RGBLayer.transparentPixelsLocked = false;
        }

        ColorFolder.visible = true;
    }
}

function getLayerLeftUpperCornerColorHex(x, y) {

    var doc = app.activeDocument;

    doc.colorSamplers.removeAll(); // Remove any Color Samplers that may already exist to avoid bug when stack samples is full and it is 4, in that case you can't do any new measurements

    var pixelLocalisation_X_Y = [x, y];

    var colorSampleObject = doc.colorSamplers.add(pixelLocalisation_X_Y); // "try catch" does not work here

    var sampledColor = colorSampleObject.color.rgb.hexValue;
    colorSampleObject.remove();

    return sampledColor;
}

setLeftUpperPixelForCOLORS()