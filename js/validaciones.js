function validacion(validacionID){

	//Corridas de validación:
	console.log(">>> Corrida de validación: "+validacionID+"...");
	

	//"CASO BASE": Valores default para ubicación, tanque y líquido
	
	//Identificación del reporte de salida:
	id={
		userID:"Corrida de Prueba 0",
		location:"Rochester, MN",
		company:"",
		description:"",
	};

	unitsInp="Imperial";
	unitsOut="Imperial";

	siteName="Rochester, MN";

	liquidCategory="";
	liquidName="";
	compoundName=""; 

	t={
        	type:"VFR",	    		
        	height:10,		    	
        	diameter:5,    	    		
        	minLiquidHeight:1, 	    	
        	avgLiquidHeight:2, 	    	
        	maxLiquidHeight:3, 	    	
        	turnoversPerYear:"",      	
        	annualNetThroughput:10,		
        	shell:{
        		color:"gray: medium",		
        		condition:"aged",	
        	},
        	roof:{
        		type:"", 	 	
        		color:"white",		
        		condition:"new",	
        		height:"",		
        		slope:"",		
        		radius:"",		
        	},
        	ventPressureSetting:0.03,	
        	ventVacuumSetting:-0.03,	
        	gaugePressure:"",		
        	insulation:"none",		
        	heating:{
        		heating: false,		
        		cyclesPerYear:"",	
        		minBulkTemp:"",		
        		maxBulkTemp:"",		
        	},
        	construction:"", 	
        	rimSeal:{
        		fit:"",	
        		type:"",	
        		secondary:"",	
        	},	
        	deck: {
        		type:"",
				support:"",		
        		fittings:[],		
        		seamLength:"",		
        		construction:"",	
        		sheetWidth:"",		
        		panelWidth:"",		
        		panelLength:"",		
        	},
        	shellClingageFactor:"",		
        	shellTexture:"",	
        	columns:{
        		number:"",	
        		type:"",	
        	},
        };

	//Configuraciones de cada validación:
	switch (validacionID) {
		case "Prueba1":
			id.userID="Corrida de Prueba 1";
			//Acá cambia sólo el tipo de techo y el compuesto orgánico	
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.roof.type="dome";
			t.roof.height=0;
			t.roof.radius=5;
		break;
	  	case "Prueba2":
			id.userID="Corrida de Prueba 2";
			//Acá cambia sólo el compuesto orgánico y las unidades de salida
			unitsOut="SI";                                                                                
			liquidCategory="Other organic liquids";
			compoundName="Hexane (n)";
			t.roof.type="dome";
			t.roof.height=0;
			t.roof.radius=5;
		break;
	  	case "Prueba3":
			id.userID="Corrida de Prueba 3";
			//Acá cambia el tipo de líquido (petróleo refinado) y el tipo de tanque (IFR) junto con sus ajustes del sello, los accesorios y la plataforma flotante
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Motor Gasoline RVP 7";   	
			t.type="IFR";
			t.construction="riveted";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Mechanical-shoe seal";
			t.rimSeal.secondary="Primary only";
			t.deck.type="bolted";
			t.deck.construction="Panel";
			t.deck.panelWidth=5;
			t.deck.panelLength=12;
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Light Rust";
			t.columns.number=1;
			t.columns.type="Pipe Columns";
		break;
	  	case "Prueba4":
			id.userID="Corrida de Prueba 4";
			//Acá cambia el tipo de tanque (HFR)
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Motor Gasoline RVP 7";   	
			t.type="HFR";
			t.minLiquidHeight="";
			t.avgLiquidHeight="";
			t.maxLiquidHeight="";
		break;
		case "Prueba5":
			id.userID="Corrida de Prueba 5";
			//Acá cambia el tipo de líquido (petróleo crudo), el tipo de tanque (EFR), el tipo de construcción del tanque y el tipo de sello. 
			liquidCategory="Crude Oils";
			liquidName="Midcontinent Crude Oil";    	
			t.type="EFR";
			t.construction="welded";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Liquid-mounted seal";
			t.rimSeal.secondary="Weather shield";
			t.deck.type="welded";
			t.deck.support="double";
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Light Rust";
			t.columns.number=0;
		break;
		case "Prueba6":
			id.userID="Corrida de Prueba 6";
			//Acá cambia el tipo de techo y el aislamiento térmico (sin calentamiento)      	
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.roof.type="cone";
			t.roof.height=0;
			t.roof.slope=0.0625;
			t.insulation="shellAndRoof";
			t.heating.minBulkTemp=470;
			t.heating.maxBulkTemp=470;
		break;
		case "Prueba7":
			id.userID="Corrida de Prueba 7";
			///Acá se agrega calentamiento
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.roof.type="cone";
			t.roof.height=0;
			t.roof.slope=0.0625;
			t.heating.heating=true;
			t.heating.minBulkTemp=460;
			t.heating.maxBulkTemp=480;
		break;
		case "Prueba8":
			id.userID="Corrida de Prueba 8";
			///Acá cambia la presión a la que están seteadas las válvulas de ventilación
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.roof.type="cone";
			t.roof.height=0;
			t.roof.slope=0.0625;
			t.ventPressureSetting=0.04;
        	t.ventVacuumSetting=-0.04;	
        	t.gaugePressure=0.01;		
		break;
		case "Prueba9":
			id.userID="Corrida de Prueba 9";
			///Acá se ingresan los turnoversPerYear en lugar del annualNetThroughput
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.roof.type="cone";
			t.roof.height=0;
			t.roof.slope=0.0625;
			t.turnoversPerYear=5;
			t.annualNetThroughput="";
		break;
		case "Prueba10":
			id.userID="Corrida de Prueba 10";
			///Acá cambia el tipo de tanque (DEFR), el tipo de construcción del tanque y de la plataforma flotante, y la textura de las paredes
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.type="DEFR";
			t.construction="welded";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Mechanical-shoe seal";
			t.rimSeal.secondary="Primary only";
			t.deck.type="welded";
			t.deck.support="pontoon";
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Dense Rust";
		break;
	};


	// (1) INPUTS

	//  (1a) datos meteorologicos:
    m=loadMeteorologicalParameters(siteName);

	//  (1b) datos de combustible:
	if (liquidCategory == "Other organic liquids"){
		c=loadCompoundParameters(compoundName);
	}
	else{
		c=loadLiquidParameters(liquidName);
	};

	// (1c) datos del tanque:
	t.rimSeal=findRimSealProp(t);	//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
	
	if(t.turnoversPerYear!=0 && t.turnoversPerYear!="" && isNaN(t.turnoversPerYear)==false) {
		
		if (t.type=="VFR"){
			effectiveDiameter=t.diameter;
			minLiquidHeight=t.minLiquidHeight;
			if (t.maxLiquidHeight!= "" && t.maxLiquidHeight!=0 && t.maxLiquidHeight!=null) {
				maxLiquidHeight = t.maxLiquidHeight;
			} else {
				maxLiquidHeight = t.maxLiquidHeight - 1;
			};				
		} else if (t.type=="HFR") {
			effectiveDiameter = Math.sqrt((t.height * t.diameter) / (Math.PI / 4));
			effectiveHeight = Math.PI * t.diameter / 4;
			maxLiquidHeight = effectiveHeight;
			minLiquidHeight = 0;
		} else {
			minLiquidHeight=t.minLiquidHeight;
			maxLiquidHeight=t.maxLiquidHeight;
			effectiveDiameter=t.diameter;
		};

		t.annualNetThroughput = (t.turnoversPerYear*(maxLiquidHeight-minLiquidHeight)*(Math.PI/4)*Math.pow(effectiveDiameter,2));
	
	} else if (t.annualNetThroughput!=0 && t.annualNetThroughput!="" && t.annualNetThroughput!=null) {
		
		if (t.type=="VFR"){
			effectiveDiameter=t.diameter;
			minLiquidHeight=t.minLiquidHeight;
			if (t.maxLiquidHeight!= "" && t.maxLiquidHeight!=0 && t.maxLiquidHeight!=null) {
				maxLiquidHeight = t.maxLiquidHeight;
			} else {
				maxLiquidHeight = t.height - 1;
			};				
		} else if (t.type=="HFR") {
			effectiveDiameter = Math.sqrt((t.height * t.diameter) / (Math.PI / 4));
			effectiveHeight = Math.PI * t.diameter / 4;
			maxLiquidHeight = effectiveHeight;
			minLiquidHeight = 0;
		} else {
			minLiquidHeight=t.minLiquidHeight;
			maxLiquidHeight=t.maxLiquidHeight;
			effectiveDiameter=t.diameter;
		};		
		
		t.turnoversPerYear=t.annualNetThroughput/((Math.PI/4)*(Math.pow(effectiveDiameter,2))*(maxLiquidHeight-minLiquidHeight));
	};


	// (2) 

	// (2a) Inicializar array con resultados de variables intermedias:
	resultadosIntermedios=[];

	// (2b) Inicializar objeto y array con variables que van al reporte de salida:
	o={};
	outputs=[];


	//
	//(3) CALCULOS

	//  (3.a) calculos previos:
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura
	resultadosIntermedios.push({varName:"Factor de absorbancia pintura (adimensional)",value:t.a});
	t.workingVolume=calculateWorkingVolume(t);	//calcula el volumen útil o de operación del tanque [ft3]
	outputs.push({varName:"workingVolume",value:t.workingVolume,units:"ft3"});

	//  (3.b) calculo de emision:

	if (t.type == "VFR" || t.type == "HFR") {
        totalLosses = Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {
		totalLosses = Eq2_1();
    };
	outputs.push({varName:"totalLosses",value:totalLosses,units:"lbs"});	

	
	//(4) OUTPUT

	outputs.push({varName:"height",value:t.height,units:"ft"});
	outputs.push({varName:"diameter",value:t.diameter,units:"ft"});
	outputs.push({varName:"minLiquidHeight",value:t.minLiquidHeight,units:"ft"});
	outputs.push({varName:"maxLiquidHeight",value:t.maxLiquidHeight,units:"ft"});
	outputs.push({varName:"annualNetThroughput",value:t.annualNetThroughput,units:"ft3"});

	// Convertir unidades si el usuario elige sistema internacional:
	if (unitsOut == "SI"){
		for (let i=0; i< outputs.length; i++){
			if (outputs[i].units=="ft"){
				o[outputs[i].varName]=outputs[i].value/3.28084;
			} else if (outputs[i].units=="ft3"){
				o[outputs[i].varName]=outputs[i].value*0.0283;
			} else if (outputs[i].units=="psi"){
				o[outputs[i].varName]=outputs[i].value/0.145;
			} else	if (outputs[i].units=="°R"){
				o[outputs[i].varName]=(outputs[i].value-491.67)/1.8;
			} else	if (outputs[i].units=="lbs"){
				o[outputs[i].varName]=outputs[i].value*0.45359;
			} else {
				o[outputs[i].varName]=outputs[i].value;
			};
		};
	} else {
		for (let i=0; i< outputs.length; i++){
			if (outputs[i].units=="°R"){
				o[outputs[i].varName]=(outputs[i].value-459.67);
			} else {
				o[outputs[i].varName]=outputs[i].value;
			};
		};
	};

	printOutput();

	console.log(" Resultados:");

	if (t.type == "VFR" || t.type == "HFR") {
		console.log("    Emisiones totales: "+o.totalLosses);
		console.log("    Pérdidas almacenamiento: "+o.standingLosses); 
		console.log("    Pérdidas por llenado/vaciado: "+o.workingLosses);
	} else {
		console.log("    Emisiones totales: "+o.totalLosses);
		console.log("    Pérdidas almacenamiento: "+o.standingLosses); 		
		console.log("    Pérdidas accesorios: "+o.deckFittingLosses);
		console.log("    Pérdidas costuras: "+o.deckSeamLosses);
		console.log("    Pérdidas sello: "+o.rimSealLosses);
		console.log("    Pérdidas por vaciado: "+o.workingLosses);
	};
	

	console.log(">>> Fin corrida de validación: "+validacionID+"...");

};



function validarTodo(){

	corridasDeValidacion=["Prueba1","Prueba2","Prueba3","Prueba4","Prueba5","Prueba6","Prueba7","Prueba8","Prueba9","Prueba10"];

	for (let i=0; i<corridasDeValidacion.length; i++){
		
		validacion(corridasDeValidacion[i]);
	};
	
};
