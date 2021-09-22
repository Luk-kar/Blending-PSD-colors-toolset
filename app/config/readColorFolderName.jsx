var configDefaultValues = {
    fileStructure: {
        color_folder_name: "color_folder_name = "
    }
}

alert(readColorFolderName());

function readColorFolderName() {

    var searchedPhrase = configDefaultValues.fileStructure.color_folder_name;

    return getConfigValue(searchedPhrase);
}

function getConfigValue(searchedPhrase) {

    var configFile = getConfigFile();

    if (!configFile.exists) {
        createConfigFile();
    }

    configFile.open("r");


    return getValueFromKey(searchedPhrase, configFile);
}

function getValueFromKey(key, FileIni) {

    var lines = [];
    var lineNumber = 0;

    while (!FileIni.eof) {

        lines[lineNumber] = FileIni.readln();

        if (lines[lineNumber].search( key) != -1) {
            var matichingLine = (lines[lineNumber]);

            const regex = /[^= ]*$/g;
            var foundValue = matichingLine.match(regex)
            return foundValue;
        }

        lineNumber++;
    }
}

function createConfigFile() {
    var configDefaultText = "" +
        "[FILE STRUCTURE]\n" +
        "color_folder_name = COLORS\n" +
        "base_folder_name = BASE\n" +
        "layers = R, G, B\n" +
        "[COLORS RGB]\n" +
        "0 = 255, 0, 0\n" +
        "1 = 0, 255, 0\n" +
        "2 = 0, 0, 255";

    configFile.open("w");
    configFile.write(configDefaultText);
    configFile.close();
}

function getConfigFile() {
    var configFilePath = getConfigPath();

    var configFile = new File(configFilePath);
    return configFile;
}

function getConfigPath() {
    var configFileName = "config.ini";

    var congiFilePath = ((new File($.fileName)).parent.parent.parent).toString().replace(/\\/g, '/') + "/" + configFileName;
    return congiFilePath;
}
