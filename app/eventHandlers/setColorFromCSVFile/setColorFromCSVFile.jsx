#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "../../config/configDefaultValues.jsx"

function setColorFromCSVFile() {

    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    if(!checkIfHasItBlendingColorFolder()) {
        alert("There is no COLOR folder");
        return; //abort program
    }

    var lines = getRGBColorsAndFolderNames();

    var doc = app.activeDocument;
    app.displayDialogs = DialogModes.ALL // is needed to selection.fill works

    var COLORSFolder = doc.layerSets.getByName("COLORS");

    var FoldersInCOLORS = COLORSFolder.layerSets;

    var colorLayersNames = ["R", "G", "B"]; // todo

    for (var i =0; i < lines.length; i++) {
        var elements = lines[i]

        var folderName = elements[0]
        var foundFolder = FoldersInCOLORS.getByName(folderName);

        for (var j=0; j < colorLayersNames.length; j++) {
            var colorLayer = foundFolder.artLayers.getByName(colorLayersNames[j]);
            doc.activeLayer = colorLayer;
            colorLayer.transparentPixelsLocked = true;
            doc.selection.selectAll();

            var myColor = new SolidColor();
            myColor.rgb.hexValue = elements[j + 1];
            doc.selection.fill(myColor)

            doc.selection.deselect();
            colorLayer.transparentPixelsLocked = false;
        }
    }

    alert("You succesfully set all colors from columns from CSV file")
}

function getRGBColorsAndFolderNames() {

    var CSV = File.openDialog("Select csv file", "*.csv", false);

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
