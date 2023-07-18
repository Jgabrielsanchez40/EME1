function saveEME1(data) {
    try {
        const sheet = obtenerSheet(env_().SH_REGISTRE_LOAD);
        Insert(JSON.parse(data), sheet);
        return {
            titulo:" Registro Exitoso",
            descripcion: "EME1 Cargado En Sistema"
        }
    } catch (error) {
        return {
            titulo: "Ha Ocurrido un Error! " + error,
            descripcion: "Datos No Almacenados, Intente Otra Vez"
        }
    }
}

function listarEME1(id = undefined) {
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRE_LOAD), id))
}

function cantRows() {
   return obtenerRows(env_().SH_REGISTRE_LOAD)
}

function perfil() {
    return perfilUsuario();
}

function saveFalla(data) {
    try {
        const { key, id, IVehiculo, DetalleFalla } = data
        const sheet = obtenerSheet(env_().SH_REGISTRE_DETALLEFALLA);
        sheet.appendRow([key, id, IVehiculo, DetalleFalla])
       // Insert(JSON.parse(data), sheet);
    } catch (error) {
       console.error(error)
    }
}

function listarFalla(id = undefined) {
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRE_DETALLEFALLA), id))
}

function listarVEH(id = undefined) {
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRE_VEHICULO), id))
}

function updateKM(vehiculo, km, kmNext = undefined) {
    try {
        const sheet = obtenerSheet(env_().SH_REGISTRE_VEHICULO);
        const cRows = obtenerRows(env_().SH_REGISTRE_VEHICULO);
        var veh = sheet.getDataRange().getValues();
        for(var i = 1; i < cRows; i++) {
            if(veh[i][1] == vehiculo)  { 
                var j = 1 + i;
                sheet.getRange(j, 3).setValue(km);
                if(kmNext) sheet.getRange(j, 4).setValue(kmNext);
        }
    }
        //updaData(vehiculo, km, sheet); 
    } catch (error) {
        console.error(error)
    }
}

function KM(vehiculo) {
    try {
        const sheet = obtenerSheet(env_().SH_REGISTRE_VEHICULO);
        const cRows = obtenerRows(env_().SH_REGISTRE_VEHICULO);
        var veh = sheet.getDataRange().getValues();
        for(var i = 1; i < cRows; i++) {
            if(veh[i][1] == vehiculo)  { 
                return veh[i][2]
        }
    }
    } catch (error) {
        console.error(error)
    }
}

function saveMANT(data) {
    try {
        const { key, fechaservicio, creadoPor, vehiculo, km, costo, detalle } = data
        const sheet = obtenerSheet(env_().SH_REGISTRE_SERVICIO);
        sheet.appendRow([key, fechaservicio, creadoPor, vehiculo, km, costo, detalle])
        return {
            titulo:" Registro Exitoso",
            descripcion: "Mantenimiento Cargado En Sistema"
        }
    } catch (error) {
        return {
            titulo: "Ha Ocurrido un Error! " + error,
            descripcion: "Datos No Almacenados, Intente Otra Vez"
        }
    }
}

function listarVEHmant(id = undefined) {
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRE_SERVICIO), id))
}