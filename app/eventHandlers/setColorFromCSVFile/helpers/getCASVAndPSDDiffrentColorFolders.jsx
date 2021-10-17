#include "./getFullActivePSDPath.jsx"

function getCASVAndPSDDiffrentColorFolders(foldersInCOLORS, COLORSFolders, CSV) {

    var foldersInCOLORSNames = [];
    for (var i = 0; i < foldersInCOLORS.length; i++) {
        foldersInCOLORSNames.push(foldersInCOLORS[i].name);
    }
    var COLORSFoldersNames = [];
    for (var j = 1; j < COLORSFolders.length; j++) {
        COLORSFoldersNames.push(COLORSFolders[j][0]);
    }

    var diffrentColorFolders = "";
    var diffrentColorFoldersColumns = "file,diffrent folders\n";

    var diffrentCSVTitle = CSV.fullName + ",";
    var diffrentFoldersCSV = "";

    for (var k = 0; k < COLORSFoldersNames.length; k++) {
        var thereIs = false;
        for (var l = 0; l < foldersInCOLORSNames.length; l++) {
            if (COLORSFoldersNames[k] === foldersInCOLORSNames[l]) {
                thereIs = true;
                break;
            }
        }
        if (!thereIs) {
            diffrentFoldersCSV += COLORSFoldersNames[k] + " ";
        }
    }

    if (diffrentFoldersCSV) {
        diffrentColorFolders += diffrentCSVTitle + diffrentFoldersCSV;
    }

    var diffrentPSDTitle = "\n" + getFullActivePSDPath() + ",";
    var diffrentFoldersPSD = "";

    for (var k = 0; k < foldersInCOLORSNames.length; k++) {
        var thereIs = false;
        for (var l = 0; l < COLORSFoldersNames.length; l++) {
            if (foldersInCOLORSNames[k] === COLORSFoldersNames[l]) {
                thereIs = true;
                break;
            }
        }
        if (!thereIs) {
            diffrentFoldersPSD += foldersInCOLORSNames[k] + " ";
        }
    }

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
