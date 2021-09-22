function getValueFromKey(key, FileIni) {

    var lines = [];
    var lineNumber = 0;

    while (!FileIni.eof) {

        lines[lineNumber] = FileIni.readln();

        if (lines[lineNumber].search(key) != -1) {
            var matichingLine = (lines[lineNumber]);

            const regex = /[^= ]*$/g;
            var foundValue = matichingLine.match(regex);
            return foundValue;
        }

        lineNumber++;
    }
}
