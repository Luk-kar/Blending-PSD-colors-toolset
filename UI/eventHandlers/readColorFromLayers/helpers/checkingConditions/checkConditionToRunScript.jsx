#include "../../../utils/checkIfHasItBlendingColorFolder.jsx";

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

    var hasItBlendingColorsFolder = checkIfHasItBlendingColorFolder();
    if (!hasItBlendingColorsFolder) {
        return alert('Warning! There is NO "COLORS" folder in top hierarchy!');
    }
    var COLORSFolder = doc.layerSets.getByName("COLORS");

    var returned = {};
    returned.existingDoc = doc;
    returned.existingDocPath = docPath;
    returned.existingCOLORSFolder = COLORSFolder;

    return returned;
}
