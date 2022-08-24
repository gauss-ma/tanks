//Cálculos AP-42 Capítulo 7=============================================================================

//Eq1_1 Pérdidas totales desde tanques de techo fijo (o.totalLosses) (lbs/yr)
function Eq1_1() {

	Eq1_4();	//ecuacion general de Standing Losses (Pérdidas durante el almacenamiento)
	Eq1_35();	//ecuacion general de Working Losses (Pérdidas por llenado y vaciado del tanque)
	
	o.totalLosses = o.standingLosses + o.workingLosses;
}

//La Eq1_2 se omitió porque la Eq1_4 es la combinación de Eq1_2 y Eq1_3

//Eq1_3 Volumen de la fase vapor (t.vaporSpaceVolume) (ft3)
function Eq1_3() {
	t.vaporSpaceVolume=(Math.PI*Math.pow(t.effectiveDiameter,2)/4)*t.vaporSpaceOutage;
}

//Eq1_4 Standing Losses: Pérdidas durante el almacenamiento desde tanques de techo fijo (o.standingLosses) (lbs/yr)
function Eq1_4() {

	if ( t.insulation == "underground" ||  t.insulation == "shellAndRoof" ) { 	
		t.insulated = "full";	//Los tanques subterráneos son considerados como si tuvieran aislamiento térmico total
	} else {
		t.insulated=t.insulation			
	}

	if (t.heating.cyclesPerYear != "" && isNaN(t.heating.cyclesPerYear) == false) {
		t.heating.cyclesPerYear = parseFloat(t.heating.cyclesPerYear);
	} else {
		t.heating.cyclesPerYear = 365;	//Si el usuario no ingresa el dato, se asume que el líquido se calienta una vez por día, es decir, 365 veces al año.
	}
	
	Eq1_14();	//Obtiene el diámetro o el diámetro efectivo (según si el tanque es vertical u horizontal) (feet)
	Eq1_16();	//Obtiene la altura de la columna de vapor (t.vaporSpaceOutage) (tanto para tanques horizontales como verticales) (feet)
	Eq1_5();	//Obtiene la fracción del vapor dentro del tanque que se pierde diariamente al exterior (vaporExpansionFactor) (dimensionless)
	Eq1_21();	//Obtiene el factor de saturación del vapor que se pierde al exterior (ventedVapSatFactor) (dimensionless)
	Eq1_22();	//Obtiene la densidad del vapor dentro del tanque (vaporDensity) (lbs/ft^3)
	Eq1_3();	//Obtiene el volumen de la fase vapor (t.vaporSpaceVolume) (ft3)
	
	if (t.insulation == "underground" && t.type == "VFR" && t.heating.heating == false) {
		o.standingLosses = 0;
	} else {
		Eq1_3(); //Obtiene el volumen de la fase vapor (t.vaporSpaceVolume) (ft3)
		//Eq1_4
		o.standingLosses = t.heating.cyclesPerYear * vaporExpansionFactor * (Math.PI * Math.pow(t.effectiveDiameter,2) / 4) * t.vaporSpaceOutage * ventedVapSatFactor * vaporDensity;
	}
}

//Eq1_5 Fracción del vapor dentro del tanque que se pierde diariamente al exterior (vaporExpansionFactor) [prefered method]
function Eq1_5() {

	Eq1_30();	//Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (degrees R)
	Eq1_31();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (degrees R)
	Eq1_27();	//Obtiene la temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (degrees R)
	
	//Calcula la presión de vapor del compuesto (c.vaporPressure) a la temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp)
	if (liquidCategory == "Crude Oils") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_16();	//Calcula las constantes de la Ecuación de Antoine para petróleos crudos
			c.vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_13b (en lugar de la Eq1_25)
		} else {
			c.vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else if (liquidCategory == "Refined Petroleum Liquids") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_15();	//Calcula las constantes de la Ecuación de Antoine para combustibles refinados
			c.vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_14b (en lugar de la Eq1_25)
		} else {
			c.vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else {
		c.vaporPressure = Eq1_26(avgSurfaceTemp);	//Calcula la presión de vapor de otros líquidos orgánicos
	}
	
	Eq1_6();	//Obtiene la variación diaria promedio de la temperatura del vapor (avgVapTempRange) (degrees R)
	Eq1_9();	//Obtiene la variación diaria promedio de la presión de vapor (avgVapPressureRange) (psia)
	Eq1_10();	//Obtiene el rango de presión que están ajustadas para soportar las válvulas de ventilación (ventPressureRange) (psig)
	
	//Eq1_5
	vaporExpansionFactor = (avgVapTempRange / avgSurfaceTemp) + ((avgVapPressureRange - ventPressureRange) / (m.atmPressure - c.vaporPressure));
	
	if (vaporExpansionFactor > 1) {
		vaporExpansionFactor = 1;
	} else if (vaporExpansionFactor < 0) {
		vaporExpansionFactor = 0;
	}
}

//Eq1_6 Variación diaria promedio de la temperatura del vapor (avgVapTempRange) (degrees R) [prefered method]
function Eq1_6() {
	
	Eq1_11();	//Obtiene la variación diaria promedio de la temperatura ambiente (avgAmbientTempRange) (degrees R)
	
	if (t.insulated == "shell") {
		Eq1_8();
	} else if (t.insulated == "full") {
		if (t.heating.heating == false ) {
			avgVapTempRange = 0;
		} else {
			Eq8_1();	//en tanques con aislamiento térmico total y calentamiento, la variación en la temperatura del vapor será igual a la variación en la temperatura en el seno del líquido por el calentamiento (sección 7.1.3.8.4 del AP-42)
		}
	} else {
		//en tanques sin aislamiento térmico, la variación en la temperatura del vapor depende del intercambio de calor con el exterior.
		avgVapTempRange = ((1- (0.8 / (2.2 * (t.height / t.diameter) + 1.9))) * avgAmbientTempRange) + (((0.042 * aRoof * m.insolation) + (0.026 * (t.height/t.diameter) * aShell * m.insolation)) / (2.2 * (t.height/t.diameter) + 1.9));
	} 
}

//La Eq1_7 se omitió porque es una simplificación de la Eq1_6 en base a un supuesto.

//Eq1_8 Variación diaria promedio de la temperatura del vapor para tanques con aislamiento térmico sólo en las paredes (avgVapTempRange) (degrees R)
function Eq1_8() {
	avgVapTempRange = (0.6 * avgAmbientTempRange) + (0.02 * aRoof * m.insolation);
}

//Eq1_9 Variación diaria promedio de la presión de vapor (avgVapPressureRange) (psia)
function Eq1_9() {

	Fig1_17();	//Obtiene las temperaturas máxima y mínima diarias promedio en la superficie del líquido (minSurfaceTemp y maxSurfaceTemp) (degrees R)
	
	//Obtiene la presión de vapor mínima y máxima diaria promedio (maxVapPressure y minVapPressure) (psia)
		if (liquidCategory == "Crude Oils") {
			maxVapPressure = Eq1_25(maxSurfaceTemp);
			minVapPressure = Eq1_25(minSurfaceTemp);
		} else if (liquidCategory == "Refined Petroleum Liquids") {
			maxVapPressure = Eq1_25(maxSurfaceTemp);
			minVapPressure = Eq1_25(minSurfaceTemp);
		} else {
			minVapPressure = Eq1_26(minSurfaceTemp);	
			maxVapPressure = Eq1_26(maxSurfaceTemp);  	
		}

	if (t.insulated == "full" && t.heating.heating == false) {
		avgVapPressureRange = 0;
	} else {
		//Eq1_9
		avgVapPressureRange = maxVapPressure - minVapPressure;
	}
}

//Eq1_10 Rango de presión que están ajustadas para soportar las válvulas de ventilación (ventPressureRange) (psig)
function Eq1_10() {
	t.ventPressureSetting = parseFloat(t.ventPressureSetting);		
	t.ventVacuumSetting = parseFloat(t.ventVacuumSetting);	
	ventPressureRange = t.ventPressureSetting - t.ventVacuumSetting;
}

//Eq1_11 Variación diaria promedio de la temperatura ambiente (avgAmbientTempRange) (degrees R)
function Eq1_11() {
	avgAmbientTempRange = (m.maxAmbientTemp - m.minAmbientTemp);
}

//La Eq1_12 y la Eq1_13 se omitieron porque son simplificaciones de la Eq1_5 que implican una reducción en la confiabilidad del resultado.

//Eq1_14 Diámetro Efectivo (feet)
function Eq1_14() {
	
	if (t.type == "VFR") {
		t.effectiveDiameter = t.diameter;
	} else if (t.type == "HFR") {
		t.effectiveDiameter = Math.sqrt((t.height * t.diameter) / (Math.PI / 4));
	} 
}

//Eq1_15 Altura Efectiva para Tanques Horizontales (feet)
function Eq1_15() {
	t.effectiveHeight = Math.PI * t.diameter / 4;
}

//Eq1_16 Altura de la Columna de Vapor (t.vaporSpaceOutage) (feet)
function Eq1_16() {
	
	if (t.type == "VFR") {
		if (t.roof.type == "cone") {
			Eq1_17();
		} else if (t.roof.type == "dome") {
			Eq1_19();
		}
		//Eq1_16
		t.vaporSpaceOutage = t.height - t.avgLiquidHeight + t.roofOutage;
	} else if (t.type == "HFR") {
		Eq1_15();	//Calcula la altura efectiva para tanques horizontales
		t.vaporSpaceOutage = t.effectiveHeight / 2;
	}
}

//Eq1_17 Altura efectiva de un techo con forma de cono (t.roofOutage) (feet)
function Eq1_17() {

	Eq1_18();	//Obtiene la altura real del techo
	t.roofOutage = t.roof.height / 3;
}

//Eq1_18 Altura real de un techo con forma de cono (feet)
function Eq1_18() {
	t.roof.slope = parseFloat(t.roof.slope);
	t.shellRadius = t.diameter/2;
	t.roof.height = parseFloat(t.roof.height);
	
	if (t.roof.height == 0) {
		t.roof.height = t.roof.slope * t.shellRadius;
	}
}

//Eq1_19 Altura efectiva de un techo con forma de domo (t.roofOutage) (feet)
function Eq1_19() {
	t.roof.radius = parseFloat(t.roof.radius);
	t.shellRadius = t.diameter/2;
	Eq1_20();	//Obtiene la altura real del techo
	if (t.roof.radius == t.diameter) {
		t.roofOutage = 0.137 * t.shellRadius;
	} else {
		t.roofOutage = t.roof.height * ((1 / 2) + ((1 / 6) * Math.pow((t.roof.height / t.shellRadius),2)));
	}
}

//Eq1_20 Altura real de un techo con forma de domo (feet)
function Eq1_20() {
	t.roof.height = parseFloat(t.roof.height);
	if (t.roof.height == 0) { 
		if (t.roof.radius == t.diameter) {
			t.roof.height = 0.268 * t.shellRadius;
		} else {
			t.roof.height = t.roof.radius - Math.pow(Math.pow(t.roof.radius,2) - Math.pow(t.shellRadius,2), 0.5);
		}
	}
}

//Eq1_21 Factor de saturación del vapor que se pierde al exterior (dimensionless) (ventedVapSatFactor)
function Eq1_21() {
	ventedVapSatFactor = 1 / (1 + (0.053 * c.vaporPressure  * t.vaporSpaceOutage));
}

//Eq1_22 Densidad del vapor dentro del tanque (vaporDensity) (lbs/ft^3)
function Eq1_22() {
	
	//Obtiene la temperatura promedio del vapor (avgVapTemp) (degrees R)
	if (t.insulated == "shell") {
		Eq1_34();
	} else if (t.insulated == "full") {
		avgVapTemp = avgBulkTemp;
	} else {
		Eq1_32();
	}	
	
	//constante de los gases ideales (psia*ft3/lb-mole*°R)
	rConstant = 10.731;
	
	if (liquidCategory == "Other organic liquids") {
		vaporDensity = (c.molWeight * c.vaporPressure) / (rConstant * avgVapTemp);
	} else {
		vaporDensity = (c.vapMolWeight * c.vaporPressure) / (rConstant * avgVapTemp);
	}
}

//La Eq1_23 y la Eq1_24 por el momento las omitimos porque sirven para MEZCLAS (de las cuales se conozca su composición, es decir, NO como los Crude Oils ni los Refined Petroleum Liquids).

//Eq1_25 Presión de vapor de determinados líquidos de petróleo (psia)
function Eq1_25(tempRankine) {
	var pressurePsia;	 
	pressurePsia = Math.exp(c.A - (c.B / tempRankine));
	return pressurePsia;
}

//Eq1_26 Presión de vapor de líquidos orgánicos (psia) 
function Eq1_26(tempRankine) {
	var pressurePsia;
	var pressureMmHg;
	var tempCelsius;
	tempCelsius = (tempRankine - 491.67) * 5 / 9; //convierte el valor de temperatura ingresado de °R a °C (porque para ingresarlo en la siguiente ecuación tiene que estar en °C)
	pressureMmHg = Math.pow(10,c.A - (c.B / (tempCelsius + c.C)));	//devuelve la presión de vapor en mmHg
	pressurePsia = 14.7 / 760 * pressureMmHg;	//convierte el valor de la presión de vapor obtenido de mmHg a psia)
	return pressurePsia;
}

//Eq1_27 Temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (degrees R)
function Eq1_27() {
					
	if (t.insulated == "full") {				
		//en los tanques con aislamiento térmico total, la temperatura en la superficie del líquido es igual a la temperatura en el seno del líquido (sección 7.1.3.8.4 del AP-42)
		Eq8_2();
	} else if (t.insulated == "shell") {
		if (t.heating.heating == true && avgBulkTemp > avgAmbientTemp) {
			//si se cumplen esas dos condiciones, la temperatura en la superficie del líquido es igual a la temperatura en el seno del líquido (sección 7.1.3.8.4 del AP-42)
			Eq8_2();
		} else {
			//si no se cumple alguna de esas dos condiciones, la temperatura en la superficie del líquido depende del intercambio de calor con el exterior a través del techo.
			Eq1_29();
		}
	} else if (t.insulated == "none") {
		if (t.heating.heating == true && avgBulkTemp > avgAmbientTemp) {
			//si se cumplen esas dos condiciones, la temperatura en la superficie del líquido es igual a la temperatura en el seno del líquido (sección 7.1.3.8.4 del AP-42)
			Eq8_2();
	} else {
			//Eq1_27: si no se cumple alguna de esas dos condiciones, la temperatura en la superficie del líquido depende del intercambio de calor con el exterior.
			avgSurfaceTemp =  ((0.5 - (0.8 / (4.4 * (t.height / t.diameter) + 3.8))) * avgAmbientTemp) + ((0.5 + (0.8 / (4.4 * (t.height / t.diameter) + 3.8))) * avgBulkTemp) + (((0.021 * aRoof * m.insolation) + (0.013 * (t.height / t.diameter) * aShell * m.insolation)) / (4.4 * (t.height / t.diameter) + 3.8));
		}
	}
}

//La Eq1_28 se omitió porque es una simplificación de la Eq1_29 en base a un supuesto.

//Eq1_29 Temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (degrees R) 
function Eq1_29() {

	avgSurfaceTemp = (0.3 * avgAmbientTemp) + (0.7 * avgBulkTemp) + (0.005 * aRoof * m.insolation);
}

//Eq1_30  Temperatura Ambiente Diaria Promedio (avgAmbientTemp) (degrees R) 
function Eq1_30() {
	
	avgAmbientTemp = (m.maxAmbientTemp + m.minAmbientTemp) / 2;
}

//Eq1_31 Temperatura diaria promedio en el seno del líquido (avgBulkTemp) (degrees R) 
function Eq1_31() {

	if (t.heating.minBulkTemp != "" && isNaN(t.heating.minBulkTemp) == false && t.type !="IFR" && t.type !="DEFR") {
		maxBulkTemp = parseFloat(t.heating.maxBulkTemp);				
		minBulkTemp = parseFloat(t.heating.minBulkTemp);				
		avgBulkTemp = (maxBulkTemp + minBulkTemp) / 2;}
	 else {
		//Eq1_31
		avgBulkTemp = avgAmbientTemp + (0.003 * aShell * m.insolation);
	}
}

//Eq1_32 Temperatura promedio del vapor en tanques sin aislamiento térmico (avgVapTemp) (degrees R) 
function Eq1_32() {
	avgVapTemp =  (((2.2 * (t.height / t.diameter) +1.1) * avgAmbientTemp) + (0.8 * avgBulkTemp) + (0.021 * aRoof * m.insolation) + (0.013 * (t.height / t.diameter) * aShell * m.insolation)) / (2.2 * (t.height / t.diameter) +1.9);
}

//La Eq1_33 se omitió porque es una simplificación de la Eq1_32 en base a un supuesto

//Eq1_34 Temperatura promedio del vapor en tanques con aislamiento térmico sólo en las paredes (avgVapTemp) (degrees R) 
function Eq1_34() {
	avgVapTemp = (0.6 * avgAmbientTemp) + (0.4 * avgBulkTemp) + (0.01 * aRoof * m.insolation);
}

//Eq1_35 Working Losses: Pérdidas por llenado y vaciado de tanques de techo fijo (o.workingLosses) (lbs/yr)
function Eq1_35() {
	
	Eq1_37();	//Obtiene la suma anual de aumentos en el nivel del líquido (sumLiquidIncreases) (ft/yr)
	Eq1_38();	//Obtiene el volumen neto total introducido en el tanque a lo largo del año (netWorkingLossThroughput) (ft3/yr)
	Eq1_36();	//Obtiene el número de veces al año que el tanque es llenado totalmente (turnoversPerYear) (dimensionless)
	
	//Obtiene el factor de saturación de las pérdidas por llenado y vaciado del tanque (workingLossTurnover) (dimensionless)
		if (t.vaporbalanced == true) {
			workingLossTurnover = 1;
		}else if (turnoversPerYear > 36) {
			workingLossTurnover = (180 + turnoversPerYear) / (6 * turnoversPerYear);
		} else {
			workingLossTurnover = 1;
		}
	//Obtiene el factor de producto de las pérdidas por llenado y vaciado del tanque (workingLossProductFactor) (dimensionless)
		if (liquidCategory == "Crude Oils") {
			workingLossProductFactor = 0.75;
		} else {
			workingLossProductFactor = 1;
		}
	//Obtiene el factor de corrección del ajuste de presión de las válvulas de ventilación (ventCorrectionFactor) (dimensionless)
	Eq1_41();
	
	//Eq1_35
	o.workingLosses = netWorkingLossThroughput * workingLossTurnover * workingLossProductFactor * vaporDensity * ventCorrectionFactor;
}

//Eq1_36 Número de veces al año que el tanque es llenado totalmente (turnoversPerYear) (dimensionless) 
function Eq1_36() {
	maxLiquidHeight = parseFloat(t.maxLiquidHeight)
	minLiquidHeight = parseFloat(t.minLiquidHeight)
	//Eq1_36
	turnoversPerYear = sumLiquidIncreases / (maxLiquidHeight - minLiquidHeight);
}

//Eq1_37 Suma anual de aumentos en el nivel del líquido (sumLiquidIncreases) (ft/yr) 
function Eq1_37() {
	//Convierte el valor de annualNetThroughput ingresado, de "gal/year" a "barrels/year" 
	annualNetThroughput = parseFloat(t.annualNetThroughput)/42;
	//Eq1_37
	sumLiquidIncreases = (5.614 * annualNetThroughput) / ((Math.PI / 4) * Math.pow(t.effectiveDiameter,2));
}

//Eq1_38 Volumen neto total introducido en el tanque a lo largo del año (netWorkingLossThroughput) (ft3/yr) 
function Eq1_38() {
	netWorkingLossThroughput = sumLiquidIncreases * (Math.PI / 4) * Math.pow(t.effectiveDiameter,2);
}

//Eq1_39 Volumen neto total introducido en el tanque a lo largo del año (netWorkingLossThroughput) (ft3/yr) [Esta ecuación en realidad NO es necesaria porque es la combinación de la Eq1_37 y la Eq1_38]
function Eq1_39() {
	netWorkingLossThroughput = 5.614 * annualNetThroughput; //El AP-42 las nombra diferente pero estas dos variables en realidad son lo mismo, sólo que netWorkingLossThroughput está expresada en "ft3/yr" y annualNetThroughput, en "barrels/yr".
}

//Eq1_40 Condición que determina si es necesario incluir el factor de corrección del ajuste de presión de las válvulas de ventilación 
function Eq1_40() {
	
	if (ventPressureRange > 0.06) {
		gaugePressure = parseFloat(gaugePressure);
		if ( workingLossTurnover * ((t.ventPressureSetting + m.atmPressure) / (gaugePressure + m.atmPressure)) > 1) {
			return 1;
		} else {
			return 0;
		}
	} else {
		return 0;
	}
}

//Eq1_41 Factor de corrección del ajuste de presión de las válvulas de ventilación (ventCorrectionFactor) (dimensionless)
function Eq1_41() {
	if (Eq1_40() == 1) {			
		ventCorrectionFactor = (((gaugePressure + m.atmPressure) / workingLossTurnover) - c.vaporPressure) / (t.ventPressureSetting + m.atmPressure - c.vaporPressure);
	} else {
		ventCorrectionFactor = 1;
	}
}

//Eq8_1 Variación diaria promedio de la temperatura del vapor en tanques con aislamiento térmico total y calentamiento (avgVapTempRange) (degrees R)
function Eq8_1() {
	avgVapTempRange = maxBulkTemp - minBulkTemp;
}

//Eq8_2 Temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (degrees R)
function Eq8_2() {
	avgSurfaceTemp = avgBulkTemp;
}

//Eq2_1 Pérdidas totales desde tanques de techo flotante (o.totalLosses) (lbs/yr)
function Eq2_1() {

	Eq2_2();	//ecuacion general de Standing Losses (Pérdidas durante el almacenamiento)
	Eq2_19();	//ecuacion general de Working Losses (Pérdidas por vaciado del tanque)
	
	o.totalLosses = o.standingLosses + o.workingLosses;
}

//Eq2_2 Standing Losses: Pérdidas durante el almacenamiento (o.standingLosses) (lbs/yr)
function Eq2_2() {

	Eq2_3();	//Calcula las pérdidas a través del sello (o.rimSealLosses) (lbs/yr)
	Eq2_13();	//Calcula las pérdidas a través de los accesorios de la plataforma flotante (o.deckFittingLosses) (lbs/yr)
	Eq2_18();	//Calcula las pérdidas a través de las "costuras" de la plataforma flotante (o.deckSeamLosses) (lbs/yr)

	o.standingLosses = o.rimSealLosses + o.deckFittingLosses + o.deckSeamLosses
}

//Eq2_3 Pérdidas a través del sello de la plataforma flotante (o.rimSealLosses) (lbs/yr)
function Eq2_3() {

	Eq2_4();	//Calcula un factor relacionado con la presión de vapor (vaporPressureFunction) (adimensional)

	//Determina el factor de producto correspondiente (productFactor) (adimensional)
	if (liquidCategory == "Crude Oils"){
		productFactor = 0.4
	} else {
		productFactor = 1
	}
	
	//Eq2_3
	if (liquidCategory == "Other organic liquids") {
		o.rimSealLosses = (t.rimSeal.Kra + t.rimSeal.Krb*Math.pow(m.u,t.rimSeal.n))*t.diameter*vaporPressureFunction*c.molWeight*productFactor
	} else {
		o.rimSealLosses = (t.rimSeal.Kra + t.rimSeal.Krb*Math.pow(m.u,t.rimSeal.n))*t.diameter*vaporPressureFunction*c.vapMolWeight*productFactor
	}
}

//Eq2_4	Factor relacionado con la presión de vapor (vaporPressureFunction) (adimensional)
function Eq2_4() {

	//Calcula la temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp) (degrees R)
	if (t.type == "IFR" || t.type == "DEFR") {
		Eq2_5();
	} else if (t.deck.type == "pontoon") {
		Eq2_7();
	} else {
		Eq2_10();
	}

	//Calcula la presión de vapor del compuesto (c.vaporPressure) a la temperatura diaria promedio en la superficie del líquido (avgSurfaceTemp)
	if (liquidCategory == "Crude Oils") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_16();	//Calcula las constantes de la Ecuación de Antoine para petróleos crudos
			c.vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_13b (en lugar de la Eq1_25)
		} else {
			c.vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else if (liquidCategory == "Refined Petroleum Liquids") {
		if (isNaN(c.A) == true || c.A == "" || c.A == null) {
			Fig1_15();	//Calcula las constantes de la Ecuación de Antoine para combustibles refinados
			c.vaporPressure = Eq1_25(avgSurfaceTemp);	//Acá también se podría usar la Fig1_14b (en lugar de la Eq1_25)
		} else {
			c.vaporPressure = Eq1_25(avgSurfaceTemp);
		}
	} else {
		c.vaporPressure = Eq1_26(avgSurfaceTemp);	//Calcula la presión de vapor de otros líquidos orgánicos
	}

	//Eq2_4
	vaporPressureFunction = (c.vaporPressure/m.atmPressure)/Math.pow((1+Math.pow((1-(c.vaporPressure/m.atmPressure)),0.5)),2)
}

//Eq2_5 Temperatura diaria promedio en la superficie del líquido en tanques tipo IFR o DEFR (avgSurfaceTemp) (degrees R)
function Eq2_5() {
	Eq1_30();	//Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (degrees R) 
	Eq1_31();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (degrees R)

	avgSurfaceTemp = (((2.86*(t.height/t.diameter)+1.43)*avgAmbientTemp)+((3.52*(t.height/t.diameter)+3.79)*avgBulkTemp)+(0.027*aRoof*m.insolation)+(0.017*(t.height/t.diameter)*aShell*m.insolation))/(6.38*(t.height/t.diameter)+5.22);
}

//La Eq2_6 se omitió porque es una simplificación de la Eq2_5 en base a un supuesto.

//Eq2_7 Temperatura diaria promedio en la superficie del líquido en tanques tipo EFR con pontoon deck (avgSurfaceTemp) (degrees R)
function Eq2_7() {
	Eq1_30(); //Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (degrees R) 
	Eq2_8();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (degrees R)

	avgSurfaceTemp = (0.7*avgAmbientTemp) + (0.3*avgBulkTemp) + (0.008*aRoof*m.insolation);
}

//Eq2_8 Temperatura promedio en el seno del líquido en tanques tipo EFR con pontoon deck (avgBulkTemp) (degrees R)
function Eq2_8() {
	avgBulkTemp = avgAmbientTemp + (((0.71*aRoof*m.insolation)+(0.485*(t.height/t.diameter)*aShell*m.insolation))/((170*(t.height/t.diameter))+57))
}

//La Eq2_9 se omitió porque es una simplificación de la Eq2_8 en base a un supuesto.

//Eq2_10 Temperatura diaria promedio en la superficie del líquido en tanques tipo EFR con double deck (avgSurfaceTemp) (degrees R)
function Eq2_10() {
	Eq1_30(); 	//Obtiene la temperatura ambiente diaria promedio (avgAmbientTemp) (degrees R) 
	Eq2_11();	//Obtiene la temperatura promedio en el seno del líquido (avgBulkTemp) (degrees R)

	avgSurfaceTemp = (0.3*avgAmbientTemp) + (0.7*avgBulkTemp) + (0.009*aRoof*m.insolation);
}

//Eq2_11 Temperatura promedio en el seno del líquido en tanques tipo EFR con double deck (avgBulkTemp) (degrees R)
function Eq2_11() {
	avgBulkTemp = avgAmbientTemp + (((0.39*aRoof*m.insolation)+(0.485*(t.height/t.diameter)*aShell*m.insolation))/((170*(t.height/t.diameter))+45))
}

//La Eq2_12 se omitió porque es una simplificación de la Eq2_11 en base a un supuesto.

//Eq2_13 Pérdidas totales a través de los accesorios de la plataforma flotante (o.deckFittingLosses) (lbs/yr)
function Eq2_13() {
	if (t.type=="EFR") {
		o.deckFittingLossFactor=Eq2_14();//Calcula el factor de pérdidas totales a través de los accesorios en tanques EFR (o.deckFittingLossFactor) (lb-mole/yr)
	} else {
		o.deckFittingLossFactor=Eq2_16();//Calcula el factor de pérdidas totales a través de los accesorios en tanques IFR y DEFR (o.deckFittingLossFactor) (lb-mole/yr)
	};

	if (liquidCategory == "Other organic liquids") {
		o.deckFittingLosses = o.deckFittingLossFactor*vaporPressureFunction*c.molWeight*productFactor;
	} else {
		o.deckFittingLosses = o.deckFittingLossFactor*vaporPressureFunction*c.vapMolWeight*productFactor;
	};
};

//Eq2_14 Factor de pérdidas totales a través de los accesorios de la plataforma flotante en tanques EFR (o.deckFittingLossFactor) (lb-mole/yr)
function Eq2_14(){    

        Ff=0; //Inicializo las perdidas en 0 y luego las voy sumando:
        for (i=0;i<t.deck.fittings.length;i++){

                f=t.deck.fittings[i]     //Fitting a calcular perdida (variable temporal para que quede prolija la cuenta).
		//Eq2_15: Calcula el factor de pérdida individual de cada accesorio
                Ff+=( f.Kfa + f.Kfb * Math.pow((0.7*m.u),f.m) );  
        };
	return Ff;
};

//Eq2_16 Factor de pérdidas totales a través de los accesorios de la plataforma flotante en tanques IFR o DEFR (o.deckFittingLossFactor) (lb-mole/yr)
function Eq2_16() {

	Ff=0; //inicializo las perdidas en 0 y luego las voy sumando:
        for (i=0;i<t.deck.fittings.length;i++){

                f=t.deck.fittings[i]     //Fitting a calcular perdida (variable temporal para que quede prolija la cuenta).
		//Eq2_16: Calcula el factor de pérdida individual de cada accesorio
                Ff+=f.Kfa;  
        };
	return Ff;
};

//Eq2_17: Por ahora no la incluimos. Quizás más adelante, una vez que hayamos terminado de implementar el resto de las cosas. (Sirve para calcular los factores de perdida desde tipos de fittings que NO estén en la base de datos)

//Eq2_18 Pérdidas a través de las uniones de la plataforma flotante (o.deckSeamLosses) (lbs/yr)
function Eq2_18() {
	//Si la plataforma está soldada, se asume que no tiene pérdidas a través de las uniones
	if(t.construction=="welded") {
		Kd=0;
	} else {
		Kd=0.14;
	};
	//Calcula el factor de pérdidas a través de las uniones de la plataforma (seamLengthFactor) (ft/ft2)
	if ( t.deck.seamLength=="" || t.deck.seamLength==null || t.deck.seamLength==0 ) {
		if(t.deck.construction=="Continuous sheet") {
			seamLengthFactor = ( 1 / t.deck.sheetWidth );
		} else if(t.deck.construction=="Panel") {
			seamLengthFactor = ( t.deck.panelLength + t.deck.panelWidth ) / ( t.deck.panelLength * t.deck.panelWidth );
		} else {
			seamLengthFactor = 0.2;
		}
	} else {
		seamLengthFactor = t.deck.seamLength/(Math.PI*Math.pow(t.diameter,2)/4);
	};
	//Eq2_18
	if(liquidCategory=="Other organic liquids") {
		o.deckSeamLosses = Kd*seamLengthFactor*Math.pow(t.diameter,2)*vaporPressureFunction*c.molWeight*productFactor  
	} else {
		o.deckSeamLosses = Kd*seamLengthFactor*Math.pow(t.diameter,2)*vaporPressureFunction*c.vapMolWeight*productFactor  
	};
};

//Eq2_19 Pérdidas por vaciado del tanque (o.workingLosses) (lbs/yr)
function Eq2_19() {
	Eq2_20();	//Obtiene el volumen neto total introducido en el tanque a lo largo del año (annualNetThroughput) (bbl/yr) 
	//Determina el factor de adhesión del líquido a las paredes (t.shellClingageFactor) [bbl/1000 ft2]
	if (t.shellClingageFactor=="" || t.shellClingageFactor==null || t.shellClingageFactor==0) {
		if(liquidCategory=="Crude Oils") {
			if(t.shellTexture=="Light Rust") {
				shellClingageFactor = 0.006
			} else if (t.shellTexture=="Dense Rust") {
				shellClingageFactor = 0.03
			} else {shellClingageFactor = 0.6}
		} else {
			if(t.shellTexture=="Light Rust") {
				shellClingageFactor = 0.0015
			} else if (t.shellTexture=="Dense Rust") {
				shellClingageFactor = 0.0075
			} else {shellClingageFactor = 0.15}
		};
	};
	//Obtiene el diámetro efectivo de las columnas internas de soporte que tiene el tanque (effectiveColumnDiameter) (ft)
	if(t.columns.type=="Built-up Columns"){
		effectiveColumnDiameter = 1.1
	} else if(t.columns.type=="Pipe Columns") {
		effectiveColumnDiameter = 0.7
	} else {
		effectiveColumnDiameter = 1
	};
	//Eq2_19
	o.workingLosses = ((0.943*annualNetThroughput*shellClingageFactor*c.liqDensity)/t.diameter)*(1+((t.columns.number*effectiveColumnDiameter)/t.diameter));
};

//Eq2_20 Volumen neto total introducido en el tanque a lo largo del año (annualNetThroughput) (bbl/yr) 
function Eq2_20() {
	if( t.annualNetThroughput=="" || t.annualNetThroughput==null || t.annualNetThroughput==0 ) {
		annualNetThroughput = (t.turnoversPerYear*(t.maxLiquidHeight-t.minLiquidHeight)*(Math.PI/4)*Math.pow(t.diameter,2))/5.614;
	} else {annualNetThroughput = (t.annualNetThroughput)/42}
};



//FIGURAS=================================================================================================================================================

//Figura 7.1-13b: Presion de vapor (psia) de petróleos crudos que tengan una presión de vapor de Reid de entre 2 y 15 psi
function Fig1_13b(tempRankine) {
	var pressurePsia;
	pressurePsia = Math.exp((((2799/tempRankine) - 2.227) * Math.log10(c.reidVaporPressure)) - (7261/tempRankine) + 12.82);
	return pressurePsia;
}

//Figura 7.1-14b: Presion de vapor (psia) de combustibles refinados que tengan una presión de vapor de Reid de entre 1 y 20 psi
function Fig1_14b(tempRankine) {
	var pressurePsia;
	pressurePsia = Math.exp(((0.7553 - (413.0/tempRankine)) * Math.pow(c.slope,0.5) * Math.log10(c.reidVaporPressure)) - ((1.854 - (1042/tempRankine)) * Math.pow(c.slope,0.5)) + (((2416/tempRankine) - 2.013) * Math.log10(c.reidVaporPressure)) - (8742/tempRankine) + 15.64);
	return pressurePsia;
}

//Figura 7.1-15: Constantes A y B (adimensionales) de la Ecuación de Antoine para combustibles refinados 
function Fig1_15() {
	c.A = 15.64 - (1.854 * Math.pow(c.slope,0.5)) - ((0.8742 - (0.3280 * Math.pow (c.slope,0.5))) * Math.log(c.reidVaporPressure));
	c.B = 8742 - (1042 * Math.pow(c.slope,0.5)) - ((1049 - 179.4 * Math.pow(c.slope,0.5)) * Math.log(c.reidVaporPressure));
}

//Figura 7.1-16: Constantes A y B (adimensionales) de la Ecuación de Antoine para petróleos crudos
function Fig1_16() {
	c.A = 12.82 - (0.9672 * Math.log(c.reidVaporPressure));
	c.B = 7261 - (1216 * Math.log(c.reidVaporPressure));
}

//Figura 7.1-17: Temperaturas máxima y mínima diarias promedio en la superficie del líquido (minSurfaceTemp y maxSurfaceTemp) (degrees R) 
function Fig1_17() {

	if (t.heating.minBulkTemp != "" && isNaN(t.heating.minBulkTemp) == false) {
		//en tanques con aislamiento térmico total y calentamiento (sección 7.1.3.8.4 del AP-42)
		minSurfaceTemp = t.heating.minBulkTemp;
		maxSurfaceTemp = t.heating.maxBulkTemp;
	} else {
		//Fig1_17
		minSurfaceTemp = avgSurfaceTemp - (0.25 * avgVapTempRange);
		maxSurfaceTemp = avgSurfaceTemp + (0.25 * avgVapTempRange);
	}
	
}



