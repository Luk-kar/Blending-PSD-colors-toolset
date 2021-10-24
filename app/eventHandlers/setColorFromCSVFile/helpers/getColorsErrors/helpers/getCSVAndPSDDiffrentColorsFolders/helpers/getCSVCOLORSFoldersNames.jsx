function getCSVCOLORSFoldersNames(CSVCOLORSFolders) {
    var CSVCOLORSFoldersNames = [];
    for (var j = 1; j < CSVCOLORSFolders.length; j++) {
        CSVCOLORSFoldersNames.push(CSVCOLORSFolders[j][0]);
    }
    return CSVCOLORSFoldersNames;
}
