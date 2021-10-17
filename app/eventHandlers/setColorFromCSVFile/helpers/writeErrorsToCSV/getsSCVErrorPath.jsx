function getsSCVErrorPath(corruptedFilePath) {
    return corruptedFilePath.slice(0, corruptedFilePath.length - 4) + "_errors.csv";
}
