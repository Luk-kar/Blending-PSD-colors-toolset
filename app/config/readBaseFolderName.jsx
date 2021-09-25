#include "./utils/getConfigValue.jsx"
#include "./configDefaultValues.jsx"

function readBaseFolderName() {

    var searchedPhrase = configDefaultValues.fileStructure.base_folder.name.key;

    return getConfigValue(searchedPhrase);
}