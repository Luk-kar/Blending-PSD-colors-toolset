#include "./helpers/setLayersToBeEditable.jsx"
#include "./helpers/setColoredLeftUpperPixel.jsx"

function setLeftUpperPixelInCOLORS() {

    //isDoc todo
    //areLayes todo
    var doc = app.activeDocument

    var folderCOLORS = doc.layerSets.getByName("COLORS")
    var COLORSfolders = folderCOLORS.layerSets

    // Set app settings
    var startingFGColor = app.foregroundColor;
    var startingBGColor = app.backgroundColor;
    var savedDialogs = app.displayDialogs
    app.displayDialogs = DialogModes.ALL;

    var layersNames = ["R", "G", "B"] //read layers todo
    setLayersToBeEditable(COLORSfolders, layersNames);
    setColoredLeftUpperPixel(COLORSfolders, layersNames);

    // Restore app settings
    app.foregroundColor = startingFGColor;
    app.backgroundColor = startingBGColor;
    app.displayDialogs = savedDialogs
    doc.selection.deselect();
    folderCOLORS.visible = true
    // if base is base todo
    var folderBASE = doc.layerSets.getByName("BASE")
    folderBASE.visible = true

    alert("You succesfully set left upper corner for all COLORS layers")
}