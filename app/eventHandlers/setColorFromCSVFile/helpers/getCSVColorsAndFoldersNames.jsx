function getCSVColorsAndFoldersNames(CSV) {

    var rows = [];
    var rowNumber = 0;

    CSV.open("r");

    while (!CSV.eof) {

        var line = CSV.readln();

        rows[rowNumber] = line.split(",");
        rowNumber++;
    }

    CSV.close();

    return rows;
}
