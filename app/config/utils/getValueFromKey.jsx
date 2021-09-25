function getValueFromKey(key, FileIni) {

    var lines = [];
    var lineNumber = 0;

    while (!FileIni.eof) {

        lines[lineNumber] = FileIni.readln();

        if (lines[lineNumber].search(key) === 0) {
            var matichingLine = (lines[lineNumber]);

            const regex = / \= (.*)/g; // https://regex101.com/r/n91i7K/1
            var foundValue = matichingLine.match(regex).toString().substring(3);
            return foundValue;
        }

        lineNumber++;
    }
}
