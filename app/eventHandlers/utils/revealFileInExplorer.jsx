function revealFileInExplorer(filePath) {
    if (filePath instanceof File) {
        filePath = filePath.fsName;
    }

    var command = "open -R";
    if ($.os.indexOf("Win") != -1) {
        command = "Explorer /select,";
    }
    arg = "\"" + filePath + "\"";
    return app.system(command + " " + arg);
}
