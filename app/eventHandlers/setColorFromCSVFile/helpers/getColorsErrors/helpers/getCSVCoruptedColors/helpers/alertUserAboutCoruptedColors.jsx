function alertUserAboutCoruptedColors(corruptedColorsCounter) {

    var PluralOrSingular = "";
    if (corruptedColorsCounter === 1) {
        PluralOrSingular = "color is ";
    } else {
        PluralOrSingular = "colors are ";
    }

    alert(corruptedColorsCounter + " " + PluralOrSingular + "corrupted in chosen CSV file");

}
