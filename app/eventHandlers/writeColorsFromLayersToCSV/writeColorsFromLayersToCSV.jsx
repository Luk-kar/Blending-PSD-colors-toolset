#include "./helpers/checkingConditions/checkConditionToRunScript.jsx"
#include "./helpers/makeSureIfSavedBeforeChangingFile.jsx"
#include "../../config/read/readRGBLayersNames.jsx"
#include "./helpers/changeLayersFolderAttributes/prearrangeDocToProcess.jsx"
#include "./helpers/CSV/getCSVpath.jsx"
#include "./helpers/CSV/writeCSVColumns.jsx"
#include "./helpers/gettingColorHexValues/writeCSVAllHexFoldersValues.jsx"
#include "../utils/revealFileInExplorer.jsx"

function writeColorsFromLayersToCSV() {

    var passedConditons = checkConditionToRunScript();

    if(!passedConditons) {
        return // abort program
    }

    var doc = passedConditons.existingDoc;
    var docPath = passedConditons.existingDocPath;
    var COLORSFolder = passedConditons.existingCOLORSFolder;

    // save starting conditions
    var startingDialogsOptions = app.displayDialogs
    app.displayDialogs = DialogModes.NO
    var startingFGColor = app.foregroundColor
    var startingBGColor = app.backgroundColor
    
    makeSureIfSavedBeforeChangingFile();

    var RGBfolders = COLORSFolder.layerSets;

    var layersNames = readRGBLayersNames();
    
    prearrangeDocToProcess(COLORSFolder, RGBfolders, layersNames);

    var csvPath = getCSVpath();
    var saveFile = File(csvPath);

    if (saveFile.exists)
        saveFile.remove();

    writeCSVColumns(layersNames);

    writeCSVAllHexFoldersValues(RGBfolders, layersNames);

    alert("You successfully saved values to " + decodeURI(getCSVpath()));

    // reset file
    doc.close(SaveOptions.DONOTSAVECHANGES);
    // reload to stage before processing file
    app.open(File(docPath));

    // restore starting conditions
    app.foregroundColor = startingFGColor
    app.backgroundColor = startingBGColor
    app.displayDialogs = startingDialogsOptions

    var openExplorer = confirm("Do you want to open explorer?", true);
    if (openExplorer) {
        revealFileInExplorer(csvPath);
    }
}