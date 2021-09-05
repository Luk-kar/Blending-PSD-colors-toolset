function isActiveDocument() {
    if (app.documents.length != 0) {
        return true;
    } else {
        alert("You do not have any opened file!");
        return false;
    }
}
