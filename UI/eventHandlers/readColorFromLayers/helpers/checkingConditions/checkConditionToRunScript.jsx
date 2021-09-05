function checkConditionToRunScript() {
    
    try {
        var doc = app.activeDocument;
    } catch (error) {
        return alert("You do not have any opened file!");
    }

    try {
        var docPath = doc.fullName;
    } catch (error) {
        return alert("To make use of the script, save the document on a drive first.");
    }

    var COLORSFolder = doc.layerSets.getByName("COLORS");

    if (!COLORSFolder) {
        return alert("To make use of the script, save the document on a drive first.");
    }

    var returned = {};
    returned.existingDoc = doc;
    returned.existingDocPath = docPath;
    returned.existingCOLORSFolder = COLORSFolder;

    return returned;
}
