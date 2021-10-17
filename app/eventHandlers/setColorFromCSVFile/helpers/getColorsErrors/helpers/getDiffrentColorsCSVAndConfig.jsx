function getDiffrentColorsCSVAndConfig(CSV, configColorsTypes) { //todo

    var CSVToReturn = "";
    var wrongColorsNames = "";


    CSV.open("r");
    var columnLine = CSV.readln();
    var chosenCSVColors = columnLine.slice(columnLine.split(",")[0].length + 1, columnLine.length).split(",");
    CSV.close();

    for (var i = 0; i < chosenCSVColors.length; i++) {
        var chosenColor = chosenCSVColors[i];

        var thereIs = false;
        for (var j = 0; j < configColorsTypes.length; j++) {
            var configColor = configColorsTypes[j];

            if (chosenColor === configColor) {
                thereIs = true;
                break;

            }
        }

        if (!thereIs) {
            wrongColorsNames += chosenColor + " ";
        }
    }

    for (var k = 0; k < configColorsTypes.length; k++) {
        var configColor = configColorsTypes[k];

        var thereIs = false;
        for (var l = 0; l < chosenCSVColors.length; l++) {
            var chosenColor = chosenCSVColors[l];

            if (configColor === chosenColor) {
                thereIs = true;
                break;
            }
        }

        if (!thereIs) {
            wrongColorsNames += configColor + " ";
        }
    }

    if (wrongColorsNames) {
        CSVToReturn += "\n" +
            "\ndiffrent chosen CSV colors and CSV config colors\n" +
            "chosen CSV," + CSV.fullName + "\n" +
            "config CSV," + getConfigPath() + "\n" +
            "colors," + wrongColorsNames;
    }

    return CSVToReturn;
}
