#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "../../config/read/readColorFolderName.jsx"
#include "./helpers/setNamesToFolders.jsx"

function enumerateColorsFolders() {

    if(!isActiveDocument()) {
        alert("There is no active document!")
    }

    if(!checkIfHasItBlendingColorFolder()) {
        alert("There is no " + readColorFolderName() + " folder in top hierarchy!");
        return;
    }

    setNamesToFolders()

    alert("You succesfully enumerated all folders in " + readColorFolderName() + " folder!")
}
