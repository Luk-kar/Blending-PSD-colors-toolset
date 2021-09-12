function saveFileToPNG24(saveFile) {

    var PNGOptions = new PNGSaveOptions;

    PNGOptions.compression = 9;

    PNGOptions.interlaced = false;

    activeDocument.saveAs(saveFile, PNGOptions, true, Extension.LOWERCASE);

}
