function selectAll() {
    var idsetd = charIDToTypeID("setd");
    var desc1 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref1 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref1.putProperty(idChnl, idfsel);
    desc1.putReference(idnull, ref1);
    var idT = charIDToTypeID("T   ");
    var idOrdn = charIDToTypeID("Ordn");
    var idAl = charIDToTypeID("Al  ");
    desc1.putEnumerated(idT, idOrdn, idAl);
    executeAction(idsetd, desc1, DialogModes.NO);
}
