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

    var COLORSGroups = getRGBColorsAndFolderNames(CSV); // errors and groups

    setColorsToLayers(COLORSGroups)

    alert("You succesfully set all colors from all rows from CSV file:\n" + CSV.toString())

    // show errors
}

function setColorsToLayers(COLORSGroups) {

    setOptionsToSelectionFillToWork()

    for (var i = 0; i < COLORSGroups.length; i++) {

        var COLORGroup = COLORSGroups[i]

        setColorsInLayers(COLORGroup)
    }
}

function setColorsInLayers(COLORGroup) {

    var doc = app.activeDocument;

    var folderName = COLORGroup[0];
    var folderLayers = COLORGroup.slice(1, COLORGroup.length);
    var foldersInCOLORS = getFoldersInCOLORS()
    var folderCOLOR = getFolderCOLOR(folderName, foldersInCOLORS)
    var colorsLayersNames = readRGBLayersNames()

    for (var i = 0; i < colorsLayersNames.length; i++) {

        var colorLayer = getCOLORLayer(folderCOLOR, colorsLayersNames[i])
        doc.activeLayer = colorLayer

        var myColor = getColorTofill(folderLayers[i])
        colorLayer.transparentPixelsLocked = true // to fill only non-transparent pixels
        doc.selection.selectAll()
        doc.selection.fill(myColor)

        // clean up selection
        doc.selection.deselect()
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

function getFolderCOLOR(folderName, FoldersInCOLORS) {
    return FoldersInCOLORS.getByName(folderName)
}

function getColorTofill(rows) {
    var myColor = new SolidColor()
    myColor.rgb.hexValue = rows
    return myColor
}

function setOptionsToSelectionFillToWork() {
    app.displayDialogs = DialogModes.ALL
}

function getRGBColorsAndFolderNames(CSV) {

    var rows = [];
    var rowNumber = 0;

    CSV.open("r");

    var columns = getColumnsLine()

    while (!CSV.eof) {

        var line = CSV.readln();

        if (line !== columns) {
            rows[rowNumber] = line.split(",");
            rowNumber++;
        }
    }
    
    // check if CSV is not corrupted

    var colorsTypes = readRGBLayersNames();
    var corruptedColors = [];

    for (var i = 0; i < rows.length; i++) {
        var group = rows[i][0];
        var colors = rows[i].slice(1, rows[i].length);
        var corruptedColorsInGroup = [];

        for (var j = 0; j < colors.length; j++) {
            var matchHexColor = /^(?:[0-9a-fA-F]{3}){1,2}$/g; // https://regex101.com/r/MndtsX/1
            if (!colors[j].match(matchHexColor)) {
                alert("Color: " + colorsTypes[j] + " in folder: " + group + " is corrupted");
                corruptedColorsInGroup.push(colorsTypes[j])
            }
        }

        if (corruptedColorsInGroup.length) {
            corruptedColors.push(group + "," + corruptedColorsInGroup.join(","));
        }
    }

    if (corruptedColors.length) {
        corruptedColors.unshift(columns);
        alert(corruptedColors)
    }

    // check if there is enough folders
    CSV.close();

    // if errors ask if you want to still do it
    return rows;
}

function getColumnsLine() {
    var groupColumnName = configDefaultValues.fileStructure.column_folders_name
    var layers = readRGBLayersNames()

    var columns = groupColumnName + "," + layers
    return columns
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
