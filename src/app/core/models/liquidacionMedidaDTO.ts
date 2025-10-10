export interface LiquidacionMedida {
    idLiquidacion:         number;
    idHechosMedida:        number;
    idHechos:              string;
    tipoMedida:            string;
    referenciaLiquidacion: string;
    aplicaProntoPago:      string;
    valorBase:             number;
    valorInterese:         number;
    valorProntoPago:       number;
    porcentajeIntereses:   number;
    valorFinalPago:        number;
    fechaProntoPago:       Date;
    fechaPagoPleno:        Date;
    fechaLiquidacion:      Date;
}