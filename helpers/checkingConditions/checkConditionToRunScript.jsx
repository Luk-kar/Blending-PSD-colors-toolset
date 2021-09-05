function checkConditionToRunScript() {
    
    try {
        var doc = app.activeDocument;
    } catch (error) {
        throw new Error("You do not have any opened file!");
    }

    try {
        var docPath = doc.fullName;
    } catch (error) {
        throw new Error("To make use of the script, save the document on a drive first.");
    }

    var COLORSFolder = doc.layerSets.getByName("COLORS");

    if (!COLORSFolder) {
        throw new Error("To make use of the script, save the document on a drive first.");
    }

    var returned = {};
    returned.existingDoc = doc;
    returned.existingDocPath = docPath;
    returned.existingCOLORSFolder = COLORSFolder;

    return returned;
}
