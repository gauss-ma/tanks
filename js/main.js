function main(){

	console.log(">>> Iniciando ejecución..");

	//IDENTIFICACIÓN DEL REPORTE DE SALIDA
	id={
		userID:$("#usrID").val(),
		location:$("#location").val(),
		company:$("#company").val(),
		description:$("#description").val(),
	};

	//(1) INPUTS
	// Opciones globales:
	unitsInp=$('input[name=unitsInput]:checked').val(); //Unidades de Input  [SI/Imperial]  
	unitsOut=$('input[name=unitsOutput]:checked').val();//Unidades de Output [SI/Imperial] 
	
	// Datos del tanque:
	t=loadTankParameters();	//estos valores los provee el usuario.

	t.rimSeal=findRimSealProp(t);	//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
	
	// Accesorios de la plataforma flotante:
	if (fittingsCounter>0) {
		for (var i = 1; i<=fittingsCounter; i++) {
			addDeckFitting(t,document.getElementById("fittingName"+i).value,document.getElementById("fittingType"+i).value,document.getElementById("fittingAmount"+i).value);
		};
	};
	
	// Inicializar array con resultados de variables intermedias:
	resultadosIntermedios=[];
 
	// Inicializar objeto con datos de salida:
	o={};

	//
	//(2) CALCULOS

	//  (0) Convertir unidades si el usuario elije sistema internacional:
	if (unitsInp == "SI"){
		//Acá funcion para convertir todos los inputs a Imperial:
	};

	//  (2.a) calculos previos:
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura
	resultadosIntermedios.push({varName:"Absorbancia pintura",value:t.a});
	t.workingVolume=calculateWorkingVolume(t);	//calcula el volumen máximo de líquido que puede contener el tanque [gal]

	//  (2.b) calculo de emision:

	if (t.type == "VFR" || t.type == "HFR") {
        o.totalLosses = Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {
		o.totalLosses = Eq2_1();
    };
	
	//(3) OUTPUT
	//   (0)  Convertir unidades si el usuario elige sistema internacional.
	if (unitsOut == "SI"){
        	//Funcion para convertir todos los outputs a SI.
	};

	printOutput();	// Crear reporte (./js/output.js)

	console.log(">>> Fin de ejecución.");
}

//--------------------------------------------------
//Funciones y subrutinas

function loadMeteorologicalParameters(siteName){
	
	console.log("   Cargando datos meteorológicos.. ");
	console.log("      Sitio: "+siteName);

	baseDeDatosMeteorologica=getMeteorologicalData();	//levanto db de archivo: ./tablas/meteo.js
	m=baseDeDatosMeteorologica.find(element => element.siteName==siteName)
	
	m.minAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"
	m.maxAmbientTemp+=459.67;	//pasar temperaturas de "grados Fahrenheit" a "grados Rankine"

	return m;
};


function loadLiquidParameters(liquidName){

	console.log("      Liquido: "+liquidName);

	if (liquidCategory=="Refined Petroleum Liquids") {
        baseDeDatosLiquidos=getRefinedOilsData(); //levanto de base de datos de petróleos refinados (tablas/petroleum.js)
        l=baseDeDatosLiquidos.find(element => element.liquidName==liquidName); //me quedo con el que me interesa
		return l;
	} else {
		baseDeDatosLiquidos=getCrudeOilsData(); //levanto de base de datos de petróleos crudos (tablas/petroleum.js)
		l=baseDeDatosLiquidos.find(element => element.liquidName==liquidName); //me quedo con el que me interesa
		return l;
	};
};

function loadCompoundParameters(compoundName){

	console.log("      Compuesto: "+compoundName);
	
	baseDeDatosCompuestos=getCompoundData(); //levanto de base de datos de compuestos puros (tablas/chems.js)
	c=baseDeDatosCompuestos.find(element => element.compoundName==compoundName) //me quedo con el que me interesa
	
	return c;
};


function loadTankParameters(){

	console.log("   Tomando características del tanque.. ");

	t={
		type:$('input[id=tankType]:checked').val(),	  			//(VFR|HFR|EFR|DEFR|IFR)
		height:$("#shellHeight").val(),		 					//altura [ft] // ACLARACIÓN: Si el tanque es horizontal, aquí debe ingresarse su largo.
		diameter:$("#diameter").val(),    						//diametro [ft]
		minLiquidHeight:$("#minLiquidHeight").val(), 	  		//altura minima de liquido [ft] // ACLARACIÓN: Para tanques VFR, si no se conoce, ingresar 1. Para tanques HFR, NO se ingresa. Para tanques de techo flotante se tiene que ingresar SÍ O SÍ.
		avgLiquidHeight:$("#avgLiquidHeight").val(), 	  		//altura promedio de liquido [ft] // ACLARACIÓN: Para tanques HFR y tanques de techo flotante, NO se ingresa. Para tanques VFR, si no se conoce, dejar en blanco o ingresar cero.
		maxLiquidHeight:$("#maxLiquidHeight").val(), 	  		//altura maxima de liquido [ft] // ACLARACIÓN: Para tanques VFR, si no se conoce, dejar en blanco o ingresar cero. Para tanques HFR, NO se ingresa. Para tanques de techo flotante se tiene que ingresar SÍ O SÍ. 
		turnoversPerYear:$("#turnoversPerYear").val(),     		//número de veces que el tanque se llenó totalmente en el año [adimensional] // ACLARACIÓN: Si se desconoce, ingresar cero o dejar vacío e ingresar a continuacion el valor de AnnualNetThroughput
		annualNetThroughput:$("#annualNetThroughput").val(), 	//volumen neto que se incorporó al tanque a lo largo de todo el año [gal] (alternativamente se puede usar el volumen bruto pero eso generaría una sobreestimación de las emisiones) // ACLARACIÓN: Si se desconoce, se debe ingresar el valor de turnoversPerYear en la entrada anterior, para que lo calcule automaticamente
		flashing:$("#flashing").is(":checked"), 				//ACLARACIÓN: El flashing ocurre cuando el liquido ingresa al tanque a mucha presión con moléculas de gas atrapadas en su interior y estas escapan cuando se libera esa presión al ingresar el líquido al tanque.
		shell:{
			color:$("#paintShell").val(),		
			condition:$("#conditionShell").val(),
		},
		roof:{
			type:$("#roofType").val(), 	 				//(cone|dome)
			color:$("#paintRoof").val(),				//color
			condition:$("#conditionRoof").val(),		//(new|aged|average)
			height:$("#roofH").val(),					//altura del techo [ft] // ACLARACIÓN: Si el usuario no tiene el valor de la altura del techo, en esta variable se debe ingresar cero.
			slope:$("#roofSlope").val(),				//pendiente del techo (si es cónico) [ft/ft]
			radius:$("#roofRad").val(),					//radio del techo (si es en forma de domo) [ft] // ACLARACIÓN: Si el usuario no tiene el valor del radio del techo, en esta variable se debe ingresar el mismo valor que se haya ingresado para el diámetro del tanque (así lo recomienda el AP-42).
		},
		ventPressureSetting:$("#pressure").val(), 		//presión a la cual están seteadas las válvulas de ventilación [psig]
		ventVacuumSetting:$("#vacuum").val(), 			//presión de vacío de las válvulas de ventilación [psig]
		gaugePressure:$("#gaugePress").val(), 			//presión manométrica en la fase vapor en condiciones de operación normales [psig] // ACLARACIÓN: sólo se debe ingresar si la ventPressureRange ingresada es mayor que 0,06. Si el tanque está a temperatura atmosférica, debe ingresarse cero.
		insulation:$("#insulated").val(),				//none, shell, full, underground //ACLARACIÓN: El AP-42 sólo permite incorporar el aislamiento térmico en los cálculos para tanques de techo fijo //ACLARACIÓN 2: Si el tanque es totalmente aislado (full o underground), se tiene que ingresar si o si un valor en t.heating.minBulkTemp y el mismo valor en t.heating.maxBulkTemp (aunque el tanque NO tenga calentamiento)
		heating:{
			heating: $("#heated").is(":checked"),		//considerar calentamiento? //ACLARACIÓN: El AP-42 sólo permite incorporar el calentamiento en los cálculos para tanques de techo fijo
			cyclesPerYear:$("#cyclesPerYear").val(),	//numero de ciclos de calentamiento
			minBulkTemp:$("#minBulkTemp").val(),		//temperatura minima del liquido [grados Rankine] //ACLARACIÓN: Si el tanque se calienta, es obligatorio ingresar este dato y tiene que ser mayor a 460°R //ACLARACIÓN 2: Si el tanque es totalmente aislado (underground o shellAndRoof), se tiene que ingresar si o si un valor en t.heating.minBulkTemp y el mismo valor en t.heating.maxBulkTemp (aunque el tanque NO tenga calentamiento)
			maxBulkTemp:$("#maxBulkTemp").val(),		//temperatura maxima del liquido [grados Rankine] //ACLARACIÓN: Si el tanque se calienta, es obligatorio ingresar este dato y tiene que ser mayor a 460°R //ACLARACIÓN 2: Si el tanque es totalmente aislado (underground o shellAndRoof), se tiene que ingresar si o si un valor en t.heating.minBulkTemp y el mismo valor en t.heating.maxBulkTemp (aunque el tanque NO tenga calentamiento)
		},
		construction:$("#tankConst").val(),		//(welded|riveted) //ACLARACIÓN: Si no se sabe, el AP-42 recomienda asumir que es "welded".
		rimSeal:{
			fit:$("#sealFit").val(),			//(Average-Fitting Seal|Tight-Fitting Seal)
			type:$("#primarySeal").val(),		//(Mechanical-shoe Seal|Liquid-mounted seal|Vapor-mounted Seal)
			secondary:$("#secondSeal").val(),	//(Primary only|Shoe-mounted secondary|Rim-mounted secondary|Weather shield)
		},	
		deck: {
			type:$("#deckType").val(),					//(welded|bolted)
			support:$("#deckSupport").val(),			//(pontoon|double|unknown) //ACLARACIÓN: Si se ingresa "unknown", el programa hace los cálculos como si fuera pontoon (así lo recomienda el AP-42).
			fittings:[],								//acá agrego array con "accesorios"
			seamLength:$("#seamLength").val(),	 		//medida total de las "costuras" de la plataforma flotante [ft] //si no se conoce, se debe dejar en blanco o ingresar cero
			construction:$("#deckConst").val(),	 		//(Continuous sheet|Panel|Unknown)//si no se conocen las MEDIDAS de las hojas o paneles con los que está construida la plataforma, se debe elegir la opción "Unknown" 
			sheetWidth:$("#sheetWidth").val(),			//ancho de las hojas de metal con las que está construida la plataforma flotante [ft]
			panelWidth:$("#panelWidth").val(),			//ancho de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
			panelLength:$("#panelLength").val(),		//largo de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
		},
		shellClingageFactor:$("#shellClingageFactor").val(),		//factor de adhesión del líquido a las paredes [bbl/1000 ft2]//si no se conoce, se debe dejar en blanco o ingresar cero
		shellTexture:$("#shellTexture").val(),						//(Light Rust|Dense Rust|Gunite Lining)//estado del interior de las paredes del tanque 	
		columns:{
			number:$("#numColumns").val(),				//número de columnas internas de soporte que tiene el tanque (sólo cuando es un tanque IFR, porque los DEFR tienen techos autoportantes)
			type:$("#typeColumns").val(),				//(Built-up Columns|Pipe Columns|Unknown)
		},
	};

	return t;
};

function calculateSolarAbsorbance(t){
	
	console.log("   Calculando absorbancia del tanque.. ");

	paint=getPaintProperties();	//levanto db de archivo: ./tablas/paint.js

	if (t.type == "HFR"||t.type=="EFR"){
		
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		aRoof=aShell;
		a=aShell;
	}
	else{
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		aRoof=eval("paint.find( element => element.paintName==\""+t.roof.color+"\")."+t.roof.condition);
		
		a=(aShell+aRoof)*0.5;	//promedio de absorb entre shell y roof.
	};

	return a; 
};


function calculateWorkingVolume(t) {
	if(t.type=="HFR"){
		t.effectiveDiameter=Eq1_14();
		t.effectiveHeight=Eq1_15();
		t.workingVolume = (Math.PI/8)*Math.pow(t.effectiveDiameter,2)*t.effectiveHeight*7.48052;
	} else {
		t.workingVolume = t.maxLiquidHeight*(Math.PI/4)*Math.pow(t.diameter,2)*7.48052;
	};

	return t.workingVolume;
};


function addDeckFitting(t,fittingName,fittingType,n) {
	
	databaseDeckFittings=getDeckFittingsProperties(); //levanto de base de datos de deckFittings (tablaa/deckFittings.js)
	for (i=0;i<n;i++){	//lo agrego n veces!
		t.deck.fittings.push( databaseDeckFittings.find( element => (element.fittingName==fittingName & element.fittingType==fittingType) ) ); 
	};
};


function findRimSealProp(t) {
	
	databaseRimSeals=getRimSealProperties(); //levanto de base de datos de Rim Seals (tablas/rimSeal.js)
	t.rimSeal=databaseRimSeals.find(element => (element.fit==t.rimSeal.fit & element.tankConstruction==t.construction & element.type==t.rimSeal.type & element.secondary==t.rimSeal.secondary)) //me quedo con el que me interesa
	
	return t.rimSeal;
};
