#include "./checkIfThereIsTopFolder.jsx"
#include "../../config/read/readBaseFolderName.jsx"

function checkIfHasItBaseFolder() {

    var nameOfFolder = readBaseFolderName();

    return checkIfThereIsTopFolder(nameOfFolder);
}