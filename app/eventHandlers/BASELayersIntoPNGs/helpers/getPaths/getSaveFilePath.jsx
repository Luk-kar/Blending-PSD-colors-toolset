function getSaveFilePath(layer, folderPath) {

    var layerName = layer.name;
    var savePath = folderPath + "/" + layerName + ".png";
    var saveFile = File(savePath);

    incrementFileNameIfExists();
    return saveFile;

    function incrementFileNameIfExists() {
        var num = 0;
        while (saveFile.exists) {
            num += 1;
            savePath = folderPath + "/" + layerName + "(" + num + ").png";
            saveFile = File(savePath);
        }
    }
}
