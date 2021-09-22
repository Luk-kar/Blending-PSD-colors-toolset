#include "./checkIfThereIsTopFolder.jsx"
#include "../../config/readBaseFolderName.jsx"

function checkIfHasItBaseFolder() {

    var nameOfFolder = readBaseFolderName();

    return checkIfThereIsTopFolder(nameOfFolder);
}