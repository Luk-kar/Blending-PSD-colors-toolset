$.level = 0; // Debugging level, Level: 0 - No Break, 1 - Break, 2 - Immediate Break

#include "./helpers/changeLayersFolderAttributes/prearrangeDocToProcess.jsx"
#include "./helpers/casting/convertValueStringToInt.jsx"
#include "./helpers/CSV/writeValuesToCSV"
#include "./UI/mainMenu.jsx"

function main() {
    try {
        var doc = app.activeDocument;
    } catch (error) {
        return alert("You do not have any opened file!")
    }

    mainMenu();
    return;

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

    prearrangeDocToProcess(COLORSFolder, RGBfolders);

    var HexColorValues = getAllHexValues(RGBfolders);

    var promise = writeValuesToCSV(HexColorValues);
    alert(promise);

    // reset file
    doc.close(SaveOptions.DONOTSAVECHANGES);
    // reload to stage before processing file
    app.open(File(docPath));
}

main();