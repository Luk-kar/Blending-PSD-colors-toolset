function getConfigPath() {
    var configFileName = "config.ini";
    var root = (new File($.fileName)).parent.parent.parent.parent.parent.toString().replace(/\\/g, '/') + "/";

    var congiFilePath = root + configFileName;
    return congiFilePath;
}
