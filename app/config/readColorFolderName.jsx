$.level = 1; // Debugging level, Level: 0 - No Break, 1 - Break, 2 - Immediate Break

var configDefaultValues = {
    fileStructure: {
        title: "FILE STRUCTURE",
        color_folder_name: {
            key: "color_folder_name",
            value: "COLORS"
        },
        base_folder_name: {
            key: "base_folder_name",
            value: "BASE"
        },
        layers: {
            key: "layers",
            value: "R, G, B"
        }
    },
    colorsRGB:{
        title: "COLORS RGB",
        R: {
            key: "0",
            value: "255, 0, 0"
        },
        G: {
            key: "1",
            value: "0, 255, 0"
        },
        B: {
            key: "2",
            value: "0, 0, 255"
        }
    }
}

alert(readColorFolderName());

function readColorFolderName() {

    var searchedPhrase = configDefaultValues.fileStructure.color_folder_name.key;

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

    var configFile = getConfigFile();

    var configDefaultText = "" +
        "["+ configDefaultValues.fileStructure.title + "]\n" +
        configDefaultValues.fileStructure.color_folder_name.key + " = " + configDefaultValues.fileStructure.color_folder_name.value + "\n" +
        configDefaultValues.fileStructure.base_folder_name.key + " = " + configDefaultValues.fileStructure.base_folder_name.value + "\n" +
        configDefaultValues.fileStructure.layers.key + " = " + configDefaultValues.fileStructure.layers.value + "\n" +
        "[" + configDefaultValues.colorsRGB.title + "]\n" +
        configDefaultValues.colorsRGB.R.key + " = " + configDefaultValues.colorsRGB.R.value + "\n" +
        configDefaultValues.colorsRGB.G.key + " = " + configDefaultValues.colorsRGB.G.value + "\n" +
        configDefaultValues.colorsRGB.B.key + " = " + configDefaultValues.colorsRGB.B.value + "\n";

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
