#include "../../utils/getFullActivePSDPath.jsx"

function getCSVAndPSDDiffrentColorsFolders(CSVCOLORSFolders, foldersInCOLORS, CSV) { // todo

    var foldersInCOLORSNames = getFoldersInCOLORSNames(foldersInCOLORS);

    var CSVCOLORSFoldersNames = getCSVCOLORSFoldersNames(CSVCOLORSFolders);

    var diffrentColorFolders = "";
    var diffrentColorFoldersColumns = "file,diffrent folders\n";

    var diffrentCSVTitle = CSV.fullName + ",";

    var diffrentFoldersCSV = getDiffrentFoldersNames(foldersInCOLORSNames, CSVCOLORSFoldersNames)

    if (diffrentFoldersCSV) {
        diffrentColorFolders += diffrentCSVTitle + diffrentFoldersCSV;
    }

    var diffrentPSDTitle = "\n" + getFullActivePSDPath() + ",";
    var diffrentFoldersPSD = getDiffrentFoldersNames(CSVCOLORSFoldersNames, foldersInCOLORSNames) 

    if (diffrentFoldersPSD) {
        diffrentColorFolders += diffrentPSDTitle + diffrentFoldersPSD;
    }

    if (diffrentColorFolders) {

        diffrentColorFolders = "\n" + diffrentColorFoldersColumns + diffrentColorFolders;

        alert("Diffrent folders in psd than in chosen CSV:\n" +
            diffrentFoldersCSV + diffrentFoldersPSD
        );
    }

    return diffrentColorFolders;
}

function getCSVCOLORSFoldersNames(CSVCOLORSFolders) {
    var CSVCOLORSFoldersNames = [];
    for (var j = 1; j < CSVCOLORSFolders.length; j++) {
        CSVCOLORSFoldersNames.push(CSVCOLORSFolders[j][0]);
    }
    return CSVCOLORSFoldersNames;
}

function getFoldersInCOLORSNames(foldersInCOLORS) {
    var foldersInCOLORSNames = [];
    for (var i = 0; i < foldersInCOLORS.length; i++) {
        foldersInCOLORSNames.push(foldersInCOLORS[i].name);
    }
    return foldersInCOLORSNames;
}

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

    return diffrentFolders
}
