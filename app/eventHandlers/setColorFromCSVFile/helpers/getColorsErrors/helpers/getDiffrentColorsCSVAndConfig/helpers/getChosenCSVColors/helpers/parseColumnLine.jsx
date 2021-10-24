function parseColumnLine(columnLine) {
    return columnLine.slice(columnLine.split(",")[0].length + 1, columnLine.length).split(",");
}
