function validacion(validacionID){

	//Corridas de validación:
	console.log(">>> Corrida de validación: "+validacionID+"...");
	
	//"CASO BASE": valores default para tanque (nos ahorra tener que definir todo siempre)
	t={
        	type:"VFR",	    		
        	height:10,		    	
        	diameter:5,    	    		
        	minLiquidHeight:1, 	    	
        	avgLiquidHeight:2, 	    	
        	maxLiquidHeight:3, 	    	
        	turnoversPerYear:"",      	
        	annualNetThroughput:6,
        	vaporbalanced:true, 		
        	shell:{
        		color:"black",		
        		condition:"aged",	
        	},
        	roof:{
        		type:"cone", 	 	
        		color:"white",		
        		condition:"new",	
        		height:1,		
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

	//Acá armas tus configuraciones para cada validación:
	switch (validacionID) {
	  case "Prueba1":
		//Primera validación:
        siteName="Birmingham, AL";
		liquidCategory="Other Organic Liquids";
		liquidName="";
		compoundName="Acetaldehyde";    	
		t.type="VFR";
        t.annualNetThroughput=10.0;
        ;

	  case "Prueba2":
		//Acá cambie solo el compuesto orgánico.
		siteName="Birmingham, AL";                                                                                  
		t.type="VFR";
        t.annualNetThroughput=10.0;
		liquidCategory="Other Organic Liquids";
		liquidName="";
		compoundName="Cyclohexene";    	
		 ;

	  case "Prueba3":
		//Acá le puse un petroleo, floating roof y le agregue accesorios
		siteName="Rochester, MN";
		liquidCategory="Refined Petroleum Liquids";
		liquidName="Motor Gasoline RVP 7";
		compoundName="";    	
		t.type="IFR";
		findRimSealProp(t);		//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
		addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",3);
		addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
		;

	  case "Prueba4":
		siteName="Rochester, MN";
		liquidCategory="Refined Petroleum Liquids";
		liquidName="Motor Gasoline RVP 7";
		compoundName="";    	
		t.type="EFR";
		findRimSealProp(t);		//busca los factores de pérdidas a través del sello de la plataforma flotante (en tanques IFR, EFR o DEFR)
		addDeckFitting(t,"Access hatch","Unbolted cover, gasketed",3);
		addDeckFitting(t,"Slotted guidepole/sample well","Ungasketed or gasketed sliding cover",2);
		;

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
	t.a=calculateSolarAbsorbance(t);	//calcular absorbancia solar en base a pintura:

	//  (2.b) calculo de emision:

	if (t.type == "VFR" || t.type == "HFR") {
                Eq1_1();
	} else if (t.type == "EFR" || t.type == "DEFR" || t.type == "IFR") {

		Eq2_1();
    }
	//(3) OUTPUT
	//outputWindow()	//Acá función que crea informe de salida.
	console.log(" Resultados:");
	console.log("    totalLosses: "+o.totalLosses);
	console.log("    standingLosses: "+o.standingLosses); 
	console.log("    workingLosses: "+o.workingLosses);
	console.log("    deckFittingLossFactor: "+o.deckFittingLossFactor);
	console.log("    deckFittingLosses: "+o.deckFittingLosses);
	console.log("    deckSeamLosses: "+o.deckSeamLosses);
	console.log("    rimSealLosses: "+o.rimSealLosses);

	console.log(">>> Fin corrida de validación: "+validacionID+"...");
};



function validarTodo(){

	corridasDeValidacion=["Prueba1","Prueba2","Prueba3"];

	for (let i=0; i<corridasDeValidacion.length; i++){
		
		validacion(corridasDeValidacion[i]);
	};
	
};
