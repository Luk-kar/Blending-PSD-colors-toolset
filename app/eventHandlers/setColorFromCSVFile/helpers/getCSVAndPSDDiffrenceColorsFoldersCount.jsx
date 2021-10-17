#include "./getFullActivePSDPath.jsx"

function getCSVAndPSDDiffrenceColorsFoldersCount(COLORSFolders, foldersInCOLORS, CSV) {

    var COLORSFoldersLen = COLORSFolders.length - 1; // first line is columns

    if (COLORSFoldersLen !== foldersInCOLORS.length) {

        alert("There is diffrent number of color folders between the chosen CSV file and the PSD:\n" +
            "The chosen CSV file: " + COLORSFoldersLen + "\n" +
            "The PSD file: " + foldersInCOLORS.length + "\n" +
            "The diffrence: " + Math.abs(COLORSFoldersLen - foldersInCOLORS.length)
        );

        return "\n" +
            "file,number of folders\n" +
            CSV.fullName + "," + COLORSFoldersLen + "\n" +
            getFullActivePSDPath() + "," + foldersInCOLORS.length + "\n" +
            "The diffrence," + Math.abs(COLORSFoldersLen - foldersInCOLORS.length) +
            "\n";
    }

    return "";
}
