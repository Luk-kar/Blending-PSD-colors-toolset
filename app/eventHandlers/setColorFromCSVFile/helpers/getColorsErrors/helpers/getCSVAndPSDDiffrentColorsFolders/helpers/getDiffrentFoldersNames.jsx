function getDiffrentFoldersNames(foldersNamesA, foldersNamesB) {

    var diffrentFolders = "";

    for (var k = 0; k < foldersNamesB.length; k++) {
        var thereIs = false;
        for (var l = 0; l < foldersNamesA.length; l++) {
            if (foldersNamesB[k] === foldersNamesA[l]) {
                thereIs = true;
                break;
            }
        }
        if (!thereIs) {
            diffrentFolders += foldersNamesB[k] + " ";
        }
    }

    return diffrentFolders;
}
