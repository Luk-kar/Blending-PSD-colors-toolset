#include "../../../utils/checkIfHasItBaseFolder.jsx"

function createBASEFolderIfNotExists() {
    var doc = app.activeDocument;

    var hasItBaseFolder = checkIfHasItBaseFolder();
    if (hasItBaseFolder) {
        alert('There is already "BASE" folder in top hierarchy');

    } else {
        var BASEFolder = doc.layerSets.add();
        BASEFolder.name = "BASE";
    }
}
