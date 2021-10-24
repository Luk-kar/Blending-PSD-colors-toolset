#include "./helpers/getFoldersInCOLORSNames.jsx"
#include "./helpers/getCSVCOLORSFoldersNames.jsx"
#include "./helpers/getDiffrentFoldersNames.jsx"
#include "../../../utils/getFullActivePSDPath.jsx"

function getCSVAndPSDDiffrentColorsFolders(CSVCOLORSFolders, foldersInCOLORS, CSV) {

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