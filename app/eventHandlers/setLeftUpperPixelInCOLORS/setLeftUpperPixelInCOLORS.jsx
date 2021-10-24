#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "../../config/read/readColorFolderName.jsx"
#include "../utils/checkIfHasItBaseFolder.jsx"
#include "../../config/read/readBaseFolderName.jsx"
#include "../../config/read/readRGBLayersNames.jsx"
#include "./helpers/setLayersToBeEditable.jsx"
#include "./helpers/setColoredLeftUpperPixelInFolders.jsx"


function setLeftUpperPixelInCOLORS() {

    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    if(!checkIfHasItBlendingColorFolder()) {
        alert("There is no " + readColorFolderName() + " folder");
        return; //abort program
    }

    var doc = app.activeDocument

    var folderCOLORS = doc.layerSets.getByName(readColorFolderName())
    var COLORSfolders = folderCOLORS.layerSets

    // Set app settings
    var startingFGColor = app.foregroundColor;
    var startingBGColor = app.backgroundColor;
    var savedDialogs = app.displayDialogs
    app.displayDialogs = DialogModes.ALL;

    var layersNames = readRGBLayersNames()
    setLayersToBeEditable(COLORSfolders, layersNames);
    setColoredLeftUpperPixelInFolders(COLORSfolders, layersNames);

    // Restore app settings
    app.foregroundColor = startingFGColor;
    app.backgroundColor = startingBGColor;
    app.displayDialogs = savedDialogs
    doc.selection.deselect();
    folderCOLORS.visible = true
    if (checkIfHasItBaseFolder()){
        var folderBASE = doc.layerSets.getByName(readBaseFolderName())
        folderBASE.visible = true
    }
    alert("You succesfully set left upper corner for all " + readColorFolderName() + " layers")
}