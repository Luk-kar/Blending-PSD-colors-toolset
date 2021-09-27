function setColorFromCSVFile() {

    var CSV = File.openDialog("Select csv file", "*.csv", false);

    var lines = [];
    var lineNumber = 0;

    CSV.open("r");

    var header ="groups, R ,G ,B ,";

    while (!CSV.eof) {

        var line = CSV.readln();
        

        if (line !== header) {
            lines[lineNumber] = line
            lineNumber++;
        }
    }

    CSV.close();

    for (var i =0; i < lines.length; i++) {
        var elements = lines[i].split(",")

        for (var j =0; j < elements.length; j++) {
            alert(elements[j])
        }
    }
}