#include "../../../utils/checkIfHasItBaseFolder.jsx"
#include "../../../../config/read/readBaseFolderName.jsx"

function createBASEFolderIfNotExists() {
    var doc = app.activeDocument;

    var hasItBaseFolder = checkIfHasItBaseFolder();
    if (hasItBaseFolder) {
        alert('There is already "' + readBaseFolderName() + '" folder in top hierarchy');

    } else {
        var BASEFolder = doc.layerSets.add();
        BASEFolder.name = readBaseFolderName();
    }
}
