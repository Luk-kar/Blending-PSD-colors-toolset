#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "../../config/configDefaultValues.jsx"
#include "../../config/read/readRGBLayersNames.jsx"
#include "../../config/read/readColorFolderName.jsx"
#include "../../config/utils/getConfigPath.jsx"
#include "../../config/utils/getValueFromKey.jsx"
#include "../readColorFromLayers/helpers/checkingConditions/checkIsLayer.jsx"

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

    var ChosenCSVCOLORSFolders = getRGBColorsAndFolderNames(CSV); // errors and groups todo

    var PSDfoldersInCOLORS = getFoldersInCOLORS()

    var configColorsTypes = readRGBLayersNames()

    var errorsCSV = "";

    errorsCSV += getCoruptedColors(ChosenCSVCOLORSFolders, configColorsTypes)

    errorsCSV += getColorFoldersDiffrentNumber(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV)

    errorsCSV += getDiffrentColorFolders(PSDfoldersInCOLORS, ChosenCSVCOLORSFolders, CSV)

    errorsCSV += diffrentLayersInActiveDocument(PSDfoldersInCOLORS, configColorsTypes);

    errorsCSV += diffrentCSVColorsAndCSVConfig(CSV, configColorsTypes)
    
    if (errorsCSV) {
        writeErrorsToCSV(CSV, errorsCSV)
        var confirmation = confirm("Do you want still to load colors into PSD?", true);
        if (!confirmation) {
            return //abort program
        }
    }

    setColorsToLayers(ChosenCSVCOLORSFolders)

    alert("You succesfully set all colors from all rows from CSV file:\n" + CSV.fullName)

}

function diffrentCSVColorsAndCSVConfig(CSV, configColorsTypes) {

    var CSVToReturn = "";
    var wrongColorsNames = "";


    CSV.open("r");
    var columnLine = CSV.readln()
    var chosenCSVColors = columnLine.slice(columnLine.split(",")[0].length + 1, columnLine.length).split(",")
    CSV.close();

    for (var i = 0; i < chosenCSVColors.length; i++) {
        var chosenColor = chosenCSVColors[i];

        var thereIs = false;
        for (var j = 0; j < configColorsTypes.length; j++) {
            var configColor = configColorsTypes[j];

            if (chosenColor === configColor) {
                thereIs = true;
                break;
                
            }
        }

        if(!thereIs) {
            wrongColorsNames += chosenColor + " "
        }
    }

    for (var k = 0; k < configColorsTypes.length; k++) {
        var configColor = configColorsTypes[k];

        var thereIs = false;
        for (var l = 0; l < chosenCSVColors.length; l++) {
            var chosenColor = chosenCSVColors[l];

            if (configColor === chosenColor) {
                thereIs = true;
                break;
            }
        }

        if(!thereIs) {
            wrongColorsNames += configColor + " "
        }
    }

    if (wrongColorsNames) {
        CSVToReturn += "\n" +
        "\ndiffrent chosen CSV colors and CSV config colors\n" +
        "chosen CSV," + CSV.fullName + "\n" +
        "config CSV," + getConfigPath() + "\n" +
        "colors," + wrongColorsNames
    }

    return CSVToReturn;
}

function getColorFoldersDiffrentNumber(COLORSGroups, foldersInCOLORS, CSV) {

    var COLORSGroupsLen = COLORSGroups.length - 1; // first line is columns

    if (COLORSGroupsLen !== foldersInCOLORS.length) {

        alert("There is diffrent number of color groups between the chosen CSV file and the PSD:\n" +
            "The chosen CSV file: " + COLORSGroupsLen + "\n" +
            "The PSD file: " + foldersInCOLORS.length + "\n" +
            "The diffrence: " + Math.abs(COLORSGroupsLen - foldersInCOLORS.length)
        )

        return "\n" +
            "file,number of folders\n" +
            CSV.fullName + "," + COLORSGroupsLen + "\n" +
            getFullDocPath() + "," + foldersInCOLORS.length + "\n" +
            "The diffrence," + Math.abs(COLORSGroupsLen - foldersInCOLORS.length) +
            "\n"
    }

    return ""
}

function diffrentLayersInActiveDocument(foldersInColorFolder, colorLayersNames) {

    var CSVToReturn = "";
    
    var diffrentLayersInPSD = ""
    var diffrentLayersInTitle =  "\n\ndiffrent layers in PSD compare to config file\n" +
        "PSD,"  + getFullDocPath() + "\n" +
        "config CSV," + getConfigPath() + "\n";
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
                alertWrongColorNameInPSD(colorFolder.name, colorLayers[k].name)
            }
        }

        // in config
        for (var l = 0; l < colorLayersNames.length; l++) {

            var thereIs = false;
            for (var j = 0; j < colorLayers.length; j++) {
                if (colorLayersNames[l] === colorLayers[j].name) {
                    thereIs = true;
                    break;
                }
            }

            if(!thereIs) {
                diffrentLayersInFolder += colorLayersNames[l] + " ";
                alertWrongColorNameInPSD(colorFolder.name, colorLayersNames[l])
            }
        }

        if (diffrentLayersInFolder) {
            diffrentLayersInPSD += colorFolder.name + "," + diffrentLayersInFolder + "\n";
        }

    }

    if (diffrentLayersInPSD) {
        CSVToReturn += diffrentLayersInTitle + diffrentLayersInColumns + diffrentLayersInPSD;
    }

    // show number of corrupted layers in PSD todo

    return CSVToReturn;
}

function alertWrongColorNameInPSD(colorFolderName, colorLayerName) {
    alert("The PSD:\nfolder: " + colorFolderName + "\nlayer: " + colorLayerName + "\nhas diffrent name than in CSV config file")
}

function getDiffrentColorFolders(foldersInCOLORS, COLORSGroups, CSV) { //alert todo

    var foldersInCOLORSNames = [];
    for (var i = 0; i < foldersInCOLORS.length; i++) {
        foldersInCOLORSNames.push(foldersInCOLORS[i].name)
    }
    var COLORSGroupsNames = [];
    for (var j = 1; j < COLORSGroups.length; j++) {
        COLORSGroupsNames.push(COLORSGroups[j][0])
    }

    var diffrentColorGroups ="";
    var diffrentColorGroupsColumns = "file,diffrent folders\n";
        
    var diffrentCSVTitle = CSV.fullName + ",";
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
        diffrentColorGroups += diffrentCSVTitle + diffrentGroupsCSV
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

    if (diffrentColorGroups) {

        diffrentColorGroups = "\n" + diffrentColorGroupsColumns + diffrentColorGroups

        alert("Diffrent folders in psd than in chosen CSV:\n" +
            diffrentGroupsCSV + diffrentGroupsPSD
        )
    }

    return diffrentColorGroups;
}

function setColorsToLayers(COLORSGroups) {

    //save foregorund todo
    //save backgorund todo

    setOptionsToSelectionFillToWork()

    for (var i = 1; i < COLORSGroups.length; i++) {

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

    if (checkIsFolder(foldersInCOLORS, folderName)) {

        var folderCOLOR = getFolderInFolders(folderName, foldersInCOLORS)
        var colorsLayersNames = readRGBLayersNames()

        for (var i = 0; i < colorsLayersNames.length; i++) {

            if (checkIsLayer(folderCOLOR.artLayers, colorsLayersNames[i])) {
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
    }
}

function checkIsFolder(folderWithFolders, folderName) {

    for (var j = 0; j < folderWithFolders.length; j++) {
        if (folderWithFolders[j].name === folderName) {
            return true;
        }
    }

    return false;
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

    if (color instanceof "undefined" || !isHexColor(color)) {
        myColor.rgb.hexValue = "000000"
    } else {
        myColor.rgb.hexValue = color
    }

    return myColor
}

function isHexColor(color) {
    var matchHexColor = /^(?:[0-9a-fA-F]{3}){1,2}$/g // https://regex101.com/r/MndtsX/1
    return Boolean(color.match(matchHexColor))
}

function setOptionsToSelectionFillToWork() {
    app.displayDialogs = DialogModes.ALL
}

function getRGBColorsAndFolderNames(CSV) {

    var rows = [];
    var rowNumber = 0;

    CSV.open("r");

    while (!CSV.eof) {

        var line = CSV.readln();

        rows[rowNumber] = line.split(",");
        rowNumber++;
    }

    CSV.close();  

    return rows;
}

function getCoruptedColors(rows, configColorsTypes) {

    var corruptedColors = ""
    var corruptedColorsCounter = 0

    for (var i = 1; i < rows.length; i++) { // first line is columns
        var folder = rows[i][0]
        var colors = rows[i].slice(1, rows[i].length)
        var corruptedColorsInGroup = []

        for (var j = 0; j < colors.length; j++) {
            if (!isHexColor(colors[j])) {
                alert('Color: "' + configColorsTypes[j] + '" in folder: "' + folder + '" is corrupted in chosen CSV file')
                corruptedColorsInGroup.push(configColorsTypes[j])
                corruptedColorsCounter++;
            }
        }

        if (corruptedColorsInGroup.length) {
            corruptedColors += folder + "," + corruptedColorsInGroup.join(" ") + "\n"
        }
    }

    if (corruptedColors.length) {

        var PluralOrSingular = ""
        if (corruptedColorsCounter === 1) {
            PluralOrSingular = "color is "
        } else {
            PluralOrSingular = "colors are "
        }

        alert(corruptedColorsCounter + " " + PluralOrSingular + "corrupted in chosen CSV file")

        corruptedColors = "corrupted colors\n" + "group,layers\n" + corruptedColors; // todo change all "group" to "folder"

    }

    return corruptedColors;
}

function writeErrorsToCSV(CSV, corruptedColorsCSV) {

    var corruptedFilePath = CSV.fullName
    var CSVErrorsPath = getsSCVErrorPath(corruptedFilePath)

    var CSVErrors = File(CSVErrorsPath)

    if (CSVErrors.exists) {
        CSVErrors.remove()
    }

    CSVErrors.encoding = "UTF8"
    CSVErrors.open("e", "TEXT", "????")
    CSVErrors.write(corruptedColorsCSV)
    CSVErrors.close()

    alert("The CSV with errors is saved in:\n" + CSVErrorsPath)
}

function getsSCVErrorPath(corruptedFilePath) {
    return corruptedFilePath.slice(0, corruptedFilePath.length - 4) + "_errors.csv"
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
