#include "./checkIfThereIsTopFolder.jsx"
#include "../../config/readColorFolderName.jsx"

function checkIfHasItBlendingColorFolder() {

    var nameOfFolder = readColorFolderName();

    return checkIfThereIsTopFolder(nameOfFolder);
}

