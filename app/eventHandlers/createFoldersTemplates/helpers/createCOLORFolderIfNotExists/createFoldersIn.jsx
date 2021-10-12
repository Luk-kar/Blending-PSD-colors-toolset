#include "../../../../config/read/readFoldersInColorFolder.jsx"

function createFoldersIn(COLORSFolder) {

    var folders = [];
    var foldersNames = readFoldersInColorFolder().reverse();

    for (var i = 0; i < foldersNames.length; i++) {
        var folder = COLORSFolder.layerSets.add();
        folder.name = foldersNames[i];
        folders.push(folder);
    }

    return folders;
}
