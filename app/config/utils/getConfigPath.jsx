function getConfigPath() {
    var configFileName = "config.ini";

    var congiFilePath = ((new File($.fileName)).parent.parent.parent).toString().replace(/\\/g, '/') + "/" + configFileName;
    return congiFilePath;
}
