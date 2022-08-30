function validacion(validacionID){

	//Corridas de validación:
	console.log(">>> Corrida de validación: "+validacionID+"...");
	
	//"CASO BASE": Valores default para ubicación, tanque y líquido
	siteName="Rochester, MN";
	liquidCategory="Other organic liquids";
	liquidName="";
	compoundName="Acetaldehyde"; 
	t={
        	type:"VFR",	    		
        	height:10,		    	
        	diameter:5,    	    		
        	minLiquidHeight:1, 	    	
        	avgLiquidHeight:2, 	    	
        	maxLiquidHeight:3, 	    	
        	turnoversPerYear:"",      	
        	annualNetThroughput:10,
        	vaporbalanced:true, 		
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
			//Acá cambia sólo el tipo de techo
			compoundName="Acetaldehyde";    	
			t.roof.type= "dome";
			t.roof.height=0;
			t.roof.radius=5;
		break;
	  	case "Prueba2":
			//Acá cambia el tipo de techo y el compuesto orgánico.                                                                                 
			compoundName="Hexane (n)";
			t.roof.type="dome";
			t.roof.height=0;
			t.roof.radius=5;
		break;
	  	case "Prueba3":
			//Acá cambia el tipo de líquido (petróleo refinado) y el tipo de tanque (IFR) junto con sus ajustes del sello, los accesorios y la plataforma flotante
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Motor Gasoline RVP 7";
			compoundName="";    	
			t.type="IFR";
			t.construction="riveted";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Mechanical-shoe seal";
			t.rimSeal.secondary="Primary only";
			t.deck.construction="Panel";
			t.deck.panelWidth=5;
			t.deck.panelLength=12;
			t.rimSeal=findRimSealProp(t);		//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Light Rust";
			t.columns.number=1;
			t.columns.type="Pipe Columns";
		break;
	  	case "Prueba4":
			//Acá cambia el tipo de líquido (petróleo refinado) y el tipo de tanque (HFR)
			liquidCategory="Refined Petroleum Liquids";
			liquidName="Motor Gasoline RVP 7";
			compoundName="";    	
			t.type="HFR";
			t.minLiquidHeight="";
			t.avgLiquidHeight="";
			t.maxLiquidHeight="";
		break;
		case "Prueba5":
			//Acá cambia el tipo de líquido (petróleo crudo), el tipo de tanque (EFR), el tipo de construcción del tanque y el tipo de sello. 
			liquidCategory="Crude Oils";
			liquidName="Midcontinent Crude Oil";
			compoundName="";    	
			t.type="EFR";
			t.construction="welded";
			t.rimSeal.fit="Average-Fitting Seal";
			t.rimSeal.type="Liquid-mounted seal";
			t.rimSeal.secondary="Weather shield";
			t.rimSeal=findRimSealProp(t);		//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
			addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",1);
			addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
			t.shellTexture="Light Rust";
			t.columns.number=0;
		break;
		case "Prueba6":
			//Acá cambia la condición de equilibrio del vapor con el líquido, el tipo de techo, el aislamiento térmico y el calentamiento      	
			t.vaporbalanced=false;
			t.roof.type="cone";
			t.roof.height=0;
			t.roof.slope=0.0625;
			t.insulation="shellAndRoof";
			t.heating.heating=true;
			t.heating.minBulkTemp=460;
			t.heating.maxBulkTemp=480;
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
	t.volume=calculateTankVolume(t);	//sólo para ingresarlo en el TANKS que me lo pide como input [en gal]

	//  (2.b) calculo de emision:

	if (t.type == "VFR" || t.type == "HFR") {
                o.totalLosses = Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {
				o.totalLosses = Eq2_1();
    };

	
	//(3) OUTPUT
	//outputWindow()	//Acá función que crea informe de salida.
	console.log(" Resultados:");
	console.log(o.totalLosses, o.standingLosses, o.workingLosses, o.deckFittingLossFactor, o.deckFittingLosses, o.deckSeamLosses, o.rimSealLosses);
	console.log(">>> Fin corrida de validación: "+validacionID+"...");

};



function validarTodo(){

	corridasDeValidacion=["Prueba1","Prueba2","Prueba3","Prueba4","Prueba5","Prueba6"];

	for (let i=0; i<corridasDeValidacion.length; i++){
		
		validacion(corridasDeValidacion[i]);
	};
	
};
