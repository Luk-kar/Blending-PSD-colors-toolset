function createFolderIn(COLORSFolder) {

    var folders = [];
    var foldersNames = ["1"].reverse();

    for (var i = 0; i < foldersNames.length; i++) {
        var folder = COLORSFolder.layerSets.add();
        folder.name = foldersNames[i];
        folders.push(folder);
    }

    return folders;
}
