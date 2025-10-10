export interface evaluacion {
    idExpediente:             number;
    apelacion:                string;
    aplicaMedida:             string;
    atiendeApelacion:         string;
    codigoMunDane:            string;
    cnpArt:                   string;
    cnpNum:                   string;
    cnpLit:                   string;
    direccionGps:             string;
    direccion:                string;
    idDepartamento:           string;
    codigoDtoDane:            string;
    idEntidadRemiteApelacion: number;
    idEstado:                 number;
    estado:                   string;
    expediente:               string;
    fecha:                    Date;
    fechaCreacionHechos:      Date;
    idBarrio:                 number;
    idComportamiento:         number;
    idHechos:                 string;
    latitud:                  string;
    longitud:                 string;
    numeroFormato:            string;
    vigente:                  number;
    idLocalidad:              string;
    idMunicipio:              number;
    lugar:                    string;
    personas:                 Persona[];
    medidas:                  Medida[];
    fallo:                    Fallo;
}

export interface Medida {
    idHechosMedida: number;
    idMedida:       number;
    atribucion:     string;
    medida:         string;
    comportamiento: string;
    reincidencia:   string;
    estado:         string;
    idEstado:       number;
    idHechos:       number;
}

export interface Fallo{
    idFalloInspector:        number;  //
    idHechos:                string;
    idHechoMedida:           number;
    fechaFirmeza:            Date;
    tipoSalario:             number;
    numeroSalarios:          number;
    nombreInspector:         string;
    numeroInspeccion:        number;
    localidadComuna:         string;
    documentoFallo:          string;
    estado:                  string;
    fechaCreacion:           Date;
    desicion:                string;
    expediente:              number;

}

export interface Persona {
    idHecho:                     string;
    idPersona:                   number;
    idTipoPersona:               number;
    tipoPersona:                 string;
    nombre:                      string;
    apellido:                    string;
    edad:                        number;
    telefono:                    string;
    direccion:                   string;
    poblacionVulnerable:         string;
    correo:                      string;
    paisReside:                  string;
    municipioReside:             string;
    idBarrioReside:              null;
    numeroDocumento:             string;
    idTipoDocumento:             number;
    tipoDocumento:               string;
    identificacion:              string;
    idTipoDocumentoRep:          number;
    direccionReside:             string;
    representante:               string;
    identificacionRepresentante: string;
    edadRepresentante:           number;
    nacionalidad:                string;
    actividadComercial:          string;
    direccionRazon:              string;
    nit:                         string;
    razonSocial:                 string;
    telefonoRazon:               null;
    departamentoReside:          string;
    email:                       string;
}