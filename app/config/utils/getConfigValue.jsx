#include "./getConfigFile.jsx"
#include "./createConfigFile.jsx"
#include "./getValueFromKey.jsx"

function getConfigValue(searchedPhrase) {

    var configFile = getConfigFile();

    if (!configFile.exists) {
        createConfigFile();
    }

    configFile.open("r");

    return getValueFromKey(searchedPhrase, configFile);
}
