function makeSureIfSavedBeforeChangingFile() {
    var doc = app.activeDocument;

    var saveFile = confirm("Do you want to save file? File will be closed without saving and reopen after executing script.", true, "Warning!");
    if (saveFile) {
        doc.save();
    }
}
