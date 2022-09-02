function validacion(validacionID){

	//Corridas de validación:
	console.log(">>> Corrida de validación: "+validacionID+"...");
	
	//"CASO BASE": Valores default para ubicación, tanque y líquido
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
        	flashing:false, 		
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
			//Acá cambia sólo el tipo de techo y el compuesto orgánico	
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.roof.type="dome";
			t.roof.height=0;
			t.roof.radius=5;
		break;
	  	case "Prueba2":
			//Acá cambia sólo el compuesto orgánico.                                                                                 
			liquidCategory="Other organic liquids";
			compoundName="Hexane (n)";
			t.roof.type="dome";
			t.roof.height=0;
			t.roof.radius=5;
		break;
	  	case "Prueba3":
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
			t.rimSeal=findRimSealProp(t);	//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Light Rust";
			t.columns.number=1;
			t.columns.type="Pipe Columns";
		break;
	  	case "Prueba4":
			//Acá cambia el tipo de tanque (HFR)
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Motor Gasoline RVP 7";   	
			t.type="HFR";
			t.minLiquidHeight="";
			t.avgLiquidHeight="";
			t.maxLiquidHeight="";
		break;
		case "Prueba5":
			//Acá cambia el tipo de líquido (petróleo crudo), el tipo de tanque (EFR), el tipo de construcción del tanque y el tipo de sello. 
			liquidCategory="Crude Oils";
			liquidName="Midcontinent Crude Oil";    	
			t.type="EFR";
			t.construction="welded";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Liquid-mounted seal";
			t.rimSeal.secondary="Weather shield";
			t.rimSeal=findRimSealProp(t);		//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
			t.deck.type="welded";
			t.deck.support="double";
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Light Rust";
			t.columns.number=0;
		break;
		case "Prueba6":
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
			///Acá se agrega flashing y calentamiento
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.roof.type="cone";
			t.roof.height=0;
			t.roof.slope=0.0625;
			t.flashing=true;
			t.heating.heating=true;
			t.heating.minBulkTemp=460;
			t.heating.maxBulkTemp=480;
		break;
		case "Prueba8":
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
			///Acá cambia el tipo de tanque (DEFR), el tipo de construcción del tanque y de la plataforma flotante, y la textura de las paredes
			liquidCategory="Other organic liquids";
			compoundName="Acetaldehyde";
			t.type="DEFR";
			t.construction="welded";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Mechanical-shoe seal";
			t.rimSeal.secondary="Primary only";
			t.deck.type="bolted";
			t.deck.construction="Unknown";
			t.rimSeal=findRimSealProp(t);	//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Dense Rust";
		break;
	};


	//Esto en principio debería quedar intacto:


	//  (1a) datos meteorologicos:
        m=loadMeteorologicalParameters(siteName);

	//  (1b) datos de combustible:
	if (liquidCategory == "Other organic liquids"){
		c=loadCompoundParameters(compoundName);
	}
	else{
		c=loadLiquidParameters(liquidName);
	};
	
	//  (1d) inicializar objeto con datos de salida:
	o={};

	//(2) CALCULOS

	//  (2.a) calculos previos:
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura
	t.workingVolume=calculateWorkingVolume(t);	//calcula el volumen máximo de líquido que puede contener el tanque [gal]

	//  (2.b) calculo de emision:

	if (t.type == "VFR" || t.type == "HFR") {
                o.totalLosses = Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {
				o.totalLosses = Eq2_1();
    };

	
	//(3) OUTPUT
	//outputWindow()	//Acá función que crea informe de salida.
	console.log(" Resultados:");

	console.log("    totalLosses: "+o.totalLosses);
	console.log("    standingLosses: "+o.standingLosses); 
	console.log("    workingLosses: "+o.workingLosses);
	console.log("    deckFittingLosses: "+o.deckFittingLosses);
	console.log("    deckSeamLosses: "+o.deckSeamLosses);
	console.log("    rimSealLosses: "+o.rimSealLosses);

	console.log(">>> Fin corrida de validación: "+validacionID+"...");

};



function validarTodo(){

	corridasDeValidacion=["Prueba1","Prueba2","Prueba3","Prueba4","Prueba5","Prueba6"];

	for (let i=0; i<corridasDeValidacion.length; i++){
		
		validacion(corridasDeValidacion[i]);
	};
	
};
