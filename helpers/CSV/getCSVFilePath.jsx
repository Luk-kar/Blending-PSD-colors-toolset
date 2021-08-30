function getCSVFilePath() {

    var doc = app.activeDocument;
    var name = doc.name.replace(/\.[^\.]+$/, '');
    var ext = decodeURI(doc.name).replace(/^.*\./, '');
    if (ext.toLowerCase() != 'psd')
        return alert("document is not saved!\nSave document on disk first!");

    var docPath = doc.path;
    var scvPath = docPath + "/" + name + ".csv";

    return scvPath;
}
