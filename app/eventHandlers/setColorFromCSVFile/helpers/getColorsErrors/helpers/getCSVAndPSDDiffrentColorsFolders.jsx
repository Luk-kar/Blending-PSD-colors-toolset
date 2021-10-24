#include "../../utils/getFullActivePSDPath.jsx"

function getCSVAndPSDDiffrentColorsFolders(CSVCOLORSFolders, foldersInCOLORS, CSV) { // todo

    var foldersInCOLORSNames = getFoldersInCOLORSNames(foldersInCOLORS);

    var CSVCOLORSFoldersNames = getCSVCOLORSFoldersNames(CSVCOLORSFolders);

    var diffrentColorFolders = "";
    var diffrentColorFoldersColumns = "file,diffrent folders\n";

    var diffrentCSVTitle = CSV.fullName + ",";

    var diffrentFoldersCSV = getDiffrentDiffrentFoldersCSV(CSVCOLORSFoldersNames, foldersInCOLORSNames)

    if (diffrentFoldersCSV) {
        diffrentColorFolders += diffrentCSVTitle + diffrentFoldersCSV;
    }

    var diffrentPSDTitle = "\n" + getFullActivePSDPath() + ",";
    var diffrentFoldersPSD = getDiffrentFoldersPSD(CSVCOLORSFoldersNames, foldersInCOLORSNames) 

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

function getDiffrentDiffrentFoldersCSV(CSVCOLORSFoldersNames, foldersInCOLORSNames) {

    var diffrentFoldersCSV = "";

    for (var i = 0; i < CSVCOLORSFoldersNames.length; i++) {
        var thereIs = false;
        for (var l = 0; l < foldersInCOLORSNames.length; l++) {
            if (CSVCOLORSFoldersNames[i] === foldersInCOLORSNames[l]) {
                thereIs = true;
                break;
            }
        }
        if (!thereIs) {
            diffrentFoldersCSV += CSVCOLORSFoldersNames[i] + " ";
        }
    }

    return diffrentFoldersCSV
}

function getDiffrentFoldersPSD(CSVCOLORSFoldersNames, foldersInCOLORSNames) {

    var diffrentFoldersPSD = "";

    for (var k = 0; k < foldersInCOLORSNames.length; k++) {
        var thereIs = false;
        for (var l = 0; l < CSVCOLORSFoldersNames.length; l++) {
            if (foldersInCOLORSNames[k] === CSVCOLORSFoldersNames[l]) {
                thereIs = true;
                break;
            }
        }
        if (!thereIs) {
            diffrentFoldersPSD += foldersInCOLORSNames[k] + " ";
        }
    }

    return diffrentFoldersPSD
}
