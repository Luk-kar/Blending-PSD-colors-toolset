function checkIsFolder(folderWithFolders, folderName) {

    for (var j = 0; j < folderWithFolders.length; j++) {
        if (folderWithFolders[j].name === folderName) {
            return true;
        }
    }

    return false;
}
