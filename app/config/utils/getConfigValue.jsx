function getConfigValue(searchedPhrase) {

    var configFile = getConfigFile();

    if (!configFile.exists) {
        createConfigFile();
    }

    configFile.open("r");


    return getValueFromKey(searchedPhrase, configFile);
}
