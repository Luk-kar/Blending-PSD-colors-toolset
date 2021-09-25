#include "../../../../config/readFoldersInColorFolder.jsx"

function createFolderIn(COLORSFolder) {

    var folders = [];
    var foldersNames = readFoldersInColorFolder().reverse();

    for (var i = 0; i < foldersNames.length; i++) {
        var folder = COLORSFolder.layerSets.add();
        folder.name = foldersNames[i];
        folders.push(folder);
    }

    return folders;
}
