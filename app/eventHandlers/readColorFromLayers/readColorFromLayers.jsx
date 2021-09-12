#include "./helpers/checkingConditions/checkConditionToRunScript.jsx"
#include "./helpers/makeSureIfSavedBeforeChangingFile.jsx"
#include "./helpers/changeLayersFolderAttributes/prearrangeDocToProcess.jsx"
#include "./helpers/CSV/getCSVpath.jsx"
#include "./helpers/CSV/writeCSVColumns.jsx"
#include "./helpers/gettingColorHexValues/writeCSVAllHexFoldersValues.jsx"
#include "../utils/revealFileInExplorer.jsx"

function readColorFromLayers() {

    var passedConditons = checkConditionToRunScript();

    var doc = passedConditons.existingDoc;
    var docPath = passedConditons.existingDocPath;
    var COLORSFolder = passedConditons.existingCOLORSFolder;
    
    makeSureIfSavedBeforeChangingFile();

    var RGBfolders = COLORSFolder.layerSets;

    var layersNames = ["R", "G", "B"];
    
    prearrangeDocToProcess(COLORSFolder, RGBfolders, layersNames);

    var csvPath = getCSVpath();
    var saveFile = File(csvPath);

    if (saveFile.exists)
        saveFile.remove();

    writeCSVColumns(layersNames);

    writeCSVAllHexFoldersValues(RGBfolders, layersNames);

    alert("You successfully saved values to " + getCSVpath());

    // reset file
    doc.close(SaveOptions.DONOTSAVECHANGES);
    // reload to stage before processing file
    app.open(File(docPath));


    var openExplorer = confirm("Do you want to open explorer?", true);
    if (openExplorer) {
        revealFileInExplorer(csvPath);
    }
}