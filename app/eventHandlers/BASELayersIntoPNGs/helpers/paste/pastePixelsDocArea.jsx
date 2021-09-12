function pastePixelsDocArea() {
    var idpast = charIDToTypeID("past");
    var desc6 = new ActionDescriptor();
    var idinPlace = stringIDToTypeID("inPlace");
    desc6.putBoolean(idinPlace, true);
    var idAntA = charIDToTypeID("AntA");
    var idAnnt = charIDToTypeID("Annt");
    var idAnno = charIDToTypeID("Anno");
    desc6.putEnumerated(idAntA, idAnnt, idAnno);
    executeAction(idpast, desc6, DialogModes.NO);
}
