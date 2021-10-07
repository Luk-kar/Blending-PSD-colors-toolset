#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "../../config/configDefaultValues.jsx"
#include "../../config/read/readRGBLayersNames.jsx"
#include "../../config/read/readColorFolderName.jsx"

function symmetricDifference(a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    for (i = 0; i < a2.length; i++) {
      if (a1.indexOf(a2[i]) === -1) {
        result.push(a2[i]);
      }
    }
    return result;
  }

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

    var COLORSGroups = getRGBColorsAndFolderNames(CSV); // errors and groups todo

    var errorsCSV = getCoruptedColors(COLORSGroups)

    var foldersInCOLORS = getFoldersInCOLORS()
    if (COLORSGroups.length !== foldersInCOLORS.length) {
        alert("There is diffrent number of color groups between CSV file and active document:\n" +
        "The CSV File: " + COLORSGroups.length + "\n" +
        "The active document: " + foldersInCOLORS.length + "\n" +
        "Diffrence: " + Math.abs(COLORSGroups.length - foldersInCOLORS.length)
        )

        errorsCSV += "\n" +
        "file,number of folders\n" +
        "CSV," + COLORSGroups.length + "\n" +
        getFullDocPath() + "," + foldersInCOLORS.length + "\n" +
        "The diffrence," + Math.abs(COLORSGroups.length - foldersInCOLORS.length) +
        "\n"
    }



    var diffrentGroups = getDiffrentColorGroups(foldersInCOLORS, COLORSGroups)

    errorsCSV += diffrentGroups;

    errorsCSV += diffrentLayersInActiveDocument();
    
    if (errorsCSV) {
        writeErrorsToCSV(CSV, errorsCSV)
    }

    return

    setColorsToLayers(COLORSGroups)

    alert("You succesfully set all colors from all rows from CSV file:\n" + CSV.toString())

    // show errors todo
}

function diffrentLayersInActiveDocument() {

    var CSVToReturn = "";

    var foldersInColorFolder = getFoldersInCOLORS();
    var colorLayersNames = readRGBLayersNames();
    
    var diffrentLayersInPSD = ""
    var diffrentLayersInTitle = "\n\nDiffrent layers in PSD: \n"  + getFullDocPath() + "\n"
    var diffrentLayersInColumns = "folder, layers\n"

    for (var i = 0; i < foldersInColorFolder.length; i++) {

        var colorFolder = foldersInColorFolder[i];
        var colorLayers = colorFolder.artLayers;

        var diffrentLayersInFolder = ""

        // in layers
        for (var k = 0; k < colorLayers.length; k++) {

            var thereIs = false;
            for (var j = 0; j < colorLayersNames.length; j++) {
                if (colorLayers[k].name === colorLayersNames[j]) {
                    thereIs = true;
                    break;
                }
            }

            if(!thereIs) {
                diffrentLayersInFolder += colorLayers[k].name + " ";
                alert(colorLayers[k].name)
            }
        }

        // in config
        for (var l = 0; l < colorLayersNames.length; l++) { //todo check

            var thereIs = false;
            for (var j = 0; j < colorLayers.length; j++) {
                if (colorLayersNames[l] === colorLayers[j].name) {
                    thereIs = true;
                    break;
                }
            }

            if(!thereIs) {
                diffrentLayersInFolder += colorLayersNames[l] + " ";
                alert(colorLayersNames[l])
            }
        }

        if (diffrentLayersInFolder) {
            diffrentLayersInPSD += colorFolder.name + "," + diffrentLayersInFolder + "\n";
        }

    }

    if (diffrentLayersInPSD) {
        CSVToReturn += diffrentLayersInTitle + diffrentLayersInColumns + diffrentLayersInPSD;
    }

    return CSVToReturn;
}

function getDiffrentColorGroups(foldersInCOLORS, COLORSGroups) {

    var foldersInCOLORSNames = [];
    for (var i = 0; i < foldersInCOLORS.length; i++) {
        foldersInCOLORSNames.push(foldersInCOLORS[i].name)
    }
    var COLORSGroupsNames = [];
    for (var j = 0; j < COLORSGroups.length; j++) {
        COLORSGroupsNames.push(COLORSGroups[j][0])
    }

    var diffrentColorGroups ="";
    var diffrentColorGroupsColumns = "\nfile,diffrent folders\n";
        
    var diffrentCSVTitle = "CSV,";
    var diffrentGroupsCSV = "";

    for (var k = 0; k < COLORSGroupsNames.length; k++) {
        var thereIs = false;
        for (var l = 0; l < foldersInCOLORSNames.length; l++) {
            if (COLORSGroupsNames[k] === foldersInCOLORSNames[l]) {
                thereIs = true;
                break;
            }
        }
        if (!thereIs) {
            diffrentGroupsCSV +=  COLORSGroupsNames[k] + " "
        }
    }

    if (diffrentGroupsCSV) {
        diffrentColorGroups += diffrentColorGroupsColumns + diffrentCSVTitle + diffrentGroupsCSV
    }

    var diffrentPSDTitle = "\n" + getFullDocPath() + ","
    var diffrentGroupsPSD = "";

    for (var k = 0; k < foldersInCOLORSNames.length; k++) {
        var thereIs = false;
        for (var l = 0; l < COLORSGroupsNames.length; l++) {
            if (foldersInCOLORSNames[k] === COLORSGroupsNames[l]) {
                thereIs = true;
                break;
            }
        }
        if (!thereIs) {
            diffrentGroupsPSD += foldersInCOLORSNames[k] + " "
        }
    }

    if (diffrentGroupsPSD) {
        diffrentColorGroups += diffrentPSDTitle + diffrentGroupsPSD
    }

    return diffrentColorGroups;
}

function setColorsToLayers(COLORSGroups) {

    //save foregorund todo
    //save backgorund todo

    setOptionsToSelectionFillToWork()

    for (var i = 0; i < COLORSGroups.length; i++) {

        var COLORGroup = COLORSGroups[i]

        setColorsInLayers(COLORGroup)
    }

    //load foregorund todo
    //load backgorund todo
}

function getFullDocPath() {
    var doc = app.activeDocument;
    return doc.fullName;
}

function setColorsInLayers(COLORGroup) {

    var doc = app.activeDocument;

    var folderName = COLORGroup[0];
    var folderLayersColors = COLORGroup.slice(1, COLORGroup.length);

    var foldersInCOLORS = getFoldersInCOLORS()
    var folderCOLOR = getFolderInFolders(folderName, foldersInCOLORS)
    var colorsLayersNames = readRGBLayersNames()

    for (var i = 0; i < colorsLayersNames.length; i++) {

        var colorLayer = getCOLORLayer(folderCOLOR, colorsLayersNames[i])
        doc.activeLayer = colorLayer

        var myColor = getColorTofill(folderLayersColors[i])
        var isLayerTransparentAlready = colorLayer.transparentPixelsLocked
        colorLayer.transparentPixelsLocked = true // to fill only non-transparent pixels
        doc.selection.selectAll()
        doc.selection.fill(myColor)

        // clean up selection
        colorLayer.transparentPixelsLocked = isLayerTransparentAlready;
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

function getFolderInFolders(folderToFind, containgFolder) {
    return containgFolder.getByName(folderToFind)
}

function getColorTofill(color) {
    var myColor = new SolidColor()
    myColor.rgb.hexValue = color
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

    CSV.close();  

    // check if there is enough folders todo

    // if errors ask if you want to still do it todo
    return rows; //return also errors object todo
}

function getCoruptedColors(rows) {

    var colorsTypes = readRGBLayersNames()
    var corruptedColors = []

    for (var i = 0; i < rows.length; i++) {
        var group = rows[i][0]
        var colors = rows[i].slice(1, rows[i].length)
        var corruptedColorsInGroup = []

        for (var j = 0; j < colors.length; j++) {
            var matchHexColor = /^(?:[0-9a-fA-F]{3}){1,2}$/g // https://regex101.com/r/MndtsX/1
            if (!colors[j].match(matchHexColor)) {
                alert('Color: "' + colorsTypes[j] + '" in folder: "' + group + '" is corrupted.')
                corruptedColorsInGroup.push(colorsTypes[j])
            }
        }

        if (corruptedColorsInGroup.length) {
            corruptedColors.push(group + "," + corruptedColorsInGroup.join(",") + "\n")
        }
    }

    if (corruptedColors.length) {

        var PluralOrSingular = ""
        if (corruptedColors.length === 1) {
            PluralOrSingular = "Color is "
        } else {
            PluralOrSingular = "Colors are "
        }

        alert(corruptedColors.length + " " + PluralOrSingular + "corrupted.")

        var corruptedColorsCSV = "corrupted colors\ngroup,layers: " + readRGBLayersNames().join(" ") // todo change all "group" to "folder"

        for (var k = 0; k < corruptedColors.length; k++) {
            corruptedColorsCSV += "\n" + corruptedColors[k] 
        }

        return corruptedColorsCSV
    } else {
        return false
    }
}

function writeErrorsToCSV(CSV, corruptedColorsCSV) {

    var corruptedFilePath = decodeURIComponent(CSV.toString())
    var CSVErrorsPath = corruptedFilePath.slice(0, corruptedFilePath.length - 4) + "_errors.csv"

    var CSVErrors = File(CSVErrorsPath)

    if (CSVErrors.exists) {
        CSVErrors.remove()
    }

    CSVErrors.encoding = "UTF8"
    CSVErrors.open("e", "TEXT", "????")
    CSVErrors.write(corruptedColorsCSV)
    CSVErrors.close()

    alert("CSV with errors is saved in: " + CSVErrorsPath)
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
