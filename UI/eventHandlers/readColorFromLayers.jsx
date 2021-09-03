#include "../../helpers/changeLayersFolderAttributes/prearrangeDocToProcess.jsx"
#include "../../helpers/CSV/writeValuesToCSV.jsx"
#include "../../helpers/gettingColorHexValues/getAllHexValues.jsx"
#include "../../helpers/CSV/writeCSVColumns.jsx"
#include "../../helpers/CSV/getCSVpath.jsx"

function readColorFromLayers() {
    try {
        var doc = app.activeDocument;
    } catch (error) {
        return alert("You do not have any opened file!")
    }

    try {
        var docPath = doc.fullName;
    } catch (error) {
        return alert("To make use of the script, save the document on a drive first.");
    }

    var saveFile = confirm("Do you want to save file? File will be closed without saving and reopen after executing script.", true, "Warning!");
    if (saveFile) {
        doc.save();
    }

    var COLORSFolder = doc.layerSets.getByName("COLORS");

    if (!COLORSFolder) {
        return alert('No "COLORS" folder in top hierarchy');
    }
    
    var RGBfolders = COLORSFolder.layerSets;

    var layersNames = ["R", "G", "B"];

    prearrangeDocToProcess(COLORSFolder, RGBfolders, layersNames);

    writeCSVColumns(layersNames);

    getAllHexValues(RGBfolders, layersNames);

    alert("You successfully saved values to " + getCSVpath());

    // reset file
    doc.close(SaveOptions.DONOTSAVECHANGES);
    // reload to stage before processing file
    app.open(File(docPath));
}