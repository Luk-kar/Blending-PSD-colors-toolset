function createCOLORSFolderTemplate() {
    try {
        var doc = app.activeDocument;
    } catch (error) {
        return alert("You do not have any opened file!")
    }

    var isCOLORSFolder = doc.layerSets.getByName("COLORS");
    if (isCOLORSFolder) {
        alert('there is already "COLORS" folder in top hierarchy');
    }

    var COLORSFolder = doc.layerSets.add();
    COLORSFolder.name = "COLORS";

    
    var folders = create_folder_in(COLORSFolder, folders);

    create_RGB_layer_in(folders);

}

function create_folder_in(COLORSFolder, folders) {

    var folders = [];
    var foldersNames = ["1", "2"].reverse();

    for (var i = 0; i < foldersNames.length; i++) {
        var folder = COLORSFolder.layerSets.add();
        folder.name = foldersNames[i];
        folders.push(folder);
    }

    return setRightOrder(folders);
}

function create_RGB_layer_in(folders) {

    var layers = ["R", "G", "B"]
    var colors = [
        {red: 255, green: 0, blue: 0},
        {red: 0, green: 255, blue: 0},
        {red: 0, green: 0, blue: 255},
    ]

    setRightOrder(layers)
    setRightOrder(colors)

    for (var i = 0; i < folders.length; i++) {
        for (var j = 0; j < layers.length; j++) {

            var colorLayer = folders[i].artLayers.add();
            colorLayer.name = layers[j];

            // create on recently created layer
            create_colored_pixel(colors[j]);
        }
    }
}

function create_colored_pixel(color) {

    var doc = app.activeDocument;

    //(topleft, bottomleft, bottomright, topright)
    var shapeRef = [[0,0], [0,1], [1,1], [1,0]];
    var selectedPixel = doc.selection
    selectedPixel.select(shapeRef);

    var colorToFill = new SolidColor();  
    colorToFill.rgb.red = color.red;  
    colorToFill.rgb.green = color.green;  
    colorToFill.rgb.blue = color.blue;  

    selectedPixel.fill(colorToFill); //fills background layer with white.
    selectedPixel.deselect();
}

/**
 * When a layer or group is created in a PSD file, it gets always a higher hierarchy in the stack than a previously created one.
 * @param {Array} array - Array with any data types.
 */
function setRightOrder(array) {
    return array.reverse();
}
