#include "./checkIfThereIsTopFolder.jsx"
#include "../../config/read/readColorFolderName.jsx"

function checkIfHasItBlendingColorFolder() {

    var nameOfFolder = readColorFolderName();

    return checkIfThereIsTopFolder(nameOfFolder);
}

