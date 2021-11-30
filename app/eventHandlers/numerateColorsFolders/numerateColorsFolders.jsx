#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "../../config/read/readColorFolderName.jsx"

function numerateColorsFolders() {

    var COLORSFolderName = readColorFolderName();

    if(!isActiveDocument()) {
        alert("There is no active document!")
    }

    if(!checkIfHasItBlendingColorFolder()) {
        alert("There is no " + readColorFolderName() + " folder in top hierarchy!");
        return;
    }
}