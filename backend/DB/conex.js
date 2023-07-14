function conexion() {
    return SpreadsheetApp.openById(env_().ID_DATABASE);
}

function obtenerSheet(NAME) {
    return conexion().getSheetByName(NAME);
}

function obtenerDatos(NAME) {
    return obtenerSheet(NAME).getDataRange().getDisplayValue();
}

function obtenerRows(NAME) {
    return obtenerSheet(NAME).getLastRow();
}

function perfilUsuario() {
    return Session.getActiveUser().getEmail()
}