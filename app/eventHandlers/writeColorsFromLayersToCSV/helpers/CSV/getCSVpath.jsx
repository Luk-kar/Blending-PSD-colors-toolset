function getCSVpath() {
    var doc = app.activeDocument;
    var fileName = doc.name.replace(/\.[^\.]+$/, '');
    var fileExt = decodeURI(doc.name).replace(/^.*\./, '');
    if (fileExt.toLowerCase() != 'psd')
        return alert("document is not saved!\nSave document on disk first!");

    var docFolderPath = doc.path;
    var scvPath = docFolderPath + "/" + fileName + ".csv";
    return scvPath;
}
