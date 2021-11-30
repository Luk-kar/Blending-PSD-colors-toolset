#include "../../utils/getFoldersInCOLORSFolder.jsx"

function setNamesToFolders() {

    var foldersInCOLORSFolder = getFoldersInCOLORSFolder();

    var counter = 1;

    for (var i = foldersInCOLORSFolder.length - 1; i >= 0; i--) {

        var COLORFolder = foldersInCOLORSFolder[i];
        COLORFolder.name = counter.toString();
        counter++;
    }
}
