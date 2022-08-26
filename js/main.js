function main(){

	console.log(">>> Iniciando ejecución..");

	//(1) INPUTS
	//  (0) Opciones globales:
	unitsInp="Imperial"		//document.getElementById("unitsInput").value;  //Unidades de Input  [SI/Imperial]  
	unitsOut="Imperial"		//document.getElementById("unitsOutput").value; //Unidades de Output [SI/Imperial] 

	//  (1a) datos meteorologicos:
        siteName="Rochester, MN";          //document.getElementById("siteName").value;
        m=loadMeteorologicalParameters(siteName);

	//  (1b) datos de combustible:
	liquidCategory="Refined Petroleum Liquids"	//document.getElementById("liquidCategory").value; //Crude Oils, Refined Petroleum Liquids, Other organic liquids
	
 	console.log("      Tipo de liquido: "+liquidCategory);

	if (liquidCategory == "Other organic liquids"){
		compoundName="";    	//document.getElementById("compoundName").value;
		c=loadCompoundParameters(compoundName);
	}
	else{
		liquidName="Motor Gasoline RVP 7"; //document.getElementById("liquidName").value;
		c=loadLiquidParameters(liquidName);
	};
	
	//  (1c) datos del tanque:
	t=loadTankParameters();	//estos valores los provee el usuario.

	findRimSealProp(t);		//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
	
	//Ejemplo: Así el usuario iria agregando accesorios:
	addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",3);
	addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
	
	//  (1d) inicializar objeto con datos de salida:
	o={};

	//
	//(2) CALCULOS

	//  (0) Convertir unidades si el usuario elije sistema internacional:
	if (unitsInp == "SI"){
		//Acá funcion para convertir todos los inputs a Imperial:
	};

	//  (2.a) calculos previos:
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura:

	//  (2.b) calculo de emision:

	if (t.type == "VFR" || t.type == "HFR") {
                o.totalLosses = Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {
				o.totalLosses = Eq2_1();
    }
	
	//(3) OUTPUT
	//   (0)  Convertir unidades si el usuario elige sistema internacional.
	if (unitsOut == "SI"){
        	//Funcion para convertir todos los outputs a SI.
	};

	//outputWindow()	//Acá función que crea informe de salida.

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

	console.log("   Cargando parámetros físico-quimicos.. ");
	console.log("      Liquido: "+liquidName);

        baseDeDatosLiquidos=getLiquidData(); //levanto de base de datos de líquidos de petróleo (tablas/petroleum.js)
        l=baseDeDatosLiquidos.find(element => element.liquidName==liquidName); //me quedo con el que me interesa

	return l;
};

function loadCompoundParameters(compoundName){
	
	console.log("   Cargando parámetros físico-quimicos.. ");
	console.log("      Compuesto: "+compoundName);
	
	baseDeDatosCompuestos=getCompoundData(); //levanto de base de datos de compuestos puros (tablas/chems.js)
	c=baseDeDatosCompuestos.find(element => element.compoundName==compoundName) //me quedo con el que me interesa
	
	return c;
};


function loadTankParameters(){

	console.log("   Tomando características del tanque.. ");

	t={
		type:"IFR",	    		//document.getElementById("tankType").value; //(VFR|HFR|EFR|DEFR|IFR)
		height:10,		    	//document.getElementById("tankheight").value; //altura [ft] // ACLARACIÓN: Si el tanque es horizontal, aquí debe ingresarse su largo.
		diameter:5,    	    		//document.getElementById("tankDiamter").value; //diametro [ft]
		minLiquidHeight:1, 	    	//document.getElementById("").value; //altura minima de liquido [ft]
		avgLiquidHeight:2, 	    	//document.getElementById("").value; //altura promedio de liquido [ft]
		maxLiquidHeight:3, 	    	//document.getElementById("").value; //altura maxima de liquido [ft]
		turnoversPerYear:"",      	//document.getElementById("").value; //número de veces que el tanque se llenó totalmente en el año
		annualNetThroughput:6,	//document.getElementById("").value; //volumen neto que se incorporó al tanque a lo largo de todo el año [gal] (alternativamente se puede usar el volumen bruto pero eso generaría una sobreestimación de las emisiones)
		vaporbalanced:true, 		//document.getElementById("").value; //esta en equilibrio con el vapor?
		shell:{
			color:"black",		//document.getElementById("").value; //color
			condition:"aged",	//document.getElementById("").value; //(new|aged|average)
		},
		roof:{
			type:"dome", 	 	//document.getElementById("").value; //(cone|dome)
			color:"white",		//document.getElementById("").value; //color
			condition:"new",	//document.getElementById("").value; //(new|aged|average)
			height:0,		//document.getElementById("").value; //altura del techo [ft] // ACLARACIÓN: Si el usuario no tiene el valor de la altura del techo, en esta variable se debe ingresar cero.
			slope:"",		//document.getElementById("").value; //pendiente del techo (si es cónico) [ft/ft]
			radius:5,		//document.getElementById("").value; //radio del techo (si es en forma de domo) [ft] // ACLARACIÓN: Si el usuario no tiene el valor del radio del techo, en esta variable se debe ingresar el mismo valor que se haya ingresado para el diámetro del tanque (así lo recomienda el AP-42).
		},
		ventPressureSetting:0.03,	//document.getElementById("").value; //presión a la cual están seteadas las válvulas de ventilación [psig]
		ventVacuumSetting:-0.03,	//document.getElementById("").value; //presión de vacío de las válvulas de ventilación [psig]
		gaugePressure:"",			//document.getElementById("").value; //presión manométrica en la fase vapor en condiciones de operación normales [psig] // ACLARACIÓN: sólo se debe ingresar si la ventPressureRange ingresada es mayor que 0,06. Si el tanque está a temperatura atmosférica, debe ingresarse cero.
		insulation:"none",			//document.getElementById("").value; //none, shell, shellAndRoof, underground //ACLARACIÓN: El AP-42 sólo permite incorporar el aislamiento térmico en los cálculos para tanques de techo fijo
		heating:{
			heating: false,		//document.getElementById("").value; //considerar calentamiento? //ACLARACIÓN: El AP-42 sólo permite incorporar el calentamiento en los cálculos para tanques de techo fijo
			cyclesPerYear:"",	//document.getElementById("").value; //numero de ciclos de calentamiento
			minBulkTemp:"",		//document.getElementById("").value; //temperatura minima del liquido [grados Kelvin] 
			maxBulkTemp:"",		//document.getElementById("").value; //temperatura maxima del liquido [grados Kelvin]
		},
		construction:"riveted", 		//document.getElementById("").value; //(welded|riveted) 
		rimSeal:{
			fit:"Average-Fitting Seal",	//document.getElementById("").value; //(Average-Fitting Seal|Tight-Fitting Seal)
			type:"Mechanical-shoe seal",	//document.getElementById("").value; //(Mechanical-shoe Seal|Liquid-mounted seal|Vapor-mounted Seal)
			secondary:"Primary only",	//document.getElementById("").value; //(Primary only|Shoe-mounted secondary|Rim-mounted secondary|Weather shield)
		},	
		deck: {
			type:"",		//document.getElementById("").value; //(pontoon|double)
			fittings:[],		//acá agrego array con "accesorios"
			seamLength:"",		//document.getElementById("").value; //medida total de las "costuras" de la plataforma flotante [ft] //si no se conoce, se debe dejar en blanco o ingresar cero
			construction:"Panel",	//document.getElementById("").value; //(Continuous sheet|Panel|Unknown)//si no se conocen las MEDIDAS de las hojas o paneles con los que está construida la plataforma, se debe elegir la opción "Unknown" 
			sheetWidth:"",			//document.getElementById("").value; //ancho de las hojas de metal con las que está construida la plataforma flotante [ft]
			panelWidth:5,			//document.getElementById("").value; //ancho de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
			panelLength:12,			//document.getElementById("").value; //largo de los paneles rectangulares de metal con los que está construida la plataforma flotante [ft]
		},
		shellClingageFactor:"",		//document.getElementById("").value; //factor de adhesión del líquido a las paredes [bbl/1000 ft2]//si no se conoce, se debe dejar en blanco o ingresar cero
		shellTexture:"Light Rust",	//document.getElementById("").value; //(Light Rust|Dense Rust|Gunite Lining)//estado del interior de las paredes del tanque 	
		columns:{
			number:1,	//document.getElementById("").value; //número de columnas internas de soporte que tiene el tanque (sólo cuando es un tanque IFR, porque los DEFR tienen techos autoportantes)
			type:"Pipe Columns",	//document.getElementById("").value; //(Built-up Columns|Pipe Columns|Unknown)
		},
	};

	return t;
};

function calculateSolarAbsorbance(t){
	
	console.log("   Calculando absorbancia del tanque.. ");

	paint=getPaintProperties();	//levanto db de archivo: ./tablas/paint.js

	if (t.type == "HFR"){
		
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		a=aShell;
	}
	else{
		aShell=eval("paint.find( element => element.paintName==\""+t.shell.color+"\")."+t.shell.condition);
		aRoof=eval("paint.find( element => element.paintName==\""+t.roof.color+"\")."+t.roof.condition);
		
		a=(aShell+aRoof)*0.5;	//promedio de absorb entre shell y roof.
	};

	return a; 
};


function addDeckFitting(t,fittingName,fittingType,n) {
	
	databaseDeckFittings=getDeckFittingsProperties(); //levanto de base de datos de deckFittings (tablaa/deckFittings.js)
	for (i=0;i<n;i++){	//lo agrego n veces!
		t.deck.fittings.push( databaseDeckFittings.find( element => (element.fittingName==fittingName & element.fittingType==fittingType) ) ); 
	};
};


function findRimSealProp(t) {
	
	databaseRimSeals=getRimSealProperties(); //levanto de base de datos de Rim Seals (tablas/rimSeal.js)
	t.rimSeal=databaseRimSeals.find(element => (element.sealFit==t.rimSeal.fit & element.tankConstruction==t.construction & element.sealType==t.rimSeal.type & element.secondSeal==t.rimSeal.secondary)) //me quedo con el que me interesa
	
	return t.rimSeal;
};
