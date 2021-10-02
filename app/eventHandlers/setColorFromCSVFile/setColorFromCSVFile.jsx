#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "../../config/configDefaultValues.jsx"
#include "../../config/read/readRGBLayersNames.jsx"
#include "../../config/read/readColorFolderName.jsx"

function setColorFromCSVFile() {

    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    if(!checkIfHasItBlendingColorFolder()) {
        alert("There is no " + readColorFolderName() + " folder");
        return; //abort program
    }

    var CSV = File.openDialog("Select the csv file", "*.csv", false);
    if (!CSV) {
        alert("You did not select the CSV file!")
        return; //abort program
    }

    var COLORSGroups = getRGBColorsAndFolderNames(CSV);

    setColorsToLayers(COLORSGroups)

    alert("You succesfully set all colors from all rows from CSV file:\n" + CSV.toString())
}

function setColorsToLayers(COLORSGroups) {

    var doc = app.activeDocument;

    var FoldersInCOLORS = getFoldersInCOLORS()

    var colorsLayersNames = readRGBLayersNames()

    get_selection_fill_to_work()

    for (var i = 0; i < COLORSGroups.length; i++) {

        var COLORGroup = COLORSGroups[i]

        var folderCOLOR = getFolderCOLOR(COLORGroup, FoldersInCOLORS)

        for (var j = 0; j < colorsLayersNames.length; j++) {

            var colorLayer = getCOLORLayer(folderCOLOR, colorsLayersNames[j])
            doc.activeLayer = colorLayer

            var myColor = getColorTofill(COLORGroup[j + 1])
            // to fill only non-transparent pixels
            colorLayer.transparentPixelsLocked = true
            doc.selection.selectAll()
            doc.selection.fill(myColor)

            // clean up selection
            doc.selection.deselect()
        }
    }
}

function getCOLORLayer(folderCOLOR, colorsLayerName) {
    return folderCOLOR.artLayers.getByName(colorsLayerName)
}

function getFoldersInCOLORS() {

    var doc = app.activeDocument;
    var COLORSFolder = doc.layerSets.getByName(readColorFolderName())
    return COLORSFolder.layerSets
}

function getFolderCOLOR(COLORGroup, FoldersInCOLORS) {
    var folderName = COLORGroup[0]
    var folderCOLOR = FoldersInCOLORS.getByName(folderName)
    return folderCOLOR
}

function getColorTofill(rows) {
    var myColor = new SolidColor()
    myColor.rgb.hexValue = rows
    return myColor
}

function get_selection_fill_to_work() {
    app.displayDialogs = DialogModes.ALL
}

function getRGBColorsAndFolderNames(CSV) {

    var lines = [];
    var lineNumber = 0;

    CSV.open("r");

    var header_0 = configDefaultValues.fileStructure.header_0;
    var layers = configDefaultValues.fileStructure.color_folder.layers.value

    var columns = header_0 + "," + layers;

    while (!CSV.eof) {

        var line = CSV.readln();

        if (line !== columns) {
            lines[lineNumber] = line.split(",");
            lineNumber++;
        }
    }

    // check if CSV is not corrupted
    // check if there is enough folders
    // check if there are all layers
    CSV.close();
    return lines;
}

function selectLayerPixels() {
    var id710 = charIDToTypeID("setd");
    var desc168 = new ActionDescriptor();
    var id711 = charIDToTypeID("null");
    var ref128 = new ActionReference();
    var id712 = charIDToTypeID("Chnl");
    var id713 = charIDToTypeID("fsel");
    ref128.putProperty(id712, id713);
    desc168.putReference(id711, ref128);
    var id714 = charIDToTypeID("T   ");
    var ref129 = new ActionReference();
    var id715 = charIDToTypeID("Chnl");
    var id716 = charIDToTypeID("Chnl");
    var id717 = charIDToTypeID("Trsp");
    ref129.putEnumerated(id715, id716, id717);
    desc168.putReference(id714, ref129);
    executeAction(id710, desc168, DialogModes.NO);
}

function selectAll() {
    var idsetd = charIDToTypeID( "setd" );
    var desc1 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref1.putProperty( idChnl, idfsel );
    desc1.putReference( idnull, ref1 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idAl = charIDToTypeID( "Al  " );
    desc1.putEnumerated( idT, idOrdn, idAl );
    executeAction( idsetd, desc1, DialogModes.NO );
}
