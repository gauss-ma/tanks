// set up collapsible instructions
var coll = document.getElementsByClassName("collapsible");
var counter1;

for (counter1 = 0; counter1 < coll.length; counter1++) {
	coll[counter1].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
};
			
//Load Page
var aryVarVals = {a:"", a_R:"", a_S:"", A:"", A_deck:"", A_fi:"", B:"", C:"", C_S:"", C_sf:"", C_V:"", D:"", D_E:"", d_s:"", F_C:"", F_E:"", F_F:"", h_d:"", H_L:"", h_le:"", H_LN:"", H_LX:"", sumH_QD:"", sumH_QI:"", H_R:"", H_RO:"", H_S:"", h_v:"", H_VO:"", I:"", K_C:"", K_D:"", K_E:"", K_Fai:"", K_Fbi:"", K_Fi:"", K_N:"", K_P:"", K_Ra:"", K_Rb:"", K_S:"", K_v:"", L:"", L_C:"", L_CV:"", L_D:"", L_F:"", L_FV:"", L_FL:"", L_P:"", L_R:"", L_RL:"", L_S:"", L_seam:"", L_SL:"", L_T:"", L_Ti:"", L_TL:"", L_V:"", L_W:"", M_CG:"", m_i:"", M_i:"", M_L:"", M_V:"", N:"", n:"", n_d:"", N_2:"", N_C:"", n_CV:"", N_d:"", n_f:"", N_Fai:"", N_Fbi:"", N_Fi:"", N_l:"", N_TOTAL:"", N_vb:"", P:"", P_star:"", P_A:"", deltaP_B:"", P_BP:"", P_BV:"", P_I:"", P_i:"", deltaP_V:"", P_VA:"", P_VN:"", P_VX:"", Q:"", Q_V:"", R:"R", R_R:"", R_S:"", S:"", s:"", S_D:"", S_R:"", deltaT_A:"", T_AA:"", T_AN:"", T_AX:"", T_B:"", T_BN:"", T_BX:"", T_LA:"", T_V:"", t_v:"", deltaT_V:"", v:"", V_1:"", V_2:"", V_Q:"", V_LX:"", V_V:"", W_i:"", W_L:"", W_V:"", x_i:"", y_i:"", Z_Li:"", Z_Vi:""};

var aryVarNames1 = {a:"	&alpha;", a_R:"a_R", a_S:"a_S", A:"A", A_deck:"A_deck", A_fi:"A_fi", B:"B", C:"C", C_S:"C_S", C_sf:"C_sf", C_V:"C_V", D:"D", D_E:"D_E", d_s:"d_s", F_C:"F_C", F_E:"F_E", F_F:"F_F", h_d:"h_d", H_L:"H_L", h_le:"h_le", H_LN:"H_LN", H_LX:"H_LX", sumH_QD:"sumH_QD", sumH_QI:"sumH_QI", H_R:"H_R", H_RO:"H_RO", H_S:"H_S", h_v:"h_v", H_VO:"H_VO", I:"I", K_C:"K_C", K_D:"K_D", K_E:"K_E", K_Fai:"K_Fai", K_Fbi:"K_Fbi", K_Fi:"K_Fi", K_N:"K_N", K_P:"K_P", K_Ra:"K_Ra", K_Rb:"K_Rb", K_S:"K_S", K_v:"K_v", L:"L", L_C:"L_C", L_CV:"L_CV", L_D:"L_D", L_F:"L_F", L_FV:"L_FV", L_FL:"L_FL", L_P:"L_P", L_R:"L_R", L_RL:"L_RL", L_S:"L_S", L_seam:"L_seam", L_SL:"L_SL", L_T:"L_T", L_Ti:"L_Ti", L_TL:"L_TL", L_V:"L_V", L_W:"L_W", M_CG:"M_CG", m_i:"m_i", M_i:"M_i", M_L:"M_L", M_V:"M_V", N:"N", n:"n", n_d:"n_d", N_2:"N_2", N_C:"N_C", n_CV:"n_CV", N_d:"N_d", n_f:"n_f", N_Fai:"N_Fai", N_Fbi:"N_Fbi", N_Fi:"N_Fi", N_l:"N_l", N_TOTAL:"N_TOTAL", N_vb:"N_vb", P:"P", P_star:"P_star", P_A:"P_A", deltaP_B:"deltaP_B", P_BP:"P_BP", P_BV:"P_BV", P_I:"P_I", P_i:"P_i", deltaP_V:"deltaP_V", P_VA:"P_VA", P_VN:"P_VN", P_VX:"P_VX", Q:"Q", Q_V:"Q_V", R:"R", R_R:"R_R", R_S:"R_S", S:"S", s:"s", S_D:"S_D", S_R:"S_R", deltaT_A:"deltaT_A", T_AA:"T_AA", T_AN:"T_AN", T_AX:"T_AX", T_B:"T_B", T_BN:"T_BN", T_BX:"T_BX", T_LA:"T_LA", T_V:"T_V", t_v:"t_v", deltaT_V:"deltaT_V", v:"v", V_1:"V_1", V_2:"V_2", V_Q:"V_Q", V_LX:"V_LX", V_V:"V_V", W_i:"W_i", W_L:"W_L", W_V:"W_V", x_i:"x_i", y_i:"y_i", Z_Li:"Z_Li", Z_Vi:"Z_Vi"};

var aryVarNames2 = {a:"&alpha;",  a_R:"&alpha;<sub>R</sub>",  a_S:"&alpha;<sub>S</sub>",  A:"A",  A_deck:"A<sub>deck</sub>",  A_fi:"A<sub>fi</sub>",  B:"B",  C:"C",  C_S:"C<sub>S</sub>",  C_sf:"C<sub>sf</sub>",  C_V:"C<sub>V</sub>",  D:"D",  D_E:"D<sub>E</sub>",  d_s:"d<sub>s</sub>",  F_C:"F<sub>C</sub>",  F_E:"F<sub>E</sub>",  F_F:"F<sub>F</sub>",  h_d:"h<sub>d</sub>",  H_L:"H<sub>L</sub>",  h_le:"h<sub>le</sub>",  H_LN:"H<sub>LN</sub>",  H_LX:"H<sub>LX</sub>",  sumH_QD:"sumH<sub>QD</sub>",  sumH_QI:"sumH<sub>QI</sub>",  H_R:"H<sub>R</sub>",  H_RO:"H<sub>RO</sub>",  H_S:"H<sub>S</sub>",  h_v:"h<sub>v</sub>",  H_VO:"H<sub>VO</sub>",  I:"I",  K_C:"K<sub>C</sub>",  K_D:"K<sub>D</sub>",  K_E:"K<sub>E</sub>",  K_Fai:"K<sub>Fai</sub>",  K_Fbi:"K<sub>Fbi</sub>",  K_Fi:"K<sub>Fi</sub>",  K_N:"K<sub>N</sub>",  K_P:"K<sub>P</sub>",  K_Ra:"K<sub>Ra</sub>",  K_Rb:"K<sub>Rb</sub>",  K_S:"K<sub>S</sub>",  K_v:"K<sub>v</sub>",  L:"L",  L_C:"L<sub>C</sub>",  L_CV:"L<sub>CV</sub>",  L_D:"L<sub>D</sub>",  L_F:"L<sub>F</sub>",  L_FV:"L<sub>FV</sub>",  L_FL:"L<sub>FL</sub>",  L_P:"L<sub>P</sub>",  L_R:"L<sub>R</sub>",  L_RL:"L<sub>RL</sub>",  L_S:"L<sub>S</sub>",  L_seam:"L<sub>seam</sub>",  L_SL:"L<sub>SL</sub>",  L_T:"L<sub>T</sub>",  L_Ti:"L<sub>Ti</sub>",  L_TL:"L<sub>TL</sub>",  L_V:"L<sub>V</sub>",  L_W:"L<sub>W</sub>",  M_CG:"M<sub>CG</sub>",  m_i:"m<sub>i</sub>",  M_i:"M<sub>i</sub>",  M_L:"M<sub>L</sub>",  M_V:"M<sub>V</sub>",  N:"N",  n:"n",  n_d:"n<sub>d</sub>",  N_2:"N<sub>2</sub>",  N_C:"N<sub>C</sub>",  n_CV:"n<sub>CV</sub>",  N_d:"N<sub>d</sub>",  n_f:"n<sub>f</sub>",  N_Fai:"N<sub>Fai</sub>",  N_Fbi:"N<sub>Fbi</sub>",  N_Fi:"N<sub>Fi</sub>",  N_l:"N<sub>l</sub>",  N_TOTAL:"N<sub>TOTAL</sub>",  N_vb:"N<sub>vb</sub>",  P:"P",  P_star:"P<sub>star</sub>",  P_A:"P<sub>A</sub>",  deltaP_B:"&Delta;P<sub>B</sub>",  P_BP:"P<sub>BP</sub>",  P_BV:"P<sub>BV</sub>",  P_I:"P<sub>I</sub>",  P_i:"P<sub>i</sub>",  deltaP_V:"&Delta;P<sub>V</sub>",  P_VA:"P<sub>VA</sub>",  P_VN:"P<sub>VN</sub>",  P_VX:"P<sub>VX</sub>",  Q:"Q",  Q_V:"Q<sub>V</sub>",  R:"R", R_R:"R<sub>R</sub>",  R_S:"R<sub>S</sub>",  S:"S",  s:"s",  S_D:"S<sub>D</sub>",  S_R:"S<sub>R</sub>",  deltaT_A:"&Delta;T<sub>A</sub>",  T_AA:"T<sub>AA</sub>",  T_AN:"T<sub>AN</sub>",  T_AX:"T<sub>AX</sub>",  T_B:"T<sub>B</sub>",  T_BN:"T<sub>BN</sub>",  T_BX:"T<sub>BX</sub>",  T_LA:"T<sub>LA</sub>",  T_V:"T<sub>V</sub>",  t_v:"t<sub>v</sub>",  deltaT_V:"&Delta;T<sub>V</sub>",  v:"v",  V_1:"V<sub>1</sub>",  V_2:"V<sub>2</sub>",  V_Q:"V<sub>Q</sub>",  V_LX:"V<sub>LX</sub>",  V_V:"V<sub>V</sub>",  W_i:"W<sub>i</sub>",  W_L:"W<sub>L</sub>",  W_V:"W<sub>V</sub>",  x_i:"x<sub>i</sub>",  y_i:"y<sub>i</sub>",  Z_Li:"Z<sub>Li</sub>",  Z_Vi:"Z<sub>Vi</sub>"}

var aryVarDesc = {a:"Tank surface solar absorptance, dimensionless", a_R:"Tank roof surface solar absorptance, dimensionless", a_S:"Tank shell surface solar absorptance, dimensionless", A:"Constant in vapor pressure equation, dimensionless", A_deck:"Area of deck, ft2", A_fi:"Liquid surface area within a particular type of deck fitting, in2", B:"Constant in vapor pressure equation, °R or °C", C:"Constant in vapor pressure equation, °R or °C", C_S:"Shell clingage factor, bbl/1,000 ft2", C_sf:"Filling saturation correction factor for wind, dimensionless", C_V:"Average vapor concentration by volume during continued forced ventilation, dimensionless", D:"Tank diameter, ft", D_E:"Effective tank diameter, ft", d_s:"Average depth of sludge, in.", F_C:"Effective column diameter, ft", F_E:"Fraction of sludge with potential to evaporate, dimensionless", F_F:"Total deck fitting loss factor, lb-mole/yr", h_d:"Deck leg height at the tank shell, ft", H_L:"Liquidd height, ft", h_le:"Effective liquid height during roof landing, ft", H_LN:"Minimum liquid height, ft", H_LX:"Maximum liquid height, ft", sumH_QD:"Annual sum of the decreases in liquid level, ft/yr", sumH_QI:"Aannual sum of the increases in liquid level, ft/yr", H_R:"Tank roof height, ft", H_RO:"Roof outage, ft", H_S:"Tank shell height, ft", h_v:"Vapor space height under landed floating roof, ft", H_VO:"Vapor space outage, ft", I:"Average daily total insolation factor, Btu/ft<sup>2</sup>•d", K_C:"Product factor for floating roof tanks, dimensionless", K_D:"Deck seam loss per unit seam length factor, lb-mole/ft-yr", K_E:"Vapor space expansion factor, per day", K_Fai:"Zero wind speed loss factor for a particular type of deck fitting, lb-mole/yr", K_Fbi:"Wind speed dependent loss factor for a particular type of deck fitting, lb-mole/(mph)myr", K_Fi:"Loss factor for a particular type of deck fitting, lb-mole/yr", K_N:"Turnover factor, dimensionless", K_P:"Working loss product factor for fixed roof tanks, dimensionless", K_Ra:"Zero wind speed rim seal loss factor, lb-mole/ft•yr", K_Rb:"Wind speed dependent rim seal loss factor, lb-mole/ (mph)nft•yr", K_S:"Vented vapor saturation factor, dimensionless", K_v:"Fitting wind speed correction factor, dimensionless", L:"Length of tank, ft", L_C:"Clingage factor for drain dry tanks, lb", L_CV:"Continued forced ventilation emissions, lb/cleaning event", L_D:"Deck seam loss, lb/yr", L_F:"Deck fitting loss, lb/yr", L_FV:"Total tank cleaning emissions due to forced ventilation, lb/cleaning event", L_FL:"Filling loss during roof landing, lb/landing event", L_P:"Vapor space purge emissions due to first air change from forced ventilation, lb/cleaning event", L_R:"Rim seal loss, lb/yr", L_RL:"Rim seal loss during roof landing, lb/landing event", L_S:"Standing losses, lb/yr", L_seam:"Total length of deck seam, ft", L_SL:"Standing loss during roof landing, lb/landing event", L_T:"Total routine losses, lb/yr", L_Ti:"Emission rate of component i, lb/yr", L_TL:"Total loss during roof landing, lb/landing event", L_V:"Variable vapor space filling loss, lb/1,000 gal throughput", L_W:"Working losses, lb/yr", M_CG:"Molecular weight of calibration gas, lb/lb-mole", m_i:"Loss factor for a particular type of deck fitting, dimensionless", M_i:"Molecular weight of component i, lb/lb-mole", M_L:"Molecular weight of liquid mixture, lb/lb-mole", M_V:"Vapor molecular weight, lb/lb-mole", N:"Number of turnovers per year, dimensionless", n:"Seal-related wind speed exponent, dimensionless", n_d:"Number of days standing idle during roof landing or prior to forced ventilation, days", N_2:"Number of transfers into system, dimensionless", N_C:"Number of columns, dimensionless", n_CV:"Duration of continued forced ventilation, days", N_d:"Number of drains", n_f:"Total number of different types of fittings, dimensionless", N_Fai:"Zero wind speed loss factor for a particular type of deck fitting, lb-mole/yr", N_Fbi:"Wind speed dependent loss factor for a particular type of fitting, lb-mole/mphm•yr", N_Fi:"Number of deck fittings of a particular type, dimensionless", N_l:"Number of deck legs", N_TOTAL:"Total number of moles in mixture, lb-mole", N_vb:"Number of vacuum breakers", P:"True vapor pressure of component i, psia", P_star:"Vapor pressure function, dimensionless", P_A:"Atmospheric pressure, psi", deltaP_B:"Breather vent pressure setting range, psig", P_BP:"Breather vent pressure setting, psig", P_BV:"Breather vent vacuum setting, psig", P_I:"Gauge pressure within the vapor space, psig", P_i:"Partial pressure of component i, psia", deltaP_V:"Average daily vapor pressure range, psi", P_VA:"Vapor pressure at average daily liquid surface temperature, psia", P_VN:"Vapor pressure at the average daily minimum liquid surface temperature, psia", P_VX:"Vapor pressure at the average daily maximum liquid surface temperature, psia", Q:"Annual net throughput, bbl/yr", Q_V:"Average ventilation rate during tank cleaning, ft3/min", R:"Ideal gas constant, psia•ft<sup>3</sup>/lb-mole•&deg;R", R_R:"Tank dome roof radius, ft", R_S:"Tank shell radius, ft", S:"Filling saturation factor, dimensionless", s:"Tank cone bottom slope, ft/ft", S_D:"Deck seam length factor, ft/ft2", S_R:"Tank cone roof slope, ft/ft", deltaT_A:"Average daily ambient temperature range, °R", T_AA:"Average daily ambient temperature, °R", T_AN:"Average daily minimum ambient temperature, °R", T_AX:"Average daily maximum ambient temperature, °R", T_B:"Liquid bulk temperature, °R", T_BN:"Typical minimum liquid bulk temperature in heating cycles, °R", T_BX:"Typical maximum liquid bulk temperature in heating cycles, °R", T_LA:"Average daily liquid surface temperature, °R", T_V:"Average vapor temperature, °R", t_v:"Daily period of forced ventilation during tank cleaning, hr/day", deltaT_V:"Average daily vapor temperature range, °R", v:"Average wind speed, mph", V_1:"Volume of liquid pumped into system, bbl/yr", V_2:"Volume expansion capacity, bbl", V_Q:"Net working loss throughput, ft<sup>3</sup>/yr", V_LX:"Tank maximum liquid volume, ft<sup>3</sup>", V_V:"Vapor space volume, ft<sup>3</sup>", W_i:"Liquid density of component i, lb/ft<sup>3</sup>", W_L:"Average organic liquid density, lb/gal", W_V:"Vapor density, lb/ft<sup>3</sup>", x_i:"Liquid mole fraction of component i, lb-mole/lbmole", y_i:"Vapor mole fraction of component i, lb-mole/lbmole", Z_Li:"Liquid weight fraction of component i, lb/lb", Z_Vi:"Vapor weight fraction of component i, lb/lb"};
var validate = 0;			

appendMetData();
fillPaintProperties("paintShell");
fillPaintProperties("paintRoof");
LoadPage();
			
//Load Page Elements===================================

function confirm_reset() {
	return confirm("The 'Reset' button was clicked.  Click OK to reset all entries.");				
}

function LoadPage() {
	
	document.getElementById("Form1").reset();
	document.getElementById("Next1").style.display = "block";
	document.getElementById("Input2").style.display = "none";
	document.getElementById("metCharData").style.display = "none";
	
	document.getElementById("Input3").style.display = "none";
	document.getElementById("divLiqType").style.display = "none";
	document.getElementById("divtankContents").style.display = "none";
	document.getElementById("divCalcMethod").style.display = "none";
	document.getElementById("divLiqChar").style.display = "none";
	document.getElementById("divLiqInputs").style.display = "none";				
	
	document.getElementById("Input4").style.display = "none";
	document.getElementById("Input5").style.display = "none";
	document.getElementById("Input6").style.display = "none";
	document.getElementById("Input7").style.display = "none";
	document.getElementById("Input8").style.display = "none";
	document.getElementById("flex-input2").style.display = "none";
	document.getElementById("flex-input3").style.display = "none";
	document.getElementById("flex-input4").style.display = "none";
	//document.getElementById("outputTitle").style.display = "none";
	//document.getElementById("flex-output1").style.display = "none";
	
	//reset aryVarVals
	resetAryVarVals();

	//reset color of cells
	var aryInputs = ["tankType","metSite","LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC","HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced","paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad","setVac","setPres","gaugePres","insulated","heat","heatCycles","minBulkTemp","maxBulkTemp","calcBasis","outputType"];
	var i;
	var select1;
	var x;
	
	for (i = 0; i < aryInputs.length; i++) {
		select1 = eval("document.getElementById('" + aryInputs[i] + "')");
		x = select1.value;					
		select1.style.backgroundColor = "White";
		if (select1.type === "select-one") {
			select1.selectedIndex = "0";
		}
	}
	
	//debug();
}

function resetAryVarVals() {
	Object.keys(aryVarVals).forEach(function(key){ aryVarVals[key] = "" });
}

function debug() {
	var x = 6;
	//may convert later to file read function
	//SET initial DEFAULT VALUES FOR DEBUGGING
	document.getElementById("tankType").value = "VFR";
	//confirmTankType();
	Next1();
	document.getElementById("metSite").value = "Oklahoma City, OK";
	fillMetChar();
	Next2();
	
	switch (x) {
		case 1:
			//using Manual Entry Liquid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//for Crude Oil
			document.getElementById("LiqInput").value = "Manual";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Crude";
			loadLiquidList();
			document.getElementById("calcMethod").value = "RVP";
			formatLiqInput();
			document.getElementById("inputM_V").value = 50;				
			document.getElementById("inputRVP").value = 5;
			break;
		case 2:
			//using Manual Entry Liquid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//for Gasoline RVP 10
			document.getElementById("LiqInput").value = "Manual";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Refined";
			loadLiquidList();
			document.getElementById("calcMethod").value = "Coef";
			formatLiqInput();
			document.getElementById("inputM_V").value = 66;	
			document.getElementById("inputSlope").value = 3.0;	
			document.getElementById("inputA").value = 11.724;				
			document.getElementById("inputB").value = 5237.3;
			break;
		case 3:
			//using Manual Entry Liquid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//for Benzene
			document.getElementById("LiqInput").value = "Manual";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "PetroChem";
			loadLiquidList();
			formatLiqInput();
			document.getElementById("inputM_V").value = 78.11;	
			document.getElementById("inputA").value = 6.906;				
			document.getElementById("inputB").value = 1211.0;
			document.getElementById("inputC").value = 220.79;
			break;
		case 4:
			//using Database>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//RVP 5
			document.getElementById("LiqInput").value = "Database";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Crude";
			loadLiquidList();
			document.getElementById("tankContents").value = "Midcontinent Crude Oil";
			fillLiqChar();
			break;
		case 5:
			//using Database>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//diesel
			document.getElementById("LiqInput").value = "Database";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Refined";
			loadLiquidList();
			document.getElementById("tankContents").value = "No. 2 Fuel Oil (Diesel)";
			fillLiqChar();
			break;
		case 6:
			//using Database>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			//diesel
			document.getElementById("LiqInput").value = "Database";
			SelectLiquidInput();
			document.getElementById("LiqType").value = "Refined";
			loadLiquidList();
			document.getElementById("tankContents").value = "Motor Gasoline RVP 10";
			fillLiqChar();
			break;
	}
	Next3();
	document.getElementById("HeightFixed").value = 20;
	document.getElementById("diamFixed").value = 12;
	document.getElementById("maxLiqH").value = 19;
	document.getElementById("minLiqH").value = 1;
	document.getElementById("avgLiqH").value = 10;
	minTurnQ()
	document.getElementById("throughput").value = 3600000;
	calcTurn();
	document.getElementById("balanced").value = "No";
	Next4();
	//document.getElementById("minBulkTemp").value = 430;
	document.getElementById("paintShell").value = "White";
	document.getElementById("conditionShell").value = "New";
	document.getElementById("paintRoof").value = "White";
	document.getElementById("conditionRoof").value = "New";
	document.getElementById("roofType").value = "Cone";
	fixedRoofType();
	document.getElementById("roofH").value = 0;				
	fixedRoofHeight();
	//document.getElementById("fixedRoofSlope").value = 0.0625;
	//document.getElementById("fixedRoofRad").value = 6;				
	Next5();
	//document.getElementById("setVac").value = -0.03;
	//document.getElementById("setPres").value = 0.03;
	checkPres();
	document.getElementById("insulated").value = "None";
	//document.getElementById("heat").value = "No";
	//Next6();
	//Next7();
	//document.getElementById("calcBasis").value = "Annual";
	//document.getElementById("outputType").value = "Detailed";
	//calcSelect();
	//beginCalcs();
}

//next buttons==================================================================================

function Next1() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput1();
	
	if (validate == 0) {
		if (tank == "VFR") {
			document.getElementById("Input2").style.display = "block";
			document.getElementById("Next1").style.display = "none";
			document.getElementById("Next2").style.display = "block";
		} else if (tank == "HFR") {
			document.getElementById("Input2").style.display = "block";
			document.getElementById("Next1").style.display = "none";
			document.getElementById("Next2").style.display = "block";
		} else if (tank == "EFR") {
			document.getElementById("Form1").reset();
			document.getElementById("flex-input2").style.display = "none";
			//document.getElementById("flex-input3").style.display = "flex";
			document.getElementById("flex-input4").style.display = "none";
			//document.getElementById("tankType").value = tank;
			alert("Floating roof calculations are not currently functional.")
			document.getElementById("tankType").selectedIndex = "0";
		} else if (tank == "IFR") {
			document.getElementById("Form1").reset();
			document.getElementById("flex-input2").style.display = "none";
			//document.getElementById("flex-input3").style.display = "flex";
			document.getElementById("flex-input4").style.display = "none";
			//document.getElementById("tankType").value = tank;
			alert("Floating roof calculations are not currently functional.")
			document.getElementById("tankType").selectedIndex = "0";
		}
	} else {
		validateErrorMsg(validate); 
	}				
}

function Next2() {			
	var validate;
	
	validate = ValidateInput2();
	
	if (validate == 0) {
		document.getElementById("Input3").style.display = "block";
		document.getElementById("Next2").style.display = "none";
		document.getElementById("Next3").style.display = "block";
	} else {
		validateErrorMsg(validate); 
	}
}


//next buttons - fixed roof tanks================================================================
function Next3() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput3();
	
	if (validate == 0) {
		if (tank == "VFR") {
			document.getElementById("flex-input2").style.display = "flex";
			document.getElementById("flex-input3").style.display = "none";
			document.getElementById("Input4").style.display = "block";
			document.getElementById("heightVFR").style.display = "block";
			document.getElementById("lengthHFR").style.display = "none";
			document.getElementById("divMaxLiqH").style.display = "block";
			document.getElementById("divMinLiqH").style.display = "block";
			document.getElementById("divAvgLiqH").style.display = "block";
		} else if (tank == "HFR") {
			document.getElementById("flex-input2").style.display = "flex";
			document.getElementById("flex-input3").style.display = "none";
			document.getElementById("Input4").style.display = "block";
			document.getElementById("heightVFR").style.display = "none";
			document.getElementById("lengthHFR").style.display = "block";
			document.getElementById("divMaxLiqH").style.display = "block";
			document.getElementById("divMinLiqH").style.display = "block";
			document.getElementById("divAvgLiqH").style.display = "none";
		} else if (tank == "EFR") {
			
		} else if (tank == "IFR") {
			
		}
		document.getElementById("Next3").style.display = "none";
		document.getElementById("Next4").style.display = "block";
	} else {
		validateErrorMsg(validate); 
	}
}


function Next4() {			
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput4();
	
	if (validate == 0) {
		document.getElementById("Input5").style.display = "block";
		if (tank == "VFR") {
			document.getElementById("divRoof").style.display = "block";
			document.getElementById("divRoofH").style.display = "none";
			document.getElementById("divSlope").style.display = "none";
			document.getElementById("divRadius").style.display = "none";
		} else if (tank == "HFR") {
			document.getElementById("divRoof").style.display = "none";
		} 
		document.getElementById("Next4").style.display = "none";
		document.getElementById("Next5").style.display = "block";					
	} else {
		validateErrorMsg(validate); 
	}
}

function Next5() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput5();
	
	if (validate == 0) {
		document.getElementById("Input6").style.display = "block";
		if (tank == "VFR") {
			document.getElementById("divGaugePres").style.display = "none";
		} else if (tank == "HFR") {
			document.getElementById("divGaugePres").style.display = "none";
		} else if (tank == "EFR") {
			
		} else if (tank == "IFR") {
			
		}
		document.getElementById("Next5").style.display = "none";
		document.getElementById("Next6").style.display = "block";					
	} else {
		validateErrorMsg(validate); 
	}
}

function Next6() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput6();
	
	if (validate == 0) {
	
		if (document.getElementById("heat").value == "Yes") {
			document.getElementById("Input7").style.display = "block";	
			document.getElementById("heatCycles").value = "365";
			document.getElementById("Next6").style.display = "none";						
			document.getElementById("Next7").style.display = "block";
		} else {
			document.getElementById("Input7").style.display = "none";
			document.getElementById("Next6").style.display = "none";
			document.getElementById("Next7").style.display = "none";
			
			document.getElementById("heatCycles").value = "365";
			document.getElementById("maxBulkTemp").value = "";
			document.getElementById("minBulkTemp").value = "";
			
			document.getElementById("flex-input4").style.display = "flex";
			document.getElementById("Input20").style.display = "block";
		}	
					
	} else {
		validateErrorMsg(validate); 
	}
}

function Next7() {
	var tank = document.getElementById("tankType").value;
	var validate;
	
	validate = ValidateInput7();
	
	if (validate == 0) {
		document.getElementById("flex-input4").style.display = "flex";
		document.getElementById("Input20").style.display = "block";

		document.getElementById("Next7").style.display = "none";				
	} else {
		validateErrorMsg(validate); 
	}
}


//switch between tank types
function confirmTankType(select1) {

	
	var new1 = select1.value;
	var old1 = select1.oldvalue;
	if (select1.oldvalue != "") {
		var r = confirm("The selection for 'Tank Type' was changed.  Click OK to accept.  Clicking OK will reset all entries.");
		if (r == true) {
			LoadPage();
			document.getElementById("tankType").value = new1;
			document.getElementById("Next1").style.display = "block";
		} else {
			document.getElementById("tankType").value = old1;
		}
	}
}


//format for database or userInput liquid selection
function SelectLiquidInput() {
	var a = document.getElementById("LiqInput").value;
	
	document.getElementById("divLiqType").style.display = "none";
	
	if (a == "Database") { 
		document.getElementById("divLiqType").style.display = "block";
		document.getElementById("divtankContents").style.display = "none";
		document.getElementById("divLiqInputs").style.display = "none";
		document.getElementById("divCalcMethod").style.display = "none";
	} else {
		document.getElementById("divLiqType").style.display = "block";
		document.getElementById("divtankContents").style.display = "none";
		document.getElementById("divLiqInputs").style.display = "none";
		document.getElementById("divLiqChar").style.display = "none";
	}
	document.getElementById("LiqType").selectedIndex = "0";
	document.getElementById("tankContents").selectedIndex = "0";
	
	var x = document.getElementById("LiqType").value;
	var select = document.getElementById("tankContents");
	var length = select.options.length;
	for (i = length-1; i >= 1; i--) {
		select.options[i] = null;
	}
	ResetLiqProp();
}

//appends list of liquids in dropdown
function loadLiquidList() {
	var a = document.getElementById("LiqInput").value;
	var x = document.getElementById("LiqType").value;
	
	document.getElementById("divCalcMethod").style.display = "none";
	
	//remove all previous options
	if (a == "Database") { 
		
		document.getElementById("divtankContents").style.display = "block";
		var select = document.getElementById("tankContents");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
			select.options[i] = null;
		}
		//append chosen list
		if (x == "Crude") {
			fillCrudeProperties();
		} else if (x == "Refined") {
			fillPertoleumProperties();
		} else {
			fillPetroChemProperties();
		}
		
		select.selectedIndex = "0";				
		ResetLiqProp();
		
	} else {
		document.getElementById("calcMethod").selectedIndex = "0";
		document.getElementById("divCalcMethod").style.display = "none";
		
		document.getElementById("divLiqInputs").style.display = "none";
		
		document.getElementById("divInputM_V").style.display = "none";
		document.getElementById("inputM_V").value = "";
		document.getElementById("divInputRVP").style.display = "none";
		document.getElementById("inputRVP").value = "";
		document.getElementById("divInputS").style.display = "none";
		document.getElementById("inputSlope").value = "";
		document.getElementById("divInputA").style.display = "none";
		document.getElementById("inputA").value = "";
		document.getElementById("divInputB").style.display = "none";
		document.getElementById("inputB").value = "";
		document.getElementById("divInputC").style.display = "none";
		document.getElementById("inputC").value = "";
		if (x == "Crude" || x == "Refined") {
			document.getElementById("divCalcMethod").style.display = "block";
		} else {
			formatLiqInput();
		}
	}
}

//formats for user input liquid characteristics
function formatLiqInput() {
	var x = document.getElementById("LiqType").value;
	var y = document.getElementById("calcMethod").value;
	document.getElementById("divLiqInputs").style.display = "block";
	if (x == "Crude") {
		if (y != "") {
			document.getElementById("divInputM_V").style.display = "block";
			if (y == "RVP") {
				document.getElementById("divInputRVP").style.display = "block";
				
				document.getElementById("divInputA").style.display = "none";
				document.getElementById("divInputB").style.display = "none";
			} else {
				document.getElementById("divInputRVP").style.display = "none";
				document.getElementById("divInputA").style.display = "block";
				document.getElementById("divInputB").style.display = "block";
				document.getElementById("labelInputB").innerHTML = "Antoine's Coef. B (&deg;R):";
			}
		}
	} else if (x == "Refined") {
		if (y != "") {
			document.getElementById("divInputM_V").style.display = "block";
			document.getElementById("divInputS").style.display = "block";
			if (y == "RVP") {
				document.getElementById("divInputRVP").style.display = "block";
				document.getElementById("divInputA").style.display = "none";
				document.getElementById("divInputB").style.display = "none";
				
			} else {
				document.getElementById("divInputRVP").style.display = "none";
				document.getElementById("divInputA").style.display = "block";
				document.getElementById("divInputB").style.display = "block";
				document.getElementById("labelInputB").innerHTML = "Antoine's Coef. B (&deg;R)";
			}
		}
	} else {
		document.getElementById("divInputM_V").style.display = "block";
		document.getElementById("divInputA").style.display = "block";
		document.getElementById("divInputB").style.display = "block";
		document.getElementById("labelInputB").innerHTML = "Antoine's Coef. B (&deg;C):";
		document.getElementById("divInputC").style.display = "block";
		document.getElementById("labelInputC").innerHTML = "Antoine's Coef. C (&deg;C):";
	}
}

//fills liquid characteristics on userform				
function fillLiqChar() {
	var liq, i, x, length;
	var liqSelect = document.getElementById("LiqType").value;
	var select = document.getElementById("tankContents").value;
	
	document.getElementById("divLiqChar").style.display = "block";
	
	document.getElementById("VapMW").readOnly = false;
	document.getElementById("LiqMW").readOnly = false;
	document.getElementById("LiqWL").readOnly = false;
	document.getElementById("Slope").readOnly = false;
	document.getElementById("TVP").readOnly = false;
	
	document.getElementById("VapMW").value = "";
	document.getElementById("LiqMW").value = "";
	document.getElementById("LiqWL").value = "";
	document.getElementById("Slope").value = "";
	document.getElementById("TVP").value = "";
					
	if (liqSelect == "Crude") {
		liq = CrudeProperties();
	} else if (liqSelect == "Refined") {
		liq = PertoleumProperties();			
	} else {
		liq = PetroChemProperties();				
	}
	
	length = liq.length;
	for (i = 0; i < length; i++) {
		if (liq[i].propName == select) {
			x = i;
			i = length;
		}
	}

	if (liqSelect == "Crude") {
		document.getElementById("VapMW").value = liq[x].M_V;
	} else if (liqSelect == "Refined") {
		document.getElementById("VapMW").value = liq[x].M_V;
	} else {
		document.getElementById("VapMW").value = liq[x].M_L;
	}
	document.getElementById("LiqMW").value = liq[x].M_L;
	document.getElementById("LiqWL").value = liq[x].W_L;
	document.getElementById("Slope").value = liq[x].S;
	document.getElementById("TVP").value = liq[x].P_VA;
	
	document.getElementById("VapMW").readOnly = true;
	document.getElementById("LiqMW").readOnly = true;
	document.getElementById("LiqWL").readOnly = true;
	document.getElementById("Slope").readOnly = true;
	document.getElementById("TVP").readOnly = true;
}

function ResetLiqProp() {
	
	document.getElementById("VapMW").readOnly = false;
	document.getElementById("LiqMW").readOnly = false;
	document.getElementById("LiqWL").readOnly = false;
	document.getElementById("Slope").readOnly = false;
	document.getElementById("TVP").readOnly = false;
	
	document.getElementById("VapMW").value = "";
	document.getElementById("LiqMW").value = "";
	document.getElementById("LiqWL").value = "";
	document.getElementById("Slope").value = "";
	document.getElementById("TVP").value = "";
	
	document.getElementById("VapMW").readOnly = true;
	document.getElementById("LiqMW").readOnly = true;
	document.getElementById("LiqWL").readOnly = true;
	document.getElementById("Slope").readOnly = true;
	document.getElementById("TVP").readOnly = true;
}

function fillMetChar() {
	var i, x, site, length;
	var select = document.getElementById("metSite").value;
	
	document.getElementById("metCharData").style.display = "block";
	
	site = MetData();
	length = site.length;
	for (i = 0; i < length; i++) {
		if (site[i].metName == select) {
			x = i;
			i = length;
		}
	}
	
	document.getElementById("MinTemp").readOnly = false;
	document.getElementById("MaxTemp").readOnly = false;
	document.getElementById("Wind").readOnly = false;
	document.getElementById("Insolation").readOnly = false;
	document.getElementById("atmPres").readOnly = false;
	
	document.getElementById("MinTemp").value = (site[x].T_AN_Ann + 459.7).toFixed(1);
	document.getElementById("MaxTemp").value = (site[x].T_AX_Ann + 459.7).toFixed(1);
	document.getElementById("Wind").value = site[x].V_Ann.toFixed(1);
	document.getElementById("Insolation").value = numberWithCommas(site[x].I_Ann);
	document.getElementById("atmPres").value = site[x].P_A_Ann.toFixed(2);

	document.getElementById("MinTemp").readOnly = true;
	document.getElementById("MaxTemp").readOnly = true;
	document.getElementById("Wind").readOnly = true;
	document.getElementById("Insolation").readOnly = true;
	document.getElementById("atmPres").readOnly = true;

}

function minTurnQ(select1) {
	var x = 0;
	if (isNaN(document.getElementById("diamFixed").value) || document.getElementById("diamFixed").value == "" || document.getElementById("diamFixed").value.length == 0 || document.getElementById("diamFixed").value == "null") {
		x++;		
	}
	if (isNaN(document.getElementById("minLiqH").value) || document.getElementById("minLiqH").value == "" || document.getElementById("minLiqH").value.length == 0 || document.getElementById("minLiqH").value == "null") {
		x++;				
	}
	if (isNaN(document.getElementById("maxLiqH").value) || document.getElementById("maxLiqH").value == "" || document.getElementById("maxLiqH").value.length == 0 || document.getElementById("maxLiqH").value == "null") {
		x++;			
	}
	if (document.getElementById("lengthFixed").offsetParent === null) {
	} else {
		if (isNaN(document.getElementById("lengthFixed").value) || document.getElementById("lengthFixed").value == "" || document.getElementById("lengthFixed").value.length == 0 || document.getElementById("lengthFixed").value == "null") {
			x++;
		} 
	}
	
	if (select1.value.length > 0) {
		select1.style.backgroundColor = "White";
	} else {
		select1.style.backgroundColor = "Yellow";
		alert("One of the prerequisite input boxes (highlighted in yellow) for 'Turnovers Per Year' and 'Net Throughput' may be incomplete.  Please complete the highlighted input box.");
	}

	if (x > 0) {
		if  (document.getElementById("throughput").value.length > 0) {
		}
		document.getElementById("divTurnQ").style.display = "none";
	} else {
		document.getElementById("divTurnQ").style.display = "block";
		document.getElementById("turn").focus();
		if (document.getElementById("throughput").value.length > 0) {
			calcTurn();
		}
	}
	
}

function calcTurn() {
	var H_LX = parseFloat(document.getElementById("maxLiqH").value);
	var H_LN = parseFloat(document.getElementById("minLiqH").value);
	var N = parseFloat(document.getElementById("turn").value);
	var Q = parseFloat(document.getElementById("throughput").value.replace(/,/g,"")) /42;
	var D = parseFloat(document.getElementById("diamFixed").value);
	var D_E;
	var L;
	var sumH_QI;
	var V_Q;

	if (isNaN(Q)) {
		//no input
	} else {
		
		if (document.getElementById("tankType").value == "VFR") {
			D_E = D;
		} else if (document.getElementById("tankType").value == "HFR") {
			L = document.getElementById("lengthFixed").value;
			D_E = Math.sqrt((L * D) * (Math.PI / 4));
		} 
		V_Q = 5.614 * Q;
		sumH_QI = (V_Q) / ((Math.PI / 4) * Math.pow(D_E,2));
		N = sumH_QI / (H_LX - H_LN);
		//document.getElementById("throughput").value = numberWithCommas((Q * 42).toFixed(2));
		//document.getElementById("turn").value = numberWithCommas(N.toFixed(2));
		document.getElementById("throughput").value = (Q * 42).toFixed(2);
		document.getElementById("turn").value = N.toFixed(2);
		alert("The element for 'Turnovers Per Year' has been auto-calculated.");
	}
	
}

function calcQ() {
	var H_LX = parseFloat(document.getElementById("maxLiqH").value);
	var H_LN = parseFloat(document.getElementById("minLiqH").value);
	var N = parseFloat(document.getElementById("turn").value);
	var Q = parseFloat(document.getElementById("throughput").value.replace(/,/g,"")) /42;
	var D = parseFloat(document.getElementById("diamFixed").value);
	var D_E;
	var sumH_QI;
	var V_Q;
	
	if (isNaN(N)) {
		//no input
	} else {
		
		if (document.getElementById("tankType").value == "VFR") {
			D_E = D;
		} else if (document.getElementById("tankType").value == "HFR") {
			L = document.getElementById("lengthFixed").value;
			D_E = Math.sqrt((L * D) * (Math.PI / 4));
		} 
		sumH_QI = N * (H_LX - H_LN);
		V_Q = sumH_QI * ((Math.PI / 4) * Math.pow(D_E,2));
		Q = V_Q / 5.614;
		//document.getElementById("throughput").value = numberWithCommas((Q * 42).toFixed(2));
		//document.getElementById("turn").value = numberWithCommas(N.toFixed(2));
		document.getElementById("throughput").value = (Q * 42).toFixed(2);
		document.getElementById("turn").value = N.toFixed(2);
		window.alert("The element for 'Net Throughput' has been auto-calculated.");
	}
}


function checkPres() {
	if (isNaN(document.getElementById("setVac").value) || isNaN(document.getElementById("setPres").value)) {
		document.getElementById("gaugePres").value = "";
		document.getElementById("divGaugePres").style.display = "none";
	} else if (Math.abs(document.getElementById("setPres").value - document.getElementById("setVac").value) > 0.06) {
		//reveal gauge pressure inbox
		document.getElementById("divGaugePres").style.display = "block";
	} else if (Math.abs(document.getElementById("setPres").value - document.getElementById("setVac").value) <= 0.06) {
		document.getElementById("gaugePres").value = "";
		document.getElementById("divGaugePres").style.display = "none";
	}
}

function numberWithCommas(x) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

function fixedRoofType() {
	var x = document.getElementById("roofType").value;
	if (x == "Cone") {
		document.getElementById("divRoofH").style.display = "block";
		document.getElementById("roofH").value = "";
		//document.getElementById("divSlope").style.display = "block";
		//document.getElementById("divRadius").style.display = "none";
	} else if (x == "Dome") {
		document.getElementById("divRoofH").style.display = "block";
		document.getElementById("roofH").value = "";
		//document.getElementById("divSlope").style.display = "none";
		//document.getElementById("divRadius").style.display = "block";
	} else {
		document.getElementById("roofH").value = "";
		document.getElementById("divRoofH").style.display = "none";
		//document.getElementById("divSlope").style.display = "none";
		//document.getElementById("divRadius").style.display = "none";
	}
	fixedRoofHeight();
}

function fixedRoofHeight() {
	var x = document.getElementById("roofType").value;
	var y = parseFloat(document.getElementById("roofH").value);
	if (x == "Cone" && y == 0) {
		//document.getElementById("divRoofH").style.display = "block";
		document.getElementById("fixedRoofRad").value = "";
		document.getElementById("divSlope").style.display = "block";
		document.getElementById("divRadius").style.display = "none";
		document.getElementById("fixedRoofSlope").value = 0.0625;
		document.getElementById("fixedRoofSlope").focus();
	} else if (x == "Dome" && y == 0) {
		//document.getElementById("divRoofH").style.display = "block";
		document.getElementById("fixedRoofSlope").value = "";
		document.getElementById("divSlope").style.display = "none";
		document.getElementById("divRadius").style.display = "block";
		document.getElementById("fixedRoofRad").focus();
		//pg 7.1-22 below Eq 1-20
		document.getElementById("fixedRoofRad").value = document.getElementById("diamFixed").value;
	} else {
		//document.getElementById("divRoofH").style.display = "none";
		document.getElementById("fixedRoofRad").value = "";
		document.getElementById("fixedRoofSlope").value = "";
		document.getElementById("divSlope").style.display = "none";
		document.getElementById("divRadius").style.display = "none";
	}
}


/*

			function confirmTankType(select1) {

				
				var new1 = select1.value;
				var old1 = select1.oldvalue;
				if (select1.oldvalue != "") {
					var r = confirm("The selection for 'Tank Type' was changed.  Click OK to accept.  Clicking OK will reset all entries.");
					if (r == true) {
						LoadPage();
						document.getElementById("tankType").value = new1;
						document.getElementById("Next1").style.display = "block";
					} else {
						document.getElementById("tankType").value = old1;
					}
				}
			}

*/

			
function formatHeated(select1) {

	var new1 = select1.value;
	var old1 = select1.oldvalue;
	if (select1.oldvalue != "") {

		var x = document.getElementById("Input7");
		
		if (window.getComputedStyle(x).display === "none") {
			if (document.getElementById("heat").value == "Yes") {
				document.getElementById("Next6").style.display = "block";
				document.getElementById("Input7").style.display = "none";
				document.getElementById("Input20").style.display = "none";
				document.getElementById("flex-input4").style.display = "none";
				document.getElementById("heat").style.backgroundColor = "Yellow";
				alert("The selection for 'Tank Heating' was changed.  Please verify the selection and continue.");
			}
		} else {
			if (document.getElementById("heat").value == "No") {
				document.getElementById("Next6").style.display = "block";
				document.getElementById("Input7").style.display = "none";
				document.getElementById("Input20").style.display = "none";
				document.getElementById("flex-input4").style.display = "none";
				document.getElementById("heat").style.backgroundColor = "Yellow";
				alert("The selection for 'Tank Heating' was changed.  Please verify the selection and continue.");
			}
		}	
	}
}
			
//monthly calcs see section 7.1.3.8.1
function calcSelect() {
	document.getElementById("JanQ").readOnly = false;
	document.getElementById("JanQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("JanCheck").disabled = false;
	document.getElementById("FebQ").readOnly = false;
	document.getElementById("FebQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("FebCheck").disabled = false;
	document.getElementById("MarQ").readOnly = false;
	document.getElementById("MarQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("MarCheck").disabled = false;
	document.getElementById("AprQ").readOnly = false;
	document.getElementById("AprQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("AprCheck").disabled = false;
	document.getElementById("MayQ").readOnly = false;
	document.getElementById("MayQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("MayCheck").disabled = false;
	document.getElementById("JunQ").readOnly = false;
	document.getElementById("JunQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("JunCheck").disabled = false;
	document.getElementById("JulQ").readOnly = false;
	document.getElementById("JulQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("JulCheck").disabled = false;
	document.getElementById("AugQ").readOnly = false;
	document.getElementById("AugQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("AugCheck").disabled = false;
	document.getElementById("SepQ").readOnly = false;
	document.getElementById("SepQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("SepCheck").disabled = false;
	document.getElementById("OctQ").readOnly = false;
	document.getElementById("OctQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("OctCheck").disabled = false;
	document.getElementById("NovQ").readOnly = false;
	document.getElementById("NovQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("NovCheck").disabled = false;
	document.getElementById("DecQ").readOnly = false;
	document.getElementById("DecQ").value = parseFloat(document.getElementById("throughput").value) / 12;
	document.getElementById("DecCheck").disabled = false;
	
	if (document.getElementById("calcBasis").value == "Annual") {
		document.getElementById("JanQ").style.backgroundColor = "#cccccc";
		document.getElementById("JanQ").readOnly = true;
		document.getElementById("JanCheck").checked = false;
		document.getElementById("JanCheck").disabled = true;
		document.getElementById("FebQ").style.backgroundColor = "#cccccc";
		document.getElementById("FebQ").readOnly = true;
		document.getElementById("FebCheck").checked = false;
		document.getElementById("FebCheck").disabled = true;
		document.getElementById("MarQ").style.backgroundColor = "#cccccc";
		document.getElementById("MarQ").readOnly = true;
		document.getElementById("MarCheck").checked = false;
		document.getElementById("MarCheck").disabled = true;
		document.getElementById("AprQ").style.backgroundColor = "#cccccc";
		document.getElementById("AprQ").readOnly = true;
		document.getElementById("AprCheck").checked = false;
		document.getElementById("AprCheck").disabled = true;
		document.getElementById("MayQ").style.backgroundColor = "#cccccc";
		document.getElementById("MayQ").readOnly = true;
		document.getElementById("MayCheck").checked = false;
		document.getElementById("MayCheck").disabled = true;
		document.getElementById("JunQ").style.backgroundColor = "#cccccc";
		document.getElementById("JunQ").readOnly = true;
		document.getElementById("JunCheck").checked = false;
		document.getElementById("JunCheck").disabled = true;
		document.getElementById("JulQ").style.backgroundColor = "#cccccc";
		document.getElementById("JulQ").readOnly = true;
		document.getElementById("JulCheck").checked = false;
		document.getElementById("JulCheck").disabled = true;
		document.getElementById("AugQ").style.backgroundColor = "#cccccc";
		document.getElementById("AugQ").readOnly = true;
		document.getElementById("AugCheck").checked = false;
		document.getElementById("AugCheck").disabled = true;
		document.getElementById("SepQ").style.backgroundColor = "#cccccc";
		document.getElementById("SepQ").readOnly = true;
		document.getElementById("SepCheck").checked = false;
		document.getElementById("SepCheck").disabled = true;
		document.getElementById("OctQ").style.backgroundColor = "#cccccc";
		document.getElementById("OctQ").readOnly = true;
		document.getElementById("OctCheck").checked = false;
		document.getElementById("OctCheck").disabled = true;
		document.getElementById("NovQ").style.backgroundColor = "#cccccc";
		document.getElementById("NovQ").readOnly = true;
		document.getElementById("NovCheck").checked = false;
		document.getElementById("NovCheck").disabled = true;
		document.getElementById("DecQ").style.backgroundColor = "#cccccc";
		document.getElementById("DecQ").readOnly = true;
		document.getElementById("DecCheck").checked = false;
		document.getElementById("DecCheck").disabled = true;
	} else {
		
		/*document.getElementById("JanQ").style.backgroundColor = "White";
		document.getElementById("JanCheck").checked = true;
		document.getElementById("FebQ").style.backgroundColor = "White";
		document.getElementById("FebCheck").disabled = false;
		document.getElementById("FebCheck").checked = true;
		document.getElementById("MarQ").style.backgroundColor = "White";
		document.getElementById("MarCheck").disabled = false;
		document.getElementById("MarCheck").checked = true;
		document.getElementById("AprQ").style.backgroundColor = "White";
		document.getElementById("AprCheck").disabled = false;
		document.getElementById("AprCheck").checked = true;
		document.getElementById("MayQ").style.backgroundColor = "White";
		document.getElementById("MayCheck").disabled = false;
		document.getElementById("MayCheck").checked = true;
		document.getElementById("JunQ").style.backgroundColor = "White";
		document.getElementById("JunCheck").disabled = false;
		document.getElementById("JunCheck").checked = true;
		document.getElementById("JulQ").style.backgroundColor = "White";
		document.getElementById("JulCheck").disabled = false;
		document.getElementById("JulCheck").checked = true;
		document.getElementById("AugQ").style.backgroundColor = "White";
		document.getElementById("AugCheck").disabled = false;
		document.getElementById("AugCheck").checked = true;
		document.getElementById("SepQ").style.backgroundColor = "White";
		document.getElementById("SepCheck").disabled = false;
		document.getElementById("SepCheck").checked = true;
		document.getElementById("OctQ").style.backgroundColor = "White";
		document.getElementById("OctCheck").disabled = false;
		document.getElementById("OctCheck").checked = true;
		document.getElementById("NovQ").style.backgroundColor = "White";
		document.getElementById("NovCheck").disabled = false;
		document.getElementById("NovCheck").checked = true;
		document.getElementById("DecQ").style.backgroundColor = "White";
		document.getElementById("DecCheck").disabled = false;
		document.getElementById("DecCheck").checked = true;
		*/
		document.getElementById("calcBasis").value = "Annual";
		alert("Monthly calculations are not yet functional.")
	}
	document.getElementById("TotalQ").value = document.getElementById("throughput").value
	
}

function checkBoxes(x) {
	
	switch (x) {
	
		case document.getElementById("JanCheck"):
			if (x.checked == false) {
				document.getElementById("JanQ").value = 0;
			}
			break;
		case document.getElementById("FebCheck"):
			if (x.checked == false) {
				document.getElementById("FebQ").value = 0;
			}
			break;
		case document.getElementById("MarCheck"):
			if (x.checked == false) {
				document.getElementById("MarQ").value = 0;
			}
			break;
		case document.getElementById("AprCheck"):
			if (x.checked == false) {
				document.getElementById("AprQ").value = 0;
			}
			break;
		case document.getElementById("MayCheck"):
			if (x.checked == false) {
				document.getElementById("MayQ").value = 0;
			}
			break;
		case document.getElementById("JunCheck"):
			if (x.checked == false) {
				document.getElementById("JunQ").value = 0;
			}
			break;
		case document.getElementById("JulCheck"):
			if (x.checked == false) {
				document.getElementById("JulQ").value = 0;
			}
			break;
		case document.getElementById("AugCheck"):
			if (x.checked == false) {
				document.getElementById("AugQ").value = 0;
			}
			break;
		case document.getElementById("SepCheck"):
			if (x.checked == false) {
				document.getElementById("SepQ").value = 0;
			}
			break;
		case document.getElementById("OctCheck"):
			if (x.checked == false) {
				document.getElementById("OctQ").value = 0;
			}
			break;
		case document.getElementById("NovCheck"):
			if (x.checked == false) {
				document.getElementById("NovQ").value = 0;
			}
			break;
		case document.getElementById("DecCheck"):
			if (x.checked == false) {
				document.getElementById("DecQ").value = 0;
			}
			break;
	}
	calcMonthly();
}

function checkMonthly() {

}

function calcMonthly() {
	var x = 0;
	x += parseFloat(document.getElementById("JanQ").value);
	x += parseFloat(document.getElementById("FebQ").value);
	x += parseFloat(document.getElementById("MarQ").value);
	x += parseFloat(document.getElementById("AprQ").value);
	x += parseFloat(document.getElementById("MayQ").value);
	x += parseFloat(document.getElementById("JunQ").value);
	x += parseFloat(document.getElementById("JulQ").value);
	x += parseFloat(document.getElementById("AugQ").value);
	x += parseFloat(document.getElementById("SepQ").value);
	x += parseFloat(document.getElementById("OctQ").value);
	x += parseFloat(document.getElementById("NovQ").value);
	x += parseFloat(document.getElementById("DecQ").value);
	document.getElementById("TotalQ").value = x;
}


////output==================================================================================================
//
//function outputWindow() {
//	var newWindow = window.open();
//	var str1;
//	var str2;
//	var str3;
//	var str4;
//	var str5;
//	var str6;
//	var str7;
//	
//	if (aryVarVals.tankType == "Vertical Fixed Roof" || aryVarVals.tankType == "Horizontal") {
//		str2 = outputCSS();
//		str3 = outputInputsFixed();
//		str4 = outputMetLiq();				
//		str5 = outputCalcsFixed();
//		str6 = outputSummaryFixed();
//	} else {
//		//floating roof tanks not yet computed
//	}
//	str1 = "<!DOCTYPE html>";
//	str1 += "<html>";
//	str1 += "	<head>";
//	str1 += "		<meta charset='utf-8'>";
//	str1 += "		<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
//	str1 += "		<meta name='viewport' content='width=device-width, initial-scale=1'>";
//	str1 += "		<title>OK DEQ Tank Emissions Report</title>";
//	str1 += "		" + str2; // style
//	str1 += "	</head>";
//	str1 += "	<header>";
//	str1 += "		<div class='outputTitle' id='outputTitle'>";
//	str1 += "			<b>OKLAHOMA DEPARTMENT OF ENVIRONMENTAL QUALITY<br>";
//	str1 += "			AQD Storage Tank Calculation Tool (20202)<br>";
//	str1 += "			Calculation Report<br>";
//	str1 += "			Based on AP-42 (06/2020) Section 7.1: Organic Liquid Storage Tanks</b><br><br>";
//	str1 += "			<button onclick='window.print()'>Print this page</button>";
//	str1 += "		</div>";
//	str1 += "	</header>";
//	str1 += "	<body>";
//	str1 += "		<div class='flex-output1' id='flex-output1' style='border-top: 1px solid black'>";
//	str1 += "			<div>";
//	str1 += "				" + str3; //Input
//	str1 += "			</div>";
//	if (document.getElementById("outputType").value == "Detailed") {
//		str1 += "			<div>";
//		str1 += "				" + str4; //Meteorology/Liquid
//		str1 += "			</div>";
//	}
//	str1 += "		</div>";
//	if (document.getElementById("outputType").value == "Detailed") {
//		str1 += "		<div class='pgbr' style='border-top: 1px solid black'>";
//		str1 += "			<br><table align='center'>";
//		str1 += "			<caption><b>CALCULATION DETAILS</b></caption>";
//		str1 += "				<tr><td align='left' class='cellOut1'></td>";
//		str1 += "				<td align='left' class='cellOut2'></td>";
//		str1 += "				<td align='right' class='cellOut3'></td></tr>";
//		str1 += "			</table>";
//		str1 += "		</div>";
//		str1 += "		<div class='flex-output1' id='flex-output2'>";
//		str1 += "			" + str5; //Calculations
//		str1 += "		</div><br><br>";
//	}
//	str1 += "       <div style='border-top: 1px solid black'></div>";
//	str1 += "		<div>";
//	str1 += "			" + str6; //Output
//	str1 += "		</div>";
//	str1 += "	</body>";
//	str1 += "</html>";
//	
//	newWindow.document.write(str1);
//}
//
////Output window CSS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//function outputCSS() {
//	var str1;
//	str1 = "<style>";
//		str1 += ".outputTitle {";
//		//str1 += "	background-color: #E5E4E2;";
//		//str1 += "	border: 1px solid black;";
//		str1 += "	padding: 20px;";
//		str1 += "	text-align: center;";
//		str1 += "}";
//		str1 += ".flex-output1 {";
//		str1 += "	display: flex;";
//		str1 += "	align-items: stretch;";
//		str1 += "	justify-content: center;";
//		str1 += "	flex-wrap: wrap;";
//		str1 += "	flex-basis: 0;";
//		str1 += "}";
//		str1 += ".flex-output1 > div {";
//		str1 += "	text-align: center;";	
//		str1 += "	color: Black;";		
//		//str1 += "	border: 1px solid black;";
//		str1 += "	flex-grow: 1;";
//		str1 += "	background-color: White;";
//		str1 += "	padding-left: 20px;";
//		str1 += "	padding-right: 20px;";
//		str1 += "}";
//		str1 += ".cellOut1, .cellOut2, .cellOut3 {";
//		str1 += "	padding-left: 10px;";
//		str1 += "	padding-right: 10px;";
//		str1 += "}";
//		str1 += ".cellOutHead {";
//		str1 += "	padding-left: 10px;";
//		str1 += "	padding-right: 10px;";
//		str1 += "}";
//		str1 += "table {";
//		str1 += "		border-collapse: collapse;";
//		str1 += "}";
//		str1 += "caption {";
//		str1 += "	display: table-caption;";
//		str1 += "	border:1px solid black;";
//		str1 += "	text-align: center;";
//		str1 += "}";
//		str1 += "table, th, td {";
//		//str1 += "		border: 1px solid black;";
//		str1 += "}";
//		str1 += ".cellOut1 {";
//		str1 += "	vertical-align: Top;";
//		str1 += "	width: 225px";
//		//str1 += "	max-width: 225px;";
//		//str1 += "	min-width: 40px;";
//		str1 += "}";
//		str1 += ".cellOut2 {";
//		str1 += "	vertical-align: bottom;";
//		str1 += "	width: 50px;";
//		//str1 += "	max-width: 225px;";
//		//str1 += "	min-width: 40px;";
//		str1 += "}";
//		str1 += ".cellOut3 {";
//		str1 += "	vertical-align: bottom;";
//		str1 += "	width: 150px";
//		//str1 += "	max-width: 225px;";
//		//str1 += "	min-width: 40px;";
//		str1 += "}";
//		
//		str1 += "@media print {";										
//		str1 += "	tr {";
//		str1 += "		page-break-inside: avoid;";
//		str1 += "		break-inside: avoid;";
//		str1 += "	}";		
//		str1 += "	div.pgbr {";
//		/*
//		str1 += "		page-break-before: always;";
//		str1 += "		break-before: always;";
//		str1 += "	}";	
//		*/
//		str1 += "	div.cellOutHead {";
//		str1 += "		page-break-after: avoid;";
//		str1 += "		break-after: avoid;";
//		str1 += "	}";	
//		
//		str1 += "}";
//		
//	str1 += "</style>";
//	return str1;
//}
//
//function outputMetLiq() {
//	var str1;
//	var n = 4;
//	
//	str1 = "<br><table align='center'>";
//	str1 += "<caption><b>METEOROLOGICAL DATA</b></caption>";
//
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'><br>" + aryVarDesc.site + ":</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.site + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_AA  + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_AA + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_AA.toFixed(n)) + "</td></tr>";
//					
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_AN  + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_AN + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_AN.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_AX  + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_AX + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_AX.toFixed(n)) + "</td></tr>";			
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaT_A  + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaT_A + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaT_A.toFixed(n)) + "</td></tr>";
//				
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.v + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" +  aryVarNames2.v + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.v.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.I + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.I + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.I.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_A + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_A + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_A.toFixed(n)) + "</td></tr>";
//	
//	//End Met Data table
//	str1 += "</table><br>";
//	
//	//Begin Liq Table
//	str1 += "<table align='center'>";
//	str1 += "<caption><b>LIQUID DATA</b></caption>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'><br>Liquid category</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqCat + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Liquid name</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqName + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_B + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_B + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_B.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LA + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LA + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LA.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LN + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LN + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LN.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LX + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LX + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LX.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VN + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VN + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VN.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VX + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VX + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VX.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.M_V + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.M_V + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.M_V.toFixed(n)) + "</td></tr>";
//	
//	if (aryVarVals.RVP == "" || aryVarVals.RVP == null) {
//		//is either "" or undefined
//	} else {
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.RVP + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.RVP + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.RVP.toFixed(n)) + "</td></tr>";
//	}
//	
//	if (isNaN(aryVarVals.Slope) == false) {
//		// is either "" or undefined
//		if (aryVarVals.Slope == null || aryVarVals.Slope == "") {
//			//is either "" or undefined
//		} else {				
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.Slope + "</td>";
//			str1 += "<td align='left' class='cellOut2'>S</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.Slope.toFixed(n)) + "</td></tr>";
//		}
//	}
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.A + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.A + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.A.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.B + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.B + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.B.toFixed(n)) + "</td></tr>";
//	
//	if (aryVarVals.C != "") {
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.C + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.C + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.C.toFixed(n)) + "</td></tr>";
//	}
//	
//	//End Met Data table
//	str1 += "</table><br>";
//	
//	return str1;
//}
//
////Inputs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
////Fixed roof input summary
//function outputInputsFixed() {
//	var str1;
//	var n = 4;
//	
//	str1 = "<br><table align='center'>";
//	str1 += "<caption><b>INPUT SUMMARY</b></caption>";
//	
//	//Identification
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Identification</th></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank type</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.tankType + "</td></tr>";
//	
//	if (aryVarVals.tankID.length > 0) {
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank identifier</td>";
//		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.tankID + "</td></tr>";
//	}
//	
//	if (aryVarVals.Desc.length > 0) {
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Description:</td>";
//		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.Desc + "</td></tr>";
//	}
//
//	//Meteorological Information
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Meteorological Data:</th></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>" + aryVarDesc.site + ":</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.site + "</td></tr>";
//	
//	
//	//Liquid Information
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Tank Contents:</th></tr>";
//					
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Liquid category</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqCat + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Liquid name</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.LiqName + "</td></tr>";
//		
//	if (aryVarVals.LiqInput == "Manual Entry") {
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.M_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.M_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.M_V.toFixed(n)) + "</td></tr>";
//		
//		if (aryVarVals.RVP == "" || aryVarVals.RVP == null) {
//			//is either "" or undefined
//		} else {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.RVP + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.RVP + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.RVP.toFixed(n)) + "</td></tr>";
//		}
//		
//		if (isNaN(aryVarVals.Slope) == false) {
//			// is either "" or undefined
//			if (aryVarVals.Slope == null || aryVarVals.Slope == "") {
//				//is either "" or undefined
//			} else {
//				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.Slope + "</td>";
//				str1 += "<td align='left' class='cellOut2'>S</td>";
//				str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.Slope.toFixed(n)) + "</td></tr>";
//			}
//		}
//		
//		if (aryVarVals.RVP == "" || aryVarVals.RVP == null) {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.A + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.A + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.A.toFixed(n)) + "</td></tr>";
//			
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.B + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.B + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.B.toFixed(n)) + "</td></tr>";
//			
//			if (aryVarVals.C != "") {
//				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.C + "</td>";
//				str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.C + "</td>";
//				str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.C.toFixed(n)) + "</td></tr>";
//			}
//		}
//	}
//	
//	//Tank Dimensions
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Tank Dimensions:</th></tr>";
//	
//	if (aryVarVals.tankType == "Vertical Fixed Roof") {
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_S + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_S + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_S.toFixed(n)) + "</td></tr>";
//	} else {
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L.toFixed(n)) + "</td></tr>";
//	}
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.D + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.D + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.D.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_LX + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_LX + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_LX.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_LN + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_LN + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_LN.toFixed(n)) + "</td></tr>";
//	
//	if (aryVarVals.tankType == "Vertical Fixed Roof") {
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_L + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_L + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_L.toFixed(n)) + "</td></tr>";
//	}
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.N + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.N + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.N.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Annual net throughput, gal/yr</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(parseFloat(document.getElementById("throughput").value.replace(/,/g,"")).toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.Q + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.Q + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.Q.toFixed(n)) + "</td></tr>";
//					
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Vapor balanced?</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.Balanced + "</td></tr>";
//	
//	//Paint Characteristics
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Paint Characteristics:</th></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Shell color/shade</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.shellColor + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Shell condition</td>";
//	str1 += "<td align='left' class='cellOut3'>" + aryVarVals.shellCond + "</td></tr>";
//	
//	if (aryVarVals.a_R !="") {
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Roof color/shade</td>";
//		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.roofColor + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Roof condition</td>";
//		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.roofCond + "</td></tr>";
//						
//		//Roof Characteristics
//		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Roof Characteristics:</th></tr>";				
//		
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Roof type</td>";
//		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.roofType + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_R + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_R + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + parseFloat(document.getElementById("roofH").value).toFixed(n) + "</td></tr>";
//		
//		if (document.getElementById("roofType").value == "Cone") {
//			if (document.getElementById("fixedRoofSlope").value != "") {
//				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.S_R + "</td>";
//				str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.S_R + "</td>";
//				str1 += "<td align='right' class='cellOut3'>" + aryVarVals.S_R + "</td></tr>";
//			}
//		} else if (document.getElementById("roofType").value == "Dome") {
//			if (document.getElementById("fixedRoofRad").value != "") {
//				str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R_R + "</td>";
//				str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R_R + "</td>";
//				str1 += "<td align='right' class='cellOut3'>" + aryVarVals.R_R + "</td></tr>";
//			}
//		}
//	}
//					
//	//Breather Vent Settings
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Breather Vent Settings:</th></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_BV + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_BV + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_BV.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_BP + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_BP + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_BP.toFixed(n)) + "</td></tr>";
//	
//	if (aryVarVals.P_I != "") {
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_I + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_I + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_I.toFixed(n)) + "</td></tr>";
//	}
//					
//	//Insolation Characteristics
//		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Insulation Characteristics:</th></tr>";
//							
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank insulation</td>";
//		str1 += "<td align='left' class='cellOut3'>" + insulated.options[insulated.selectedIndex].innerHTML; + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Tank heating</td>";
//		str1 += "<td align='left' class='cellOut3'>" + aryVarVals.heat + "</td></tr>";
//		
//	if (document.getElementById("minBulkTemp").value != "" && isNaN(document.getElementById("minBulkTemp").value) == false) {
//
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Heating cycles per year</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.heatingCycles.toFixed(n)) + "</td></tr>";
//	
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_BN + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_BN + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_BN.toFixed(n)) + "</td></tr>";
//						
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_BX + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_BX + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_BX.toFixed(n)) + "</td></tr>";
//		
//	} /*else if (document.getElementById("constBulkTemp").value != "" && isNaN(document.getElementById("constBulkTemp").value) == false) {
//		//from section 7.1.3.8.4
//	
//		str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Heating cycles per year</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.heatingCycles.toFixed(n)) + "</td></tr>";
//	
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_B + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_B + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_B.toFixed(n)) + "</td></tr>";
//	}*/
//	
//	//End Inputs table
//	str1 += "</table><br>";
//	
//	return str1;
//}
//
////Fixed roof calculation details
//function outputCalcsFixed() {
//	var n = 4;
//	var str1;
//	str1 = "<div>";
//	str1 += "<table  align='center'>";
//	//str1 += "<caption><b>CALCULATION DETAILS</b></caption>";
//	
//	//Standing Losses, L_S
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Standing Losses</th></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_S + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_S + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_S.toFixed(n)) + "</td></tr>";
//	
//	if (document.getElementById("insulated").value == "Underground" && document.getElementById("tankType").value == "VFR" && aryVarVals.heat == "No") {
//		// no standing losses, do not show calculations
//	} else {
//		
//		if (aryVarVals.heat == "Yes") {
//			str1 += "<tr><td align='left' class='cellOut1' colspan='2'>Heating cycles per year</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.heatingCycles.toFixed(n)) + "</td></tr>";
//		}
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.V_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.V_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.V_V.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.W_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.W_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.W_V.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_E + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_E + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_E.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_S + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_S + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_S.toFixed(n)) + "</td></tr>";
//		
//		//Vapor space Volume, V_V
//		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Space Volume</th></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut2'>" + aryVarDesc.V_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.V_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.V_V.toFixed(n)) + "</td></tr>";
//		
//		if (aryVarVals.tankType == "Vertical Fixed Roof") {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.D + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.D + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.D.toFixed(n)) + "</td></tr>";
//		} else {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.D_E + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.D_E + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.D_E.toFixed(n)) + "</td></tr>";
//		}
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_VO + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_VO + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_VO.toFixed(n)) + "</td></tr>";
//		
//		//Vapor space outage, H_VO
//		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Space Outage</th></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_VO + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_VO + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_VO.toFixed(n)) + "</td></tr>";
//		
//		if (aryVarVals.tankType == "Vertical Fixed Roof") {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_S + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_S + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_S.toFixed(n)) + "</td></tr>";
//		
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_L + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_L + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_L.toFixed(n)) + "</td></tr>";
//		
//		} else {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_E + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_E + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_E.toFixed(n)) + "</td></tr>";
//		}
//		
//		if (aryVarVals.tankType == "Vertical Fixed Roof") {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_RO + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_RO + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_RO.toFixed(n)) + "</td></tr>";
//			
//			//Roof Outage, H_RO
//			str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Roof Outage</th></tr>";
//			
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_RO + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_RO + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_RO.toFixed(n)) + "</td></tr>";
//			
//			
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_R + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_R + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_R.toFixed(n)) + "</td></tr>";
//			
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R_S + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R_S + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.R_S.toFixed(n)) + "</td></tr>";
//			
//			if (document.getElementById("roofType").value == "Cone") {
//				if (document.getElementById("fixedRoofSlope").value != "") {
//					str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.S_R + "</td>";
//					str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.S_R + "</td>";
//					str1 += "<td align='right' class='cellOut3'>" + aryVarVals.S_R.toFixed(4) + "</td></tr>";
//				}
//			} else {	
//				if (document.getElementById("fixedRoofRad").value != "") {
//					str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R_R + "</td>";
//					str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R_R + "</td>";
//					str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.R_R.toFixed(n)) + "</td></tr>";
//				}
//			}	
//		}	
//		//Vapor Density, W_V
//		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Density</th></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.W_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.W_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.W_V.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.M_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.M_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.M_V.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.R + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.R + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.R.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_V.toFixed(n)) + "</td></tr>";
//
//		if (aryVarVals.a_R != "") {
//			str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.a_R + "</td>";
//			str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.a_R + "</td>";
//			str1 += "<td align='right' class='cellOut3'>" + aryVarVals.a_R.toFixed(n) + "</td></tr>";
//		}
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.a_S + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.a_S + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + aryVarVals.a_S.toFixed(n) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.I + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.I + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.I.toFixed(n)) + "</td></tr>";
//		
//		str1 += "</table>";
//		
//		
//		str1 += "</div>";
//		str1 += "<div>";
//		
//		str1 += "<table  align='center'>";
//		
//		
//		//Vapor Space Expansion Factor, K_E
//		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vapor Space Expansion Factor</th></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_E + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_E + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_E.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaT_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaT_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaT_V.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaP_V + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaP_V + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaP_V.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.deltaP_B + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.deltaP_B + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.deltaP_B.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_A + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_A + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_A.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";
//
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.T_LA + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.T_LA + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.T_LA.toFixed(n)) + "</td></tr>";
//
//		//Vented Vapor Saturation Factor, K_S
//		str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Vented Vapor Saturation Factor</th></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_S + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_S + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + aryVarVals.K_S.toFixed(n) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.P_VA + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.P_VA + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.P_VA.toFixed(n)) + "</td></tr>";
//		
//		str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.H_VO + "</td>";
//		str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.H_VO + "</td>";
//		str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.H_VO.toFixed(n)) + "</td></tr>";
//	}
//	
//	//Working Losses, L_W
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Working Losses</th></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_W + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_W + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_W.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.V_Q + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.V_Q + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.V_Q.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_N + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_N + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_N.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_P + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_P + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_P.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.W_V + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.W_V + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.W_V.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.K_B + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.K_B + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.K_B.toFixed(n)) + "</td></tr>";
//	
//	str1 += "</table>";
//	str1 += "</div><br>";
//	
//	return str1;
//}
//
////Fixed roof emissions summary
//function outputSummaryFixed () {
//	//Total Losses, L_T
//	var n = 4;
//	var str1;
//	
//	str1 = "<br><table  align='center'>";
//	str1 += "<caption><b>EMISSIONS SUMMARY</b></caption>";
//	
//	str1 += "<tr><th align='left' class='cellOutHead' colspan='3'><br>Total Losses</th></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_S + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_S + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_S.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_W + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_W + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_W.toFixed(n)) + "</td></tr>";
//	
//	str1 += "<tr><td align='left' class='cellOut1'>" + aryVarDesc.L_T + "</td>";
//	str1 += "<td align='left' class='cellOut2'>" + aryVarNames2.L_T + "</td>";
//	str1 += "<td align='right' class='cellOut3'>" + numberWithCommas(aryVarVals.L_T.toFixed(n)) + "</td></tr>";
//	
//	str1 += "</table>";
//	
//	return str1;
//}

////FIGURES=================================================================================================================================================
//
////Figure 7.1-13b: Equations for true vapor pressure of crude oils with a Reid vapor pressure of 2 to 15 psi
//function Fig1_13b() {
//	//T = T_LA
//	//requires RVP
//	var P;
//	P = Math.exp((((2799 / aryVarVals.T_LA) - 2.227) * Math.log10(aryVarVals.RVP)) - (7261 / aryVarVals.T_LA) + 12.82);
//	
//	return P;
//}
//
////Figure 7.1-14b: Equations for true vapor pressure of refined petroleum stocks with Reid vapor pressure of 1 to 20 psi
//function Fig1_14b() {
//	//T = T_LA
//	//requires RVP and S
//	var P;
//	//T = T_LA
//	P = Math.exp(((0.7553 - (413.0 / aryVarVals.T_LA)) * Math.pow(aryVarVals.Slope,0.5) * Math.log10(aryVarVals.RVP)) - ((1.854 - (1042 / aryVarVals.T_LA)) * Math.pow(aryVarVals.Slope,0.5)) + (((2416 / aryVarVals.T_LA) - 2.013) * Math.log10(aryVarVals.RVP)) - (8742 / aryVarVals.T_LA) +15.64);
//
//	return P;
//}
//
////Figure 7.1-15: Equations to determine vapor pressure Constants A and B for refined petroleum stocks
//function Fig1_15() {
//	//requires RVP and S
//	aryVarVals.A = 15.64 - (1.854 * Math.pow(aryVarVals.Slope,0.5)) - ((0.8742 - (0.3280 * Math.pow (aryVarVals.Slope,0.5))) * Math.log(aryVarVals.RVP));
//	aryVarVals.B = 8742 - (1042 * Math.pow(aryVarVals.Slope,0.5)) - ((1049 - 179.4 * Math.pow(aryVarVals.Slope,0.5)) * Math.log(aryVarVals.RVP));
//}
//
////Figure 7.1-16: Equations to determine vapor pressure Constants A and B for crude oil stocks
//
//function Fig1_16() {
//	aryVarVals.A = 12.82 - (0.9672 * Math.log(aryVarVals.RVP));
//	aryVarVals.B = 7261 - (1216 * Math.log(aryVarVals.RVP));
//}
//
////Figure 7.1-17: Equations for the average daily maximum and minimum liquid surface temperatures, T_LX and T_LN (degrees R) [DONE]
//function Fig1_17() {
//
//	if (document.getElementById("minBulkTemp").value != "" && isNaN(document.getElementById("minBulkTemp").value) == false) {
//		//fully insulated and heated tank
//		//from section 7.1.3.8.4
//		aryVarVals.T_LN = aryVarVals.T_BN;
//		aryVarVals.T_LX = aryVarVals.T_BX;
//	} else {
//		//Fig1_17
//		aryVarVals.T_LN = aryVarVals.T_LA - (0.25 * aryVarVals.deltaT_V);
//		aryVarVals.T_LX = aryVarVals.T_LA + (0.25 * aryVarVals.deltaT_V);
//	}
//	
//	aryVarDesc.T_LN = "Average daily minimum liquid surface temperature, &deg;R";
//	aryVarNames1.T_LN = "T_LN";
//	aryVarNames2.T_LN = "T<sub>LN</sub>";
//	
//	aryVarDesc.T_LX = "Average daily maximum liquid surface temperature, &deg;R";
//	aryVarNames1.T_LX = "T_LX";
//	aryVarNames2.T_LX = "T<sub>LX</sub>";
//}

//TABLES=====================================================================================================================================================
			
//			//Table 7.1-1: List of variables. Included in aryVarVals, aryVarDesc, aryVarNames1, and aryVarNames2
//			
//			//Table 7.1-2: Properties of Selected Refined Petroleum Liquids
//			function CrudeProperties() {
//				//declare objects:
//				var petroLiq1 = {propName:"Midcontinent Crude Oil", M_V:50, M_L:207, W_L:7.1, S:"", A:"Figure 7.1-16", B:"Figure 7.1-16", P_VA:"", RVP:5};
//				//put property objects into array
//				var aryPetroProp = [petroLiq1];
//				
//				return aryPetroProp;			
//			}
//			
//			function fillCrudeProperties() {
//				//declare variables:
//				var i, lenAry, text, aryPetroProp;
//				aryPetroProp = CrudeProperties();
//				//put names into dropdown box "tankContents"
//				lenAry = aryPetroProp.length;
//				var select = document.getElementById("tankContents");
//				for(var i = 0; i < lenAry; i++)
//				{
//					var option = document.createElement("OPTION"),
//						txt1 = document.createTextNode(aryPetroProp[i].propName);
//					option.appendChild(txt1);
//					option.setAttribute("value",aryPetroProp[i].propName);
//					select.insertBefore(option,tankContents.lastChild);
//				}
//			}
//			
//			function PertoleumProperties() {
//				//declare objects:
//				//removed "Midcontinent Crude Oil" and moved into a separate category above
//				//removed 'Refined Petroleum Stocks' since no applicable data
//				var petroLiq3 = {propName:"Motor Gasoline RVP 13", M_V:62, M_L:92, W_L:5.6, S:3, A:11.644, B:5043.6, P_VA:7, RVP:13};
//				var petroLiq4 = {propName:"Motor Gasoline RVP 10", M_V:66, M_L:92, W_L:5.6, S:3, A:11.724, B:5237.3, P_VA:5.2, RVP:10};
//				var petroLiq5 = {propName:"Motor Gasoline RVP 7", M_V:68, M_L:92, W_L:5.6, S:3, A:11.833, B:5500.6, P_VA:3.5, RVP:7};
//				//removed 'Light Naphtha RVP 9-14' since no applicable data
//				//removed 'Naphtha RVP 2-8' since no applicable data
//				//removed 'Aviation Gasoline' since no applicable data
//				var petroLiq9 = {propName:"Jet Naphtha (JP-4)", M_V:80, M_L:120, W_L:6.4, S:"", A:11.368, B:5784.3, P_VA:1.3, RVP:""};
//				var petroLiq10 = {propName:"Jet Kerosene (Jet A)", M_V:130, M_L:162, W_L:7, S:"", A:12.39, B:8933, P_VA:0.008, RVP:""};
//				var petroLiq11 = {propName:"No. 2 Fuel Oil (Diesel)", M_V:130, M_L:188, W_L:7.1, S:"", A:12.101, B:8907, P_VA:0.006, RVP:""};
//				var petroLiq12= {propName:"No. 6 Fuel Oil", M_V:130, M_L:387, W_L:7.9, S:"", A:10.781, B:8933, P_VA:0.002, RVP:""};
//				var petroLiq13 = {propName:"Vacuum Residual Oil", M_V:190, M_L:387, W_L:7.9, S:"", A:10.104, B:10475.5, P_VA:0.00004, RVP:""};
//
//				//put property objects into array
//				var aryPetroProp = [petroLiq3, petroLiq4, petroLiq5, petroLiq9, petroLiq10, petroLiq11, petroLiq12, petroLiq13];
//				
//				return aryPetroProp;
//			}
//			
//			function fillPertoleumProperties() {
//				//declare variables:
//				var i, lenAry, text, aryPetroProp;
//				aryPetroProp = PertoleumProperties();
//				//put names into dropdown box "tankContents"
//				lenAry = aryPetroProp.length;
//				var select = document.getElementById("tankContents");
//				for(var i = 0; i < lenAry; i++)
//				{
//					var option = document.createElement("OPTION"),
//						txt1 = document.createTextNode(aryPetroProp[i].propName);
//					option.appendChild(txt1);
//					option.setAttribute("value",aryPetroProp[i].propName);
//					select.insertBefore(option,tankContents.lastChild);
//				}
//
//			}
//			
//			//Table 7.1-3: Properties of Select PetroChemicals
//			function PetroChemProperties() {
//				// declare objects:
//				var petroChem1 = {propName:"Acetaldehyde", CAS:"00075-07-0", M_L:44.05, W_L:6.54, S:"", P_VA:12.19, A:8.063, B:1637.1, C:295.47, T_Min:32, Tmax:94, N_BP:69};
//				var petroChem2 = {propName:"Acetic acid", CAS:"00064-19-7", M_L:60.05, W_L:8.72, S:"", P_VA:0.176, A:7.557, B:1642.5, C:233.39, T_Min:63, Tmax:244, N_BP:244};
//				var petroChem3 = {propName:"Acetic anhydride {acetic acid anhydride}", CAS:"00108-24-7", M_L:102.09, W_L:9.03, S:"", P_VA:0.053, A:7.122, B:1427.8, C:198.04, T_Min:145, Tmax:283, N_BP:282};
//				var petroChem4 = {propName:"Acetone", CAS:"00067-64-1", M_L:58.08, W_L:6.55, S:"", P_VA:2.921, A:7.3, B:1312.3, C:240.71, T_Min:7, Tmax:454, N_BP:133};
//				var petroChem5 = {propName:"Acetonitrile", CAS:"00075-05-8", M_L:41.05, W_L:6.56, S:"", P_VA:1.09, A:7.154, B:1355.4, C:235.3, T_Min:59, Tmax:192, N_BP:179};
//				var petroChem6 = {propName:"Acrylamide", CAS:"00079-06-1", M_L:71.08, W_L:9.36, S:"", P_VA:0.0000857, A:11.293, B:3939.9, C:273.16, T_Min:"", Tmax:"", N_BP:379};
//				var petroChem7 = {propName:"Acrylic acid {2-propenoic acid}", CAS:"00079-10-7", M_L:72.06, W_L:8.77, S:"", P_VA:1.344, A:5.652, B:648.6, C:154.68, T_Min:68, Tmax:158, N_BP:282};
//				var petroChem8 = {propName:"Acrylonitrile {2-propenenitrile}", CAS:"00107-13-1", M_L:53.06, W_L:6.73, S:"", P_VA:1.383, A:6.942, B:1255.9, C:231.3, T_Min:-60, Tmax:172, N_BP:172};
//				var petroChem9 = {propName:"Allyl alcohol", CAS:"00107-18-6", M_L:58.08, W_L:7.13, S:"", P_VA:0.326, A:11.658, B:4510.2, C:416.8, T_Min:70, Tmax:207, N_BP:206};
//				var petroChem10 = {propName:"Allyl chloride {3-chloro-1-propene}", CAS:"00107-05-1", M_L:76.52, W_L:7.83, S:"", P_VA:4.702, A:5.297, B:418.4, C:128.68, T_Min:55, Tmax:111, N_BP:113};
//				var petroChem11 = {propName:"Aniline", CAS:"00062-53-3", M_L:93.13, W_L:8.53, S:"", P_VA:0.0058, A:7.221, B:1661.9, C:199.1, T_Min:88, Tmax:363, N_BP:363};
//				var petroChem12 = {propName:"Benzene", CAS:"00071-43-2", M_L:78.11, W_L:7.32, S:"", P_VA:1.171, A:6.906, B:1211, C:220.79, T_Min:46, Tmax:217, N_BP:176};
//				var petroChem13 = {propName:"Benz[a]anthracene", CAS:"00056-55-3", M_L:228.29, W_L:"", S:"", P_VA:0.000000000792, A:11.528, B:5461, C:273.15, T_Min:219, Tmax:260, N_BP:820};
//				var petroChem14 = {propName:"Benzo[a]pyrene", CAS:"00050-32-8", M_L:252.31, W_L:"", S:"", P_VA:0.0000000000229, A:12.482, B:6181, C:273.15, T_Min:185, Tmax:316, N_BP:923};
//				var petroChem15 = {propName:"Benzo[ghi]perylene", CAS:"00191-24-2", M_L:276.33, W_L:"", S:"", P_VA:0.000000000000207, A:11.82, B:6580, C:273.15, T_Min:391, Tmax:513, N_BP:""};
//				var petroChem16 = {propName:"Biphenyl", CAS:"00092-52-4", M_L:154.21, W_L:8.68, S:"", P_VA:0.000237, A:7.245, B:1998.7, C:202.73, T_Min:156, Tmax:520, N_BP:489};
//				var petroChem17 = {propName:"Butadiene (1,3) {divinyl}", CAS:"00106-99-0", M_L:54.09, W_L:5.13, S:"", P_VA:30.22, A:6.873, B:941.7, C:240.4, T_Min:-104, Tmax:29, N_BP:24};
//				var petroChem18 = {propName:"Butane (n)", CAS:"00106-97-8", M_L:58.12, W_L:4.78, S:"", P_VA:25.67, A:6.725, B:909.7, C:237, T_Min:-108, Tmax:31, N_BP:32};
//				var petroChem19 = {propName:"Butene (1)", CAS:"00106-98-9", M_L:56.11, W_L:4.91, S:"", P_VA:30.83, A:7.122, B:1099.2, C:264.89, T_Min:-108, Tmax:25, N_BP:21};
//				var petroChem20 = {propName:"Butene (cis-2)", CAS:"00590-18-1", M_L:56.11, W_L:5.14, S:"", P_VA:22.62, A:6.863, B:957.1, C:236.65, T_Min:-94, Tmax:73, N_BP:39};
//				var petroChem21 = {propName:"Butene (2-methyl-1)", CAS:"00563-46-2", M_L:70.13, W_L:5.43, S:"", P_VA:8.257, A:6.862, B:1047.8, C:232.06, T_Min:34, Tmax:145, N_BP:88};
//				var petroChem22 = {propName:"Butene (trans-2)", CAS:"00624-64-6", M_L:56.11, W_L:5, S:"", P_VA:24.97, A:6.919, B:982.2, C:242.38, T_Min:-97, Tmax:34, N_BP:34};
//				var petroChem23 = {propName:"Butyl alcohol (n) {butanol (1)}", CAS:"00071-36-3", M_L:74.12, W_L:6.76, S:"", P_VA:0.062, A:7.421, B:1351.6, C:179.81, T_Min:73, Tmax:244, N_BP:243};
//				var petroChem24 = {propName:"Butyl alcohol (tert) {1,1-dimethyl ethanol}", CAS:"00075-65-0", M_L:74.12, W_L:6.58, S:"", P_VA:0.424, A:7.373, B:1174.9, C:179.23, T_Min:103, Tmax:180, N_BP:180};
//				var petroChem25 = {propName:"Butyl chloride (-n) {1-chloro-butane}", CAS:"00109-69-3", M_L:92.57, W_L:7.4, S:"", P_VA:1.255, A:6.871, B:1182.9, C:218.27, T_Min:2, Tmax:173, N_BP:170};
//				var petroChem26 = {propName:"Butyl ether (di-tert)", CAS:"06163-66-2", M_L:130.23, W_L:6.39, S:"", P_VA:0.381, A:6.59, B:1157.7, C:203.05, T_Min:39, Tmax:228, N_BP:224};
//				var petroChem27 = {propName:"Carbon disulfide", CAS:"00075-15-0", M_L:76.14, W_L:10.54, S:"", P_VA:4.817, A:6.942, B:1168.6, C:241.53, T_Min:38, Tmax:176, N_BP:115};
//				var petroChem28 = {propName:"Carbon tetrachloride", CAS:"00056-23-5", M_L:153.82, W_L:13.31, S:"", P_VA:1.431, A:6.898, B:1221.8, C:227.41, T_Min:68, Tmax:172, N_BP:170};
//				var petroChem29 = {propName:"Chlorobenzene", CAS:"00108-90-7", M_L:112.56, W_L:9.23, S:"", P_VA:0.134, A:6.986, B:1435.7, C:218.03, T_Min:144, Tmax:269, N_BP:269};
//				var petroChem30 = {propName:"Chlorobutane (2)", CAS:"00078-86-4", M_L:92.57, W_L:7.27, S:"", P_VA:1.255, A:6.871, B:1182.9, C:218.27, T_Min:2, Tmax:173, N_BP:170};
//				var petroChem31 = {propName:"Chloroform", CAS:"00067-66-3", M_L:119.38, W_L:12.38, S:"", P_VA:2.468, A:7.083, B:1233.1, C:232.2, T_Min:-73, Tmax:142, N_BP:142};
//				var petroChem32 = {propName:"Chloroprene {2-chloro-1,3-butadiene}", CAS:"00126-99-8", M_L:88.54, W_L:7.98, S:"", P_VA:2.736, A:6.291, B:841.9, C:187.79, T_Min:68, Tmax:140, N_BP:140};
//				var petroChem33 = {propName:"Chlorotoluene (o) {1-chloro-2methylbenzene}", CAS:"00095-49-8", M_L:126.58, W_L:9.04, S:"", P_VA:0.039, A:7.363, B:1768.1, C:234.76, T_Min:42, Tmax:319, N_BP:318};
//				var petroChem34 = {propName:"Chrysene {benzo[a]phenanthrene}", CAS:"00218-01-9", M_L:228.29, W_L:10.63, S:"", P_VA:0.0000000000186, A:12.32, B:6160, C:273.15, T_Min:185, Tmax:374, N_BP:838};
//				var petroChem35 = {propName:"Cresol (m) {3-methyl-phenol}", CAS:"00108-39-4", M_L:108.14, W_L:8.63, S:"", P_VA:0.0013, A:7.477, B:1833.1, C:196.74, T_Min:301, Tmax:394, N_BP:396};
//				var petroChem36 = {propName:"Cresol (o) {2-methyl-phenol}", CAS:"00095-48-7", M_L:108.14, W_L:9.47, S:"", P_VA:0.0016, A:6.843, B:1391.3, C:160.18, T_Min:248, Tmax:376, N_BP:376};
//				var petroChem37 = {propName:"Cresol (p) {4-methyl-phenol}", CAS:"00106-44-5", M_L:108.14, W_L:8.5, S:"", P_VA:0.00062, A:7.016, B:1498.6, C:160.55, T_Min:262, Tmax:395, N_BP:395};
//				var petroChem38 = {propName:"Cyclohexane", CAS:"00110-82-7", M_L:84.16, W_L:6.46, S:"", P_VA:1.212, A:6.845, B:1203.5, C:222.86, T_Min:68, Tmax:179, N_BP:177};
//				var petroChem39 = {propName:"Cyclohexanol", CAS:"00108-93-0", M_L:100.16, W_L:8.03, S:"", P_VA:0.0009, A:5.956, B:777.4, C:91.11, T_Min:201, Tmax:321, N_BP:320};
//				var petroChem40 = {propName:"Cyclohexanone", CAS:"00108-94-1", M_L:98.14, W_L:7.91, S:"", P_VA:0.0042, A:5.978, B:1495.5, C:209.55, T_Min:193, Tmax:330, N_BP:311};
//				var petroChem41 = {propName:"Cyclohexene", CAS:"00110-83-8", M_L:82.14, W_L:6.77, S:"", P_VA:0.11, A:5.872, B:1221.9, C:223.17, T_Min:98, Tmax:196, N_BP:181};
//				var petroChem42 = {propName:"Cyclopentane", CAS:"00287-92-3", M_L:70.13, W_L:6.22, S:"", P_VA:4.171, A:6.878, B:1119.2, C:230.74, T_Min:60, Tmax:122, N_BP:121};
//				var petroChem43 = {propName:"Cyclopentanone", CAS:"00120-92-3", M_L:84.12, W_L:7.92, S:"", P_VA:0.13, A:3.958, B:376.4, C:104.65, T_Min:32, Tmax:78, N_BP:266};
//				var petroChem44 = {propName:"Cyclopentene", CAS:"00142-29-0", M_L:68.12, W_L:6.44, S:"", P_VA:3.264, A:6.921, B:1121.8, C:223.45, T_Min:"", Tmax:"", N_BP:111};
//				var petroChem45 = {propName:"Decane (-n)", CAS:"00124-18-5", M_L:142.28, W_L:6.09, S:"", P_VA:0.011, A:3.085, B:440.6, C:116.25, T_Min:-21, Tmax:99, N_BP:345};
//				var petroChem46 = {propName:"Dibromopropane (1,2)", CAS:"00078-75-1", M_L:201.89, W_L:16.13, S:"", P_VA:0.088, A:7.314, B:1667, C:234.85, T_Min:19, Tmax:287, N_BP:286};
//				var petroChem47 = {propName:"Dibromopropane (1,3)", CAS:"00109-64-8", M_L:201.89, W_L:16.55, S:"", P_VA:0.029, A:7.309, B:1776.7, C:233.46, T_Min:49, Tmax:333, N_BP:314};
//				var petroChem48 = {propName:"Dichloroethane (1,1)", CAS:"00075-34-3", M_L:98.96, W_L:9.81, S:"", P_VA:2.863, A:7.097, B:1229.2, C:233.95, T_Min:-77, Tmax:135, N_BP:135};
//				var petroChem49 = {propName:"Dichloroethane (1,2)", CAS:"00107-06-2", M_L:98.96, W_L:10.4, S:"", P_VA:0.961, A:7.46, B:1521.8, C:248.48, T_Min:-23, Tmax:211, N_BP:182};
//				var petroChem50 = {propName:"Dichloroethylene (1,2) {1,2 dichloroethene}", CAS:"00540-59-0", M_L:96.94, W_L:10.76, S:"", P_VA:2.579, A:7.022, B:1205.4, C:230.6, T_Min:32, Tmax:183, N_BP:141};
//				var petroChem51 = {propName:"Dichloroethylene (trans-1,2)", CAS:"00156-60-5", M_L:96.94, W_L:10.49, S:"", P_VA:4.333, A:6.965, B:1141.9, C:231.9, T_Min:-36, Tmax:185, N_BP:118};
//				var petroChem52 = {propName:"Dichlorotoluene (3,4)", CAS:"00095-75-0", M_L:161.03, W_L:10.49, S:"", P_VA:0.0029, A:7.344, B:1882.5, C:215, T_Min:32, Tmax:221, N_BP:408};
//				var petroChem53 = {propName:"Diethoxyethane (1,1)", CAS:"00105-57-7", M_L:118.17, W_L:6.89, S:"", P_VA:0.307, A:7.625, B:1574, C:229.47, T_Min:-10, Tmax:216, N_BP:212};
//				var petroChem54 = {propName:"Diethoxymethane", CAS:"00462-95-3", M_L:104.15, W_L:6.94, S:"", P_VA:0.81, A:6.986, B:1270.2, C:221.26, T_Min:32, Tmax:167, N_BP:191};
//				var petroChem55 = {propName:"Diethyl (n,n) aniline {N,N–diethylbenzenamine}", CAS:"00091-66-7", M_L:149.23, W_L:7.77, S:"", P_VA:0.0031, A:8.258, B:2652.8, C:277.32, T_Min:122, Tmax:425, N_BP:422};
//				var petroChem56 = {propName:"Diethyl ketone {3-pentanone}", CAS:"00096-22-0", M_L:86.13, W_L:6.76, S:"", P_VA:0.423, A:5.741, B:716.2, C:147.17, T_Min:97, Tmax:215, N_BP:215};
//				var petroChem57 = {propName:"Diethyl sulfide", CAS:"00352-93-2", M_L:90.19, W_L:6.98, S:"", P_VA:0.749, A:7.541, B:1560.5, C:246.59, T_Min:-39, Tmax:190, N_BP:197};
//				var petroChem58 = {propName:"Diethylamine {N-ethyl ethanamine}", CAS:"00109-89-7", M_L:73.14, W_L:5.89, S:"", P_VA:2.712, A:5.737, B:559.1, C:140.18, T_Min:89, Tmax:141, N_BP:132};
//				var petroChem59 = {propName:"Diethylbenzene (1,2)", CAS:"00135-01-3", M_L:134.22, W_L:7.34, S:"", P_VA:0.0094, A:6.99, B:1577.9, C:200.55, T_Min:206, Tmax:364, N_BP:361};
//				var petroChem60 = {propName:"Diethylbenzene (1,3)", CAS:"00141-93-5", M_L:134.22, W_L:7.18, S:"", P_VA:0.01, A:7.006, B:1576.3, C:201, T_Min:203, Tmax:360, N_BP:358};
//				var petroChem61 = {propName:"Diethylbenzene (1,4)", CAS:"00105-05-5", M_L:134.22, W_L:7.2, S:"", P_VA:0.01, A:7.001, B:1589.3, C:202.02, T_Min:206, Tmax:365, N_BP:363};
//				var petroChem62 = {propName:"Di-isopropyl ether", CAS:"00108-20-3", M_L:102.17, W_L:6.04, S:"", P_VA:1.877, A:6.842, B:1135, C:218.23, T_Min:74, Tmax:153, N_BP:155};
//				var petroChem63 = {propName:"Dimethoxyethane (1,2)", CAS:"00110-71-4", M_L:90.12, W_L:7.25, S:"", P_VA:0.966, A:6.713, B:1260.5, C:235.83, T_Min:-55, Tmax:199, N_BP:185};
//				var petroChem64 = {propName:"Dimethyl formamide (n,n)", CAS:"00068-12-2", M_L:73.09, W_L:7.88, S:"", P_VA:0.04, A:6.806, B:1337.7, C:190.5, T_Min:86, Tmax:194, N_BP:307};
//				var petroChem65 = {propName:"Dimethyl hydrazine (1,1)", CAS:"00057-14-7", M_L:60.1, W_L:6.6, S:"", P_VA:1.896, A:7.588, B:1388.5, C:232.54, T_Min:-32, Tmax:68, N_BP:146};
//				var petroChem66 = {propName:"Dimethyl phthalate", CAS:"00131-11-3", M_L:194.18, W_L:9.94, S:"", P_VA:0.0000000225, A:4.522, B:700.3, C:51.42, T_Min:180, Tmax:304, N_BP:540};
//				var petroChem67 = {propName:"Dimethylbutane (2,3)", CAS:"00079-29-8", M_L:86.18, W_L:5.52, S:"", P_VA:3.064, A:6.81, B:1127.2, C:228.95, T_Min:58, Tmax:138, N_BP:136};
//				var petroChem68 = {propName:"Dimethylcyclopentane (1,1)", CAS:"01638-26-2", M_L:98.19, W_L:6.26, S:"", P_VA:0.932, A:6.83, B:1226.6, C:222.76, T_Min:60, Tmax:192, N_BP:190};
//				var petroChem69 = {propName:"Dimethylpentane (2,2)", CAS:"00590-35-2", M_L:100.2, W_L:5.63, S:"", P_VA:1.315, A:6.815, B:1190.3, C:223.34, T_Min:60, Tmax:176, N_BP:174};
//				var petroChem70 = {propName:"Dimethylpentane (2,3)", CAS:"00565-59-3", M_L:100.2, W_L:5.8, S:"", P_VA:0.842, A:6.862, B:1242.6, C:222.34, T_Min:64, Tmax:195, N_BP:194};
//				var petroChem71 = {propName:"Dimethylpentane (2,4)", CAS:"00108-08-7", M_L:100.2, W_L:5.62, S:"", P_VA:1.221, A:6.836, B:1197.6, C:222.27, T_Min:57, Tmax:178, N_BP:177};
//				var petroChem72 = {propName:"Dimethylpentane (3,3)", CAS:"00562-49-2", M_L:100.2, W_L:5.79, S:"", P_VA:1.029, A:6.831, B:1231, C:225.58, T_Min:56, Tmax:189, N_BP:187};
//				var petroChem73 = {propName:"Dioxane (1,4)", CAS:"00123-91-1", M_L:88.11, W_L:8.63, S:"", P_VA:0.439, A:7.456, B:1570.1, C:241.85, T_Min:68, Tmax:221, N_BP:214};
//				var petroChem74 = {propName:"Dipropyl ether {di-n-propyl ether}", CAS:"00111-43-3", M_L:102.17, W_L:6.23, S:"", P_VA:0.754, A:6.945, B:1254.8, C:218.82, T_Min:80, Tmax:192, N_BP:194};
//				var petroChem75 = {propName:"Dodecane (n)", CAS:"00112-40-3", M_L:170.33, W_L:6.25, S:"", P_VA:0.00093, A:6.981, B:1625.9, C:180.31, T_Min:259, Tmax:423, N_BP:421};
//				var petroChem76 = {propName:"Epichlorohydrin {chloromethyl oxirane}", CAS:"00106-89-8", M_L:92.52, W_L:9.85, S:"", P_VA:0.194, A:8.229, B:2086.8, C:273.16, T_Min:"", Tmax:"", N_BP:241};
//				var petroChem77 = {propName:"Ethane", CAS:"00074-84-0", M_L:30.07, W_L:"", S:"", P_VA:472, A:6.813, B:659.7, C:256.431, T_Min:-215, Tmax:-100, N_BP:-127};
//				var petroChem78 = {propName:"Ethanolamine (mono)", CAS:"00141-43-5", M_L:61.08, W_L:8.5, S:"", P_VA:0.002, A:7.168, B:1408.9, C:157.06, T_Min:150, Tmax:340, N_BP:339};
//				var petroChem79 = {propName:"Ethyl acetate", CAS:"00141-78-6", M_L:88.11, W_L:7.51, S:"", P_VA:1.135, A:7.103, B:1245.7, C:217.96, T_Min:60, Tmax:168, N_BP:171};
//				var petroChem80 = {propName:"Ethyl acrylate {ethyl ester 2-propenoic acid}", CAS:"00140-88-5", M_L:100.12, W_L:7.71, S:"", P_VA:0.445, A:7.15, B:1366.1, C:220.47, T_Min:-21, Tmax:211, N_BP:211};
//				var petroChem81 = {propName:"Ethyl alcohol {ethanol}", CAS:"00064-17-5", M_L:46.07, W_L:6.59, S:"", P_VA:0.648, A:8.247, B:1670.4, C:232.96, T_Min:32, Tmax:173, N_BP:173};
//				var petroChem82 = {propName:"Ethyl chloride", CAS:"00075-00-3", M_L:64.51, W_L:7.43, S:"", P_VA:16.63, A:7.037, B:1052.8, C:241.07, T_Min:-69, Tmax:55, N_BP:61};
//				var petroChem83 = {propName:"Ethyl ether {diethyl ether}", CAS:"00060-29-7", M_L:74.12, W_L:5.96, S:"", P_VA:6.675, A:6.897, B:1062.6, C:228.22, T_Min:-10, Tmax:132, N_BP:94};
//				var petroChem84 = {propName:"Ethylamine", CAS:"00075-04-7", M_L:45.08, W_L:5.65, S:"", P_VA:14.08, A:7.405, B:1203.8, C:249.43, T_Min:62, Tmax:349, N_BP:64};
//				var petroChem85 = {propName:"Ethylbenzene", CAS:"00100-41-4", M_L:106.17, W_L:7.24, S:"", P_VA:0.104, A:6.95, B:1419.3, C:212.61, T_Min:134, Tmax:279, N_BP:277};
//				var petroChem86 = {propName:"Ethylcyclopentane", CAS:"01640-89-7", M_L:98.19, W_L:6.4, S:"", P_VA:0.475, A:6.898, B:1305, C:221.4, T_Min:84, Tmax:220, N_BP:218};
//				var petroChem87 = {propName:"Ethylene {ethene}", CAS:"00074-85-1", M_L:28.05, W_L:4.74, S:"", P_VA:749, A:6.748, B:584.1, C:254.84, T_Min:-191, Tmax:-120, N_BP:-155};
//				var petroChem88 = {propName:"Ethyleneoxide", CAS:"00075-21-8", M_L:44.05, W_L:7.365, S:"", P_VA:17.84, A:8.722, B:2022.8, C:335.81, T_Min:32, Tmax:89, N_BP:53};
//				var petroChem89 = {propName:"Ethylpentane (3)", CAS:"00617-78-7", M_L:100.2, W_L:5.83, S:"", P_VA:0.701, A:6.88, B:1254.1, C:220.15, T_Min:70, Tmax:202, N_BP:200};
//				var petroChem90 = {propName:"Fluoranthene", CAS:"00206-44-0", M_L:202.25, W_L:10.45, S:"", P_VA:0.0000000396, A:12.836, B:5348.1, C:273.15, T_Min:77, Tmax:230, N_BP:723};
//				var petroChem91 = {propName:"Fluorobenzene", CAS:"00462-06-6", M_L:96.1, W_L:8.53, S:"", P_VA:0.936, A:7.237, B:1409.8, C:238.36, T_Min:0, Tmax:183, N_BP:185};
//				var petroChem92 = {propName:"Formic acid", CAS:"00064-18-6", M_L:46.03, W_L:10.18, S:"", P_VA:0.516, A:4.876, B:515, C:133.74, T_Min:33, Tmax:93, N_BP:213};
//				var petroChem93 = {propName:"Freon 11 {trichlorofluoromethane}", CAS:"00075-69-4", M_L:137.37, W_L:12.48, S:"", P_VA:10.93, A:6.884, B:1043, C:236.88, T_Min:"", Tmax:"", N_BP:75};
//				var petroChem94 = {propName:"Furan", CAS:"00110-00-9", M_L:68.07, W_L:7.94, S:"", P_VA:7.963, A:6.975, B:1060.8, C:227.73, T_Min:37, Tmax:143, N_BP:89};
//				var petroChem95 = {propName:"Furfural {2-furancarboxaldehyde}", CAS:"00098-01-1", M_L:96.09, W_L:9.68, S:"", P_VA:0.018, A:6.969, B:1430.1, C:188.7, T_Min:133, Tmax:321, N_BP:323};
//				var petroChem96 = {propName:"Heneicosane (n)", CAS:"00629-94-7", M_L:296.57, W_L:6.61, S:"", P_VA:0.000000623, A:8.796, B:3571.2, C:253.2, T_Min:307, Tmax:663, N_BP:679};
//				var petroChem97 = {propName:"Heptane (n)", CAS:"00142-82-5", M_L:100.2, W_L:5.71, S:"", P_VA:0.541, A:6.903, B:1268.6, C:216.95, T_Min:79, Tmax:211, N_BP:209};
//				var petroChem98 = {propName:"Heptene (1)", CAS:"00592-76-7", M_L:98.19, W_L:5.82, S:"", P_VA:0.752, A:7.093, B:1400.7, C:238.96, T_Min:32, Tmax:192, N_BP:201};
//				var petroChem99 = {propName:"Hexadiene (1,5)", CAS:"00592-42-7", M_L:82.14, W_L:5.74, S:"", P_VA:2.89, A:6.563, B:1008.1, C:214.16, T_Min:32, Tmax:138, N_BP:140};
//				var petroChem100 = {propName:"Hexane (n)", CAS:"00110-54-3", M_L:86.18, W_L:5.47, S:"", P_VA:1.913, A:6.878, B:1171.5, C:224.37, T_Min:55, Tmax:157, N_BP:156};
//				var petroChem101 = {propName:"Hexanol (1)", CAS:"00111-27-3", M_L:102.17, W_L:6.79, S:"", P_VA:0.005, A:7.288, B:1422, C:165.44, T_Min:126, Tmax:315, N_BP:314};
//				var petroChem102 = {propName:"Hexene (1)", CAS:"00592-41-6", M_L:84.16, W_L:5.62, S:"", P_VA:2.378, A:6.866, B:1153, C:225.85, T_Min:61, Tmax:148, N_BP:147};
//				var petroChem103 = {propName:"Hydrogen cyanide {hydrocyanic acid}", CAS:"00074-90-8", M_L:27.03, W_L:5.74, S:"", P_VA:9.931, A:7.549, B:1340.8, C:261.56, T_Min:2, Tmax:115, N_BP:79};
//				var petroChem104 = {propName:"Isobutane {methylpropane (2)}", CAS:"00075-28-5", M_L:58.12, W_L:4.6, S:"", P_VA:38.22, A:6.819, B:912.1, C:243.34, T_Min:-121, Tmax:11, N_BP:12};
//				var petroChem105 = {propName:"Isobutene {methylpropene (2)}", CAS:"00115-11-7", M_L:56.11, W_L:4.92, S:"", P_VA:32.18, A:6.522, B:799.1, C:226.54, T_Min:-70, Tmax:32, N_BP:20};
//				var petroChem106 = {propName:"Isobutyl alcohol {2-methyl 1-propanol}", CAS:"00078-83-1", M_L:74.12, W_L:6.69, S:"", P_VA:0.096, A:7.306, B:1237, C:171.62, T_Min:176, Tmax:240, N_BP:226};
//				var petroChem107 = {propName:"Isooctane {2,2,4-trimethylpentane}", CAS:"00540-84-1", M_L:114.23, W_L:5.74, S:"", P_VA:0.596, A:6.812, B:1257.8, C:220.74, T_Min:76, Tmax:212, N_BP:211};
//				var petroChem108 = {propName:"Isopentane {2-methyl butane}", CAS:"00078-78-4", M_L:72.15, W_L:5.18, S:"", P_VA:9.426, A:6.79, B:1020, C:233.1, T_Min:61, Tmax:83, N_BP:82};
//				var petroChem109 = {propName:"Isopentene {2-methyl 2-butene}", CAS:"00513-35-9", M_L:70.13, W_L:5.53, S:"", P_VA:6.21, A:6.922, B:1098.6, C:233.26, T_Min:37, Tmax:159, N_BP:100};
//				var petroChem110 = {propName:"Isoprene {2-methyl 1,3-butadiene}", CAS:"00078-79-5", M_L:68.12, W_L:5.67, S:"", P_VA:7.446, A:6.091, B:706.9, C:186.1, T_Min:62, Tmax:93, N_BP:93};
//				var petroChem111 = {propName:"Isopropyl alcohol {isopropanol}", CAS:"00067-63-0", M_L:60.1, W_L:6.52, S:"", P_VA:0.443, A:7.736, B:1357.4, C:197.34, T_Min:134, Tmax:193, N_BP:180};
//				var petroChem112 = {propName:"Isopropyl benzene {cumene}", CAS:"00098-82-8", M_L:120.19, W_L:7.19, S:"", P_VA:0.048, A:6.929, B:1455.8, C:207.2, T_Min:158, Tmax:308, N_BP:305};
//				var petroChem113 = {propName:"Isopropylbenzene (1-methyl-2)", CAS:"00527-84-4", M_L:134.22, W_L:7.32, S:"", P_VA:0.017, A:7.417, B:1880.5, C:236.27, T_Min:178, Tmax:355, N_BP:350};
//				var petroChem114 = {propName:"Methacrylonitrile {2-methyl 2-propenenitrile}", CAS:"00126-98-7", M_L:67.09, W_L:6.68, S:"", P_VA:0.886, A:6.999, B:1353.6, C:238.03, T_Min:-48, Tmax:194, N_BP:194};
//				var petroChem115 = {propName:"Methane", CAS:"00074-82-8", M_L:16.04, W_L:3.53, S:"", P_VA:4567, A:7.096, B:516.7, C:284.37, T_Min:-262, Tmax:-117, N_BP:-260};
//				var petroChem116 = {propName:"Methyl acetate {methyl ester acetic acid}", CAS:"00079-20-9", M_L:74.08, W_L:7.8, S:"", P_VA:2.703, A:7.079, B:1164.4, C:220.46, T_Min:35, Tmax:133, N_BP:134};
//				var petroChem117 = {propName:"Methyl acrylate {methyl ester 2-propenoic acid}", CAS:"00096-33-3", M_L:86.09, W_L:7.96, S:"", P_VA:1.058, A:7.198, B:1338.7, C:229.63, T_Min:-47, Tmax:176, N_BP:177};
//				var petroChem118 = {propName:"Methyl alcohol {methanol}", CAS:"00067-56-1", M_L:32.04, W_L:6.61, S:"", P_VA:1.476, A:8.079, B:1581.3, C:239.65, T_Min:59, Tmax:183, N_BP:148};
//				var petroChem119 = {propName:"Methyl ethyl ketone {2-butanone}", CAS:"00078-93-3", M_L:72.11, W_L:6.68, S:"", P_VA:1.081, A:6.864, B:1150.2, C:209.25, T_Min:106, Tmax:207, N_BP:176};
//				var petroChem120 = {propName:"Methyl isobutyl ketone", CAS:"00108-10-1", M_L:100.16, W_L:6.65, S:"", P_VA:0.219, A:6.828, B:1254.1, C:201.61, T_Min:71, Tmax:241, N_BP:241};
//				var petroChem121 = {propName:"Methyl methacrylate", CAS:"00080-62-6", M_L:100.12, W_L:7.88, S:"", P_VA:0.416, A:8.253, B:1945.6, C:265.58, T_Min:102, Tmax:192, N_BP:213};
//				var petroChem122 = {propName:"Methyl propyl ether", CAS:"00557-17-5", M_L:74.12, W_L:6.14, S:"", P_VA:6.017, A:6.563, B:903.6, C:206.46, T_Min:31, Tmax:103, N_BP:102};
//				var petroChem123 = {propName:"Methyl styrene (alpha)", CAS:"00098-83-9", M_L:118.18, W_L:7.6, S:"", P_VA:0.024, A:6.924, B:1486.9, C:202.4, T_Min:"", Tmax:"", N_BP:329};
//				var petroChem124 = {propName:"Methylcyclohexane", CAS:"00108-87-2", M_L:98.19, W_L:6.42, S:"", P_VA:0.558, A:6.823, B:1270.8, C:221.42, T_Min:27, Tmax:261, N_BP:214};
//				var petroChem125 = {propName:"Methylcyclopentane", CAS:"00096-37-7", M_L:84.16, W_L:6.25, S:"", P_VA:1.738, A:6.863, B:1186.1, C:226.04, T_Min:59, Tmax:163, N_BP:161};
//				var petroChem126 = {propName:"Methyldichlorosilane", CAS:"20156-50-7", M_L:115.03, W_L:8.91, S:"", P_VA:5.718, A:7.028, B:1167.8, C:240.7, T_Min:34, Tmax:106, N_BP:""};
//				var petroChem127 = {propName:"Methylene chloride", CAS:"00075-09-2", M_L:84.93, W_L:11.07, S:"", P_VA:5.64, A:7.412, B:1327, C:252.68, T_Min:-40, Tmax:104, N_BP:104};
//				var petroChem128 = {propName:"Methylhexane (2)", CAS:"00591-76-4", M_L:100.2, W_L:5.66, S:"", P_VA:0.799, A:6.882, B:1240.9, C:220.1, T_Min:65, Tmax:196, N_BP:194};
//				var petroChem129 = {propName:"Methylhexane (3)", CAS:"00589-34-4", M_L:100.2, W_L:5.72, S:"", P_VA:0.744, A:6.874, B:1243.8, C:219.63, T_Min:68, Tmax:199, N_BP:197};
//				var petroChem130 = {propName:"Methylpentane (2)", CAS:"00107-83-5", M_L:86.18, W_L:5.43, S:"", P_VA:2.73, A:6.839, B:1135.4, C:226.57, T_Min:55, Tmax:142, N_BP:142};
//				var petroChem131 = {propName:"Methyl-tert-butyl ether {MTBE}", CAS:"01634-04-4", M_L:88.15, W_L:6.18, S:"", P_VA:3.226, A:6.867, B:1116.1, C:224.74, T_Min:125, Tmax:431, N_BP:131};
//				var petroChem132 = {propName:"Morpholine", CAS:"00110-91-8", M_L:87.12, W_L:8.35, S:"", P_VA:0.109, A:7.718, B:1745.8, C:235, T_Min:32, Tmax:111, N_BP:263};
//				var petroChem133 = {propName:"Naphthalene", CAS:"00091-20-3", M_L:128.17, W_L:8.56, S:"", P_VA:0.0024, A:7.146, B:1831.6, C:211.82, T_Min:177, Tmax:354, N_BP:422};
//				var petroChem134 = {propName:"Nitrobenzene", CAS:"00098-95-3", M_L:123.11, W_L:10.05, S:"", P_VA:0.0022, A:7.091, B:1727.6, C:199.71, T_Min:273, Tmax:411, N_BP:412};
//				var petroChem135 = {propName:"Nitromethane", CAS:"00075-52-5", M_L:61.04, W_L:9.49, S:"", P_VA:0.415, A:7.281, B:1446.2, C:227.52, T_Min:132, Tmax:277, N_BP:214};
//				var petroChem136 = {propName:"Nonadecane (n)", CAS:"00629-92-5", M_L:268.52, W_L:6.56, S:"", P_VA:0.000000364, A:33.303, B:28197, C:725.94, T_Min:91, Tmax:131, N_BP:624};
//				var petroChem137 = {propName:"Nonane (n)", CAS:"00111-84-2", M_L:128.26, W_L:5.99, S:"", P_VA:0.037, A:6.7, B:1492.9, C:217.26, T_Min:-64, Tmax:94, N_BP:303};
//				var petroChem138 = {propName:"Octadecane (n)", CAS:"00593-45-3", M_L:254.49, W_L:6.48, S:"", P_VA:0.000000616, A:7.207, B:2069, C:161.22, T_Min:346, Tmax:602, N_BP:592};
//				var petroChem139 = {propName:"Octane (n)", CAS:"00111-65-9", M_L:114.23, W_L:5.83,S:"",  P_VA:0.142, A:8.076, B:1936.3, C:253.01, T_Min:-70, Tmax:75, N_BP:258};
//				var petroChem140 = {propName:"Octanol (1)", CAS:"00111-87-5", M_L:130.23, W_L:6.9, S:"", P_VA:0.00061, A:9.352, B:2603.4, C:224.35, T_Min:68, Tmax:176, N_BP:383};
//				var petroChem141 = {propName:"Octene (1)", CAS:"00111-66-0", M_L:112.21, W_L:5.97, S:"", P_VA:0.196, A:6.933, B:1353.5, C:212.76, T_Min:113, Tmax:252, N_BP:251};
//				var petroChem142 = {propName:"Pentachloroethane", CAS:"00076-01-7", M_L:202.29, W_L:14.02, S:"", P_VA:0.04, A:6.643, B:1342.3, C:196.51, T_Min:77, Tmax:324, N_BP:324};
//				var petroChem143 = {propName:"Pentadiene (1,2)", CAS:"00591-95-7", M_L:68.12, W_L:5.78, S:"", P_VA:4.718, A:6.936, B:1125.5, C:231.88, T_Min:-76, Tmax:-19, N_BP:113};
//				var petroChem144 = {propName:"Pentadiene (1,4)", CAS:"00591-93-5", M_L:68.12, W_L:5.52, S:"", P_VA:10.06, A:7.035, B:1108.2, C:241.05, T_Min:-110, Tmax:65, N_BP:79};
//				var petroChem145 = {propName:"Pentadiene (2,3)", CAS:"00591-96-8", M_L:68.12, W_L:5.8, S:"", P_VA:4.223, A:7.263, B:1256.2, C:239.57, T_Min:-76, Tmax:-15, N_BP:119};
//				var petroChem146 = {propName:"Pentane (n)", CAS:"00109-66-0", M_L:72.15, W_L:5.23, S:"", P_VA:6.884, A:6.864, B:1070.6, C:232.7, T_Min:24, Tmax:155, N_BP:97};
//				var petroChem147 = {propName:"Pentene (1)", CAS:"00109-67-1", M_L:70.13, W_L:5.35, S:"", P_VA:8.671, A:6.786, B:1014.3, C:229.78, T_Min:55, Tmax:87, N_BP:88};
//				var petroChem148 = {propName:"Pentyne (1)", CAS:"00627-19-0", M_L:68.12, W_L:5.76, S:"", P_VA:5.657, A:6.967, B:1092.5, C:227.18, T_Min:-47, Tmax:142, N_BP:104};
//				var petroChem149 = {propName:"Phenanthrene", CAS:"00085-01-8", M_L:178.23, W_L:8.18, S:"", P_VA:0.00000337, A:7.394, B:2428.5, C:202.19, T_Min:212, Tmax:302, N_BP:635};
//				var petroChem150 = {propName:"Phenol", CAS:"00108-95-2", M_L:94.11, W_L:8.8, S:"", P_VA:0.003, A:7.122, B:1509.7, C:174.2, T_Min:225, Tmax:359, N_BP:359};
//				var petroChem151 = {propName:"Phosgene", CAS:"00075-44-5", M_L:98.92, W_L:11.45, S:"", P_VA:19.43, A:7.146, B:1072.7, C:243.3, T_Min:47, Tmax:345, N_BP:46};
//				var petroChem152 = {propName:"Picoline (3) {3-methyl pyridine}", CAS:"00108-99-6", M_L:93.13, W_L:7.98, S:"", P_VA:0.064, A:7.054, B:1484.3, C:211.54, T_Min:165, Tmax:364, N_BP:291};
//				var petroChem153 = {propName:"Propane", CAS:"00074-98-6", M_L:44.1, W_L:4.12, S:"", P_VA:111, A:6.858, B:819.3, C:248.73, T_Min:-45, Tmax:117, N_BP:-44};
//				var petroChem154 = {propName:"Propanethiol (1)", CAS:"00107-03-9", M_L:76.16, W_L:7.02, S:"", P_VA:1.943, A:6.929, B:1183.4, C:224.63, T_Min:76, Tmax:216, N_BP:154};
//				var petroChem155 = {propName:"Propanethiol (2)", CAS:"00075-33-2", M_L:76.16, W_L:6.8, S:"", P_VA:3.59, A:6.877, B:1113.9, C:226.16, T_Min:51, Tmax:186, N_BP:131};
//				var petroChem156 = {propName:"Propyl alcohol (n) {propanol (1)}", CAS:"00071-23-8", M_L:60.1, W_L:6.67, S:"", P_VA:0.218, A:8.189, B:1690.9, C:221.35, T_Min:67, Tmax:207, N_BP:207};
//				var petroChem157 = {propName:"Propyl nitrate (n) {propyl ester nitric acid}", CAS:"00627-13-4", M_L:105.09, W_L:8.8, S:"", P_VA:0.261, A:6.955, B:1294.4, C:206.7, T_Min:32, Tmax:158, N_BP:231};
//				var petroChem158 = {propName:"Propylamine (n) {1-propanamine}", CAS:"00107-10-8", M_L:59.11, W_L:5.99, S:"", P_VA:3.99, A:6.926, B:1044, C:210.84, T_Min:73, Tmax:172, N_BP:120};
//				var petroChem159 = {propName:"Propylene {propene}", CAS:"00115-07-1", M_L:42.08, W_L:4.22, S:"", P_VA:132, A:6.85, B:795.8, C:248.27, T_Min:-161, Tmax:-53, N_BP:-54};
//				var petroChem160 = {propName:"Propylene glycol (1,2) {1,2 propanediol}", CAS:"00057-55-6", M_L:76.09, W_L:8.65, S:"", P_VA:0.00094, A:8.208, B:2085.9, C:203.54, T_Min:"", Tmax:"", N_BP:368};
//				var petroChem161 = {propName:"Propylene oxide", CAS:"00075-56-9", M_L:58.08, W_L:7.17, S:"", P_VA:7.101, A:6.97, B:1065.3, C:226.28, T_Min:-100, Tmax:94, N_BP:95};
//				var petroChem162 = {propName:"Pyridine", CAS:"00110-86-1", M_L:79.1, W_L:8.2, S:"", P_VA:0.233, A:7.038, B:1371.4, C:214.65, T_Min:153, Tmax:307, N_BP:240};
//				var petroChem163 = {propName:"Resorcinol", CAS:"00108-46-3", M_L:110.11, W_L:10.61, S:"", P_VA:0.00000665, A:8.398, B:2687.2, C:210.99, T_Min:305, Tmax:530, N_BP:532};
//				var petroChem164 = {propName:"Styrene", CAS:"00100-42-5", M_L:104.15, W_L:7.56, S:"", P_VA:0.066, A:7.095, B:1525.1, C:216.77, T_Min:86, Tmax:293, N_BP:295};
//				var petroChem165 = {propName:"Tetrachloroethane (1,1,1,2)", CAS:"00630-20-6", M_L:167.85, W_L:12.86, S:"", P_VA:0.133, A:6.906, B:1370.4, C:210.25, T_Min:139, Tmax:266, N_BP:271};
//				var petroChem166 = {propName:"Tetrachloroethane (1,1,2,2)", CAS:"00079-34-5", M_L:167.85, W_L:13.32, S:"", P_VA:0.037, A:6.091, B:959.6, C:149.78, T_Min:77, Tmax:266, N_BP:295};
//				var petroChem167 = {propName:"Tetrachloroethylene", CAS:"00127-18-4", M_L:165.83, W_L:13.54, S:"", P_VA:0.213, A:7.056, B:1440.8, C:223.98, T_Min:82, Tmax:226, N_BP:250};
//				var petroChem168 = {propName:"Tetrahydrofuran", CAS:"00109-99-9", M_L:72.11, W_L:7.42, S:"", P_VA:2.039, A:6.996, B:1202.9, C:226.33, T_Min:74, Tmax:211, N_BP:151};
//				var petroChem169 = {propName:"Toluene", CAS:"00108-88-3", M_L:92.14, W_L:7.24, S:"", P_VA:0.331, A:7.017, B:1377.6, C:222.64, T_Min:32, Tmax:122, N_BP:231};
//				var petroChem170 = {propName:"Trichloroethane (1,1,1)", CAS:"00071-55-6", M_L:133.4, W_L:11.18, S:"", P_VA:1.65, A:8.761, B:2210.2, C:308.05, T_Min:22, Tmax:62, N_BP:165};
//				var petroChem171 = {propName:"Trichloroethane (1,1,2)", CAS:"00079-00-5", M_L:133.4, W_L:12.02, S:"", P_VA:0.245, A:6.945, B:1310.3, C:208.74, T_Min:122, Tmax:237, N_BP:237};
//				var petroChem172 = {propName:"Trichloroethylene", CAS:"00079-01-6", M_L:131.39, W_L:12.22, S:"", P_VA:0.817, A:6.429, B:974.5, C:187.34, T_Min:64, Tmax:188, N_BP:189};
//				var petroChem173 = {propName:"Trichloropropane (1,2,3)", CAS:"00096-18-4", M_L:147.43, W_L:11.59, S:"", P_VA:0.031, A:7.532, B:1818.9, C:232.52, T_Min:48, Tmax:316, N_BP:313};
//				var petroChem174 = {propName:"Tridecane (n)", CAS:"00629-50-5", M_L:184.36, W_L:6.31, S:"", P_VA:0.000246, A:7.003, B:1689.1, C:174.28, T_Min:283, Tmax:457, N_BP:453};
//				var petroChem175 = {propName:"Trifluoroethane (1,1,2-trichloro-1,2,2)", CAS:"00076-13-1", M_L:187.37, W_L:13.05, S:"", P_VA:4.376, A:6.88, B:1099.9, C:227.5, T_Min:-13, Tmax:181, N_BP:118};
//				var petroChem176 = {propName:"Trimethylbenzene (1,2,4)", CAS:"00095-63-6", M_L:120.19, W_L:7.31, S:"", P_VA:0.02, A:7.044, B:1573.3, C:208.56, T_Min:126, Tmax:388, N_BP:337};
//				var petroChem177 = {propName:"Trimethylchlorosilane {chlorotrimethylsilane}", CAS:"00075-77-4", M_L:108.64, W_L:7.15, S:"", P_VA:3.068, A:6.951, B:1191, C:235.15, T_Min:37, Tmax:132, N_BP:136};
//				var petroChem178 = {propName:"Trimethylpentane (2,2,3)", CAS:"00564-02-3", M_L:114.23, W_L:5.74, S:"", P_VA:0.378, A:6.825, B:1294.9, C:218.42, T_Min:"", Tmax:"", N_BP:230};
//				var petroChem179 = {propName:"Trimethylpentane (2,3,3)", CAS:"00560-21-4", M_L:114.23, W_L:6.06, S:"", P_VA:0.317, A:6.844, B:1328.1, C:220.38, T_Min:"", Tmax:"", N_BP:238};
//				var petroChem180 = {propName:"Trimethylpentane (2,3,4)", CAS:"00565-75-3", M_L:114.23, W_L:6, S:"", P_VA:0.314, A:7.031, B:1420.7, C:228.53, T_Min:-59, Tmax:308, N_BP:237};
//				var petroChem181 = {propName:"Undecane (n)", CAS:"01120-21-4", M_L:156.31, W_L:6.18, S:"", P_VA:0.0035, A:6.977, B:1572.5, C:188.02, T_Min:220, Tmax:387, N_BP:383};
//				var petroChem182 = {propName:"Vinyl acetate {acetic acid ethenyl ester}", CAS:"00108-05-4", M_L:86.09, W_L:7.78, S:"", P_VA:1.396, A:7.215, B:1299.1, C:226.97, T_Min:71, Tmax:162, N_BP:163};
//				var petroChem183 = {propName:"Vinylidene chloride {1,1-dichloro ethene}", CAS:"00075-35-4", M_L:96.94, W_L:10.13, S:"", P_VA:8.096, A:6.983, B:1104.7, C:237.75, T_Min:-19, Tmax:90, N_BP:88};
//				var petroChem184 = {propName:"Xylene (m) {1,3-dimethyl benzene}", CAS:"00108-38-3", M_L:106.17, W_L:7.21, S:"", P_VA:0.09, A:7.009, B:1462.3, C:215.11, T_Min:82, Tmax:331, N_BP:283};
//				var petroChem185 = {propName:"Xylene (o) {1,2-dimethyl benzene}", CAS:"00095-47-6", M_L:106.17, W_L:7.35, S:"", P_VA:0.071, A:6.999, B:1474.7, C:213.69, T_Min:90, Tmax:342, N_BP:291};
//				var petroChem186 = {propName:"Xylene (p) {1,4-dimethyl benzene}", CAS:"00106-42-3", M_L:106.17, W_L:7.19, S:"", P_VA:0.097, A:7.021, B:1474.4, C:217.77, T_Min:56, Tmax:355, N_BP:281};
//
//				// put petroChem objects into array
//				var aryPetroChemProp = [petroChem1, petroChem2, petroChem3, petroChem4, petroChem5, petroChem6, petroChem7, petroChem8, petroChem9, petroChem10, petroChem11, petroChem12, petroChem13, petroChem14, petroChem15, petroChem16, petroChem17, petroChem18, petroChem19, petroChem20, petroChem21, petroChem22, petroChem23, petroChem24, petroChem25, petroChem26, petroChem27, petroChem28, petroChem29, petroChem30, petroChem31, petroChem32, petroChem33, petroChem34, petroChem35, petroChem36, petroChem37, petroChem38, petroChem39, petroChem40, petroChem41, petroChem42, petroChem43, petroChem44, petroChem45, petroChem46, petroChem47, petroChem48, petroChem49, petroChem50, petroChem51, petroChem52, petroChem53, petroChem54, petroChem55, petroChem56, petroChem57, petroChem58, petroChem59, petroChem60, petroChem61, petroChem62, petroChem63, petroChem64, petroChem65, petroChem66, petroChem67, petroChem68, petroChem69, petroChem70, petroChem71, petroChem72, petroChem73, petroChem74, petroChem75, petroChem76, petroChem77, petroChem78, petroChem79, petroChem80, petroChem81, petroChem82, petroChem83, petroChem84, petroChem85, petroChem86, petroChem87, petroChem88, petroChem89, petroChem90, petroChem91, petroChem92, petroChem93, petroChem94, petroChem95, petroChem96, petroChem97, petroChem98, petroChem99, petroChem100, petroChem101, petroChem102, petroChem103, petroChem104, petroChem105, petroChem106, petroChem107, petroChem108, petroChem109, petroChem110, petroChem111, petroChem112, petroChem113, petroChem114, petroChem115, petroChem116, petroChem117, petroChem118, petroChem119, petroChem120, petroChem121, petroChem122, petroChem123, petroChem124, petroChem125, petroChem126, petroChem127, petroChem128, petroChem129, petroChem130, petroChem131, petroChem132, petroChem133, petroChem134, petroChem135, petroChem136, petroChem137, petroChem138, petroChem139, petroChem140, petroChem141, petroChem142, petroChem143, petroChem144, petroChem145, petroChem146, petroChem147, petroChem148, petroChem149, petroChem150, petroChem151, petroChem152, petroChem153, petroChem154, petroChem155, petroChem156, petroChem157, petroChem158, petroChem159, petroChem160, petroChem161, petroChem162, petroChem163, petroChem164, petroChem165, petroChem166, petroChem167, petroChem168, petroChem169, petroChem170, petroChem171, petroChem172, petroChem173, petroChem174, petroChem175, petroChem176, petroChem177, petroChem178, petroChem179, petroChem180, petroChem181, petroChem182, petroChem183, petroChem184, petroChem185, petroChem186];
//				
//				return aryPetroChemProp;
//			}
//			
//			function fillPetroChemProperties() {
//				//declare variables:
//				var i, lenAry, text, aryPetroChemProp;
//				aryPetroChemProp = PetroChemProperties();
//				//put names into dropdown box
//				lenAry = aryPetroChemProp.length;
//				var select = document.getElementById("tankContents");
//				for(var i = 0; i < lenAry; i++)
//				{
//					var option = document.createElement("OPTION"),
//						txt1 = document.createTextNode(aryPetroChemProp[i].propName);
//					option.appendChild(txt1);
//					option.setAttribute("value",aryPetroChemProp[i].propName);
//					select.insertBefore(option,tankContents.lastChild);
//				}
//			}
//			
//			//Table 7.1-4: Skipped because it contains equations
//			
//			//Table 7.1-5: Skipped until needed
//			
//			//Table 7.1-6: Paint Solar Absorptance
//			
//			function PaintProperties() {
//				//declare objects:
//				var paint1 = {paintName:"White", New:0.17, Average:0.25, Aged:0.34};
//				var paint2 = {paintName:"Aluminum: Specular", New:0.39, Average:0.44, Aged:0.49};
//				var paint3 = {paintName:"Aluminum: Diffuse", New:0.6, Average:0.64, Aged:0.68};
//				var paint4 = {paintName:"Beige/Cream", New:0.35, Average:0.42, Aged:0.49};
//				var paint5 = {paintName:"Black", New:0.97, Average:0.97, Aged:0.97};
//				var paint6 = {paintName:"Brown", New:0.58, Average:0.62, Aged:0.67};
//				var paint7 = {paintName:"Gray: Light", New:0.54, Average:0.58, Aged:0.63};
//				var paint8 = {paintName:"Gray: Medium", New:0.68, Average:0.71, Aged:0.74};
//				var paint9 = {paintName:"Gray: Dark", New:0.89, Average:0.9, Aged:0.91};
//				var paint10 = {paintName:"Red: Primer", New:0.89, Average:0.9, Aged:0.91};
//				var paint11 = {paintName:"Rust: red iron oxide", New:0.38, Average:0.44, Aged:0.5};
//				var paint12 = {paintName:"Tan", New:0.43, Average:0.49, Aged:0.55};
//				var paint13 = {paintName:"Aluminum: mill finish, unpainted", New:0.1, Average:0.12, Aged:0.15};
//				//put paint objects into array
//				var aryPaintProp = [paint1, paint2, paint3, paint4, paint5, paint6, paint7, paint8, paint9, paint10, paint11, paint12, paint13];	
//				
//				return aryPaintProp;
//			}
//			
//			function fillPaintProperties (source) {
//				//declare variables:
//				var i, lenAry, text, aryPaintProp;
//				//put names into dropdown box "paint"
//				aryPaintProp = PaintProperties();
//				
//				lenAry = aryPaintProp.length;
//				var select1 = document.getElementById(source);
//				
//				for(var i = 0; i < lenAry; i++)
//				{
//					var option = document.createElement("OPTION"),
//						txt1 = document.createTextNode(aryPaintProp[i].paintName);
//					option.appendChild(txt1);
//					option.setAttribute("value",aryPaintProp[i].paintName);
//					select1.insertBefore(option,source.lastChild);
//				}
//				
//			}
			
//			//Table 7.1-7: Meteorological Data for Selected US Locations
//			function MetData() {
//				//declare objects:
//				var site1 = {metName:"Birmingham, AL", T_AN_01:35, T_AN_02:37.5, T_AN_03:44.1, T_AN_04:51.7, T_AN_05:60.6, T_AN_06:68.1, T_AN_07:71.7, T_AN_08:71.1, T_AN_09:64.7, T_AN_10:53.3, T_AN_11:43.3, T_AN_12:36.7, T_AN_Ann:53.2, T_AX_01:53.7, T_AX_02:57.8, T_AX_03:65.9, T_AX_04:73.9, T_AX_05:80.9, T_AX_06:86.8, T_AX_07:90, T_AX_08:89.8, T_AX_09:84.5, T_AX_10:74.7, T_AX_11:64.2, T_AX_12:55.3, T_AX_Ann:73.1, V_01:7.2, V_02:7.4, V_03:7.8, V_04:7.4, V_05:6.3, V_06:5.4, V_07:5.1, V_08:4.7, V_09:5.4, V_10:5.4, V_11:6, V_12:6.7, V_Ann:6.3, I_01:769, I_02:1013, I_03:1382, I_04:1720, I_05:1884, I_06:1928, I_07:1889, I_08:1760, I_09:1504, I_10:1212, I_11:890, I_12:699, I_Ann:1388, P_A_Ann:14.37};
//				var site2 = {metName:"Huntsville, AL", T_AN_01:32.7, T_AN_02:35.2, T_AN_03:42.1, T_AN_04:50.6, T_AN_05:59.6, T_AN_06:67.2, T_AN_07:70.3, T_AN_08:69.2, T_AN_09:62.6, T_AN_10:51.1, T_AN_11:41.2, T_AN_12:34.5, T_AN_Ann:51.4, T_AX_01:50.3, T_AX_02:54.4, T_AX_03:63.1, T_AX_04:72.3, T_AX_05:79.9, T_AX_06:86.3, T_AX_07:88.9, T_AX_08:89.2, T_AX_09:83.7, T_AX_10:73.4, T_AX_11:61.6, T_AX_12:52.1, T_AX_Ann:71.3, V_01:8.3, V_02:8.3, V_03:8.9, V_04:8.5, V_05:7.4, V_06:5.8, V_07:4.9, V_08:4.9, V_09:5.8, V_10:6.3, V_11:7.2, V_12:7.8, V_Ann:7.2, I_01:714, I_02:949, I_03:1314, I_04:1690, I_05:1868, I_06:1973, I_07:1948, I_08:1823, I_09:1508, I_10:1191, I_11:835, I_12:656, I_Ann:1372, P_A_Ann:14.36};
//				var site3 = {metName:"Mobile, AL", T_AN_01:41.4, T_AN_02:43.8, T_AN_03:49.7, T_AN_04:56.3, T_AN_05:64.7, T_AN_06:71, T_AN_07:73.3, T_AN_08:73.1, T_AN_09:68.9, T_AN_10:58.4, T_AN_11:48.3, T_AN_12:42.4, T_AN_Ann:57.6, T_AX_01:60.8, T_AX_02:64.2, T_AX_03:70.4, T_AX_04:76.7, T_AX_05:84, T_AX_06:88.3, T_AX_07:90.1, T_AX_08:89.9, T_AX_09:86.4, T_AX_10:78.5, T_AX_11:69.5, T_AX_12:62.1, T_AX_Ann:76.7, V_01:8.5, V_02:8.5, V_03:8.7, V_04:8.3, V_05:7.4, V_06:6, V_07:5.4, V_08:5.4, V_09:6.7, V_10:6.9, V_11:7.2, V_12:7.8, V_Ann:7.2, I_01:865, I_02:1114, I_03:1446, I_04:1774, I_05:1955, I_06:1925, I_07:1876, I_08:1767, I_09:1557, I_10:1304, I_11:1024, I_12:818, I_Ann:1452, P_A_Ann:14.58};
//				var site4 = {metName:"Montgomery, AL", T_AN_01:37.1, T_AN_02:39.9, T_AN_03:46.1, T_AN_04:52.6, T_AN_05:61.8, T_AN_06:68.9, T_AN_07:72.2, T_AN_08:71.7, T_AN_09:66.2, T_AN_10:54.4, T_AN_11:44, T_AN_12:38, T_AN_Ann:54.4, T_AX_01:57.7, T_AX_02:62, T_AX_03:69.4, T_AX_04:76.6, T_AX_05:83.9, T_AX_06:89.4, T_AX_07:91.8, T_AX_08:91.5, T_AX_09:86.9, T_AX_10:77.7, T_AX_11:67.9, T_AX_12:59.1, T_AX_Ann:76.2, V_01:7.2, V_02:7.4, V_03:7.6, V_04:6.5, V_05:5.8, V_06:4.9, V_07:4.7, V_08:4.7, V_09:5.6, V_10:5.4, V_11:5.8, V_12:6.7, V_Ann:6, I_01:823, I_02:1076, I_03:1421, I_04:1766, I_05:1952, I_06:1951, I_07:1943, I_08:1781, I_09:1530, I_10:1223, I_11:950, I_12:749, I_Ann:1430, P_A_Ann:14.59};
//				var site5 = {metName:"Phoenix, AZ", T_AN_01:46.5, T_AN_02:49.5, T_AN_03:54, T_AN_04:60.1, T_AN_05:69.8, T_AN_06:78.1, T_AN_07:84.3, T_AN_08:83.4, T_AN_09:78.1, T_AN_10:65.4, T_AN_11:53.3, T_AN_12:45.6, T_AN_Ann:64, T_AX_01:66.7, T_AX_02:69.8, T_AX_03:76.1, T_AX_04:83.6, T_AX_05:93.8, T_AX_06:102.6, T_AX_07:105.4, T_AX_08:103.6, T_AX_09:99.6, T_AX_10:87.8, T_AX_11:75.1, T_AX_12:65.6, T_AX_Ann:85.8, V_01:4.9, V_02:5.6, V_03:6.3, V_04:6.9, V_05:6.9, V_06:6.7, V_07:6.9, V_08:6.7, V_09:6, V_10:5.6, V_11:4.9, V_12:4.7, V_Ann:6, I_01:1058, I_02:1335, I_03:1774, I_04:2248, I_05:2495, I_06:2606, I_07:2379, I_08:2144, I_09:1910, I_10:1542, I_11:1172, I_12:967, I_Ann:1802, P_A_Ann:14.11};
//				var site6 = {metName:"Prescott, AZ", T_AN_01:26.8, T_AN_02:29.5, T_AN_03:33.5, T_AN_04:38.9, T_AN_05:48, T_AN_06:55.9, T_AN_07:63.3, T_AN_08:61.9, T_AN_09:54.9, T_AN_10:42.7, T_AN_11:32.3, T_AN_12:26.2, T_AN_Ann:42.8, T_AX_01:51.4, T_AX_02:54.4, T_AX_03:60, T_AX_04:66.4, T_AX_05:76.5, T_AX_06:85.6, T_AX_07:89.2, T_AX_08:86.5, T_AX_09:82.2, T_AX_10:71.4, T_AX_11:60.1, T_AX_12:51.1, T_AX_Ann:69.6, V_01:6.5, V_02:7.2, V_03:8.1, V_04:8.9, V_05:8.7, V_06:8.7, V_07:7.4, V_08:6.7, V_09:6.9, V_10:6.9, V_11:6.5, V_12:6.3, V_Ann:7.4, I_01:982, I_02:1245, I_03:1694, I_04:2156, I_05:2415, I_06:2571, I_07:2171, I_08:1903, I_09:1805, I_10:1493, I_11:1130, I_12:901, I_Ann:1705, P_A_Ann:12.24};
//				var site7 = {metName:"Tucson, AZ", T_AN_01:40.7, T_AN_02:43.1, T_AN_03:47, T_AN_04:52.4, T_AN_05:61.6, T_AN_06:70.4, T_AN_07:75.7, T_AN_08:74.4, T_AN_09:70.1, T_AN_10:58.4, T_AN_11:47, T_AN_12:40, T_AN_Ann:56.8, T_AX_01:65.8, T_AX_02:68.4, T_AX_03:74.2, T_AX_04:81.7, T_AX_05:91.7, T_AX_06:99.9, T_AX_07:99.6, T_AX_08:97.3, T_AX_09:94.7, T_AX_10:85.1, T_AX_11:74.1, T_AX_12:65, T_AX_Ann:83.1, V_01:6.9, V_02:7.4, V_03:7.8, V_04:8.3, V_05:8.1, V_06:8.1, V_07:7.8, V_08:7.4, V_09:7.6, V_10:7.6, V_11:7.2, V_12:6.9, V_Ann:7.6, I_01:1110, I_02:1370, I_03:1840, I_04:2279, I_05:2510, I_06:2582, I_07:2198, I_08:2007, I_09:1886, I_10:1595, I_11:1249, I_12:1033, I_Ann:1805, P_A_Ann:13.4};
//				var site8 = {metName:"Fort Smith, AR", T_AN_01:30.7, T_AN_02:34.3, T_AN_03:41.8, T_AN_04:50.5, T_AN_05:60.4, T_AN_06:68.4, T_AN_07:72.4, T_AN_08:71.4, T_AN_09:63, T_AN_10:51.6, T_AN_11:41, T_AN_12:32.8, T_AN_Ann:51.5, T_AX_01:49.4, T_AX_02:55.3, T_AX_03:63.7, T_AX_04:73, T_AX_05:79.8, T_AX_06:87.1, T_AX_07:92.3, T_AX_08:92.8, T_AX_09:84.4, T_AX_10:74.3, T_AX_11:61.8, T_AX_12:51.6, T_AX_Ann:72.1, V_01:7.6, V_02:8.1, V_03:8.7, V_04:8.3, V_05:6.9, V_06:6, V_07:5.4, V_08:5.6, V_09:6, V_10:6.3, V_11:7.2, V_12:7.6, V_Ann:6.9, I_01:738, I_02:977, I_03:1299, I_04:1674, I_05:1808, I_06:1991, I_07:2117, I_08:1918, I_09:1522, I_10:1177, I_11:811, I_12:674, I_Ann:1392, P_A_Ann:14.46};
//				var site9 = {metName:"Little Rock, AR", T_AN_01:33.3, T_AN_02:36.3, T_AN_03:43.8, T_AN_04:52.4, T_AN_05:61.6, T_AN_06:69.7, T_AN_07:73.2, T_AN_08:72.2, T_AN_09:64.4, T_AN_10:53.1, T_AN_11:42.9, T_AN_12:35, T_AN_Ann:53.2, T_AX_01:50.6, T_AX_02:55.5, T_AX_03:63.7, T_AX_04:73.1, T_AX_05:80.8, T_AX_06:88.1, T_AX_07:91.8, T_AX_08:92.2, T_AX_09:84.9, T_AX_10:74.4, T_AX_11:62.1, T_AX_12:52.3, T_AX_Ann:72.5, V_01:7.8, V_02:7.8, V_03:8.7, V_04:8.5, V_05:7.2, V_06:6.3, V_07:6, V_08:5.6, V_09:6.3, V_10:6, V_11:7.2, V_12:7.6, V_Ann:7.2, I_01:717, I_02:970, I_03:1302, I_04:1686, I_05:1820, I_06:2008, I_07:2009, I_08:1879, I_09:1534, I_10:1171, I_11:814, I_12:656, I_Ann:1380, P_A_Ann:14.56};
//				var site10 = {metName:"Arcata, CA", T_AN_01:40.7, T_AN_02:41.4, T_AN_03:41.1, T_AN_04:42.4, T_AN_05:46, T_AN_06:48.4, T_AN_07:51.4, T_AN_08:51.4, T_AN_09:48.3, T_AN_10:45.1, T_AN_11:42.5, T_AN_12:40.2, T_AN_Ann:44.9, T_AX_01:55.1, T_AX_02:55.6, T_AX_03:55.5, T_AX_04:56.2, T_AX_05:58.9, T_AX_06:61.1, T_AX_07:62.2, T_AX_08:63.2, T_AX_09:63.2, T_AX_10:61.9, T_AX_11:57.5, T_AX_12:54.9, T_AX_Ann:58.8, V_01:6.7, V_02:6.7, V_03:7.2, V_04:7.2, V_05:7.2, V_06:7.2, V_07:6, V_08:5.6, V_09:5.1, V_10:5.4, V_11:5.8, V_12:6.9, V_Ann:6.3, I_01:527, I_02:730, I_03:1139, I_04:1516, I_05:1822, I_06:1946, I_07:1809, I_08:1573, I_09:1327, I_10:971, I_11:613, I_12:460, I_Ann:1203, P_A_Ann:14.59};
//				var site11 = {metName:"Bakersfield, CA", T_AN_01:40.3, T_AN_02:43.7, T_AN_03:46.9, T_AN_04:49.8, T_AN_05:57.8, T_AN_06:64.2, T_AN_07:70.7, T_AN_08:69.3, T_AN_09:64.5, T_AN_10:55.3, T_AN_11:45.3, T_AN_12:39.7, T_AN_Ann:54, T_AX_01:56.9, T_AX_02:62.9, T_AX_03:69, T_AX_04:74.1, T_AX_05:83.3, T_AX_06:90.6, T_AX_07:96.9, T_AX_08:95.7, T_AX_09:90.4, T_AX_10:79, T_AX_11:65.7, T_AX_12:57.3, T_AX_Ann:76.8, V_01:4.9, V_02:5.6, V_03:6, V_04:6.9, V_05:7.4, V_06:7.6, V_07:6.9, V_08:6.7, V_09:6, V_10:5.4, V_11:4.7, V_12:4.9, V_Ann:6, I_01:717, I_02:1031, I_03:1543, I_04:2010, I_05:2358, I_06:2570, I_07:2500, I_08:2293, I_09:1911, I_10:1411, I_11:952, I_12:696, I_Ann:1666, P_A_Ann:14.43};
//				var site12 = {metName:"Bishop, CA", T_AN_01:24, T_AN_02:27.4, T_AN_03:32.1, T_AN_04:36.8, T_AN_05:45.1, T_AN_06:51.9, T_AN_07:57.7, T_AN_08:54.8, T_AN_09:47.6, T_AN_10:38.5, T_AN_11:28.3, T_AN_12:22.9, T_AN_Ann:38.9, T_AX_01:53, T_AX_02:56.2, T_AX_03:64.5, T_AX_04:70.5, T_AX_05:80.8, T_AX_06:90.4, T_AX_07:97.5, T_AX_08:95.5, T_AX_09:87.6, T_AX_10:75.2, T_AX_11:61.9, T_AX_12:52.5, T_AX_Ann:73.8, V_01:7.2, V_02:8.1, V_03:9.4, V_04:10.1, V_05:9.2, V_06:8.3, V_07:7.8, V_08:8.1, V_09:7.6, V_10:7.8, V_11:7.4, V_12:6.9, V_Ann:8.1, I_01:882, I_02:1186, I_03:1683, I_04:2080, I_05:2378, I_06:2564, I_07:2487, I_08:2278, I_09:1925, I_10:1457, I_11:1046, I_12:824, I_Ann:1732, P_A_Ann:12.68};
//				var site13 = {metName:"Daggett, CA", T_AN_01:37.5, T_AN_02:41.2, T_AN_03:46.2, T_AN_04:51.3, T_AN_05:60.6, T_AN_06:68, T_AN_07:74.7, T_AN_08:73.6, T_AN_09:66.5, T_AN_10:55.3, T_AN_11:43.2, T_AN_12:36.1, T_AN_Ann:54.5, T_AX_01:60.8, T_AX_02:64.4, T_AX_03:71.7, T_AX_04:78.3, T_AX_05:88.9, T_AX_06:98, T_AX_07:104.6, T_AX_08:103.1, T_AX_09:95.7, T_AX_10:82.5, T_AX_11:69.1, T_AX_12:59.6, T_AX_Ann:81.4, V_01:8.1, V_02:9.4, V_03:11.4, V_04:13.9, V_05:14.1, V_06:13.6, V_07:11.6, V_08:11, V_09:10.1, V_10:9.6, V_11:8.5, V_12:7.6, V_Ann:10.7, I_01:992, I_02:1270, I_03:1756, I_04:2197, I_05:2492, I_06:2656, I_07:2470, I_08:2259, I_09:1972, I_10:1544, I_11:1142, I_12:921, I_Ann:1806, P_A_Ann:13.71};
//				var site14 = {metName:"Fresno, CA", T_AN_01:39.9, T_AN_02:43.1, T_AN_03:46.5, T_AN_04:49.6, T_AN_05:56.9, T_AN_06:62.4, T_AN_07:68.3, T_AN_08:66.7, T_AN_09:62.2, T_AN_10:53.7, T_AN_11:44.6, T_AN_12:39.4, T_AN_Ann:52.8, T_AX_01:55, T_AX_02:61.1, T_AX_03:67.4, T_AX_04:73.1, T_AX_05:83.2, T_AX_06:90.9, T_AX_07:97.7, T_AX_08:96.3, T_AX_09:90.7, T_AX_10:78.5, T_AX_11:64.7, T_AX_12:55.1, T_AX_Ann:76.1, V_01:4.3, V_02:5.1, V_03:5.8, V_04:7.4, V_05:8.3, V_06:8.5, V_07:7.6, V_08:6.9, V_09:6, V_10:4.7, V_11:4, V_12:4.3, V_Ann:6, I_01:638, I_02:973, I_03:1519, I_04:2002, I_05:2368, I_06:2573, I_07:2534, I_08:2290, I_09:1895, I_10:1383, I_11:889, I_12:602, I_Ann:1639, P_A_Ann:14.52};
//				var site15 = {metName:"Long Beach, CA", T_AN_01:47.6, T_AN_02:49, T_AN_03:51.5, T_AN_04:53.6, T_AN_05:58.2, T_AN_06:61.4, T_AN_07:64.7, T_AN_08:65.3, T_AN_09:63.5, T_AN_10:58.8, T_AN_11:51.8, T_AN_12:46.8, T_AN_Ann:56, T_AX_01:66.5, T_AX_02:65.9, T_AX_03:67.7, T_AX_04:70.4, T_AX_05:72.6, T_AX_06:75.7, T_AX_07:80.3, T_AX_08:82.5, T_AX_09:81, T_AX_10:76, T_AX_11:71.4, T_AX_12:66, T_AX_Ann:73, V_01:4.5, V_02:5.1, V_03:5.6, V_04:6.3, V_05:6, V_06:6, V_07:6, V_08:5.8, V_09:5.4, V_10:4.7, V_11:4.3, V_12:4.3, V_Ann:5.4, I_01:894, I_02:1109, I_03:1548, I_04:1958, I_05:2066, I_06:2207, I_07:2264, I_08:2156, I_09:1767, I_10:1327, I_11:1039, I_12:843, I_Ann:1598, P_A_Ann:14.68};
//				var site16 = {metName:"Los Angeles AP, CA", T_AN_01:50, T_AN_02:50.9, T_AN_03:52.4, T_AN_04:54.1, T_AN_05:57.8, T_AN_06:61, T_AN_07:64, T_AN_08:64.6, T_AN_09:63.4, T_AN_10:59.6, T_AN_11:54, T_AN_12:49.7, T_AN_Ann:56.8, T_AX_01:64.9, T_AX_02:64.4, T_AX_03:64.7, T_AX_04:66.5, T_AX_05:68.5, T_AX_06:71, T_AX_07:73.9, T_AX_08:75.3, T_AX_09:74.5, T_AX_10:72.3, T_AX_11:69.3, T_AX_12:64.8, T_AX_Ann:69.2, V_01:6.5, V_02:7.6, V_03:8.1, V_04:8.7, V_05:8.1, V_06:8.1, V_07:8.1, V_08:7.6, V_09:7.4, V_10:6.7, V_11:6.3, V_12:6.5, V_Ann:7.4, I_01:895, I_02:1115, I_03:1537, I_04:1988, I_05:2045, I_06:2140, I_07:2117, I_08:2037, I_09:1662, I_10:1298, I_11:1036, I_12:834, I_Ann:1559, P_A_Ann:14.63};
//				var site17 = {metName:"Redding, CA", T_AN_01:38.2, T_AN_02:40.6, T_AN_03:43.7, T_AN_04:46.6, T_AN_05:55, T_AN_06:62, T_AN_07:67, T_AN_08:63.8, T_AN_09:58.7, T_AN_10:50.4, T_AN_11:41.8, T_AN_12:37.6, T_AN_Ann:50.4, T_AX_01:55, T_AX_02:58.3, T_AX_03:64.9, T_AX_04:69.6, T_AX_05:80.4, T_AX_06:89.3, T_AX_07:98.1, T_AX_08:96.2, T_AX_09:90.4, T_AX_10:77.1, T_AX_11:62.5, T_AX_12:54, T_AX_Ann:74.7, V_01:5.8, V_02:6.5, V_03:6.7, V_04:6.7, V_05:6.7, V_06:6.9, V_07:6, V_08:5.6, V_09:5.4, V_10:5.6, V_11:4.9, V_12:6, V_Ann:6, I_01:577, I_02:856, I_03:1354, I_04:1772, I_05:2198, I_06:2464, I_07:2526, I_08:2246, I_09:1786, I_10:1209, I_11:721, I_12:497, I_Ann:1517, P_A_Ann:14.43};
//				var site18 = {metName:"Sacramento, CA", T_AN_01:40, T_AN_02:42.7, T_AN_03:44.7, T_AN_04:46.8, T_AN_05:52.1, T_AN_06:56.5, T_AN_07:59.1, T_AN_08:58.9, T_AN_09:56.4, T_AN_10:50.7, T_AN_11:43.3, T_AN_12:39.5, T_AN_Ann:49.2, T_AX_01:54.3, T_AX_02:59.6, T_AX_03:65.4, T_AX_04:70.3, T_AX_05:79.3, T_AX_06:86.1, T_AX_07:91.4, T_AX_08:90.9, T_AX_09:87.4, T_AX_10:77.1, T_AX_11:63.8, T_AX_12:54.4, T_AX_Ann:73.3, V_01:5.6, V_02:6, V_03:6.7, V_04:7.4, V_05:7.6, V_06:8.1, V_07:7.6, V_08:6.9, V_09:5.8, V_10:5.4, V_11:4.9, V_12:5.8, V_Ann:6.5, I_01:563, I_02:877, I_03:1409, I_04:1891, I_05:2249, I_06:2510, I_07:2514, I_08:2239, I_09:1823, I_10:1269, I_11:790, I_12:518, I_Ann:1555, P_A_Ann:14.68};
//				var site19 = {metName:"San Diego, CA", T_AN_01:50.1, T_AN_02:51.6, T_AN_03:53.9, T_AN_04:56.2, T_AN_05:59.8, T_AN_06:62.3, T_AN_07:65.4, T_AN_08:66.9, T_AN_09:65.4, T_AN_10:61, T_AN_11:54.4, T_AN_12:49.5, T_AN_Ann:58, T_AX_01:64.5, T_AX_02:64.3, T_AX_03:65, T_AX_04:66.6, T_AX_05:67.9, T_AX_06:70.1, T_AX_07:73.4, T_AX_08:75.6, T_AX_09:75, T_AX_10:72, T_AX_11:68.6, T_AX_12:64.2, T_AX_Ann:68.9, V_01:5.4, V_02:6.3, V_03:6.7, V_04:7.4, V_05:7.2, V_06:7.4, V_07:7.2, V_08:6.9, V_09:6.7, V_10:5.8, V_11:4.9, V_12:4.9, V_Ann:6.5, I_01:990, I_02:1206, I_03:1604, I_04:1990, I_05:1993, I_06:2135, I_07:2127, I_08:2087, I_09:1774, I_10:1367, I_11:1107, I_12:922, I_Ann:1608, P_A_Ann:14.69};
//				var site20 = {metName:"San Francisco AP, CA", T_AN_01:45.2, T_AN_02:47.2, T_AN_03:48.3, T_AN_04:49.4, T_AN_05:52.2, T_AN_06:54, T_AN_07:55.8, T_AN_08:56.6, T_AN_09:56.2, T_AN_10:53.9, T_AN_11:49.4, T_AN_12:45.6, T_AN_Ann:51.1, T_AX_01:55.9, T_AX_02:58.6, T_AX_03:61.4, T_AX_04:63.3, T_AX_05:66.3, T_AX_06:69.2, T_AX_07:70.6, T_AX_08:71.6, T_AX_09:72.5, T_AX_10:69.4, T_AX_11:62.3, T_AX_12:56.2, T_AX_Ann:64.8, V_01:6.9, V_02:8.3, V_03:10.3, V_04:12.5, V_05:13.4, V_06:14.1, V_07:12.8, V_08:12.3, V_09:10.7, V_10:9.2, V_11:7.4, V_12:7.4, V_Ann:10.5, I_01:666, I_02:896, I_03:1353, I_04:1813, I_05:1981, I_06:2123, I_07:2023, I_08:1747, I_09:1488, I_10:1124, I_11:798, I_12:619, I_Ann:1386, P_A_Ann:14.69};
//				var site21 = {metName:"Santa Barbara, CA", T_AN_01:41.9, T_AN_02:44.6, T_AN_03:46.8, T_AN_04:48.2, T_AN_05:52.1, T_AN_06:54.8, T_AN_07:57.9, T_AN_08:58, T_AN_09:56.3, T_AN_10:51.7, T_AN_11:45.4, T_AN_12:41.1, T_AN_Ann:49.9, T_AX_01:63.7, T_AX_02:63.8, T_AX_03:64.8, T_AX_04:67.2, T_AX_05:69, T_AX_06:70.7, T_AX_07:73.2, T_AX_08:74.2, T_AX_09:73.9, T_AX_10:71.9, T_AX_11:68.7, T_AX_12:63.7, T_AX_Ann:68.8, V_01:4.5, V_02:5.6, V_03:5.8, V_04:6.7, V_05:6.5, V_06:6, V_07:6, V_08:5.6, V_09:5.1, V_10:4.7, V_11:4.3, V_12:4.3, V_Ann:5.4, I_01:907, I_02:1116, I_03:1543, I_04:1968, I_05:2115, I_06:2184, I_07:2153, I_08:2107, I_09:1749, I_10:1346, I_11:1051, I_12:839, I_Ann:1590, P_A_Ann:14.69};
//				var site22 = {metName:"Santa Maria, CA", T_AN_01:41.1, T_AN_02:43, T_AN_03:44.2, T_AN_04:44.6, T_AN_05:48.2, T_AN_06:50.9, T_AN_07:54, T_AN_08:54.3, T_AN_09:53, T_AN_10:49.3, T_AN_11:44, T_AN_12:40.2, T_AN_Ann:47.2, T_AX_01:63.2, T_AX_02:63.6, T_AX_03:64.9, T_AX_04:66.5, T_AX_05:68.3, T_AX_06:69.9, T_AX_07:71.7, T_AX_08:72.4, T_AX_09:73.3, T_AX_10:72.2, T_AX_11:68.5, T_AX_12:63.1, T_AX_Ann:68.1, V_01:6, V_02:6.7, V_03:7.6, V_04:8.3, V_05:8.3, V_06:7.8, V_07:6.5, V_08:6.3, V_09:5.8, V_10:6, V_11:6, V_12:6, V_Ann:6.7, I_01:892, I_02:1109, I_03:1563, I_04:2010, I_05:2253, I_06:2358, I_07:2261, I_08:2111, I_09:1784, I_10:1386, I_11:1036, I_12:828, I_Ann:1633, P_A_Ann:14.56};
//				var site23 = {metName:"Stockton, CA", T_AN_01:39.5, T_AN_02:42.2, T_AN_03:44.3, T_AN_04:47, T_AN_05:52.8, T_AN_06:57.6, T_AN_07:60.9, T_AN_08:60.4, T_AN_09:57.5, T_AN_10:50.9, T_AN_11:43.1, T_AN_12:38.9, T_AN_Ann:49.6, T_AX_01:54.5, T_AX_02:60.4, T_AX_03:66.5, T_AX_04:71.7, T_AX_05:80.6, T_AX_06:87.8, T_AX_07:93.4, T_AX_08:92.3, T_AX_09:88.5, T_AX_10:78, T_AX_11:64.6, T_AX_12:54.7, T_AX_Ann:74.4, V_01:6.7, V_02:7.2, V_03:7.6, V_04:8.9, V_05:9.6, V_06:10.1, V_07:8.9, V_08:8.3, V_09:7.4, V_10:6.5, V_11:5.8, V_12:6.9, V_Ann:7.8, I_01:573, I_02:907, I_03:1445, I_04:1879, I_05:2251, I_06:2525, I_07:2510, I_08:2256, I_09:1844, I_10:1308, I_11:824, I_12:552, I_Ann:1573, P_A_Ann:14.68};
//				var site24 = {metName:"Alamosa, CO", T_AN_01:0.5, T_AN_02:7.4, T_AN_03:18, T_AN_04:25.4, T_AN_05:34.8, T_AN_06:41.4, T_AN_07:47.7, T_AN_08:46.7, T_AN_09:37.4, T_AN_10:25.4, T_AN_11:12.7, T_AN_12:2, T_AN_Ann:24.9, T_AX_01:34.2, T_AX_02:39.7, T_AX_03:50.1, T_AX_04:58.5, T_AX_05:69.1, T_AX_06:78, T_AX_07:81.7, T_AX_08:78.9, T_AX_09:72.6, T_AX_10:61.3, T_AX_11:46.5, T_AX_12:34.9, T_AX_Ann:58.8, V_01:5.1, V_02:6.5, V_03:8.1, V_04:10.1, V_05:9.6, V_06:8.7, V_07:6.7, V_08:6.3, V_09:6.5, V_10:6.5, V_11:5.8, V_12:4.9, V_Ann:7.2, I_01:898, I_02:1191, I_03:1619, I_04:1987, I_05:2266, I_06:2427, I_07:2269, I_08:1992, I_09:1786, I_10:1397, I_11:1023, I_12:798, I_Ann:1638, P_A_Ann:11.2};
//				var site25 = {metName:"Colorado Springs, CO", T_AN_01:18.8, T_AN_02:20.9, T_AN_03:27.1, T_AN_04:34.1, T_AN_05:43.8, T_AN_06:52.2, T_AN_07:57.8, T_AN_08:56.4, T_AN_09:47.9, T_AN_10:36.8, T_AN_11:26, T_AN_12:19.4, T_AN_Ann:36.8, T_AX_01:42.6, T_AX_02:45, T_AX_03:51.9, T_AX_04:58.6, T_AX_05:68.8, T_AX_06:78.1, T_AX_07:84.1, T_AX_08:80.9, T_AX_09:74.2, T_AX_10:62.6, T_AX_11:50.1, T_AX_12:42.5, T_AX_Ann:61.6, V_01:8.7, V_02:9.4, V_03:10.3, V_04:11.6, V_05:10.7, V_06:10.1, V_07:8.9, V_08:8.5, V_09:8.9, V_10:9.4, V_11:8.7, V_12:8.9, V_Ann:9.6, I_01:843, I_02:1093, I_03:1467, I_04:1794, I_05:2012, I_06:2182, I_07:2108, I_08:1884, I_09:1667, I_10:1275, I_11:899, I_12:742, I_Ann:1497, P_A_Ann:11.78};
//				var site26 = {metName:"Denver, CO", T_AN_01:19.2, T_AN_02:21.7, T_AN_03:28.2, T_AN_04:34.8, T_AN_05:44.7, T_AN_06:53.2, T_AN_07:60.4, T_AN_08:58.7, T_AN_09:49.6, T_AN_10:37.7, T_AN_11:26.7, T_AN_12:19.6, T_AN_Ann:37.9, T_AX_01:42.9, T_AX_02:45.7, T_AX_03:53.7, T_AX_04:60.1, T_AX_05:70.6, T_AX_06:80.9, T_AX_07:88, T_AX_08:85.2, T_AX_09:77.3, T_AX_10:64, T_AX_11:51.1, T_AX_12:43, T_AX_Ann:63.5, V_01:9.2, V_02:9.2, V_03:10.3, V_04:11, V_05:10.1, V_06:9.6, V_07:9.2, V_08:8.9, V_09:8.9, V_10:9.2, V_11:8.9, V_12:9.2, V_Ann:9.4, I_01:764, I_02:1052, I_03:1463, I_04:1779, I_05:2049, I_06:2275, I_07:2213, I_08:1941, I_09:1658, I_10:1216, I_11:817, I_12:664, I_Ann:1491, P_A_Ann:12.08};
//				var site27 = {metName:"Grand Junction, CO", T_AN_01:19.3, T_AN_02:25.9, T_AN_03:32.7, T_AN_04:39.5, T_AN_05:48.8, T_AN_06:57.9, T_AN_07:65.2, T_AN_08:62.8, T_AN_09:53.4, T_AN_10:41.3, T_AN_11:28.8, T_AN_12:19.9, T_AN_Ann:41.3, T_AX_01:37.4, T_AX_02:45.3, T_AX_03:56.5, T_AX_04:64.4, T_AX_05:76.2, T_AX_06:86.9, T_AX_07:93.4, T_AX_08:89.3, T_AX_09:79.9, T_AX_10:66, T_AX_11:49.9, T_AX_12:38, T_AX_Ann:65.3, V_01:5.4, V_02:6.5, V_03:7.8, V_04:8.9, V_05:9.2, V_06:9.6, V_07:9.4, V_08:8.9, V_09:8.5, V_10:7.6, V_11:6, V_12:5.4, V_Ann:7.8, I_01:739, I_02:1039, I_03:1522, I_04:1876, I_05:2211, I_06:2434, I_07:2339, I_08:2020, I_09:1721, I_10:1281, I_11:874, I_12:662, I_Ann:1560, P_A_Ann:12.34};
//				var site28 = {metName:"Limon, CO", T_AN_01:12.4, T_AN_02:15.2, T_AN_03:22, T_AN_04:29.2, T_AN_05:39.4, T_AN_06:49.3, T_AN_07:54.8, T_AN_08:53.9, T_AN_09:43.7, T_AN_10:31.6, T_AN_11:19.9, T_AN_12:12.7, T_AN_Ann:32, T_AX_01:41.7, T_AX_02:44.2, T_AX_03:52.7, T_AX_04:59.5, T_AX_05:69.7, T_AX_06:79.6, T_AX_07:86.2, T_AX_08:82.7, T_AX_09:75.8, T_AX_10:63.4, T_AX_11:49.6, T_AX_12:41.8, T_AX_Ann:62.2, V_01:8.7, V_02:9.4, V_03:10.7, V_04:11.9, V_05:11, V_06:10.1, V_07:9.2, V_08:8.7, V_09:8.9, V_10:9.4, V_11:8.9, V_12:8.9, V_Ann:9.6, I_01:797, I_02:1066, I_03:1466, I_04:1773, I_05:2074, I_06:2301, I_07:2267, I_08:2003, I_09:1712, I_10:1264, I_11:860, I_12:693, I_Ann:1523, P_A_Ann:12.02};
//				var site29 = {metName:"Pueblo, CO", T_AN_01:15.3, T_AN_02:18.5, T_AN_03:26.5, T_AN_04:34.8, T_AN_05:45.2, T_AN_06:53.6, T_AN_07:59.6, T_AN_08:58.3, T_AN_09:48.3, T_AN_10:35.1, T_AN_11:23.4, T_AN_12:15.9, T_AN_Ann:36.2, T_AX_01:47.2, T_AX_02:50.8, T_AX_03:58.9, T_AX_04:66.1, T_AX_05:76.7, T_AX_06:86.3, T_AX_07:92.3, T_AX_08:88.8, T_AX_09:81.4, T_AX_10:68.9, T_AX_11:55.1, T_AX_12:46.8, T_AX_Ann:68.3, V_01:6.7, V_02:7.4, V_03:8.5, V_04:9.8, V_05:8.9, V_06:8.7, V_07:8.1, V_08:7.4, V_09:7.4, V_10:7.4, V_11:6.5, V_12:6.5, V_Ann:7.8, I_01:862, I_02:1144, I_03:1557, I_04:1897, I_05:2197, I_06:2399, I_07:2356, I_08:2093, I_09:1783, I_10:1344, I_11:950, I_12:779, I_Ann:1613, P_A_Ann:12.4};
//				var site30 = {metName:"Bridgeport, CT", T_AN_01:24.4, T_AN_02:25.9, T_AN_03:32.1, T_AN_04:41.8, T_AN_05:51.1, T_AN_06:61.4, T_AN_07:67, T_AN_08:66.6, T_AN_09:59.2, T_AN_10:47.4, T_AN_11:38.9, T_AN_12:29.5, T_AN_Ann:45.4, T_AX_01:37.2, T_AX_02:39.1, T_AX_03:46.3, T_AX_04:57.1, T_AX_05:66.8, T_AX_06:76.4, T_AX_07:81.4, T_AX_08:80.4, T_AX_09:73.7, T_AX_10:62.7, T_AX_11:52.4, T_AX_12:42.1, T_AX_Ann:59.6, V_01:9.8, V_02:10.1, V_03:10.3, V_04:9.6, V_05:8.9, V_06:7.8, V_07:7.6, V_08:7.8, V_09:8.7, V_10:9.2, V_11:9.4, V_12:9.8, V_Ann:9.2, I_01:560, I_02:847, I_03:1156, I_04:1490, I_05:1750, I_06:1862, I_07:1904, I_08:1685, I_09:1320, I_10:948, I_11:621, I_12:501, I_Ann:1220, P_A_Ann:14.69};
//				var site31 = {metName:"Hartford, CT", T_AN_01:19.4, T_AN_02:21.4, T_AN_03:28.8, T_AN_04:39.2, T_AN_05:48.3, T_AN_06:58.4, T_AN_07:63.3, T_AN_08:61.9, T_AN_09:53.9, T_AN_10:42.2, T_AN_11:34.1, T_AN_12:24.6, T_AN_Ann:41.3, T_AX_01:34.4, T_AX_02:37.5, T_AX_03:46.7, T_AX_04:60.2, T_AX_05:70.4, T_AX_06:79.1, T_AX_07:83.6, T_AX_08:82.2, T_AX_09:74.4, T_AX_10:62.3, T_AX_11:50.8, T_AX_12:39.5, T_AX_Ann:60.1, V_01:8.5, V_02:8.9, V_03:9.4, V_04:8.9, V_05:8.1, V_06:6.9, V_07:6.5, V_08:6.3, V_09:6.7, V_10:7.4, V_11:7.6, V_12:8.3, V_Ann:7.8, I_01:560, I_02:814, I_03:1133, I_04:1453, I_05:1700, I_06:1797, I_07:1833, I_08:1622, I_09:1289, I_10:905, I_11:582, I_12:482, I_Ann:1181, P_A_Ann:14.61};
//				var site32 = {metName:"Wilmington, DE", T_AN_01:26.3, T_AN_02:27.2, T_AN_03:34.3, T_AN_04:43.8, T_AN_05:53, T_AN_06:63.2, T_AN_07:67.9, T_AN_08:66.9, T_AN_09:58.9, T_AN_10:46.8, T_AN_11:38.4, T_AN_12:30.1, T_AN_Ann:46.4, T_AX_01:40.5, T_AX_02:42.7, T_AX_03:51.6, T_AX_04:63.1, T_AX_05:72.1, T_AX_06:80.9, T_AX_07:85.1, T_AX_08:83.9, T_AX_09:76.8, T_AX_10:65.5, T_AX_11:55, T_AX_12:44.7, T_AX_Ann:63.5, V_01:9.4, V_02:9.8, V_03:10.1, V_04:9.6, V_05:8.3, V_06:7.6, V_07:7.4, V_08:6.9, V_09:7.8, V_10:7.6, V_11:8.5, V_12:8.9, V_Ann:8.5, I_01:629, I_02:911, I_03:1185, I_04:1528, I_05:1786, I_06:1909, I_07:1916, I_08:1680, I_09:1366, I_10:1016, I_11:678, I_12:556, I_Ann:1264, P_A_Ann:14.65};
//				var site33 = {metName:"Daytona Beach, FL", T_AN_01:49, T_AN_02:50.6, T_AN_03:55, T_AN_04:59.8, T_AN_05:66.4, T_AN_06:72.1, T_AN_07:73.7, T_AN_08:74, T_AN_09:73.2, T_AN_10:66.9, T_AN_11:57.7, T_AN_12:52.3, T_AN_Ann:62.5, T_AX_01:68.4, T_AX_02:69.9, T_AX_03:74.2, T_AX_04:78.8, T_AX_05:84.5, T_AX_06:87.7, T_AX_07:89.5, T_AX_08:88.8, T_AX_09:86.3, T_AX_10:81.5, T_AX_11:75.1, T_AX_12:70.2, T_AX_Ann:79.6, V_01:7.2, V_02:7.6, V_03:8.3, V_04:7.8, V_05:7.4, V_06:6.3, V_07:5.6, V_08:5.6, V_09:6.7, V_10:7.4, V_11:6.9, V_12:6.7, V_Ann:6.9, I_01:1018, I_02:1215, I_03:1579, I_04:1931, I_05:2049, I_06:1893, I_07:1911, I_08:1767, I_09:1518, I_10:1296, I_11:1063, I_12:916, I_Ann:1513, P_A_Ann:14.68};
//				var site34 = {metName:"Fort Myers, FL", T_AN_01:54.4, T_AN_02:56.1, T_AN_03:59.8, T_AN_04:64, T_AN_05:69.3, T_AN_06:73.8, T_AN_07:75, T_AN_08:75.4, T_AN_09:74.7, T_AN_10:69.4, T_AN_11:61.8, T_AN_12:56.7, T_AN_Ann:65.9, T_AX_01:74.2, T_AX_02:76.2, T_AX_03:79.6, T_AX_04:83.5, T_AX_05:88.5, T_AX_06:90.3, T_AX_07:90.7, T_AX_08:90.8, T_AX_09:89.3, T_AX_10:85.8, T_AX_11:80.2, T_AX_12:75.5, T_AX_Ann:83.7, V_01:7.4, V_02:7.8, V_03:8.3, V_04:8.1, V_05:7.2, V_06:6.3, V_07:5.4, V_08:5.6, V_09:6.3, V_10:7.2, V_11:7.4, V_12:7.2, V_Ann:6.9, I_01:1150, I_02:1426, I_03:1718, I_04:1993, I_05:2075, I_06:1880, I_07:1805, I_08:1740, I_09:1533, I_10:1415, I_11:1205, I_12:1054, I_Ann:1583, P_A_Ann:14.68};
//				var site35 = {metName:"Gainesville, FL", T_AN_01:43.4, T_AN_02:45.5, T_AN_03:50.2, T_AN_04:55.6, T_AN_05:63.2, T_AN_06:69.8, T_AN_07:72.1, T_AN_08:72.1, T_AN_09:69.4, T_AN_10:61.1, T_AN_11:51.4, T_AN_12:45.5, T_AN_Ann:58.3, T_AX_01:66.3, T_AX_02:69, T_AX_03:74.4, T_AX_04:80, T_AX_05:86.4, T_AX_06:89, T_AX_07:90.2, T_AX_08:89.4, T_AX_09:86.6, T_AX_10:80.7, T_AX_11:73.6, T_AX_12:67.6, T_AX_Ann:79.4, V_01:6.5, V_02:6.9, V_03:7.4, V_04:7.2, V_05:6.7, V_06:5.6, V_07:5.1, V_08:4.9, V_09:5.8, V_10:5.8, V_11:6, V_12:5.8, V_Ann:6.3, I_01:970, I_02:1213, I_03:1549, I_04:1890, I_05:2019, I_06:1865, I_07:1863, I_08:1704, I_09:1484, I_10:1276, I_11:1063, I_12:887, I_Ann:1482, P_A_Ann:14.62};
//				var site36 = {metName:"Jacksonville, FL", T_AN_01:42.9, T_AN_02:45.1, T_AN_03:50.1, T_AN_04:55.5, T_AN_05:63.7, T_AN_06:70.5, T_AN_07:72.9, T_AN_08:73.1, T_AN_09:70.1, T_AN_10:61, T_AN_11:50.8, T_AN_12:44.4, T_AN_Ann:58.3, T_AX_01:64.5, T_AX_02:67.2, T_AX_03:72.7, T_AX_04:78.3, T_AX_05:84.8, T_AX_06:88.7, T_AX_07:91, T_AX_08:89.6, T_AX_09:85.8, T_AX_10:79.6, T_AX_11:72.2, T_AX_12:65.4, T_AX_Ann:78.3, V_01:7.2, V_02:7.4, V_03:8.1, V_04:7.6, V_05:7.2, V_06:6.5, V_07:5.8, V_08:5.8, V_09:6.5, V_10:6.3, V_11:6.3, V_12:6.5, V_Ann:6.7, I_01:937, I_02:1186, I_03:1522, I_04:1890, I_05:2035, I_06:1911, I_07:1948, I_08:1756, I_09:1466, I_10:1237, I_11:1021, I_12:846, I_Ann:1480, P_A_Ann:14.68};
//				var site37 = {metName:"Key West, FL", T_AN_01:64.9, T_AN_02:66.2, T_AN_03:68.7, T_AN_04:72.2, T_AN_05:76.2, T_AN_06:79.4, T_AN_07:80.6, T_AN_08:80.5, T_AN_09:79.2, T_AN_10:76.5, T_AN_11:71.8, T_AN_12:67.1, T_AN_Ann:73.6, T_AX_01:74.4, T_AX_02:75.7, T_AX_03:78.2, T_AX_04:81, T_AX_05:84.6, T_AX_06:87.7, T_AX_07:89, T_AX_08:89.4, T_AX_09:87.7, T_AX_10:84.5, T_AX_11:79.6, T_AX_12:75.7, T_AX_Ann:82.3, V_01:11, V_02:10.5, V_03:11, V_04:11.2, V_05:9.8, V_06:8.7, V_07:8.5, V_08:8.3, V_09:8.7, V_10:10.1, V_11:11.2, V_12:10.5, V_Ann:10.1, I_01:1206, I_02:1462, I_03:1805, I_04:2069, I_05:2131, I_06:2035, I_07:2041, I_08:1943, I_09:1667, I_10:1465, I_11:1240, I_12:1098, I_Ann:1680, P_A_Ann:14.69};
//				var site38 = {metName:"Miami, FL", T_AN_01:61.2, T_AN_02:62.6, T_AN_03:65.8, T_AN_04:69.4, T_AN_05:73.9, T_AN_06:76.6, T_AN_07:78.1, T_AN_08:78.2, T_AN_09:77.3, T_AN_10:74.3, T_AN_11:68.4, T_AN_12:63.6, T_AN_Ann:70.8, T_AX_01:75.5, T_AX_02:77, T_AX_03:79.6, T_AX_04:82.4, T_AX_05:86.2, T_AX_06:88.4, T_AX_07:89.9, T_AX_08:90, T_AX_09:88.2, T_AX_10:85.1, T_AX_11:80.5, T_AX_12:76.9, T_AX_Ann:83.3, V_01:8.5, V_02:8.5, V_03:9.6, V_04:9.8, V_05:8.7, V_06:7.4, V_07:7.2, V_08:6.9, V_09:7.4, V_10:8.3, V_11:8.5, V_12:8.1, V_Ann:8.3, I_01:1118, I_02:1346, I_03:1625, I_04:1875, I_05:1938, I_06:1737, I_07:1813, I_08:1701, I_09:1456, I_10:1309, I_11:1113, I_12:1015, I_Ann:1504, P_A_Ann:14.68};
//				var site39 = {metName:"Orlando, FL", T_AN_01:50.5, T_AN_02:52.5, T_AN_03:56.5, T_AN_04:61, T_AN_05:67.3, T_AN_06:72.4, T_AN_07:74, T_AN_08:74.4, T_AN_09:73.2, T_AN_10:66.8, T_AN_11:58.7, T_AN_12:52.9, T_AN_Ann:63.4, T_AX_01:70.7, T_AX_02:72.8, T_AX_03:77.2, T_AX_04:81.7, T_AX_05:87.2, T_AX_06:89.5, T_AX_07:90.8, T_AX_08:90.5, T_AX_09:88.3, T_AX_10:83.4, T_AX_11:77, T_AX_12:71.8, T_AX_Ann:81.8, V_01:8.3, V_02:8.7, V_03:9.2, V_04:8.7, V_05:8.1, V_06:6.9, V_07:6.3, V_08:6.5, V_09:7.2, V_10:7.8, V_11:8.1, V_12:7.8, V_Ann:7.8, I_01:1043, I_02:1257, I_03:1588, I_04:1904, I_05:2021, I_06:1849, I_07:1854, I_08:1726, I_09:1506, I_10:1328, I_11:1096, I_12:944, I_Ann:1510, P_A_Ann:14.65};
//				var site40 = {metName:"Pensacola, FL", T_AN_01:43.5, T_AN_02:46, T_AN_03:52, T_AN_04:58.6, T_AN_05:67, T_AN_06:73.3, T_AN_07:75.2, T_AN_08:74.8, T_AN_09:71.1, T_AN_10:61.1, T_AN_11:51, T_AN_12:44.6, T_AN_Ann:59.9, T_AX_01:61, T_AX_02:63.9, T_AX_03:69.8, T_AX_04:75.6, T_AX_05:83.4, T_AX_06:88.4, T_AX_07:89.9, T_AX_08:89.4, T_AX_09:86.6, T_AX_10:79, T_AX_11:70.1, T_AX_12:62.6, T_AX_Ann:76.6, V_01:8.7, V_02:8.7, V_03:9.2, V_04:9.2, V_05:8.3, V_06:7.2, V_07:6.5, V_08:6.3, V_09:7.2, V_10:7.4, V_11:7.8, V_12:8.1, V_Ann:7.8, I_01:890, I_02:1144, I_03:1504, I_04:1813, I_05:2038, I_06:2019, I_07:1911, I_08:1783, I_09:1594, I_10:1327, I_11:1040, I_12:830, I_Ann:1491, P_A_Ann:14.63};
//				var site41 = {metName:"Tallahassee, FL", T_AN_01:40.5, T_AN_02:42.4, T_AN_03:47.9, T_AN_04:53.7, T_AN_05:62.8, T_AN_06:70.3, T_AN_07:72.8, T_AN_08:72.8, T_AN_09:69.1, T_AN_10:58.2, T_AN_11:47.6, T_AN_12:41.5, T_AN_Ann:56.6, T_AX_01:63.6, T_AX_02:66.8, T_AX_03:73.3, T_AX_04:79.4, T_AX_05:86.7, T_AX_06:90.1, T_AX_07:91.6, T_AX_08:90.9, T_AX_09:87.9, T_AX_10:80.9, T_AX_11:72, T_AX_12:64.7, T_AX_Ann:79, V_01:5.8, V_02:6.3, V_03:6.5, V_04:6.3, V_05:6, V_06:5.1, V_07:4.5, V_08:4.7, V_09:5.6, V_10:5.4, V_11:5.4, V_12:5.4, V_Ann:5.6, I_01:933, I_02:1195, I_03:1553, I_04:1904, I_05:2031, I_06:1925, I_07:1866, I_08:1764, I_09:1565, I_10:1327, I_11:1070, I_12:872, I_Ann:1500, P_A_Ann:14.65};
//				var site42 = {metName:"Tampa, FL", T_AN_01:52.3, T_AN_02:54.1, T_AN_03:58.5, T_AN_04:63.5, T_AN_05:70.2, T_AN_06:74.8, T_AN_07:76.2, T_AN_08:76.2, T_AN_09:74.6, T_AN_10:68.2, T_AN_11:59.9, T_AN_12:54.3, T_AN_Ann:65.2, T_AX_01:69.8, T_AX_02:71.6, T_AX_03:75.9, T_AX_04:80.8, T_AX_05:86.7, T_AX_06:89.1, T_AX_07:89.5, T_AX_08:89.6, T_AX_09:88.4, T_AX_10:83.8, T_AX_11:77.1, T_AX_12:71.4, T_AX_Ann:81.2, V_01:7.2, V_02:7.4, V_03:8.1, V_04:7.8, V_05:7.2, V_06:6.5, V_07:5.6, V_08:5.6, V_09:6.3, V_10:6.7, V_11:6.9, V_12:6.7, V_Ann:6.7, I_01:1073, I_02:1294, I_03:1656, I_04:1991, I_05:2124, I_06:1962, I_07:1851, I_08:1732, I_09:1561, I_10:1394, I_11:1158, I_12:990, I_Ann:1566, P_A_Ann:14.68};
//				var site43 = {metName:"Vero Beach, FL", T_AN_01:52.7, T_AN_02:54.2, T_AN_03:58.2, T_AN_04:62.3, T_AN_05:68.5, T_AN_06:72.6, T_AN_07:73.9, T_AN_08:73.9, T_AN_09:73.9, T_AN_10:69.6, T_AN_11:62, T_AN_12:56.4, T_AN_Ann:64.9, T_AX_01:72.3, T_AX_02:73.9, T_AX_03:77.1, T_AX_04:80.2, T_AX_05:84.6, T_AX_06:87.9, T_AX_07:89.4, T_AX_08:89.3, T_AX_09:87.5, T_AX_10:83.7, T_AX_11:78.3, T_AX_12:74.1, T_AX_Ann:81.5, V_01:8.5, V_02:8.7, V_03:9.6, V_04:9.6, V_05:8.9, V_06:7.6, V_07:6.7, V_08:6.7, V_09:7.4, V_10:8.5, V_11:8.5, V_12:8.1, V_Ann:8.3, I_01:1052, I_02:1300, I_03:1593, I_04:1906, I_05:2000, I_06:1848, I_07:1898, I_08:1752, I_09:1516, I_10:1318, I_11:1083, I_12:949, I_Ann:1518, P_A_Ann:14.68};
//				var site44 = {metName:"West Palm Beach, FL", T_AN_01:58.1, T_AN_02:59.4, T_AN_03:63.1, T_AN_04:67.1, T_AN_05:72, T_AN_06:75.1, T_AN_07:76.4, T_AN_08:76.6, T_AN_09:76, T_AN_10:72.6, T_AN_11:65.8, T_AN_12:60.6, T_AN_Ann:68.6, T_AX_01:74, T_AX_02:75.6, T_AX_03:78.4, T_AX_04:81.2, T_AX_05:85.3, T_AX_06:87.8, T_AX_07:89.2, T_AX_08:89.3, T_AX_09:87.6, T_AX_10:84.4, T_AX_11:79.4, T_AX_12:75.5, T_AX_Ann:82.3, V_01:9.8, V_02:9.8, V_03:11, V_04:10.7, V_05:9.8, V_06:7.8, V_07:7.4, V_08:7.4, V_09:8.3, V_10:9.4, V_11:9.8, V_12:9.4, V_Ann:9.2, I_01:1105, I_02:1342, I_03:1635, I_04:1912, I_05:1999, I_06:1852, I_07:1936, I_08:1789, I_09:1555, I_10:1352, I_11:1113, I_12:998, I_Ann:1549, P_A_Ann:14.68};
//				var site45 = {metName:"Athens, GA", T_AN_01:34.4, T_AN_02:36.8, T_AN_03:43.1, T_AN_04:50.1, T_AN_05:58.9, T_AN_06:66.7, T_AN_07:70.2, T_AN_08:69.6, T_AN_09:63.3, T_AN_10:52, T_AN_11:42.4, T_AN_12:35.5, T_AN_Ann:51.9, T_AX_01:53.2, T_AX_02:56.8, T_AX_03:64.8, T_AX_04:72.9, T_AX_05:80.2, T_AX_06:86.7, T_AX_07:89.8, T_AX_08:88.6, T_AX_09:82.7, T_AX_10:73.1, T_AX_11:63.5, T_AX_12:54.5, T_AX_Ann:72.2, V_01:7.4, V_02:7.4, V_03:7.6, V_04:6.9, V_05:6, V_06:5.4, V_07:5.1, V_08:4.9, V_09:5.6, V_10:5.6, V_11:6, V_12:6.7, V_Ann:6.3, I_01:819, I_02:1062, I_03:1390, I_04:1764, I_05:1951, I_06:1978, I_07:1946, I_08:1760, I_09:1487, I_10:1211, I_11:915, I_12:743, I_Ann:1419, P_A_Ann:14.27};
//				var site46 = {metName:"Atlanta, GA", T_AN_01:35.5, T_AN_02:38.2, T_AN_03:44.8, T_AN_04:52.3, T_AN_05:61.2, T_AN_06:68.5, T_AN_07:71.7, T_AN_08:71.3, T_AN_09:65.4, T_AN_10:54.4, T_AN_11:44.2, T_AN_12:37.1, T_AN_Ann:53.7, T_AX_01:52.8, T_AX_02:56.5, T_AX_03:64.1, T_AX_04:72.2, T_AX_05:79.5, T_AX_06:85.5, T_AX_07:88.4, T_AX_08:87.6, T_AX_09:81.9, T_AX_10:72.4, T_AX_11:62.7, T_AX_12:53.9, T_AX_Ann:71.5, V_01:9.4, V_02:9.4, V_03:9.6, V_04:8.7, V_05:7.8, V_06:7.4, V_07:6.9, V_08:6.7, V_09:7.6, V_10:7.8, V_11:8.1, V_12:8.9, V_Ann:8.3, I_01:801, I_02:1046, I_03:1379, I_04:1747, I_05:1925, I_06:1949, I_07:1925, I_08:1739, I_09:1477, I_10:1201, I_11:896, I_12:718, I_Ann:1400, P_A_Ann:14.17};
//				var site47 = {metName:"Augusta, GA", T_AN_01:34.7, T_AN_02:36.7, T_AN_03:43, T_AN_04:49.6, T_AN_05:58.6, T_AN_06:67.2, T_AN_07:70.5, T_AN_08:70, T_AN_09:63.7, T_AN_10:51.9, T_AN_11:41.8, T_AN_12:35.3, T_AN_Ann:51.9, T_AX_01:57.7, T_AX_02:61.1, T_AX_03:68.7, T_AX_04:76.4, T_AX_05:83.8, T_AX_06:89.2, T_AX_07:91.8, T_AX_08:90.6, T_AX_09:85.5, T_AX_10:76.6, T_AX_11:67.6, T_AX_12:58.9, T_AX_Ann:75.7, V_01:6, V_02:6.3, V_03:6.7, V_04:6.3, V_05:5.6, V_06:4.9, V_07:4.7, V_08:4, V_09:4.7, V_10:4.5, V_11:4.9, V_12:5.4, V_Ann:5.4, I_01:836, I_02:1084, I_03:1432, I_04:1806, I_05:1995, I_06:1979, I_07:1965, I_08:1782, I_09:1509, I_10:1214, I_11:935, I_12:775, I_Ann:1443, P_A_Ann:14.62};
//				var site48 = {metName:"Columbus, GA", T_AN_01:38, T_AN_02:40.4, T_AN_03:46.6, T_AN_04:53.5, T_AN_05:62.9, T_AN_06:70.1, T_AN_07:73.2, T_AN_08:72.7, T_AN_09:67.3, T_AN_10:56.2, T_AN_11:45.9, T_AN_12:39.1, T_AN_Ann:55.5, T_AX_01:57.4, T_AX_02:61.2, T_AX_03:68.7, T_AX_04:76, T_AX_05:83.4, T_AX_06:88.5, T_AX_07:91.3, T_AX_08:90.4, T_AX_09:85.5, T_AX_10:76.4, T_AX_11:67.2, T_AX_12:58.4, T_AX_Ann:75.4, V_01:6.5, V_02:6.7, V_03:7.2, V_04:6.7, V_05:6.3, V_06:5.6, V_07:5.6, V_08:5.1, V_09:6, V_10:5.6, V_11:5.6, V_12:6, V_Ann:6, I_01:823, I_02:1079, I_03:1409, I_04:1773, I_05:1936, I_06:1936, I_07:1936, I_08:1718, I_09:1491, I_10:1211, I_11:949, I_12:753, I_Ann:1418, P_A_Ann:14.49};
//				var site49 = {metName:"Macon, GA", T_AN_01:36.3, T_AN_02:38.6, T_AN_03:44.8, T_AN_04:51, T_AN_05:60.1, T_AN_06:68.3, T_AN_07:71.6, T_AN_08:70.8, T_AN_09:64.7, T_AN_10:53, T_AN_11:43, T_AN_12:36.8, T_AN_Ann:53.2, T_AX_01:57.8, T_AX_02:61.3, T_AX_03:68.8, T_AX_04:76.1, T_AX_05:83.9, T_AX_06:89, T_AX_07:91.7, T_AX_08:90.5, T_AX_09:85.5, T_AX_10:76.6, T_AX_11:67.6, T_AX_12:58.9, T_AX_Ann:75.7, V_01:6.7, V_02:6.7, V_03:6.9, V_04:6.5, V_05:6, V_06:5.4, V_07:4.9, V_08:4.7, V_09:5.4, V_10:5.1, V_11:5.4, V_12:6, V_Ann:5.8, I_01:852, I_02:1107, I_03:1460, I_04:1839, I_05:2026, I_06:1978, I_07:1981, I_08:1788, I_09:1523, I_10:1233, I_11:960, I_12:783, I_Ann:1461, P_A_Ann:14.5};
//				var site50 = {metName:"Savannah, GA", T_AN_01:40, T_AN_02:42, T_AN_03:48.3, T_AN_04:54.5, T_AN_05:62.9, T_AN_06:70.4, T_AN_07:73.3, T_AN_08:73, T_AN_09:68.6, T_AN_10:58.1, T_AN_11:47.9, T_AN_12:41.3, T_AN_Ann:56.7, T_AX_01:60.5, T_AX_02:63.5, T_AX_03:70.2, T_AX_04:76.9, T_AX_05:83.6, T_AX_06:88.3, T_AX_07:91.3, T_AX_08:89.7, T_AX_09:85.2, T_AX_10:77.6, T_AX_11:69.5, T_AX_12:61.8, T_AX_Ann:76.5, V_01:7.2, V_02:7.4, V_03:7.8, V_04:7.4, V_05:6.7, V_06:6.3, V_07:5.6, V_08:5.6, V_09:6.5, V_10:6.3, V_11:6, V_12:6.5, V_Ann:6.5, I_01:876, I_02:1134, I_03:1484, I_04:1847, I_05:2015, I_06:1947, I_07:1981, I_08:1765, I_09:1477, I_10:1224, I_11:993, I_12:817, I_Ann:1464, P_A_Ann:14.66};
//				var site51 = {metName:"Hilo, HI", T_AN_01:64.1, T_AN_02:64, T_AN_03:65.1, T_AN_04:65.9, T_AN_05:67.2, T_AN_06:68.5, T_AN_07:69.5, T_AN_08:70, T_AN_09:69.4, T_AN_10:68.8, T_AN_11:67.5, T_AN_12:65.6, T_AN_Ann:67.1, T_AX_01:78.6, T_AX_02:78.1, T_AX_03:78.5, T_AX_04:78.7, T_AX_05:80.7, T_AX_06:81.9, T_AX_07:82.7, T_AX_08:83, T_AX_09:83, T_AX_10:82.3, T_AX_11:80.4, T_AX_12:79, T_AX_Ann:80.6, V_01:6.7, V_02:7.2, V_03:7.2, V_04:6.9, V_05:6.7, V_06:6.5, V_07:6.5, V_08:6.3, V_09:6.3, V_10:6.3, V_11:6.3, V_12:6.5, V_Ann:6.5, I_01:1187, I_02:1316, I_03:1431, I_04:1617, I_05:1743, I_06:1820, I_07:1822, I_08:1748, I_09:1672, I_10:1413, I_11:1137, I_12:1076, I_Ann:1498, P_A_Ann:14.68};
//				var site52 = {metName:"Honolulu, HI", T_AN_01:67.1, T_AN_02:67.3, T_AN_03:68.5, T_AN_04:70.3, T_AN_05:71.8, T_AN_06:74.3, T_AN_07:75.3, T_AN_08:76, T_AN_09:75.1, T_AN_10:74.2, T_AN_11:72.1, T_AN_12:69.5, T_AN_Ann:71.8, T_AX_01:79.5, T_AX_02:79.6, T_AX_03:80.4, T_AX_04:82.3, T_AX_05:84.1, T_AX_06:86.3, T_AX_07:87.2, T_AX_08:88, T_AX_09:87.6, T_AX_10:86, T_AX_11:83.2, T_AX_12:80.8, T_AX_Ann:83.8, V_01:8.7, V_02:9.2, V_03:10.3, V_04:11.2, V_05:10.3, V_06:12.1, V_07:12.1, V_08:12.1, V_09:10.5, V_10:10.1, V_11:9.6, V_12:9.4, V_Ann:10.5, I_01:1279, I_02:1511, I_03:1737, I_04:1995, I_05:2071, I_06:2155, I_07:2127, I_08:2075, I_09:1901, I_10:1595, I_11:1318, I_12:1177, I_Ann:1745, P_A_Ann:14.69};
//				var site53 = {metName:"Kahului, HI", T_AN_01:64, T_AN_02:63.7, T_AN_03:65, T_AN_04:66.5, T_AN_05:67.7, T_AN_06:70.3, T_AN_07:71.8, T_AN_08:72.3, T_AN_09:71.2, T_AN_10:70.2, T_AN_11:68.4, T_AN_12:65.9, T_AN_Ann:68.1, T_AX_01:79.7, T_AX_02:79.7, T_AX_03:80.3, T_AX_04:81.6, T_AX_05:83.9, T_AX_06:85.5, T_AX_07:86.3, T_AX_08:87, T_AX_09:87, T_AX_10:86, T_AX_11:83.1, T_AX_12:80.9, T_AX_Ann:83.4, V_01:10.5, V_02:11.2, V_03:11.9, V_04:13, V_05:12.1, V_06:14.8, V_07:15, V_08:14.5, V_09:12.8, V_10:11.9, V_11:11.2, V_12:10.7, V_Ann:12.5, I_01:1335, I_02:1552, I_03:1727, I_04:1984, I_05:2126, I_06:2228, I_07:2164, I_08:2115, I_09:1932, I_10:1682, I_11:1377, I_12:1257, I_Ann:1790, P_A_Ann:14.66};
//				var site54 = {metName:"Lihue, HI", T_AN_01:66, T_AN_02:66.3, T_AN_03:67.4, T_AN_04:69.3, T_AN_05:71, T_AN_06:73.7, T_AN_07:74.6, T_AN_08:75.2, T_AN_09:74.7, T_AN_10:73.7, T_AN_11:71.3, T_AN_12:68.7, T_AN_Ann:71, T_AX_01:77.1, T_AX_02:76.6, T_AX_03:77.3, T_AX_04:78.2, T_AX_05:80.5, T_AX_06:82.4, T_AX_07:83.4, T_AX_08:83.9, T_AX_09:84, T_AX_10:82.7, T_AX_11:80, T_AX_12:78.2, T_AX_Ann:80.4, V_01:11.9, V_02:12.5, V_03:13.2, V_04:14.3, V_05:12.8, V_06:14.3, V_07:14.8, V_08:14.3, V_09:13, V_10:13, V_11:13.2, V_12:12.8, V_Ann:13.4, I_01:1193, I_02:1375, I_03:1566, I_04:1755, I_05:1941, I_06:2022, I_07:1956, I_08:1918, I_09:1779, I_10:1427, I_11:1161, I_12:1036, I_Ann:1594, P_A_Ann:14.63};
//				var site55 = {metName:"Boise, ID", T_AN_01:26.2, T_AN_02:29, T_AN_03:34.5, T_AN_04:39.3, T_AN_05:47.2, T_AN_06:53.9, T_AN_07:61.5, T_AN_08:60.5, T_AN_09:52.2, T_AN_10:41.3, T_AN_11:31.9, T_AN_12:26.2, T_AN_Ann:42, T_AX_01:38.5, T_AX_02:45.3, T_AX_03:54.4, T_AX_04:61, T_AX_05:71.3, T_AX_06:80, T_AX_07:91.3, T_AX_08:89.3, T_AX_09:79.1, T_AX_10:64, T_AX_11:47.8, T_AX_12:38.5, T_AX_Ann:63.4, V_01:6.9, V_02:7.6, V_03:8.7, V_04:8.7, V_05:8.3, V_06:8.1, V_07:7.6, V_08:7.4, V_09:7.2, V_10:7.2, V_11:6.9, V_12:7.4, V_Ann:7.6, I_01:492, I_02:831, I_03:1255, I_04:1705, I_05:2135, I_06:2360, I_07:2476, I_08:2163, I_09:1695, I_10:1102, I_11:580, I_12:427, I_Ann:1435, P_A_Ann:13.52};
//				var site56 = {metName:"Lewiston, ID", T_AN_01:30.7, T_AN_02:32.4, T_AN_03:36.4, T_AN_04:41.2, T_AN_05:48.1, T_AN_06:54.1, T_AN_07:61.3, T_AN_08:60.3, T_AN_09:52.4, T_AN_10:42, T_AN_11:34.7, T_AN_12:29.9, T_AN_Ann:43.6, T_AX_01:41.1, T_AX_02:46.7, T_AX_03:54.1, T_AX_04:60.9, T_AX_05:70.1, T_AX_06:77.1, T_AX_07:88.9, T_AX_08:88.1, T_AX_09:78.2, T_AX_10:61.6, T_AX_11:47.4, T_AX_12:39.7, T_AX_Ann:62.8, V_01:6, V_02:5.6, V_03:6, V_04:6, V_05:5.6, V_06:5.6, V_07:5.6, V_08:5.4, V_09:4.7, V_10:4.7, V_11:5.4, V_12:6, V_Ann:5.6, I_01:407, I_02:698, I_03:1068, I_04:1497, I_05:1870, I_06:2063, I_07:2307, I_08:2003, I_09:1473, I_10:882, I_11:448, I_12:326, I_Ann:1254, P_A_Ann:13.95};
//				var site57 = {metName:"Pocatello, ID", T_AN_01:18, T_AN_02:20.7, T_AN_03:27.9, T_AN_04:33.5, T_AN_05:40.8, T_AN_06:47, T_AN_07:53.2, T_AN_08:51.5, T_AN_09:42.9, T_AN_10:33.8, T_AN_11:24.4, T_AN_12:18.7, T_AN_Ann:34.4, T_AX_01:33.4, T_AX_02:38.1, T_AX_03:49, T_AX_04:57.4, T_AX_05:67.9, T_AX_06:76.7, T_AX_07:87.9, T_AX_08:86.8, T_AX_09:76, T_AX_10:60.7, T_AX_11:44.5, T_AX_12:33.8, T_AX_Ann:59.3, V_01:9.4, V_02:8.9, V_03:10.5, V_04:11.2, V_05:10.3, V_06:9.6, V_07:8.5, V_08:8.5, V_09:8.3, V_10:9.4, V_11:9.4, V_12:9.4, V_Ann:9.4, I_01:485, I_02:817, I_03:1292, I_04:1680, I_05:2084, I_06:2327, I_07:2398, I_08:2081, I_09:1634, I_10:1103, I_11:605, I_12:413, I_Ann:1410, P_A_Ann:12.52};
//				var site58 = {metName:"Chicago, IL", T_AN_01:17.7, T_AN_02:21.4, T_AN_03:29.8, T_AN_04:39.8, T_AN_05:49.3, T_AN_06:59.3, T_AN_07:64.9, T_AN_08:64, T_AN_09:55.3, T_AN_10:44.2, T_AN_11:33.3, T_AN_12:22.3, T_AN_Ann:41.8, T_AX_01:30.7, T_AX_02:35.2, T_AX_03:46, T_AX_04:58.4, T_AX_05:69.1, T_AX_06:78.9, T_AX_07:83, T_AX_08:81, T_AX_09:74.2, T_AX_10:61.8, T_AX_11:47.7, T_AX_12:34.9, T_AX_Ann:58.4, V_01:11, V_02:10.7, V_03:11, V_04:11.2, V_05:9.8, V_06:8.5, V_07:8.3, V_08:7.8, V_09:8.3, V_10:9.6, V_11:10.5, V_12:10.3, V_Ann:9.8, I_01:487, I_02:755, I_03:1103, I_04:1453, I_05:1718, I_06:1939, I_07:1898, I_08:1621, I_09:1332, I_10:913, I_11:549, I_12:423, I_Ann:1183, P_A_Ann:14.34};
//				var site59 = {metName:"Moline, IL", T_AN_01:15.3, T_AN_02:20.2, T_AN_03:29.9, T_AN_04:40.9, T_AN_05:51.2, T_AN_06:61, T_AN_07:65.1, T_AN_08:63.5, T_AN_09:54.2, T_AN_10:43.2, T_AN_11:31.9, T_AN_12:20.3, T_AN_Ann:41.4, T_AX_01:30.5, T_AX_02:35.8, T_AX_03:48.7, T_AX_04:62.1, T_AX_05:72.3, T_AX_06:81.6, T_AX_07:84.5, T_AX_08:82.8, T_AX_09:76.2, T_AX_10:63.8, T_AX_11:48.7, T_AX_12:34.9, T_AX_Ann:60.2, V_01:9.2, V_02:8.9, V_03:9.8, V_04:10.1, V_05:8.5, V_06:6.9, V_07:6.3, V_08:5.8, V_09:6.5, V_10:7.8, V_11:8.7, V_12:8.5, V_Ann:8.1, I_01:532, I_02:798, I_03:1181, I_04:1469, I_05:1756, I_06:1959, I_07:1949, I_08:1712, I_09:1400, I_10:946, I_11:593, I_12:456, I_Ann:1229, P_A_Ann:14.39};
//				var site60 = {metName:"Peoria, IL", T_AN_01:17.8, T_AN_02:22.2, T_AN_03:31.4, T_AN_04:42.4, T_AN_05:52.4, T_AN_06:62, T_AN_07:65.8, T_AN_08:64.6, T_AN_09:55.7, T_AN_10:44.3, T_AN_11:33.3, T_AN_12:22.5, T_AN_Ann:42.9, T_AX_01:32.1, T_AX_02:37.8, T_AX_03:50, T_AX_04:62.6, T_AX_05:72.3, T_AX_06:81.4, T_AX_07:84.5, T_AX_08:83, T_AX_09:76.5, T_AX_10:64.1, T_AX_11:49.7, T_AX_12:36.4, T_AX_Ann:60.9, V_01:9.2, V_02:9.2, V_03:9.8, V_04:10.1, V_05:8.5, V_06:7.2, V_07:6.5, V_08:6, V_09:6.5, V_10:7.8, V_11:8.9, V_12:8.7, V_Ann:8.3, I_01:553, I_02:845, I_03:1179, I_04:1503, I_05:1746, I_06:1990, I_07:1982, I_08:1724, I_09:1444, I_10:983, I_11:608, I_12:475, I_Ann:1253, P_A_Ann:14.34};
//				var site61 = {metName:"Rockford, IL", T_AN_01:14.1, T_AN_02:18.5, T_AN_03:27.7, T_AN_04:38.6, T_AN_05:48.9, T_AN_06:59.1, T_AN_07:62.8, T_AN_08:61.6, T_AN_09:52.6, T_AN_10:41.4, T_AN_11:30.6, T_AN_12:18.9, T_AN_Ann:39.6, T_AX_01:28.3, T_AX_02:33.4, T_AX_03:45.7, T_AX_04:59.4, T_AX_05:70.1, T_AX_06:79.5, T_AX_07:82.5, T_AX_08:81, T_AX_09:74.2, T_AX_10:61.7, T_AX_11:46.5, T_AX_12:32.8, T_AX_Ann:57.9, V_01:9.8, V_02:9.8, V_03:10.5, V_04:11.2, V_05:9.6, V_06:7.8, V_07:7.2, V_08:6.7, V_09:7.4, V_10:8.9, V_11:9.8, V_12:9.4, V_Ann:8.9, I_01:483, I_02:766, I_03:1123, I_04:1442, I_05:1700, I_06:1933, I_07:1881, I_08:1647, I_09:1337, I_10:902, I_11:545, I_12:401, I_Ann:1180, P_A_Ann:14.32};
//				var site62 = {metName:"Springfield, IL", T_AN_01:19.9, T_AN_02:24.2, T_AN_03:32.9, T_AN_04:43.4, T_AN_05:53.8, T_AN_06:62.7, T_AN_07:65.6, T_AN_08:64.5, T_AN_09:55, T_AN_10:44.6, T_AN_11:34.6, T_AN_12:24.4, T_AN_Ann:43.8, T_AX_01:34.3, T_AX_02:40.2, T_AX_03:51.7, T_AX_04:64.3, T_AX_05:73.9, T_AX_06:82.1, T_AX_07:85, T_AX_08:84.1, T_AX_09:78.2, T_AX_10:66.1, T_AX_11:51.7, T_AX_12:38.7, T_AX_Ann:62.5, V_01:10.7, V_02:10.7, V_03:11.2, V_04:11.4, V_05:9.4, V_06:7.6, V_07:6.5, V_08:6.3, V_09:6.7, V_10:8.7, V_11:10.5, V_12:10.3, V_Ann:9.2, I_01:561, I_02:862, I_03:1179, I_04:1513, I_05:1747, I_06:1983, I_07:2017, I_08:1766, I_09:1459, I_10:1035, I_11:641, I_12:501, I_Ann:1272, P_A_Ann:14.39};
//				var site63 = {metName:"Evansville, IN", T_AN_01:25.9, T_AN_02:28.6, T_AN_03:36.3, T_AN_04:46.3, T_AN_05:56.2, T_AN_06:65.2, T_AN_07:68.6, T_AN_08:66.8, T_AN_09:58.1, T_AN_10:47.1, T_AN_11:37.4, T_AN_12:28.8, T_AN_Ann:47.1, T_AX_01:40.7, T_AX_02:45.6, T_AX_03:55.6, T_AX_04:67.2, T_AX_05:76, T_AX_06:84.4, T_AX_07:87.2, T_AX_08:87.3, T_AX_09:80.6, T_AX_10:69.2, T_AX_11:55.5, T_AX_12:43.8, T_AX_Ann:66.1, V_01:8.3, V_02:8.3, V_03:8.3, V_04:8.5, V_05:6.9, V_06:6, V_07:5.6, V_08:5.1, V_09:5.4, V_10:6, V_11:7.4, V_12:7.6, V_Ann:6.9, I_01:598, I_02:880, I_03:1173, I_04:1574, I_05:1796, I_06:2005, I_07:1994, I_08:1850, I_09:1484, I_10:1097, I_11:693, I_12:525, I_Ann:1306, P_A_Ann:14.49};
//				var site64 = {metName:"Fort Wayne, IN", T_AN_01:18.6, T_AN_02:21.5, T_AN_03:29.6, T_AN_04:40, T_AN_05:50, T_AN_06:60.4, T_AN_07:63.2, T_AN_08:61.6, T_AN_09:53.1, T_AN_10:42.9, T_AN_11:33.5, T_AN_12:23.5, T_AN_Ann:41.5, T_AX_01:32, T_AX_02:36.2, T_AX_03:47.4, T_AX_04:60.7, T_AX_05:70.9, T_AX_06:80.1, T_AX_07:83.2, T_AX_08:81.3, T_AX_09:75.5, T_AX_10:63.1, T_AX_11:49, T_AX_12:36.1, T_AX_Ann:59.6, V_01:11, V_02:10.5, V_03:10.5, V_04:10.7, V_05:9.4, V_06:7.6, V_07:6.9, V_08:6.3, V_09:6.9, V_10:8.5, V_11:9.8, V_12:10.3, V_Ann:9.2, I_01:490, I_02:750, I_03:1131, I_04:1458, I_05:1709, I_06:1923, I_07:1944, I_08:1677, I_09:1371, I_10:935, I_11:560, I_12:420, I_Ann:1197, P_A_Ann:14.29};
//				var site65 = {metName:"Indianapolis, IN", T_AN_01:21.5, T_AN_02:24.7, T_AN_03:33.3, T_AN_04:43.8, T_AN_05:53.5, T_AN_06:63.1, T_AN_07:66.2, T_AN_08:65.5, T_AN_09:57.2, T_AN_10:45.7, T_AN_11:35.7, T_AN_12:25.9, T_AN_Ann:44.7, T_AX_01:35.6, T_AX_02:40.2, T_AX_03:51.2, T_AX_04:63.3, T_AX_05:72.3, T_AX_06:81.1, T_AX_07:84.1, T_AX_08:83.6, T_AX_09:77.3, T_AX_10:65.1, T_AX_11:51.6, T_AX_12:39.3, T_AX_Ann:62, V_01:11, V_02:11, V_03:11, V_04:11.4, V_05:9.6, V_06:8.3, V_07:7.8, V_08:7.4, V_09:7.8, V_10:8.9, V_11:10.3, V_12:10.5, V_Ann:9.6, I_01:550, I_02:815, I_03:1165, I_04:1486, I_05:1757, I_06:1958, I_07:1934, I_08:1739, I_09:1441, I_10:1012, I_11:615, I_12:472, I_Ann:1245, P_A_Ann:14.29};
//				var site66 = {metName:"South Bend, IN", T_AN_01:18.6, T_AN_02:21.4, T_AN_03:28.9, T_AN_04:39.2, T_AN_05:49.2, T_AN_06:59.4, T_AN_07:63.3, T_AN_08:62.2, T_AN_09:54, T_AN_10:43.4, T_AN_11:33.5, T_AN_12:23.6, T_AN_Ann:41.4, T_AX_01:31.3, T_AX_02:35.4, T_AX_03:46.5, T_AX_04:59.5, T_AX_05:69.6, T_AX_06:79.1, T_AX_07:82.3, T_AX_08:80.5, T_AX_09:73.9, T_AX_10:61.7, T_AX_11:47.8, T_AX_12:35.5, T_AX_Ann:58.6, V_01:10.7, V_02:10.3, V_03:10.3, V_04:10.5, V_05:9.2, V_06:7.6, V_07:7.4, V_08:6.7, V_09:7.2, V_10:8.5, V_11:9.6, V_12:10.1, V_Ann:8.9, I_01:433, I_02:698, I_03:1130, I_04:1471, I_05:1729, I_06:1935, I_07:1898, I_08:1646, I_09:1335, I_10:889, I_11:518, I_12:389, I_Ann:1173, P_A_Ann:14.29};
//				var site67 = {metName:"Des Moines, IA", T_AN_01:14.1, T_AN_02:19.3, T_AN_03:29.6, T_AN_04:41.3, T_AN_05:52.4, T_AN_06:62.4, T_AN_07:66.6, T_AN_08:64.9, T_AN_09:55.1, T_AN_10:43.6, T_AN_11:30.9, T_AN_12:19.3, T_AN_Ann:41.6, T_AX_01:29.6, T_AX_02:35.5, T_AX_03:48, T_AX_04:61.3, T_AX_05:71.2, T_AX_06:80.5, T_AX_07:84.3, T_AX_08:82.7, T_AX_09:75.5, T_AX_10:62.9, T_AX_11:47.4, T_AX_12:34.5, T_AX_Ann:59.5, V_01:10.3, V_02:10.1, V_03:11, V_04:11.2, V_05:10.1, V_06:8.7, V_07:8.1, V_08:7.6, V_09:8.5, V_10:9.6, V_11:10.3, V_12:9.8, V_Ann:9.6, I_01:545, I_02:817, I_03:1181, I_04:1507, I_05:1782, I_06:1979, I_07:1995, I_08:1762, I_09:1435, I_10:986, I_11:613, I_12:482, I_Ann:1257, P_A_Ann:14.2};
//				var site68 = {metName:"Dubuque, IA", T_AN_01:11.8, T_AN_02:16.7, T_AN_03:27, T_AN_04:38.4, T_AN_05:49, T_AN_06:58.9, T_AN_07:62.3, T_AN_08:60.9, T_AN_09:52.1, T_AN_10:40.7, T_AN_11:29.2, T_AN_12:17, T_AN_Ann:38.7, T_AX_01:26, T_AX_02:31.1, T_AX_03:43.6, T_AX_04:57.6, T_AX_05:68.4, T_AX_06:77.6, T_AX_07:80.4, T_AX_08:78.9, T_AX_09:71.9, T_AX_10:59.5, T_AX_11:44.3, T_AX_12:30.6, T_AX_Ann:55.8, V_01:11, V_02:11, V_03:11.4, V_04:11.9, V_05:10.1, V_06:8.5, V_07:7.6, V_08:7.2, V_09:8.3, V_10:10.1, V_11:11, V_12:10.5, V_Ann:9.8, I_01:503, I_02:764, I_03:1135, I_04:1476, I_05:1718, I_06:1933, I_07:1904, I_08:1668, I_09:1348, I_10:903, I_11:551, I_12:422, I_Ann:1194, P_A_Ann:14.14};
//				var site69 = {metName:"Mason City, IA", T_AN_01:7.8, T_AN_02:12.9, T_AN_03:24.1, T_AN_04:35.7, T_AN_05:47.4, T_AN_06:57.7, T_AN_07:61, T_AN_08:58.6, T_AN_09:48.9, T_AN_10:37.7, T_AN_11:25.5, T_AN_12:13.5, T_AN_Ann:35.9, T_AX_01:23.6, T_AX_02:29, T_AX_03:41.6, T_AX_04:57.7, T_AX_05:68.9, T_AX_06:78.5, T_AX_07:81.6, T_AX_08:79.4, T_AX_09:72.9, T_AX_10:59.8, T_AX_11:42.9, T_AX_12:28.7, T_AX_Ann:55.4, V_01:12.3, V_02:12.3, V_03:12.5, V_04:13.2, V_05:12.3, V_06:10.3, V_07:8.7, V_08:7.8, V_09:9.2, V_10:11, V_11:11.9, V_12:11.9, V_Ann:11.2, I_01:469, I_02:722, I_03:1111, I_04:1479, I_05:1707, I_06:1902, I_07:1944, I_08:1678, I_09:1308, I_10:878, I_11:538, I_12:388, I_Ann:1177, P_A_Ann:14.07};
//				var site70 = {metName:"Sioux City, IA", T_AN_01:11, T_AN_02:16.5, T_AN_03:26.3, T_AN_04:37.9, T_AN_05:49.7, T_AN_06:59.7, T_AN_07:63.9, T_AN_08:61.6, T_AN_09:51.2, T_AN_10:39.2, T_AN_11:26.2, T_AN_12:15.3, T_AN_Ann:38.2, T_AX_01:28.9, T_AX_02:34.7, T_AX_03:46.7, T_AX_04:61.1, T_AX_05:72.2, T_AX_06:81.2, T_AX_07:84.4, T_AX_08:82.6, T_AX_09:76, T_AX_10:63, T_AX_11:46.2, T_AX_12:32.7, T_AX_Ann:59.1, V_01:11, V_02:11, V_03:11.4, V_04:12.5, V_05:11.6, V_06:9.6, V_07:8.3, V_08:7.8, V_09:9.2, V_10:10.1, V_11:10.7, V_12:10.7, V_Ann:10.3, I_01:522, I_02:787, I_03:1178, I_04:1532, I_05:1774, I_06:2010, I_07:2046, I_08:1787, I_09:1418, I_10:982, I_11:624, I_12:468, I_Ann:1260, P_A_Ann:14.13};
//				var site71 = {metName:"Waterloo, IA", T_AN_01:9.7, T_AN_02:15.3, T_AN_03:26.2, T_AN_04:37.7, T_AN_05:49.4, T_AN_06:59.7, T_AN_07:62.8, T_AN_08:60.4, T_AN_09:51, T_AN_10:39.6, T_AN_11:27.4, T_AN_12:15.3, T_AN_Ann:37.9, T_AX_01:26.3, T_AX_02:31.5, T_AX_03:44.6, T_AX_04:59.6, T_AX_05:70.6, T_AX_06:80, T_AX_07:82.7, T_AX_08:80.8, T_AX_09:74.7, T_AX_10:61.5, T_AX_11:45.3, T_AX_12:31.2, T_AX_Ann:57.4, V_01:10.5, V_02:10.7, V_03:11.2, V_04:11.9, V_05:10.5, V_06:8.7, V_07:7.6, V_08:7.2, V_09:8.1, V_10:9.6, V_11:10.3, V_12:10.1, V_Ann:9.6, I_01:505, I_02:755, I_03:1131, I_04:1451, I_05:1722, I_06:1924, I_07:1952, I_08:1698, I_09:1357, I_10:909, I_11:554, I_12:418, I_Ann:1198, P_A_Ann:14.24};
//				var site72 = {metName:"Concordia, KS", T_AN_01:19.3, T_AN_02:23.3, T_AN_03:31.9, T_AN_04:42, T_AN_05:52.8, T_AN_06:62.7, T_AN_07:68, T_AN_08:66.1, T_AN_09:56.5, T_AN_10:44.6, T_AN_11:32, T_AN_12:22.1, T_AN_Ann:43.4, T_AX_01:37.6, T_AX_02:43.2, T_AX_03:53.9, T_AX_04:64, T_AX_05:73.7, T_AX_06:84.3, T_AX_07:89.7, T_AX_08:87.9, T_AX_09:79.3, T_AX_10:66.8, T_AX_11:51.6, T_AX_12:40, T_AX_Ann:64.3, V_01:10.3, V_02:10.7, V_03:12.1, V_04:12.8, V_05:11.2, V_06:10.7, V_07:10.1, V_08:9.4, V_09:10.5, V_10:10.7, V_11:11, V_12:10.3, V_Ann:10.7, I_01:701, I_02:948, I_03:1319, I_04:1647, I_05:1881, I_06:2123, I_07:2140, I_08:1916, I_09:1544, I_10:1128, I_11:772, I_12:608, I_Ann:1394, P_A_Ann:13.94};
//				var site73 = {metName:"Dodge City, KS", T_AN_01:20.8, T_AN_02:24.4, T_AN_03:31.6, T_AN_04:40.9, T_AN_05:52.1, T_AN_06:61.4, T_AN_07:66.7, T_AN_08:65.4, T_AN_09:56.1, T_AN_10:43.7, T_AN_11:30.7, T_AN_12:22.6, T_AN_Ann:43, T_AX_01:43.6, T_AX_02:48.3, T_AX_03:57.2, T_AX_04:66.7, T_AX_05:76.6, T_AX_06:86, T_AX_07:91.9, T_AX_08:89.7, T_AX_09:81.5, T_AX_10:69.2, T_AX_11:55.1, T_AX_12:44.6, T_AX_Ann:67.6, V_01:12.1, V_02:12.8, V_03:14.1, V_04:14.8, V_05:13.6, V_06:13.2, V_07:12.1, V_08:11.4, V_09:12.8, V_10:12.8, V_11:12.5, V_12:12.1, V_Ann:13, I_01:816, I_02:1068, I_03:1439, I_04:1786, I_05:2049, I_06:2230, I_07:2272, I_08:1980, I_09:1636, I_10:1239, I_11:889, I_12:740, I_Ann:1512, P_A_Ann:13.39};
//				var site74 = {metName:"Goodland, KS", T_AN_01:17.7, T_AN_02:20.4, T_AN_03:27.1, T_AN_04:35.3, T_AN_05:46.3, T_AN_06:56.3, T_AN_07:62, T_AN_08:60.5, T_AN_09:50.6, T_AN_10:38.1, T_AN_11:26.5, T_AN_12:18.8, T_AN_Ann:38.3, T_AX_01:41.8, T_AX_02:45.4, T_AX_03:54.4, T_AX_04:62.7, T_AX_05:72.9, T_AX_06:83.2, T_AX_07:89.2, T_AX_08:86.3, T_AX_09:78.5, T_AX_10:65.6, T_AX_11:51.7, T_AX_12:42.9, T_AX_Ann:64.5, V_01:11.6, V_02:12.1, V_03:13.2, V_04:13.9, V_05:13, V_06:12.3, V_07:11, V_08:10.5, V_09:11.4, V_10:11.9, V_11:11.6, V_12:11.6, V_Ann:12.1, I_01:785, I_02:1014, I_03:1426, I_04:1762, I_05:2007, I_06:2274, I_07:2301, I_08:2013, I_09:1646, I_10:1216, I_11:826, I_12:681, I_Ann:1496, P_A_Ann:12.88};
//				var site75 = {metName:"Russell, KS", T_AN_01:18.8, T_AN_02:22.8, T_AN_03:31.4, T_AN_04:40.9, T_AN_05:52.3, T_AN_06:62.4, T_AN_07:67.6, T_AN_08:66.3, T_AN_09:56.5, T_AN_10:43.7, T_AN_11:30.5, T_AN_12:21.3, T_AN_Ann:42.9, T_AX_01:40.7, T_AX_02:45.6, T_AX_03:55.6, T_AX_04:65.2, T_AX_05:75.1, T_AX_06:85.6, T_AX_07:91.6, T_AX_08:89.1, T_AX_09:80.7, T_AX_10:68.3, T_AX_11:53.9, T_AX_12:42.3, T_AX_Ann:66.1, V_01:11.4, V_02:12.1, V_03:13.4, V_04:14.3, V_05:12.8, V_06:12.5, V_07:11.9, V_08:11.2, V_09:12.3, V_10:12.8, V_11:12.3, V_12:11.6, V_Ann:12.3, I_01:739, I_02:986, I_03:1343, I_04:1669, I_05:1944, I_06:2144, I_07:2176, I_08:1927, I_09:1571, I_10:1153, I_11:818, I_12:655, I_Ann:1427, P_A_Ann:13.74};
//				var site76 = {metName:"Topeka, KS", T_AN_01:20.3, T_AN_02:25.1, T_AN_03:33.7, T_AN_04:44.3, T_AN_05:55, T_AN_06:64.6, T_AN_07:69.3, T_AN_08:67.4, T_AN_09:57, T_AN_10:45.8, T_AN_11:33.8, T_AN_12:24, T_AN_Ann:45, T_AX_01:39, T_AX_02:45.3, T_AX_03:55.7, T_AX_04:65.9, T_AX_05:75.4, T_AX_06:83.9, T_AX_07:89, T_AX_08:88.5, T_AX_09:79.6, T_AX_10:68.1, T_AX_11:53.9, T_AX_12:42.3, T_AX_Ann:65.6, V_01:8.1, V_02:8.3, V_03:9.6, V_04:9.8, V_05:8.3, V_06:7.6, V_07:6.7, V_08:6, V_09:6.7, V_10:7.4, V_11:8.1, V_12:7.6, V_Ann:7.8, I_01:679, I_02:944, I_03:1277, I_04:1574, I_05:1809, I_06:2027, I_07:2069, I_08:1864, I_09:1497, I_10:1102, I_11:733, I_12:598, I_Ann:1348, P_A_Ann:14.23};
//				var site77 = {metName:"Wichita, KS", T_AN_01:23.1, T_AN_02:27.4, T_AN_03:35.7, T_AN_04:45.2, T_AN_05:56.2, T_AN_06:65.5, T_AN_07:70.3, T_AN_08:69.3, T_AN_09:60, T_AN_10:47.7, T_AN_11:35.5, T_AN_12:25.8, T_AN_Ann:46.8, T_AX_01:42.2, T_AX_02:48.5, T_AX_03:57.3, T_AX_04:67, T_AX_05:76.3, T_AX_06:85.8, T_AX_07:91.3, T_AX_08:90.4, T_AX_09:81.7, T_AX_10:69.6, T_AX_11:55.7, T_AX_12:44, T_AX_Ann:67.5, V_01:11, V_02:11.4, V_03:12.8, V_04:13.4, V_05:11.6, V_06:11.6, V_07:10.7, V_08:10.1, V_09:10.7, V_10:11.2, V_11:11.4, V_12:10.7, V_Ann:11.4, I_01:763, I_02:1050, I_03:1345, I_04:1701, I_05:1930, I_06:2132, I_07:2179, I_08:1961, I_09:1567, I_10:1173, I_11:831, I_12:666, I_Ann:1442, P_A_Ann:14.01};
//				var site78 = {metName:"Cincinnati, KY", T_AN_01:23.8, T_AN_02:26.2, T_AN_03:34.1, T_AN_04:44.3, T_AN_05:53.7, T_AN_06:62.5, T_AN_07:66.1, T_AN_08:65.4, T_AN_09:57.4, T_AN_10:45.9, T_AN_11:36.2, T_AN_12:27.4, T_AN_Ann:45.2, T_AX_01:38.3, T_AX_02:42.3, T_AX_03:52.2, T_AX_04:64.2, T_AX_05:72.9, T_AX_06:81.2, T_AX_07:84.4, T_AX_08:84.2, T_AX_09:77.5, T_AX_10:65.6, T_AX_11:52.9, T_AX_12:41.4, T_AX_Ann:63.1, V_01:9.4, V_02:9.6, V_03:9.8, V_04:9.6, V_05:7.8, V_06:6.9, V_07:6.5, V_08:6.3, V_09:6.7, V_10:7.4, V_11:8.7, V_12:8.9, V_Ann:8.1, I_01:553, I_02:832, I_03:1167, I_04:1532, I_05:1782, I_06:1956, I_07:1937, I_08:1768, I_09:1439, I_10:1027, I_11:644, I_12:487, I_Ann:1260, P_A_Ann:14.24};
//				var site79 = {metName:"Jackson, KY", T_AN_01:27.9, T_AN_02:30.5, T_AN_03:37.8, T_AN_04:47.7, T_AN_05:55.4, T_AN_06:63.1, T_AN_07:66.6, T_AN_08:65.7, T_AN_09:58.9, T_AN_10:48.7, T_AN_11:39.6, T_AN_12:31.4, T_AN_Ann:47.8, T_AX_01:43.1, T_AX_02:46.9, T_AX_03:56.2, T_AX_04:67.4, T_AX_05:73.7, T_AX_06:80.4, T_AX_07:83.2, T_AX_08:83.4, T_AX_09:77.3, T_AX_10:67.4, T_AX_11:55.9, T_AX_12:46.2, T_AX_Ann:65.1, V_01:6, V_02:6, V_03:6.3, V_04:6.3, V_05:4.5, V_06:3.6, V_07:3.4, V_08:3.1, V_09:3.8, V_10:4.3, V_11:5.4, V_12:5.6, V_Ann:4.9, I_01:591, I_02:831, I_03:1165, I_04:1534, I_05:1745, I_06:1909, I_07:1882, I_08:1752, I_09:1416, I_10:1060, I_11:708, I_12:539, I_Ann:1261, P_A_Ann:13.98};
//				var site80 = {metName:"Lexington, KY", T_AN_01:25.9, T_AN_02:28.5, T_AN_03:35.9, T_AN_04:45.6, T_AN_05:55, T_AN_06:63.4, T_AN_07:66.9, T_AN_08:65.8, T_AN_09:58.3, T_AN_10:47.1, T_AN_11:37.4, T_AN_12:28.9, T_AN_Ann:46.5, T_AX_01:40.8, T_AX_02:44.8, T_AX_03:54.2, T_AX_04:65.4, T_AX_05:73.6, T_AX_06:81.8, T_AX_07:84.9, T_AX_08:84.9, T_AX_09:78.3, T_AX_10:66.9, T_AX_11:54.4, T_AX_12:43.5, T_AX_Ann:64.5, V_01:9.4, V_02:9.2, V_03:9.2, V_04:9.2, V_05:7.6, V_06:6.5, V_07:6, V_08:5.8, V_09:6.3, V_10:7.2, V_11:8.3, V_12:8.7, V_Ann:7.8, I_01:571, I_02:841, I_03:1177, I_04:1572, I_05:1814, I_06:1963, I_07:1925, I_08:1782, I_09:1444, I_10:1079, I_11:688, I_12:517, I_Ann:1281, P_A_Ann:14.18};
//				var site81 = {metName:"Louisville, KY", T_AN_01:27.7, T_AN_02:30.5, T_AN_03:38.2, T_AN_04:48.2, T_AN_05:57.8, T_AN_06:66.8, T_AN_07:70.3, T_AN_08:69.4, T_AN_09:61.2, T_AN_10:49.7, T_AN_11:39.7, T_AN_12:30.9, T_AN_Ann:49.2, T_AX_01:42.3, T_AX_02:46.8, T_AX_03:56.6, T_AX_04:67.9, T_AX_05:76, T_AX_06:84.1, T_AX_07:87.3, T_AX_08:87.4, T_AX_09:80.6, T_AX_10:69.2, T_AX_11:56.6, T_AX_12:44.9, T_AX_Ann:66.7, V_01:8.9, V_02:8.9, V_03:8.9, V_04:8.9, V_05:7.6, V_06:6.9, V_07:6.7, V_08:6.3, V_09:6.3, V_10:6.7, V_11:7.8, V_12:8.1, V_Ann:7.6, I_01:595, I_02:895, I_03:1206, I_04:1563, I_05:1816, I_06:1982, I_07:1963, I_08:1811, I_09:1471, I_10:1073, I_11:692, I_12:520, I_Ann:1299, P_A_Ann:14.45};
//				var site82 = {metName:"Paducah, KY", T_AN_01:27.4, T_AN_02:30.6, T_AN_03:38.3, T_AN_04:47.8, T_AN_05:57.2, T_AN_06:65.7, T_AN_07:69.1, T_AN_08:66.8, T_AN_09:58.2, T_AN_10:47.5, T_AN_11:38.2, T_AN_12:30, T_AN_Ann:48.1, T_AX_01:43.4, T_AX_02:48.5, T_AX_03:58.3, T_AX_04:69, T_AX_05:77.5, T_AX_06:85.4, T_AX_07:88.3, T_AX_08:88.2, T_AX_09:81.5, T_AX_10:70.6, T_AX_11:57.3, T_AX_12:46, T_AX_Ann:67.8, V_01:8.3, V_02:8.3, V_03:8.9, V_04:8.5, V_05:6.9, V_06:5.8, V_07:5.4, V_08:4.7, V_09:5.1, V_10:6, V_11:7.4, V_12:7.8, V_Ann:6.9, I_01:630, I_02:893, I_03:1224, I_04:1607, I_05:1820, I_06:2017, I_07:2031, I_08:1888, I_09:1494, I_10:1121, I_11:726, I_12:556, I_Ann:1334, P_A_Ann:14.47};
//				var site83 = {metName:"Baton Rouge, LA", T_AN_01:42.2, T_AN_02:44.5, T_AN_03:50.5, T_AN_04:56.9, T_AN_05:65.5, T_AN_06:71.4, T_AN_07:73.9, T_AN_08:73.2, T_AN_09:68.6, T_AN_10:58.1, T_AN_11:48.2, T_AN_12:42.8, T_AN_Ann:58, T_AX_01:61.6, T_AX_02:65.2, T_AX_03:71.4, T_AX_04:78, T_AX_05:85, T_AX_06:89.4, T_AX_07:90.9, T_AX_08:91.3, T_AX_09:87.6, T_AX_10:79.7, T_AX_11:70.1, T_AX_12:63.1, T_AX_Ann:77.8, V_01:7.2, V_02:7.4, V_03:7.4, V_04:7.4, V_05:6.5, V_06:5.4, V_07:4.9, V_08:4.5, V_09:5.1, V_10:5.4, V_11:5.8, V_12:6.5, V_Ann:6, I_01:822, I_02:1075, I_03:1375, I_04:1736, I_05:1894, I_06:1914, I_07:1896, I_08:1813, I_09:1553, I_10:1291, I_11:983, I_12:784, I_Ann:1428, P_A_Ann:14.66};
//				var site84 = {metName:"Lake Charles, LA", T_AN_01:43.4, T_AN_02:46.1, T_AN_03:52.1, T_AN_04:59, T_AN_05:67.5, T_AN_06:73.4, T_AN_07:75.4, T_AN_08:74.6, T_AN_09:69.9, T_AN_10:60.3, T_AN_11:50.5, T_AN_12:44.6, T_AN_Ann:59.7, T_AX_01:61.4, T_AX_02:64.7, T_AX_03:70.8, T_AX_04:77.2, T_AX_05:84.2, T_AX_06:89, T_AX_07:90.6, T_AX_08:91.2, T_AX_09:87.8, T_AX_10:80.3, T_AX_11:70.5, T_AX_12:63.3, T_AX_Ann:77.6, V_01:8.7, V_02:8.9, V_03:8.9, V_04:8.7, V_05:7.4, V_06:6.3, V_07:5.4, V_08:5.1, V_09:6.5, V_10:7.2, V_11:7.6, V_12:8.5, V_Ann:7.4, I_01:833, I_02:1046, I_03:1395, I_04:1727, I_05:1920, I_06:1977, I_07:1930, I_08:1825, I_09:1575, I_10:1321, I_11:987, I_12:786, I_Ann:1443, P_A_Ann:14.68};
//				var site85 = {metName:"New Orleans, LA", T_AN_01:45.7, T_AN_02:48.1, T_AN_03:53.8, T_AN_04:60.5, T_AN_05:68.6, T_AN_06:73.9, T_AN_07:75.7, T_AN_08:75.6, T_AN_09:72.7, T_AN_10:63.4, T_AN_11:52.9, T_AN_12:46.9, T_AN_Ann:61.5, T_AX_01:61.8, T_AX_02:65.1, T_AX_03:70.9, T_AX_04:77.5, T_AX_05:84.7, T_AX_06:88.9, T_AX_07:90.6, T_AX_08:90.4, T_AX_09:87, T_AX_10:79.5, T_AX_11:70.5, T_AX_12:63.6, T_AX_Ann:77.5, V_01:9.2, V_02:9.2, V_03:9.4, V_04:9.4, V_05:8.1, V_06:6.5, V_07:5.8, V_08:5.8, V_09:7.4, V_10:8.1, V_11:8.1, V_12:8.7, V_Ann:8.1, I_01:873, I_02:1114, I_03:1454, I_04:1798, I_05:1964, I_06:1928, I_07:1856, I_08:1791, I_09:1570, I_10:1328, I_11:1038, I_12:827, I_Ann:1462, P_A_Ann:14.69};
//				var site86 = {metName:"Shreveport, LA", T_AN_01:38.2, T_AN_02:41.3, T_AN_03:47.8, T_AN_04:54.9, T_AN_05:64.3, T_AN_06:70.9, T_AN_07:74, T_AN_08:73.4, T_AN_09:67.2, T_AN_10:56.1, T_AN_11:46, T_AN_12:39.2, T_AN_Ann:56.1, T_AX_01:57.2, T_AX_02:61.4, T_AX_03:68.5, T_AX_04:76.1, T_AX_05:83.3, T_AX_06:89.6, T_AX_07:92.9, T_AX_08:93.3, T_AX_09:87.6, T_AX_10:77.8, T_AX_11:66.5, T_AX_12:58.4, T_AX_Ann:76, V_01:8.3, V_02:8.3, V_03:8.9, V_04:8.7, V_05:7.6, V_06:6.5, V_07:6, V_08:5.4, V_09:6.3, V_10:6.3, V_11:7.2, V_12:7.8, V_Ann:7.2, I_01:783, I_02:1001, I_03:1342, I_04:1709, I_05:1837, I_06:2007, I_07:2049, I_08:1915, I_09:1575, I_10:1251, I_11:884, I_12:732, I_Ann:1424, P_A_Ann:14.56};
//				var site87 = {metName:"Bangor, ME", T_AN_01:8.5, T_AN_02:11.1, T_AN_03:21.7, T_AN_04:32.9, T_AN_05:43.3, T_AN_06:53.3, T_AN_07:58.8, T_AN_08:57.1, T_AN_09:48.7, T_AN_10:37.8, T_AN_11:29.5, T_AN_12:17.3, T_AN_Ann:35, T_AX_01:27, T_AX_02:30.5, T_AX_03:39.7, T_AX_04:52.7, T_AX_05:64.9, T_AX_06:74.4, T_AX_07:79.1, T_AX_08:78.3, T_AX_09:69.7, T_AX_10:56.8, T_AX_11:45.1, T_AX_12:33.8, T_AX_Ann:54.3, V_01:7.8, V_02:8.1, V_03:8.9, V_04:8.9, V_05:8.1, V_06:7.2, V_07:6.7, V_08:6.3, V_09:6.9, V_10:7.8, V_11:7.6, V_12:7.6, V_Ann:7.6, I_01:496, I_02:752, I_03:1059, I_04:1410, I_05:1639, I_06:1762, I_07:1751, I_08:1585, I_09:1227, I_10:792, I_11:491, I_12:411, I_Ann:1115, P_A_Ann:14.59};
//				var site88 = {metName:"Caribou, ME", T_AN_01:1.7, T_AN_02:4.4, T_AN_03:15.9, T_AN_04:29.6, T_AN_05:40.9, T_AN_06:50.6, T_AN_07:55.9, T_AN_08:53.4, T_AN_09:45.3, T_AN_10:35.2, T_AN_11:25.5, T_AN_12:12.1, T_AN_Ann:30.9, T_AX_01:19, T_AX_02:22.9, T_AX_03:33.5, T_AX_04:46.8, T_AX_05:61.6, T_AX_06:71.2, T_AX_07:75.1, T_AX_08:73.9, T_AX_09:65.4, T_AX_10:51.4, T_AX_11:38.5, T_AX_12:26.5, T_AX_Ann:48.8, V_01:7.8, V_02:8.3, V_03:8.7, V_04:8.5, V_05:7.6, V_06:6.7, V_07:6, V_08:5.8, V_09:6.5, V_10:7.6, V_11:7.6, V_12:8.1, V_Ann:7.4, I_01:428, I_02:674, I_03:1034, I_04:1390, I_05:1684, I_06:1800, I_07:1703, I_08:1542, I_09:1136, I_10:689, I_11:424, I_12:353, I_Ann:1071, P_A_Ann:14.36};
//				var site89 = {metName:"Portland, ME", T_AN_01:14.9, T_AN_02:17.1, T_AN_03:25.8, T_AN_04:35.3, T_AN_05:44.8, T_AN_06:54.8, T_AN_07:60.2, T_AN_08:59.2, T_AN_09:51.5, T_AN_10:40, T_AN_11:31.9, T_AN_12:21.9, T_AN_Ann:38.1, T_AX_01:30.8, T_AX_02:33.7, T_AX_03:41.3, T_AX_04:52.8, T_AX_05:62.8, T_AX_06:72.6, T_AX_07:77.7, T_AX_08:77.2, T_AX_09:69.4, T_AX_10:57.9, T_AX_11:47.4, T_AX_12:37.2, T_AX_Ann:55.1, V_01:8.1, V_02:8.5, V_03:9.2, V_04:9.2, V_05:8.1, V_06:7.2, V_07:6.7, V_08:6.5, V_09:6.9, V_10:7.6, V_11:7.6, V_12:8.1, V_Ann:7.8, I_01:530, I_02:803, I_03:1111, I_04:1471, I_05:1714, I_06:1838, I_07:1844, I_08:1688, I_09:1295, I_10:879, I_11:552, I_12:458, I_Ann:1182, P_A_Ann:14.66};
//				var site90 = {metName:"Baltimore , MD", T_AN_01:26.6, T_AN_02:27.4, T_AN_03:34.8, T_AN_04:44.3, T_AN_05:53.2, T_AN_06:63.1, T_AN_07:68, T_AN_08:66.6, T_AN_09:59.1, T_AN_10:46.6, T_AN_11:37.7, T_AN_12:29.6, T_AN_Ann:46.4, T_AX_01:42.2, T_AX_02:44.7, T_AX_03:53.5, T_AX_04:65.1, T_AX_05:73.9, T_AX_06:82.8, T_AX_07:86.9, T_AX_08:85.3, T_AX_09:78, T_AX_10:66.7, T_AX_11:56.2, T_AX_12:45.5, T_AX_Ann:65, V_01:7.8, V_02:8.3, V_03:8.7, V_04:8.3, V_05:7.2, V_06:6.5, V_07:6, V_08:5.6, V_09:6.3, V_10:6.3, V_11:6.9, V_12:7.4, V_Ann:7.2, I_01:653, I_02:929, I_03:1231, I_04:1555, I_05:1774, I_06:1918, I_07:1866, I_08:1681, I_09:1350, I_10:1036, I_11:709, I_12:580, I_Ann:1274, P_A_Ann:14.62};
//				var site91 = {metName:"Boston, MA", T_AN_01:23.1, T_AN_02:25, T_AN_03:31.7, T_AN_04:41.2, T_AN_05:50.4, T_AN_06:60.3, T_AN_07:66, T_AN_08:65.2, T_AN_09:58.2, T_AN_10:47.2, T_AN_11:38.6, T_AN_12:29.1, T_AN_Ann:44.7, T_AX_01:36.2, T_AX_02:38.3, T_AX_03:45.1, T_AX_04:55.8, T_AX_05:65.7, T_AX_06:75.8, T_AX_07:80.8, T_AX_08:79.3, T_AX_09:72.1, T_AX_10:61.3, T_AX_11:51.1, T_AX_12:41.4, T_AX_Ann:58.6, V_01:12.5, V_02:12.8, V_03:13, V_04:12.1, V_05:11.2, V_06:10.3, V_07:10.1, V_08:9.8, V_09:10.5, V_10:11.2, V_11:11.4, V_12:12.5, V_Ann:11.4, I_01:558, I_02:833, I_03:1113, I_04:1461, I_05:1703, I_06:1811, I_07:1830, I_08:1657, I_09:1284, I_10:913, I_11:576, I_12:475, I_Ann:1184, P_A_Ann:14.68};
//				var site92 = {metName:"Worchester, MA", T_AN_01:17.7, T_AN_02:19.6, T_AN_03:26.9, T_AN_04:37.5, T_AN_05:47.2, T_AN_06:56.9, T_AN_07:62, T_AN_08:61.1, T_AN_09:53.7, T_AN_10:42.4, T_AN_11:33.8, T_AN_12:23.8, T_AN_Ann:40.2, T_AX_01:31.2, T_AX_02:34, T_AX_03:42.2, T_AX_04:55, T_AX_05:65.2, T_AX_06:73.5, T_AX_07:77.9, T_AX_08:76.7, T_AX_09:68.9, T_AX_10:57.8, T_AX_11:47.3, T_AX_12:36.6, T_AX_Ann:55.5, V_01:11.4, V_02:11.9, V_03:11.4, V_04:10.7, V_05:10.1, V_06:9.2, V_07:8.9, V_08:8.5, V_09:8.9, V_10:10.1, V_11:10.5, V_12:11.6, V_Ann:10.3, I_01:567, I_02:821, I_03:1123, I_04:1454, I_05:1675, I_06:1764, I_07:1848, I_08:1619, I_09:1276, I_10:903, I_11:584, I_12:477, I_Ann:1176, P_A_Ann:14.18};
//				var site93 = {metName:"Alpena, MI", T_AN_01:12.7, T_AN_02:12.1, T_AN_03:19.8, T_AN_04:31.5, T_AN_05:41.4, T_AN_06:51.3, T_AN_07:56.1, T_AN_08:54.7, T_AN_09:47.4, T_AN_10:37.7, T_AN_11:29.3, T_AN_12:19.4, T_AN_Ann:34.4, T_AX_01:26.9, T_AX_02:29.1, T_AX_03:38.3, T_AX_04:51.6, T_AX_05:63.9, T_AX_06:74.3, T_AX_07:78, T_AX_08:76.8, T_AX_09:69.1, T_AX_10:56.1, T_AX_11:43.1, T_AX_12:32.3, T_AX_Ann:53.3, V_01:8.3, V_02:8.3, V_03:8.3, V_04:8.7, V_05:7.8, V_06:6.5, V_07:6.3, V_08:6, V_09:6.7, V_10:7.4, V_11:7.8, V_12:7.8, V_Ann:7.4, I_01:401, I_02:653, I_03:1103, I_04:1457, I_05:1771, I_06:1948, I_07:1896, I_08:1632, I_09:1232, I_10:752, I_11:439, I_12:346, I_Ann:1136, P_A_Ann:14.33};
//				var site94 = {metName:"Detroit Metro_AP, MI", T_AN_01:19.6, T_AN_02:21.6, T_AN_03:28.8, T_AN_04:39.9, T_AN_05:49.9, T_AN_06:60.5, T_AN_07:64.1, T_AN_08:63.4, T_AN_09:55.2, T_AN_10:44, T_AN_11:34.6, T_AN_12:24.9, T_AN_Ann:42.2, T_AX_01:31.9, T_AX_02:34.9, T_AX_03:45.4, T_AX_04:58.7, T_AX_05:69.1, T_AX_06:78.9, T_AX_07:82.3, T_AX_08:80.7, T_AX_09:73.7, T_AX_10:61.4, T_AX_11:48.1, T_AX_12:36.1, T_AX_Ann:58.4, V_01:11, V_02:10.3, V_03:10.1, V_04:10.3, V_05:8.9, V_06:8.1, V_07:8.1, V_08:7.2, V_09:7.6, V_10:9.2, V_11:10.1, V_12:10.3, V_Ann:9.2, I_01:479, I_02:755, I_03:1117, I_04:1442, I_05:1738, I_06:1922, I_07:1896, I_08:1620, I_09:1332, I_10:861, I_11:510, I_12:400, I_Ann:1173, P_A_Ann:14.36};
//				var site95 = {metName:"Detroit - City, MI", T_AN_01:20.9, T_AN_02:22.5, T_AN_03:29.3, T_AN_04:40.1, T_AN_05:50.3, T_AN_06:61.1, T_AN_07:65.5, T_AN_08:64.6, T_AN_09:56.6, T_AN_10:45.4, T_AN_11:35.8, T_AN_12:26.1, T_AN_Ann:43.2, T_AX_01:32.3, T_AX_02:35.3, T_AX_03:45, T_AX_04:58.1, T_AX_05:68.9, T_AX_06:79, T_AX_07:82.8, T_AX_08:81, T_AX_09:73.8, T_AX_10:61.2, T_AX_11:48.1, T_AX_12:36.5, T_AX_Ann:58.5, V_01:10.1, V_02:9.8, V_03:9.6, V_04:9.8, V_05:8.7, V_06:7.6, V_07:7.6, V_08:6.9, V_09:7.4, V_10:8.5, V_11:9.2, V_12:9.6, V_Ann:8.7, I_01:469, I_02:746, I_03:1120, I_04:1437, I_05:1711, I_06:1884, I_07:1850, I_08:1585, I_09:1316, I_10:870, I_11:507, I_12:409, I_Ann:1159, P_A_Ann:14.36};
//				var site96 = {metName:"Flint, MI", T_AN_01:16.7, T_AN_02:18.2, T_AN_03:25.7, T_AN_04:36.6, T_AN_05:46.6, T_AN_06:56.9, T_AN_07:60, T_AN_08:59.1, T_AN_09:50.8, T_AN_10:40.8, T_AN_11:32, T_AN_12:22.3, T_AN_Ann:38.8, T_AX_01:29.8, T_AX_02:33, T_AX_03:43.4, T_AX_04:57.1, T_AX_05:68.1, T_AX_06:77.9, T_AX_07:81.1, T_AX_08:79.4, T_AX_09:72.4, T_AX_10:59.7, T_AX_11:46.5, T_AX_12:34.4, T_AX_Ann:56.9, V_01:10.3, V_02:10.3, V_03:10.3, V_04:10.5, V_05:9.2, V_06:7.6, V_07:7.4, V_08:6.9, V_09:7.6, V_10:8.9, V_11:9.6, V_12:9.6, V_Ann:8.9, I_01:440, I_02:713, I_03:1104, I_04:1474, I_05:1747, I_06:1947, I_07:1921, I_08:1635, I_09:1309, I_10:839, I_11:491, I_12:394, I_Ann:1168, P_A_Ann:14.29};
//				var site97 = {metName:"Grand Rapids, MI", T_AN_01:18.2, T_AN_02:19.7, T_AN_03:26.7, T_AN_04:37.5, T_AN_05:47.8, T_AN_06:58, T_AN_07:61.7, T_AN_08:60.8, T_AN_09:52.4, T_AN_10:41.8, T_AN_11:32.6, T_AN_12:23.7, T_AN_Ann:40.1, T_AX_01:29.8, T_AX_02:32.8, T_AX_03:43.4, T_AX_04:57.2, T_AX_05:68.2, T_AX_06:77.9, T_AX_07:81.1, T_AX_08:79.4, T_AX_09:72.2, T_AX_10:59.5, T_AX_11:46.1, T_AX_12:34.4, T_AX_Ann:56.8, V_01:11, V_02:10.5, V_03:10.5, V_04:11, V_05:9.8, V_06:8.3, V_07:8.1, V_08:7.4, V_09:7.8, V_10:9.4, V_11:10.1, V_12:10.3, V_Ann:9.6, I_01:405, I_02:684, I_03:1109, I_04:1461, I_05:1746, I_06:1943, I_07:1913, I_08:1635, I_09:1306, I_10:819, I_11:487, I_12:367, I_Ann:1156, P_A_Ann:14.27};
//				var site98 = {metName:"Houghton Lake, MI", T_AN_01:12.3, T_AN_02:12.3, T_AN_03:20.3, T_AN_04:32.1, T_AN_05:42.9, T_AN_06:52.2, T_AN_07:55.7, T_AN_08:54.2, T_AN_09:46.6, T_AN_10:37.7, T_AN_11:29, T_AN_12:19.2, T_AN_Ann:34.5, T_AX_01:26.1, T_AX_02:29.1, T_AX_03:39.7, T_AX_04:53.5, T_AX_05:65.5, T_AX_06:75.5, T_AX_07:78.6, T_AX_08:76.9, T_AX_09:69.1, T_AX_10:55.8, T_AX_11:42.3, T_AX_12:31, T_AX_Ann:53.6, V_01:8.7, V_02:8.3, V_03:8.3, V_04:9.2, V_05:8.3, V_06:6.9, V_07:6.7, V_08:6.5, V_09:6.9, V_10:8.1, V_11:8.7, V_12:8.7, V_Ann:7.8, I_01:401, I_02:646, I_03:1089, I_04:1462, I_05:1708, I_06:1894, I_07:1874, I_08:1593, I_09:1219, I_10:763, I_11:439, I_12:363, I_Ann:1121, P_A_Ann:14.1};
//				var site99 = {metName:"Lansing, MI", T_AN_01:16.5, T_AN_02:17.9, T_AN_03:25.4, T_AN_04:36.2, T_AN_05:46.2, T_AN_06:56.4, T_AN_07:59.5, T_AN_08:58.7, T_AN_09:50.3, T_AN_10:40.4, T_AN_11:31.7, T_AN_12:22.1, T_AN_Ann:38.4, T_AX_01:29.8, T_AX_02:32.9, T_AX_03:43.6, T_AX_04:57.3, T_AX_05:67.9, T_AX_06:77.7, T_AX_07:81, T_AX_08:79.2, T_AX_09:72.3, T_AX_10:59.6, T_AX_11:46.3, T_AX_12:34.3, T_AX_Ann:56.8, V_01:10.3, V_02:10.1, V_03:9.8, V_04:10.1, V_05:8.9, V_06:7.6, V_07:7.4, V_08:6.7, V_09:7.2, V_10:8.7, V_11:9.6, V_12:10.1, V_Ann:8.9, I_01:459, I_02:729, I_03:1109, I_04:1441, I_05:1707, I_06:1905, I_07:1863, I_08:1595, I_09:1303, I_10:833, I_11:494, I_12:398, I_Ann:1153, P_A_Ann:14.26};
//				var site100 = {metName:"Muskegon, MI", T_AN_01:20.2, T_AN_02:20.8, T_AN_03:26.7, T_AN_04:37, T_AN_05:46.7, T_AN_06:56.7, T_AN_07:61.3, T_AN_08:60.8, T_AN_09:52.4, T_AN_10:42.6, T_AN_11:33.7, T_AN_12:25.2, T_AN_Ann:40.3, T_AX_01:30.6, T_AX_02:33.1, T_AX_03:42.5, T_AX_04:55.2, T_AX_05:65.9, T_AX_06:75.3, T_AX_07:78.9, T_AX_08:77.9, T_AX_09:70.9, T_AX_10:58.5, T_AX_11:45.9, T_AX_12:35.2, T_AX_Ann:55.8, V_01:11.2, V_02:10.7, V_03:10.3, V_04:10.7, V_05:9.4, V_06:8.3, V_07:8.1, V_08:7.8, V_09:8.3, V_10:9.8, V_11:11, V_12:11, V_Ann:9.6, I_01:391, I_02:659, I_03:1102, I_04:1479, I_05:1775, I_06:1986, I_07:1962, I_08:1671, I_09:1290, I_10:809, I_11:451, I_12:339, I_Ann:1160, P_A_Ann:14.36};
//				var site101 = {metName:"Sault Ste Marie, MI", T_AN_01:8.1, T_AN_02:9.5, T_AN_03:18.2, T_AN_04:30.9, T_AN_05:40.9, T_AN_06:49.8, T_AN_07:54.8, T_AN_08:55, T_AN_09:48.4, T_AN_10:38.3, T_AN_11:28.5, T_AN_12:17, T_AN_Ann:33.3, T_AX_01:22.2, T_AX_02:25.2, T_AX_03:34.2, T_AX_04:47.8, T_AX_05:61.1, T_AX_06:70.8, T_AX_07:74.2, T_AX_08:73.8, T_AX_09:65.8, T_AX_10:52.4, T_AX_11:39.6, T_AX_12:29, T_AX_Ann:49.7, V_01:7.8, V_02:7.8, V_03:8.1, V_04:8.7, V_05:8.5, V_06:7.2, V_07:6.9, V_08:6.7, V_09:7.2, V_10:7.8, V_11:8.5, V_12:8.1, V_Ann:7.8, I_01:357, I_02:617, I_03:1042, I_04:1473, I_05:1794, I_06:1962, I_07:1837, I_08:1611, I_09:1128, I_10:677, I_11:378, I_12:291, I_Ann:1097, P_A_Ann:14.32};
//				var site102 = {metName:"Traverse City, MI", T_AN_01:17, T_AN_02:16.5, T_AN_03:23.3, T_AN_04:33.3, T_AN_05:43.2, T_AN_06:54.2, T_AN_07:58.7, T_AN_08:58.2, T_AN_09:51, T_AN_10:40.9, T_AN_11:31.7, T_AN_12:22.8, T_AN_Ann:37.6, T_AX_01:28.3, T_AX_02:30.6, T_AX_03:40.3, T_AX_04:53.7, T_AX_05:65.6, T_AX_06:75.9, T_AX_07:79.4, T_AX_08:78, T_AX_09:70.4, T_AX_10:57.5, T_AX_11:44.3, T_AX_12:33.4, T_AX_Ann:54.8, V_01:8.3, V_02:8.3, V_03:7.6, V_04:8.1, V_05:6.9, V_06:6.3, V_07:6.5, V_08:6, V_09:6.5, V_10:7.6, V_11:8.1, V_12:7.8, V_Ann:7.4, I_01:403, I_02:648, I_03:1101, I_04:1462, I_05:1756, I_06:1921, I_07:1874, I_08:1619, I_09:1210, I_10:725, I_11:405, I_12:339, I_Ann:1122, P_A_Ann:14.37};
//				var site103 = {metName:"Duluth, MN", T_AN_01:2.6, T_AN_02:7.1, T_AN_03:18.2, T_AN_04:30.7, T_AN_05:41.4, T_AN_06:50.6, T_AN_07:55.9, T_AN_08:55.4, T_AN_09:47.2, T_AN_10:35.7, T_AN_11:23, T_AN_12:9.4, T_AN_Ann:31.4, T_AX_01:18.5, T_AX_02:23.9, T_AX_03:34.3, T_AX_04:48, T_AX_05:61, T_AX_06:69.8, T_AX_07:74.7, T_AX_08:73.6, T_AX_09:64.7, T_AX_10:51, T_AX_11:35.6, T_AX_12:23, T_AX_Ann:48.2, V_01:10.5, V_02:10.3, V_03:10.5, V_04:11, V_05:10.7, V_06:9.4, V_07:8.7, V_08:8.7, V_09:9.6, V_10:10.5, V_11:10.7, V_12:10.3, V_Ann:10.1, I_01:461, I_02:707, I_03:1083, I_04:1499, I_05:1770, I_06:1844, I_07:1899, I_08:1627, I_09:1179, I_10:724, I_11:441, I_12:365, I_Ann:1133, P_A_Ann:13.95};
//				var site104 = {metName:"International Falls, MN", T_AN_01:-4.5, T_AN_02:0.3, T_AN_03:13.7, T_AN_04:28.4, T_AN_05:39.8, T_AN_06:50, T_AN_07:53.4, T_AN_08:51.8, T_AN_09:43.2, T_AN_10:32.5, T_AN_11:19.4, T_AN_12:3.7, T_AN_Ann:27.6, T_AX_01:15, T_AX_02:21.9, T_AX_03:34.5, T_AX_04:50.4, T_AX_05:63.3, T_AX_06:72.4, T_AX_07:76.2, T_AX_08:75, T_AX_09:65.4, T_AX_10:50.6, T_AX_11:33.8, T_AX_12:20, T_AX_Ann:48.2, V_01:7.8, V_02:7.8, V_03:8.5, V_04:8.5, V_05:8.7, V_06:7.6, V_07:6.9, V_08:6.7, V_09:7.6, V_10:8.3, V_11:8.3, V_12:7.6, V_Ann:7.8, I_01:402, I_02:667, I_03:1041, I_04:1501, I_05:1708, I_06:1788, I_07:1807, I_08:1574, I_09:1102, I_10:657, I_11:375, I_12:300, I_Ann:1077, P_A_Ann:14.08};
//				var site105 = {metName:"Minneapolis-St Paul, MN", T_AN_01:8.3, T_AN_02:13.6, T_AN_03:24.6, T_AN_04:37.9, T_AN_05:49.6, T_AN_06:59.7, T_AN_07:64.5, T_AN_08:62.5, T_AN_09:53.3, T_AN_10:40.9, T_AN_11:27.5, T_AN_12:14.4, T_AN_Ann:38.1, T_AX_01:22.8, T_AX_02:28.5, T_AX_03:40.6, T_AX_04:56.7, T_AX_05:68.3, T_AX_06:77.8, T_AX_07:81.9, T_AX_08:79.8, T_AX_09:71.5, T_AX_10:57.8, T_AX_11:41, T_AX_12:27.7, T_AX_Ann:54.5, V_01:9.4, V_02:9.4, V_03:9.8, V_04:10.7, V_05:10.3, V_06:9.2, V_07:8.5, V_08:8.3, V_09:9.2, V_10:9.8, V_11:9.6, V_12:9.2, V_Ann:9.4, I_01:490, I_02:752, I_03:1116, I_04:1476, I_05:1712, I_06:1856, I_07:1930, I_08:1655, I_09:1265, I_10:814, I_11:501, I_12:389, I_Ann:1163, P_A_Ann:14.26};
//				var site106 = {metName:"Rochester, MN", T_AN_01:7.3, T_AN_02:12.2, T_AN_03:23.6, T_AN_04:36, T_AN_05:47.4, T_AN_06:57.5, T_AN_07:60.7, T_AN_08:58.8, T_AN_09:50.1, T_AN_10:38.6, T_AN_11:26.2, T_AN_12:13.3, T_AN_Ann:36, T_AX_01:21.8, T_AX_02:26.8, T_AX_03:39.1, T_AX_04:55.3, T_AX_05:67, T_AX_06:76.4, T_AX_07:79, T_AX_08:77, T_AX_09:70.3, T_AX_10:57.4, T_AX_11:40.7, T_AX_12:27.1, T_AX_Ann:53.2, V_01:13, V_02:13, V_03:13, V_04:13.4, V_05:12.8, V_06:10.7, V_07:9.6, V_08:8.9, V_09:10.3, V_10:11.6, V_11:12.8, V_12:13, V_Ann:11.9, I_01:474, I_02:708, I_03:1106, I_04:1489, I_05:1709, I_06:1891, I_07:1955, I_08:1664, I_09:1286, I_10:848, I_11:513, I_12:384, I_Ann:1169, P_A_Ann:14.01};
//				var site107 = {metName:"St Cloud, MN", T_AN_01:2.8, T_AN_02:7.8, T_AN_03:20.1, T_AN_04:33.1, T_AN_05:44.5, T_AN_06:54.8, T_AN_07:58.6, T_AN_08:56.5, T_AN_09:47.6, T_AN_10:35.9, T_AN_11:23.1, T_AN_12:9.6, T_AN_Ann:32.9, T_AX_01:20.4, T_AX_02:26.3, T_AX_03:38.2, T_AX_04:55, T_AX_05:67.6, T_AX_06:76.4, T_AX_07:80.7, T_AX_08:78.8, T_AX_09:70.3, T_AX_10:56.2, T_AX_11:38.9, T_AX_12:25.4, T_AX_Ann:52.9, V_01:8.3, V_02:8.3, V_03:8.7, V_04:9.4, V_05:9.2, V_06:7.8, V_07:6.7, V_08:6.5, V_09:7.4, V_10:8.5, V_11:8.5, V_12:8.3, V_Ann:8.1, I_01:453, I_02:700, I_03:1094, I_04:1527, I_05:1754, I_06:1906, I_07:1967, I_08:1669, I_09:1259, I_10:802, I_11:481, I_12:367, I_Ann:1165, P_A_Ann:14.16};
//				var site108 = {metName:"Jackson, MS", T_AN_01:37, T_AN_02:39.3, T_AN_03:45.9, T_AN_04:53.3, T_AN_05:62.5, T_AN_06:69.2, T_AN_07:72.1, T_AN_08:71.4, T_AN_09:65.5, T_AN_10:53.9, T_AN_11:43.9, T_AN_12:37.9, T_AN_Ann:54.3, T_AX_01:56.5, T_AX_02:60.8, T_AX_03:68.1, T_AX_04:75.7, T_AX_05:83, T_AX_06:89, T_AX_07:91.1, T_AX_08:91.2, T_AX_09:86.5, T_AX_10:77.1, T_AX_11:66.3, T_AX_12:58.1, T_AX_Ann:75.3, V_01:6.7, V_02:6.9, V_03:7.2, V_04:6.7, V_05:5.6, V_06:4.7, V_07:4, V_08:4, V_09:5.1, V_10:5.1, V_11:5.4, V_12:6.3, V_Ann:5.6, I_01:783, I_02:1039, I_03:1369, I_04:1762, I_05:1929, I_06:2025, I_07:1969, I_08:1849, I_09:1576, I_10:1262, I_11:922, I_12:726, I_Ann:1434, P_A_Ann:14.53};
//				var site109 = {metName:"Meridian, MS", T_AN_01:35.8, T_AN_02:38.1, T_AN_03:44.5, T_AN_04:51.5, T_AN_05:60.8, T_AN_06:67.8, T_AN_07:70.8, T_AN_08:70.2, T_AN_09:64.2, T_AN_10:52.5, T_AN_11:42.5, T_AN_12:36.9, T_AN_Ann:53, T_AX_01:57.1, T_AX_02:61.4, T_AX_03:68.8, T_AX_04:76.2, T_AX_05:83.4, T_AX_06:88.8, T_AX_07:91.4, T_AX_08:91.1, T_AX_09:86.5, T_AX_10:77.3, T_AX_11:66.9, T_AX_12:58.5, T_AX_Ann:75.6, V_01:6.9, V_02:7.2, V_03:7.4, V_04:6.9, V_05:5.8, V_06:4.9, V_07:4.5, V_08:4.3, V_09:5.1, V_10:5.1, V_11:5.6, V_12:6.3, V_Ann:5.8, I_01:783, I_02:1044, I_03:1380, I_04:1726, I_05:1918, I_06:1989, I_07:1945, I_08:1823, I_09:1544, I_10:1252, I_11:924, I_12:727, I_Ann:1421, P_A_Ann:14.53};
//				var site110 = {metName:"Tupelo, MS", T_AN_01:33.2, T_AN_02:35.9, T_AN_03:43, T_AN_04:51, T_AN_05:60.2, T_AN_06:68.1, T_AN_07:71.5, T_AN_08:70.6, T_AN_09:63.4, T_AN_10:51.6, T_AN_11:42, T_AN_12:34.8, T_AN_Ann:52.1, T_AX_01:51.3, T_AX_02:55.8, T_AX_03:64.3, T_AX_04:73, T_AX_05:80.6, T_AX_06:87.4, T_AX_07:90.1, T_AX_08:90.1, T_AX_09:84.2, T_AX_10:74.2, T_AX_11:62.9, T_AX_12:52.8, T_AX_Ann:72.2, V_01:7.6, V_02:7.8, V_03:8.1, V_04:7.6, V_05:6.3, V_06:5.4, V_07:4.7, V_08:4.7, V_09:5.6, V_10:5.6, V_11:6, V_12:6.9, V_Ann:6.3, I_01:730, I_02:964, I_03:1309, I_04:1682, I_05:1912, I_06:2026, I_07:1990, I_08:1849, I_09:1536, I_10:1201, I_11:832, I_12:648, I_Ann:1390, P_A_Ann:14.5};
//				var site111 = {metName:"Columbia, MO", T_AN_01:21.4, T_AN_02:26, T_AN_03:34.2, T_AN_04:44.8, T_AN_05:54.6, T_AN_06:63.3, T_AN_07:67.3, T_AN_08:65.9, T_AN_09:56.7, T_AN_10:46, T_AN_11:35.4, T_AN_12:25.3, T_AN_Ann:45.1, T_AX_01:37.6, T_AX_02:43.9, T_AX_03:54.5, T_AX_04:65.4, T_AX_05:74, T_AX_06:82.2, T_AX_07:86.6, T_AX_08:86.5, T_AX_09:77.8, T_AX_10:66.7, T_AX_11:53.2, T_AX_12:41.4, T_AX_Ann:64.2, V_01:10.3, V_02:10.5, V_03:11.2, V_04:11.2, V_05:9.2, V_06:8.1, V_07:7.4, V_08:7.2, V_09:7.8, V_10:9.2, V_11:10.1, V_12:10.1, V_Ann:9.4, I_01:629, I_02:886, I_03:1251, I_04:1575, I_05:1808, I_06:2033, I_07:2027, I_08:1823, I_09:1490, I_10:1070, I_11:690, I_12:556, I_Ann:1320, P_A_Ann:14.23};
//				var site112 = {metName:"Kansas City, MO", T_AN_01:20.4, T_AN_02:25.2, T_AN_03:33.9, T_AN_04:44.9, T_AN_05:55.1, T_AN_06:64.3, T_AN_07:68.8, T_AN_08:67.5, T_AN_09:57.6, T_AN_10:46.8, T_AN_11:34.9, T_AN_12:24.5, T_AN_Ann:45.3, T_AX_01:37.1, T_AX_02:43.4, T_AX_03:54.2, T_AX_04:64.8, T_AX_05:74.2, T_AX_06:82.7, T_AX_07:87.2, T_AX_08:86.8, T_AX_09:78.1, T_AX_10:66.5, T_AX_11:52.5, T_AX_12:40.8, T_AX_Ann:64, V_01:10.7, V_02:10.7, V_03:11.9, V_04:12.3, V_05:10.3, V_06:9.6, V_07:8.7, V_08:8.5, V_09:9.2, V_10:10.3, V_11:10.7, V_12:10.5, V_Ann:10.3, I_01:641, I_02:929, I_03:1273, I_04:1566, I_05:1815, I_06:1999, I_07:2028, I_08:1823, I_09:1488, I_10:1074, I_11:701, I_12:566, I_Ann:1325, P_A_Ann:14.18};
//				var site113 = {metName:"Springfield, MO", T_AN_01:24.3, T_AN_02:28.5, T_AN_03:35.8, T_AN_04:45.6, T_AN_05:55.5, T_AN_06:63.9, T_AN_07:68.3, T_AN_08:67.3, T_AN_09:58.2, T_AN_10:47.3, T_AN_11:36.6, T_AN_12:27.1, T_AN_Ann:46.5, T_AX_01:42.3, T_AX_02:48.2, T_AX_03:56.8, T_AX_04:66.6, T_AX_05:74.5, T_AX_06:82.9, T_AX_07:87.4, T_AX_08:87.9, T_AX_09:79.2, T_AX_10:68.4, T_AX_11:55.7, T_AX_12:44.8, T_AX_Ann:66.2, V_01:9.8, V_02:10.1, V_03:11, V_04:10.7, V_05:8.9, V_06:8.1, V_07:7.2, V_08:7.2, V_09:7.8, V_10:8.9, V_11:9.8, V_12:9.8, V_Ann:9.2, I_01:677, I_02:929, I_03:1242, I_04:1593, I_05:1783, I_06:1996, I_07:2030, I_08:1868, I_09:1494, I_10:1129, I_11:742, I_12:601, I_Ann:1340, P_A_Ann:14.04};
//				var site114 = {metName:"St Louis - Lambert, MO", T_AN_01:24.6, T_AN_02:28.7, T_AN_03:37.2, T_AN_04:47.9, T_AN_05:58.2, T_AN_06:67.2, T_AN_07:71.3, T_AN_08:70, T_AN_09:60.9, T_AN_10:49.6, T_AN_11:38.5, T_AN_12:28.5, T_AN_Ann:48.5, T_AX_01:39.2, T_AX_02:45.1, T_AX_03:55.5, T_AX_04:67, T_AX_05:75.7, T_AX_06:84.3, T_AX_07:88.1, T_AX_08:87.3, T_AX_09:79.4, T_AX_10:68.2, T_AX_11:54.7, T_AX_12:42.8, T_AX_Ann:65.6, V_01:9.8, V_02:10.1, V_03:10.5, V_04:10.5, V_05:9.2, V_06:8.1, V_07:7.6, V_08:7.2, V_09:7.4, V_10:8.5, V_11:9.4, V_12:9.6, V_Ann:8.9, I_01:598, I_02:882, I_03:1217, I_04:1557, I_05:1765, I_06:2007, I_07:1978, I_08:1802, I_09:1471, I_10:1076, I_11:703, I_12:537, I_Ann:1299, P_A_Ann:14.39};
//				var site115 = {metName:"St Louis - Spirit, MO", T_AN_01:22.6, T_AN_02:26.7, T_AN_03:34.6, T_AN_04:44.9, T_AN_05:55, T_AN_06:63.9, T_AN_07:67.9, T_AN_08:66, T_AN_09:56.3, T_AN_10:45.4, T_AN_11:35.4, T_AN_12:26.2, T_AN_Ann:45.4, T_AX_01:39.6, T_AX_02:45.5, T_AX_03:56.3, T_AX_04:67.5, T_AX_05:75.8, T_AX_06:84.1, T_AX_07:88, T_AX_08:87.2, T_AX_09:79.4, T_AX_10:68.6, T_AX_11:55.3, T_AX_12:43.3, T_AX_Ann:65.9, V_01:8.1, V_02:8.1, V_03:8.5, V_04:8.7, V_05:6.7, V_06:5.8, V_07:5.4, V_08:4.9, V_09:4.9, V_10:6.3, V_11:7.4, V_12:7.4, V_Ann:6.9, I_01:604, I_02:888, I_03:1226, I_04:1570, I_05:1763, I_06:2009, I_07:1992, I_08:1811, I_09:1467, I_10:1073, I_11:694, I_12:545, I_Ann:1303, P_A_Ann:14.45};
//				var site116 = {metName:"Billings, MT", T_AN_01:18, T_AN_02:21.8, T_AN_03:27.3, T_AN_04:35.2, T_AN_05:44.2, T_AN_06:52.5, T_AN_07:59.6, T_AN_08:58, T_AN_09:48.8, T_AN_10:37.7, T_AN_11:27.3, T_AN_12:19.6, T_AN_Ann:37.5, T_AX_01:34.9, T_AX_02:40.1, T_AX_03:48, T_AX_04:56.1, T_AX_05:66.4, T_AX_06:75.1, T_AX_07:85.7, T_AX_08:84.8, T_AX_09:73, T_AX_10:58.1, T_AX_11:44.8, T_AX_12:35.3, T_AX_Ann:58.5, V_01:12.8, V_02:11.6, V_03:10.7, V_04:10.5, V_05:9.8, V_06:9.4, V_07:8.9, V_08:8.9, V_09:9.4, V_10:10.5, V_11:11.9, V_12:12.5, V_Ann:10.5, I_01:478, I_02:784, I_03:1148, I_04:1514, I_05:1883, I_06:2048, I_07:2221, I_08:1912, I_09:1424, I_10:903, I_11:544, I_12:398, I_Ann:1271, P_A_Ann:12.92};
//				var site117 = {metName:"Glasgow, MT", T_AN_01:3.8, T_AN_02:9.8, T_AN_03:20.6, T_AN_04:32.3, T_AN_05:42.2, T_AN_06:51.5, T_AN_07:57.4, T_AN_08:56.3, T_AN_09:45.6, T_AN_10:32.9, T_AN_11:19.9, T_AN_12:8.3, T_AN_Ann:31.7, T_AX_01:21.7, T_AX_02:28.4, T_AX_03:41.4, T_AX_04:56.4, T_AX_05:66.5, T_AX_06:74.7, T_AX_07:83.9, T_AX_08:83.7, T_AX_09:72.1, T_AX_10:55.9, T_AX_11:39.4, T_AX_12:26.3, T_AX_Ann:54.2, V_01:9.4, V_02:9.4, V_03:11, V_04:12.1, V_05:12.1, V_06:11, V_07:10.1, V_08:10.7, V_09:10.3, V_10:10.3, V_11:9.6, V_12:9.4, V_Ann:10.5, I_01:366, I_02:628, I_03:1068, I_04:1545, I_05:1889, I_06:2051, I_07:2180, I_08:1872, I_09:1340, I_10:834, I_11:444, I_12:311, I_Ann:1211, P_A_Ann:13.53};
//				var site118 = {metName:"Great Falls, MT", T_AN_01:15.9, T_AN_02:18.8, T_AN_03:23.7, T_AN_04:31.6, T_AN_05:39.9, T_AN_06:47, T_AN_07:53, T_AN_08:51.7, T_AN_09:44, T_AN_10:34.2, T_AN_11:25.2, T_AN_12:17.7, T_AN_Ann:33.5, T_AX_01:34.1, T_AX_02:38.1, T_AX_03:45.2, T_AX_04:53.9, T_AX_05:63.7, T_AX_06:71.1, T_AX_07:82.7, T_AX_08:81.5, T_AX_09:70.5, T_AX_10:56.5, T_AX_11:42.7, T_AX_12:35, T_AX_Ann:56.2, V_01:13.4, V_02:11.9, V_03:11.9, V_04:11.2, V_05:10.5, V_06:9.8, V_07:8.9, V_08:8.9, V_09:10.1, V_10:11.9, V_11:13.4, V_12:13.6, V_Ann:11.4, I_01:428, I_02:706, I_03:1106, I_04:1450, I_05:1806, I_06:2001, I_07:2163, I_08:1857, I_09:1360, I_10:840, I_11:465, I_12:358, I_Ann:1212, P_A_Ann:12.88};
//				var site119 = {metName:"Harve City, MT", T_AN_01:6.4, T_AN_02:12, T_AN_03:20.7, T_AN_04:31.4, T_AN_05:40.8, T_AN_06:48.9, T_AN_07:54.1, T_AN_08:52.5, T_AN_09:42.6, T_AN_10:31.1, T_AN_11:20.4, T_AN_12:9.9, T_AN_Ann:30.9, T_AX_01:26.6, T_AX_02:33.1, T_AX_03:43.8, T_AX_04:56.9, T_AX_05:66.4, T_AX_06:74, T_AX_07:84.3, T_AX_08:83.5, T_AX_09:72, T_AX_10:57.3, T_AX_11:41.6, T_AX_12:30.6, T_AX_Ann:55.8, V_01:9.6, V_02:9.2, V_03:9.8, V_04:10.5, V_05:10.5, V_06:9.6, V_07:8.7, V_08:8.7, V_09:8.9, V_10:9.4, V_11:10.1, V_12:9.8, V_Ann:9.6, I_01:371, I_02:632, I_03:1091, I_04:1522, I_05:1828, I_06:2035, I_07:2166, I_08:1862, I_09:1333, I_10:826, I_11:435, I_12:318, I_Ann:1202, P_A_Ann:13.39};
//				var site120 = {metName:"Helena, MT", T_AN_01:13.5, T_AN_02:18.4, T_AN_03:24.9, T_AN_04:32.8, T_AN_05:41.8, T_AN_06:49, T_AN_07:55.3, T_AN_08:53, T_AN_09:44.4, T_AN_10:33.5, T_AN_11:23.1, T_AN_12:14.5, T_AN_Ann:33.7, T_AX_01:31.2, T_AX_02:37.6, T_AX_03:46.8, T_AX_04:55.6, T_AX_05:65.6, T_AX_06:73.3, T_AX_07:84.6, T_AX_08:83.3, T_AX_09:72.2, T_AX_10:57, T_AX_11:41.8, T_AX_12:31.6, T_AX_Ann:56.7, V_01:5.6, V_02:6, V_03:7.4, V_04:8.3, V_05:8.1, V_06:7.8, V_07:7.2, V_08:6.5, V_09:6.3, V_10:6.5, V_11:6, V_12:5.6, V_Ann:6.7, I_01:456, I_02:767, I_03:1185, I_04:1513, I_05:1832, I_06:2048, I_07:2214, I_08:1898, I_09:1420, I_10:889, I_11:503, I_12:390, I_Ann:1260, P_A_Ann:12.79};
//				var site121 = {metName:"Kalispell, MT", T_AN_01:17.2, T_AN_02:20, T_AN_03:25.5, T_AN_04:31.9, T_AN_05:39.4, T_AN_06:45.2, T_AN_07:49.1, T_AN_08:47.2, T_AN_09:39.6, T_AN_10:30.5, T_AN_11:24.8, T_AN_12:18.3, T_AN_Ann:32.4, T_AX_01:30.2, T_AX_02:35.6, T_AX_03:44.4, T_AX_04:54.4, T_AX_05:64, T_AX_06:70, T_AX_07:80.7, T_AX_08:80.3, T_AX_09:69.5, T_AX_10:53.9, T_AX_11:39.1, T_AX_12:30, T_AX_Ann:54.4, V_01:4, V_02:4.3, V_03:5.8, V_04:6.7, V_05:6.5, V_06:5.8, V_07:5.4, V_08:5.1, V_09:4.7, V_10:4.5, V_11:4, V_12:3.8, V_Ann:5.1, I_01:322, I_02:605, I_03:1031, I_04:1440, I_05:1761, I_06:1895, I_07:2166, I_08:1812, I_09:1300, I_10:742, I_11:377, I_12:259, I_Ann:1142, P_A_Ann:13.2};
//				var site122 = {metName:"Missoula, MT", T_AN_01:19, T_AN_02:22.1, T_AN_03:27.8, T_AN_04:33.2, T_AN_05:40.5, T_AN_06:47, T_AN_07:52.7, T_AN_08:50.9, T_AN_09:43, T_AN_10:33.4, T_AN_11:25.3, T_AN_12:19, T_AN_Ann:34.5, T_AX_01:31.5, T_AX_02:37.6, T_AX_03:48, T_AX_04:55.9, T_AX_05:65.6, T_AX_06:72.4, T_AX_07:84.7, T_AX_08:83.5, T_AX_09:72.2, T_AX_10:56, T_AX_11:39.9, T_AX_12:30.8, T_AX_Ann:56.5, V_01:3.8, V_02:4.3, V_03:5.8, V_04:6.5, V_05:6.3, V_06:6.5, V_07:6.3, V_08:5.8, V_09:4.9, V_10:4.5, V_11:4, V_12:4, V_Ann:5.1, I_01:387, I_02:676, I_03:1088, I_04:1451, I_05:1787, I_06:1966, I_07:2229, I_08:1883, I_09:1385, I_10:820, I_11:428, I_12:315, I_Ann:1201, P_A_Ann:13.1};
//				var site123 = {metName:"Grand Island, NE", T_AN_01:14.9, T_AN_02:19.4, T_AN_03:28, T_AN_04:38.4, T_AN_05:50.2, T_AN_06:60, T_AN_07:65.1, T_AN_08:63.2, T_AN_09:52.8, T_AN_10:40.4, T_AN_11:27.6, T_AN_12:18.3, T_AN_Ann:39.9, T_AX_01:34.7, T_AX_02:39.7, T_AX_03:50.4, T_AX_04:61.8, T_AX_05:72, T_AX_06:81.9, T_AX_07:86.5, T_AX_08:84.7, T_AX_09:77.6, T_AX_10:64.3, T_AX_11:49.1, T_AX_12:37.4, T_AX_Ann:61.7, V_01:11, V_02:11.4, V_03:12.5, V_04:13.4, V_05:12.1, V_06:10.7, V_07:9.2, V_08:8.9, V_09:10.5, V_10:11.2, V_11:11.2, V_12:11, V_Ann:11.2, I_01:637, I_02:908, I_03:1284, I_04:1619, I_05:1846, I_06:2102, I_07:2100, I_08:1855, I_09:1492, I_10:1080, I_11:711, I_12:554, I_Ann:1349, P_A_Ann:13.75};
//				var site124 = {metName:"Lincoln, NE", T_AN_01:14.3, T_AN_02:19.3, T_AN_03:28.4, T_AN_04:39.5, T_AN_05:51.1, T_AN_06:61.6, T_AN_07:66.5, T_AN_08:64.2, T_AN_09:53.6, T_AN_10:41.4, T_AN_11:28.4, T_AN_12:18.1, T_AN_Ann:40.5, T_AX_01:34.1, T_AX_02:39.8, T_AX_03:51.5, T_AX_04:63.2, T_AX_05:73.5, T_AX_06:82.9, T_AX_07:87.8, T_AX_08:86.1, T_AX_09:78.3, T_AX_10:65.4, T_AX_11:49.7, T_AX_12:37.8, T_AX_Ann:62.5, V_01:8.9, V_02:9.6, V_03:11, V_04:11.9, V_05:10.5, V_06:9.6, V_07:8.7, V_08:8.3, V_09:9.2, V_10:9.6, V_11:9.4, V_12:8.9, V_Ann:9.6, I_01:591, I_02:872, I_03:1205, I_04:1555, I_05:1782, I_06:1994, I_07:2017, I_08:1784, I_09:1465, I_10:1030, I_11:663, I_12:521, I_Ann:1290, P_A_Ann:14.08};
//				var site125 = {metName:"Norfolk_NE, NE", T_AN_01:13, T_AN_02:18, T_AN_03:26.9, T_AN_04:38.1, T_AN_05:49.2, T_AN_06:59.4, T_AN_07:64.1, T_AN_08:62.2, T_AN_09:52, T_AN_10:39.7, T_AN_11:26.7, T_AN_12:16.8, T_AN_Ann:38.8, T_AX_01:31.9, T_AX_02:37.1, T_AX_03:48.3, T_AX_04:60.8, T_AX_05:71.7, T_AX_06:80.9, T_AX_07:85.5, T_AX_08:83.5, T_AX_09:76.3, T_AX_10:63.2, T_AX_11:47.2, T_AX_12:34.8, T_AX_Ann:60.1, V_01:10.5, V_02:11, V_03:11.6, V_04:12.5, V_05:11.2, V_06:9.8, V_07:8.9, V_08:8.7, V_09:9.8, V_10:10.3, V_11:10.5, V_12:10.5, V_Ann:10.5, I_01:566, I_02:836, I_03:1226, I_04:1556, I_05:1807, I_06:2036, I_07:2063, I_08:1794, I_09:1452, I_10:1012, I_11:647, I_12:507, I_Ann:1292, P_A_Ann:13.89};
//				var site126 = {metName:"North Platte, NE", T_AN_01:12.7, T_AN_02:16.5, T_AN_03:24.5, T_AN_04:34.2, T_AN_05:45.3, T_AN_06:55.5, T_AN_07:61.7, T_AN_08:59.7, T_AN_09:48.3, T_AN_10:35, T_AN_11:22.3, T_AN_12:14.1, T_AN_Ann:35.8, T_AX_01:38.7, T_AX_02:43, T_AX_03:52.1, T_AX_04:60.8, T_AX_05:71.1, T_AX_06:80.7, T_AX_07:87.2, T_AX_08:85.1, T_AX_09:77.3, T_AX_10:63.7, T_AX_11:49.9, T_AX_12:40, T_AX_Ann:62.5, V_01:8.3, V_02:8.9, V_03:10.3, V_04:11.4, V_05:10.3, V_06:9.4, V_07:8.5, V_08:8.1, V_09:8.9, V_10:8.9, V_11:8.7, V_12:8.3, V_Ann:9.2, I_01:666, I_02:938, I_03:1324, I_04:1642, I_05:1899, I_06:2170, I_07:2191, I_08:1905, I_09:1546, I_10:1097, I_11:710, I_12:587, I_Ann:1390, P_A_Ann:13.29};
//				var site127 = {metName:"Omaha, NE", T_AN_01:14.2, T_AN_02:19.5, T_AN_03:28.8, T_AN_04:40.7, T_AN_05:52, T_AN_06:62.1, T_AN_07:67, T_AN_08:64.8, T_AN_09:54.6, T_AN_10:42.7, T_AN_11:29.8, T_AN_12:18.9, T_AN_Ann:41.3, T_AX_01:31.7, T_AX_02:37.7, T_AX_03:49.9, T_AX_04:62.7, T_AX_05:73, T_AX_06:82.3, T_AX_07:86.2, T_AX_08:84.4, T_AX_09:77.2, T_AX_10:64.5, T_AX_11:48.4, T_AX_12:35.9, T_AX_Ann:61.2, V_01:10.1, V_02:10.3, V_03:11.2, V_04:11.9, V_05:10.5, V_06:9.4, V_07:8.3, V_08:8.1, V_09:8.9, V_10:9.6, V_11:10.1, V_12:9.8, V_Ann:9.8, I_01:582, I_02:852, I_03:1204, I_04:1512, I_05:1776, I_06:1992, I_07:2001, I_08:1749, I_09:1447, I_10:1007, I_11:646, I_12:506, I_Ann:1273, P_A_Ann:14.18};
//				var site128 = {metName:"Scottsbluff, NE", T_AN_01:14.8, T_AN_02:17.7, T_AN_03:24.6, T_AN_04:32.6, T_AN_05:43.5, T_AN_06:52.9, T_AN_07:59.1, T_AN_08:57.1, T_AN_09:46.2, T_AN_10:33.7, T_AN_11:22.5, T_AN_12:14.9, T_AN_Ann:35, T_AX_01:39.8, T_AX_02:44, T_AX_03:52.2, T_AX_04:60, T_AX_05:70.8, T_AX_06:80.8, T_AX_07:88.7, T_AX_08:86.5, T_AX_09:77.2, T_AX_10:63, T_AX_11:49.2, T_AX_12:40.1, T_AX_Ann:62.7, V_01:9.6, V_02:10.3, V_03:11, V_04:11.4, V_05:11, V_06:9.8, V_07:8.5, V_08:8.3, V_09:8.3, V_10:9.2, V_11:9.4, V_12:9.4, V_Ann:9.6, I_01:672, I_02:923, I_03:1295, I_04:1647, I_05:1955, I_06:2180, I_07:2261, I_08:1963, I_09:1571, I_10:1089, I_11:715, I_12:559, I_Ann:1403, P_A_Ann:12.75};
//				var site129 = {metName:"Valentine, NE", T_AN_01:11.5, T_AN_02:15.7, T_AN_03:23.8, T_AN_04:33.8, T_AN_05:44.6, T_AN_06:54.7, T_AN_07:60.8, T_AN_08:59.2, T_AN_09:48.3, T_AN_10:34.8, T_AN_11:22.2, T_AN_12:13.5, T_AN_Ann:35.2, T_AX_01:35.5, T_AX_02:39.5, T_AX_03:48.6, T_AX_04:58.8, T_AX_05:69.9, T_AX_06:79.4, T_AX_07:87.3, T_AX_08:86.1, T_AX_09:76.7, T_AX_10:62, T_AX_11:47.4, T_AX_12:37.2, T_AX_Ann:60.7, V_01:9.4, V_02:9.8, V_03:10.5, V_04:11.4, V_05:11.4, V_06:10.3, V_07:9.2, V_08:9.6, V_09:10.3, V_10:10.1, V_11:9.8, V_12:9.6, V_Ann:10.1, I_01:601, I_02:853, I_03:1215, I_04:1539, I_05:1862, I_06:2066, I_07:2187, I_08:1883, I_09:1496, I_10:1011, I_11:643, I_12:514, I_Ann:1322, P_A_Ann:13.39};
//				var site130 = {metName:"Ely, NV", T_AN_01:13.1, T_AN_02:16.9, T_AN_03:22.9, T_AN_04:27.7, T_AN_05:34.4, T_AN_06:42, T_AN_07:49.2, T_AN_08:48.1, T_AN_09:38.7, T_AN_10:28.9, T_AN_11:19.8, T_AN_12:12.6, T_AN_Ann:29.5, T_AX_01:38.9, T_AX_02:41.6, T_AX_03:49.8, T_AX_04:56, T_AX_05:67, T_AX_06:77.7, T_AX_07:86.9, T_AX_08:84.6, T_AX_09:75.6, T_AX_10:62.1, T_AX_11:48.1, T_AX_12:38.8, T_AX_Ann:60.6, V_01:9.2, V_02:8.9, V_03:9.6, V_04:9.8, V_05:9.4, V_06:9.6, V_07:9.4, V_08:9.6, V_09:9.2, V_10:9.2, V_11:8.7, V_12:8.9, V_Ann:9.4, I_01:724, I_02:1006, I_03:1454, I_04:1843, I_05:2146, I_06:2418, I_07:2371, I_08:2173, I_09:1800, I_10:1303, I_11:875, I_12:669, I_Ann:1565, P_A_Ann:11.72};
//				var site131 = {metName:"Las Vegas, NV", T_AN_01:39.4, T_AN_02:43.2, T_AN_03:49.2, T_AN_04:55.6, T_AN_05:65.8, T_AN_06:74.3, T_AN_07:81.2, T_AN_08:79.8, T_AN_09:71.4, T_AN_10:58.7, T_AN_11:46.3, T_AN_12:38.7, T_AN_Ann:58.6, T_AX_01:57.6, T_AX_02:61.9, T_AX_03:69.8, T_AX_04:77.1, T_AX_05:88.2, T_AX_06:97.7, T_AX_07:103.7, T_AX_08:101.8, T_AX_09:94, T_AX_10:80.2, T_AX_11:66, T_AX_12:56.3, T_AX_Ann:79.5, V_01:6.5, V_02:7.2, V_03:8.7, V_04:10.3, V_05:10.1, V_06:10.1, V_07:8.9, V_08:8.5, V_09:7.8, V_10:7.2, V_11:6.5, V_12:6.5, V_Ann:8.3, I_01:965, I_02:1244, I_03:1732, I_04:2164, I_05:2466, I_06:2628, I_07:2439, I_08:2202, I_09:1938, I_10:1479, I_11:1093, I_12:885, I_Ann:1769, P_A_Ann:13.6};
//				var site132 = {metName:"Lovelock, NV", T_AN_01:20.8, T_AN_02:25.3, T_AN_03:29.2, T_AN_04:35.2, T_AN_05:44.8, T_AN_06:51.9, T_AN_07:58.3, T_AN_08:54.6, T_AN_09:45.3, T_AN_10:35.2, T_AN_11:24.4, T_AN_12:19.3, T_AN_Ann:37, T_AX_01:43.4, T_AX_02:50.5, T_AX_03:59.3, T_AX_04:64.7, T_AX_05:75.4, T_AX_06:84.8, T_AX_07:95.4, T_AX_08:92.8, T_AX_09:83.9, T_AX_10:69.3, T_AX_11:53.9, T_AX_12:43.4, T_AX_Ann:68.1, V_01:4.9, V_02:6, V_03:7.4, V_04:8.3, V_05:8.5, V_06:8.3, V_07:7.6, V_08:6.9, V_09:6, V_10:5.8, V_11:5.1, V_12:4.7, V_Ann:6.7, I_01:687, I_02:992, I_03:1414, I_04:1822, I_05:2189, I_06:2471, I_07:2533, I_08:2252, I_09:1833, I_10:1274, I_11:802, I_12:587, I_Ann:1571, P_A_Ann:12.76};
//				var site133 = {metName:"Mercury, NV", T_AN_01:35.1, T_AN_02:38.2, T_AN_03:42.8, T_AN_04:48.2, T_AN_05:57.9, T_AN_06:66.2, T_AN_07:73.7, T_AN_08:72.4, T_AN_09:64, T_AN_10:52, T_AN_11:41.1, T_AN_12:34.2, T_AN_Ann:52.2, T_AX_01:55.2, T_AX_02:58.3, T_AX_03:65.8, T_AX_04:72, T_AX_05:82.9, T_AX_06:92.2, T_AX_07:99, T_AX_08:97.3, T_AX_09:89.6, T_AX_10:76.4, T_AX_11:63.3, T_AX_12:54.1, T_AX_Ann:75.5, V_01:8.3, V_02:8.5, V_03:9.2, V_04:10.3, V_05:9.8, V_06:10.1, V_07:9.2, V_08:9.2, V_09:8.3, V_10:8.1, V_11:8.1, V_12:8.1, V_Ann:8.9, I_01:937, I_02:1212, I_03:1714, I_04:2151, I_05:2464, I_06:2664, I_07:2527, I_08:2313, I_09:1977, I_10:1482, I_11:1077, I_12:860, I_Ann:1781, P_A_Ann:13.16};
//				var site134 = {metName:"Reno, NV", T_AN_01:25.1, T_AN_02:28.6, T_AN_03:32.8, T_AN_04:37, T_AN_05:45.5, T_AN_06:52.3, T_AN_07:59.2, T_AN_08:56.7, T_AN_09:48.7, T_AN_10:39, T_AN_11:30, T_AN_12:25.1, T_AN_Ann:40, T_AX_01:45.5, T_AX_02:50.3, T_AX_03:57.7, T_AX_04:62.3, T_AX_05:72.6, T_AX_06:81.9, T_AX_07:91.7, T_AX_08:89.7, T_AX_09:81.8, T_AX_10:68.5, T_AX_11:54.8, T_AX_12:45.2, T_AX_Ann:66.8, V_01:4.7, V_02:5.6, V_03:6.9, V_04:8.3, V_05:7.8, V_06:7.6, V_07:7.2, V_08:6.5, V_09:5.4, V_10:4.7, V_11:4.9, V_12:5.1, V_Ann:6.3, I_01:715, I_02:992, I_03:1471, I_04:1889, I_05:2232, I_06:2473, I_07:2512, I_08:2249, I_09:1854, I_10:1310, I_11:859, I_12:633, I_Ann:1599, P_A_Ann:12.53};
//				var site135 = {metName:"Tonopah, NV", T_AN_01:21.9, T_AN_02:25.6, T_AN_03:29.9, T_AN_04:34.9, T_AN_05:44.2, T_AN_06:52.3, T_AN_07:58.8, T_AN_08:56.8, T_AN_09:49.1, T_AN_10:38.4, T_AN_11:27.5, T_AN_12:20.2, T_AN_Ann:38.3, T_AX_01:44.5, T_AX_02:48.3, T_AX_03:56.5, T_AX_04:62.7, T_AX_05:73.5, T_AX_06:83.5, T_AX_07:91.4, T_AX_08:89.2, T_AX_09:80.6, T_AX_10:67.6, T_AX_11:53.7, T_AX_12:43.8, T_AX_Ann:66.3, V_01:8.9, V_02:9.6, V_03:10.7, V_04:11.6, V_05:10.7, V_06:10.3, V_07:9.2, V_08:9.2, V_09:8.9, V_10:9.4, V_11:9.2, V_12:8.7, V_Ann:9.6, I_01:828, I_02:1128, I_03:1629, I_04:2056, I_05:2344, I_06:2586, I_07:2507, I_08:2304, I_09:1922, I_10:1430, I_11:997, I_12:779, I_Ann:1709, P_A_Ann:12.08};
//				var site136 = {metName:"Winnemucca, NV", T_AN_01:20.5, T_AN_02:24.4, T_AN_03:27.5, T_AN_04:31.4, T_AN_05:39.4, T_AN_06:46.3, T_AN_07:53.5, T_AN_08:49.9, T_AN_09:40.7, T_AN_10:30.5, T_AN_11:23.1, T_AN_12:18.8, T_AN_Ann:33.8, T_AX_01:41.4, T_AX_02:47, T_AX_03:55.3, T_AX_04:60.4, T_AX_05:71.3, T_AX_06:81.5, T_AX_07:92.8, T_AX_08:90.4, T_AX_09:81.1, T_AX_10:66.1, T_AX_11:51.3, T_AX_12:41.1, T_AX_Ann:65, V_01:7.2, V_02:7.6, V_03:8.1, V_04:8.3, V_05:8.3, V_06:8.3, V_07:7.6, V_08:7.4, V_09:6.9, V_10:6.7, V_11:6.7, V_12:7.2, V_Ann:7.6, I_01:652, I_02:964, I_03:1380, I_04:1762, I_05:2147, I_06:2437, I_07:2523, I_08:2232, I_09:1795, I_10:1248, I_11:760, I_12:555, I_Ann:1538, P_A_Ann:12.57};
//				var site137 = {metName:"Concord, NH", T_AN_01:12.3, T_AN_02:14.6, T_AN_03:23.2, T_AN_04:33.2, T_AN_05:43.2, T_AN_06:53.8, T_AN_07:58.5, T_AN_08:57.1, T_AN_09:48.4, T_AN_10:36.8, T_AN_11:29, T_AN_12:18.8, T_AN_Ann:35.7, T_AX_01:30.5, T_AX_02:34, T_AX_03:43, T_AX_04:57, T_AX_05:68.1, T_AX_06:77, T_AX_07:81.4, T_AX_08:80.6, T_AX_09:72.3, T_AX_10:59.8, T_AX_11:47.8, T_AX_12:36.3, T_AX_Ann:57.3, V_01:6.7, V_02:7.4, V_03:7.4, V_04:7.2, V_05:6.3, V_06:5.6, V_07:5.1, V_08:4.7, V_09:4.9, V_10:5.6, V_11:5.6, V_12:6.5, V_Ann:6, I_01:535, I_02:803, I_03:1097, I_04:1469, I_05:1684, I_06:1801, I_07:1844, I_08:1644, I_09:1267, I_10:869, I_11:556, I_12:446, I_Ann:1168, P_A_Ann:14.5};
//				var site138 = {metName:"Atlantic City, NJ", T_AN_01:25.5, T_AN_02:25.9, T_AN_03:32.7, T_AN_04:41.9, T_AN_05:50.5, T_AN_06:61, T_AN_07:66.5, T_AN_08:65, T_AN_09:57.5, T_AN_10:45.6, T_AN_11:37.1, T_AN_12:28.7, T_AN_Ann:44.8, T_AX_01:42.4, T_AX_02:44, T_AX_03:51.4, T_AX_04:62, T_AX_05:71, T_AX_06:79.9, T_AX_07:84.8, T_AX_08:83.4, T_AX_09:76.9, T_AX_10:66.2, T_AX_11:55.9, T_AX_12:46.1, T_AX_Ann:63.7, V_01:9.8, V_02:10.1, V_03:10.5, V_04:10.3, V_05:8.7, V_06:7.8, V_07:7.4, V_08:6.7, V_09:7.4, V_10:7.6, V_11:8.5, V_12:9.4, V_Ann:8.7, I_01:646, I_02:924, I_03:1224, I_04:1581, I_05:1800, I_06:1935, I_07:1927, I_08:1733, I_09:1394, I_10:1048, I_11:720, I_12:578, I_Ann:1292, P_A_Ann:14.66};
//				var site139 = {metName:"Newark, NJ", T_AN_01:26.3, T_AN_02:27.7, T_AN_03:34.8, T_AN_04:44.8, T_AN_05:54.1, T_AN_06:64.3, T_AN_07:69.5, T_AN_08:68.6, T_AN_09:60.9, T_AN_10:49, T_AN_11:40.3, T_AN_12:31, T_AN_Ann:47.6, T_AX_01:39.6, T_AX_02:42.1, T_AX_03:50.5, T_AX_04:62, T_AX_05:72, T_AX_06:81.3, T_AX_07:85.7, T_AX_08:84.2, T_AX_09:76.7, T_AX_10:65.2, T_AX_11:54.6, T_AX_12:43.8, T_AX_Ann:63.1, V_01:11, V_02:11.2, V_03:11.2, V_04:10.5, V_05:9.6, V_06:9.2, V_07:8.9, V_08:8.5, V_09:8.9, V_10:9.4, V_11:9.8, V_12:10.7, V_Ann:9.8, I_01:602, I_02:887, I_03:1195, I_04:1502, I_05:1748, I_06:1854, I_07:1838, I_08:1629, I_09:1324, I_10:975, I_11:638, I_12:521, I_Ann:1226, P_A_Ann:14.69};
//				var site140 = {metName:"Albuquerque, NM", T_AN_01:27.6, T_AN_02:31.4, T_AN_03:36.4, T_AN_04:43.7, T_AN_05:53.8, T_AN_06:62.3, T_AN_07:67.1, T_AN_08:65.4, T_AN_09:58.6, T_AN_10:46.7, T_AN_11:35, T_AN_12:27.5, T_AN_Ann:46.3, T_AX_01:48.1, T_AX_02:53.7, T_AX_03:61.2, T_AX_04:69.4, T_AX_05:79.8, T_AX_06:88.8, T_AX_07:90.5, T_AX_08:87.8, T_AX_09:81.4, T_AX_10:69.9, T_AX_11:56.6, T_AX_12:47.1, T_AX_Ann:69.5, V_01:7.2, V_02:7.8, V_03:8.7, V_04:9.8, V_05:9.4, V_06:8.9, V_07:7.8, V_08:7.4, V_09:7.4, V_10:7.4, V_11:7.2, V_12:6.7, V_Ann:8.1, I_01:1003, I_02:1270, I_03:1699, I_04:2126, I_05:2356, I_06:2479, I_07:2312, I_08:2082, I_09:1846, I_10:1469, I_11:1114, I_12:904, I_Ann:1722, P_A_Ann:12.13};
//				var site141 = {metName:"Gallup, NM", T_AN_01:14.9, T_AN_02:19.5, T_AN_03:22.7, T_AN_04:28.4, T_AN_05:37.5, T_AN_06:45.1, T_AN_07:54.3, T_AN_08:53.3, T_AN_09:43.8, T_AN_10:30.9, T_AN_11:19.9, T_AN_12:13.8, T_AN_Ann:32, T_AX_01:44.1, T_AX_02:48.7, T_AX_03:56.4, T_AX_04:64, T_AX_05:74.3, T_AX_06:83.9, T_AX_07:87.5, T_AX_08:84.3, T_AX_09:78.5, T_AX_10:67, T_AX_11:54.2, T_AX_12:44, T_AX_Ann:65.6, V_01:5.4, V_02:6.5, V_03:7.8, V_04:9.4, V_05:8.7, V_06:8.1, V_07:6.7, V_08:5.8, V_09:5.8, V_10:6, V_11:5.6, V_12:5.1, V_Ann:6.7, I_01:930, I_02:1194, I_03:1654, I_04:2095, I_05:2350, I_06:2507, I_07:2187, I_08:1943, I_09:1806, I_10:1466, I_11:1072, I_12:825, I_Ann:1669, P_A_Ann:11.63};
//				var site142 = {metName:"Roswell, NM", T_AN_01:27.8, T_AN_02:32.5, T_AN_03:38.5, T_AN_04:46.1, T_AN_05:56.4, T_AN_06:64.5, T_AN_07:68.5, T_AN_08:67, T_AN_09:59.5, T_AN_10:47.9, T_AN_11:35.2, T_AN_12:27.7, T_AN_Ann:47.6, T_AX_01:55.6, T_AX_02:61.3, T_AX_03:68.4, T_AX_04:77, T_AX_05:86.1, T_AX_06:93.7, T_AX_07:93.9, T_AX_08:91.9, T_AX_09:86, T_AX_10:76, T_AX_11:64, T_AX_12:55.3, T_AX_Ann:75.8, V_01:7.6, V_02:8.7, V_03:9.6, V_04:10.5, V_05:10.1, V_06:10.1, V_07:8.5, V_08:7.6, V_09:7.8, V_10:7.8, V_11:7.6, V_12:7.4, V_Ann:8.7, I_01:1013, I_02:1323, I_03:1744, I_04:2125, I_05:2301, I_06:2434, I_07:2302, I_08:2085, I_09:1822, I_10:1452, I_11:1127, I_12:939, I_Ann:1722, P_A_Ann:12.88};
//				var site143 = {metName:"Albany, NY", T_AN_01:16.1, T_AN_02:18.1, T_AN_03:26.4, T_AN_04:37.7, T_AN_05:47.7, T_AN_06:57.9, T_AN_07:62, T_AN_08:60.9, T_AN_09:52.7, T_AN_10:40.8, T_AN_11:32.5, T_AN_12:22.4, T_AN_Ann:39.6, T_AX_01:31, T_AX_02:34.1, T_AX_03:43.8, T_AX_04:57.8, T_AX_05:68.7, T_AX_06:77.6, T_AX_07:81.3, T_AX_08:80, T_AX_09:72, T_AX_10:59.3, T_AX_11:47.7, T_AX_12:35.9, T_AX_Ann:57.4, V_01:8.5, V_02:8.9, V_03:9.4, V_04:9.2, V_05:7.8, V_06:6.9, V_07:6.7, V_08:5.8, V_09:6.3, V_10:7.2, V_11:7.8, V_12:8.5, V_Ann:7.8, I_01:532, I_02:789, I_03:1096, I_04:1496, I_05:1739, I_06:1853, I_07:1872, I_08:1640, I_09:1300, I_10:882, I_11:534, I_12:422, I_Ann:1180, P_A_Ann:14.55};
//				var site144 = {metName:"Binghamton, NY", T_AN_01:16.6, T_AN_02:17.6, T_AN_03:25.1, T_AN_04:36.3, T_AN_05:46.5, T_AN_06:56.1, T_AN_07:59.9, T_AN_08:59.1, T_AN_09:51.3, T_AN_10:40.9, T_AN_11:32, T_AN_12:22, T_AN_Ann:38.6, T_AX_01:29.2, T_AX_02:31.7, T_AX_03:40.5, T_AX_04:54.1, T_AX_05:65.2, T_AX_06:73.6, T_AX_07:77.1, T_AX_08:76.2, T_AX_09:68.4, T_AX_10:56.4, T_AX_11:44.8, T_AX_12:33.5, T_AX_Ann:54.2, V_01:9.8, V_02:9.8, V_03:9.8, V_04:9.6, V_05:8.5, V_06:7.8, V_07:7.4, V_08:6.9, V_09:7.8, V_10:8.5, V_11:8.9, V_12:9.6, V_Ann:8.7, I_01:500, I_02:745, I_03:1056, I_04:1449, I_05:1722, I_06:1839, I_07:1818, I_08:1614, I_09:1224, I_10:833, I_11:498, I_12:406, I_Ann:1142, P_A_Ann:13.87};
//				var site145 = {metName:"Buffalo, NY", T_AN_01:19.3, T_AN_02:19.7, T_AN_03:26.5, T_AN_04:37.2, T_AN_05:47.9, T_AN_06:58.4, T_AN_07:62.6, T_AN_08:61.7, T_AN_09:54.2, T_AN_10:43.7, T_AN_11:34.7, T_AN_12:24.9, T_AN_Ann:40.9, T_AX_01:31.5, T_AX_02:32.9, T_AX_03:41.3, T_AX_04:54.7, T_AX_05:66.1, T_AX_06:75.3, T_AX_07:78.9, T_AX_08:78.1, T_AX_09:71.1, T_AX_10:58.7, T_AX_11:47.4, T_AX_12:36.1, T_AX_Ann:56, V_01:12.1, V_02:11.6, V_03:10.7, V_04:10.5, V_05:9.8, V_06:8.9, V_07:8.9, V_08:8.1, V_09:8.7, V_10:9.6, V_11:10.5, V_12:11.4, V_Ann:10.1, I_01:447, I_02:730, I_03:1070, I_04:1453, I_05:1793, I_06:1939, I_07:1865, I_08:1643, I_09:1273, I_10:808, I_11:478, I_12:382, I_Ann:1157, P_A_Ann:14.33};
//				var site146 = {metName:"Long Island, NY", T_AN_01:24.7, T_AN_02:25.3, T_AN_03:31.8, T_AN_04:41.1, T_AN_05:50.1, T_AN_06:60.7, T_AN_07:66.5, T_AN_08:65.6, T_AN_09:58.1, T_AN_10:46.1, T_AN_11:38, T_AN_12:29.4, T_AN_Ann:44.8, T_AX_01:38.9, T_AX_02:40.4, T_AX_03:47.3, T_AX_04:58, T_AX_05:67.6, T_AX_06:76.6, T_AX_07:81.8, T_AX_08:80.5, T_AX_09:73.8, T_AX_10:63.2, T_AX_11:53.3, T_AX_12:43.9, T_AX_Ann:60.5, V_01:10.1, V_02:10.3, V_03:10.5, V_04:10.1, V_05:8.9, V_06:8.3, V_07:7.8, V_08:7.4, V_09:8.1, V_10:8.5, V_11:9.2, V_12:9.8, V_Ann:8.9, I_01:591, I_02:878, I_03:1196, I_04:1527, I_05:1785, I_06:1896, I_07:1890, I_08:1694, I_09:1347, I_10:988, I_11:643, I_12:518, I_Ann:1246, P_A_Ann:14.65};
//				var site147 = {metName:"Massena, NY", T_AN_01:6.6, T_AN_02:8, T_AN_03:19.5, T_AN_04:33.8, T_AN_05:44.8, T_AN_06:54.8, T_AN_07:59.3, T_AN_08:57.2, T_AN_09:48.9, T_AN_10:38.2, T_AN_11:28.6, T_AN_12:16, T_AN_Ann:34.6, T_AX_01:24.3, T_AX_02:27.4, T_AX_03:37.9, T_AX_04:53.7, T_AX_05:66.9, T_AX_06:75.7, T_AX_07:79.4, T_AX_08:78.1, T_AX_09:70.1, T_AX_10:56.5, T_AX_11:44.2, T_AX_12:31.3, T_AX_Ann:53.8, V_01:8.7, V_02:8.5, V_03:8.7, V_04:8.9, V_05:7.8, V_06:6.7, V_07:6.5, V_08:5.8, V_09:6.3, V_10:7.6, V_11:8.3, V_12:8.5, V_Ann:7.6, I_01:445, I_02:741, I_03:1072, I_04:1452, I_05:1753, I_06:1876, I_07:1865, I_08:1646, I_09:1236, I_10:764, I_11:449, I_12:348, I_Ann:1137, P_A_Ann:14.58};
//				var site148 = {metName:"New York-LaGuardia, NY", T_AN_01:28.3, T_AN_02:29.4, T_AN_03:35.9, T_AN_04:45.7, T_AN_05:55.1, T_AN_06:65.4, T_AN_07:71, T_AN_08:70.5, T_AN_09:63.7, T_AN_10:52.4, T_AN_11:43.3, T_AN_12:33.6, T_AN_Ann:49.5, T_AX_01:39.6, T_AX_02:41.6, T_AX_03:49, T_AX_04:60.5, T_AX_05:70.3, T_AX_06:79.8, T_AX_07:84.7, T_AX_08:83.2, T_AX_09:75.9, T_AX_10:64.7, T_AX_11:54.1, T_AX_12:44.1, T_AX_Ann:62.3, V_01:12.8, V_02:12.8, V_03:12.8, V_04:11.6, V_05:10.7, V_06:10.1, V_07:9.6, V_08:9.4, V_09:10.3, V_10:10.7, V_11:11.6, V_12:12.5, V_Ann:11.2, I_01:583, I_02:863, I_03:1154, I_04:1499, I_05:1760, I_06:1878, I_07:1859, I_08:1636, I_09:1314, I_10:962, I_11:627, I_12:511, I_Ann:1220, P_A_Ann:14.69};
//				var site149 = {metName:"New York-Kennedy, NY", T_AN_01:27.1, T_AN_02:28.1, T_AN_03:34.6, T_AN_04:43.9, T_AN_05:53, T_AN_06:63.1, T_AN_07:68.9, T_AN_08:68.3, T_AN_09:61.5, T_AN_10:50.1, T_AN_11:41.2, T_AN_12:32, T_AN_Ann:47.6, T_AX_01:39.2, T_AX_02:41, T_AX_03:48.2, T_AX_04:58.5, T_AX_05:67.8, T_AX_06:77.2, T_AX_07:82.4, T_AX_08:81.4, T_AX_09:75, T_AX_10:63.8, T_AX_11:53.5, T_AX_12:43.6, T_AX_Ann:61, V_01:12.5, V_02:12.8, V_03:12.8, V_04:11.9, V_05:10.5, V_06:10.1, V_07:9.8, V_08:9.4, V_09:9.8, V_10:10.7, V_11:11.4, V_12:12.8, V_Ann:11.2, I_01:588, I_02:861, I_03:1175, I_04:1516, I_05:1760, I_06:1898, I_07:1867, I_08:1661, I_09:1328, I_10:969, I_11:630, I_12:513, I_Ann:1231, P_A_Ann:14.68};
//				var site150 = {metName:"Rochester, NY", T_AN_01:18.7, T_AN_02:19.3, T_AN_03:26.4, T_AN_04:37.2, T_AN_05:47, T_AN_06:57.1, T_AN_07:61.2, T_AN_08:60.3, T_AN_09:52.7, T_AN_10:42.4, T_AN_11:33.7, T_AN_12:24.4, T_AN_Ann:40, T_AX_01:31.9, T_AX_02:33.8, T_AX_03:42.1, T_AX_04:55.6, T_AX_05:67.1, T_AX_06:76.4, T_AX_07:80, T_AX_08:78.8, T_AX_09:71.5, T_AX_10:59.3, T_AX_11:47.7, T_AX_12:36.6, T_AX_Ann:56.7, V_01:10.7, V_02:10.5, V_03:10.3, V_04:10.1, V_05:8.9, V_06:8.1, V_07:7.8, V_08:7.2, V_09:7.6, V_10:8.7, V_11:9.4, V_12:10.3, V_Ann:9.2, I_01:463, I_02:719, I_03:1059, I_04:1432, I_05:1759, I_06:1886, I_07:1849, I_08:1621, I_09:1242, I_10:788, I_11:480, I_12:385, I_Ann:1140, P_A_Ann:14.37};
//				var site151 = {metName:"Syracuse, NY", T_AN_01:17, T_AN_02:18, T_AN_03:25.7, T_AN_04:36.9, T_AN_05:47, T_AN_06:57.2, T_AN_07:61.7, T_AN_08:60.6, T_AN_09:52.7, T_AN_10:42.2, T_AN_11:33.5, T_AN_12:23.4, T_AN_Ann:39.7, T_AX_01:31.3, T_AX_02:33.2, T_AX_03:42.1, T_AX_04:56.5, T_AX_05:68, T_AX_06:77.1, T_AX_07:80.6, T_AX_08:79.7, T_AX_09:72, T_AX_10:59.4, T_AX_11:47.9, T_AX_12:36.4, T_AX_Ann:57, V_01:9.8, V_02:9.6, V_03:9.4, V_04:9.2, V_05:8.1, V_06:7.2, V_07:7.2, V_08:6.5, V_09:7.2, V_10:7.8, V_11:8.7, V_12:9.6, V_Ann:8.3, I_01:457, I_02:685, I_03:1033, I_04:1468, I_05:1797, I_06:1896, I_07:1884, I_08:1651, I_09:1246, I_10:801, I_11:472, I_12:380, I_Ann:1147, P_A_Ann:14.47};
//				var site152 = {metName:"Asheville, NC", T_AN_01:28.4, T_AN_02:30.3, T_AN_03:36.1, T_AN_04:44, T_AN_05:52.3, T_AN_06:60.3, T_AN_07:64, T_AN_08:63.5, T_AN_09:56.7, T_AN_10:45.2, T_AN_11:36, T_AN_12:29.7, T_AN_Ann:45.6, T_AX_01:47.5, T_AX_02:50.3, T_AX_03:57.7, T_AX_04:67.3, T_AX_05:74, T_AX_06:80, T_AX_07:83, T_AX_08:82.1, T_AX_09:76.2, T_AX_10:67.4, T_AX_11:57.9, T_AX_12:48.8, T_AX_Ann:66, V_01:8.5, V_02:8.3, V_03:8.3, V_04:7.6, V_05:6, V_06:4.9, V_07:4.7, V_08:4.3, V_09:4.7, V_10:5.6, V_11:6.9, V_12:7.6, V_Ann:6.5, I_01:802, I_02:1054, I_03:1361, I_04:1697, I_05:1862, I_06:1887, I_07:1872, I_08:1723, I_09:1455, I_10:1186, I_11:870, I_12:717, I_Ann:1374, P_A_Ann:13.6};
//				var site153 = {metName:"Charlotte, NC", T_AN_01:33.1, T_AN_02:35.2, T_AN_03:41.9, T_AN_04:49.7, T_AN_05:58.4, T_AN_06:66.7, T_AN_07:70.1, T_AN_08:69.3, T_AN_09:62.7, T_AN_10:50.9, T_AN_11:41.2, T_AN_12:34.3, T_AN_Ann:51.1, T_AX_01:51.5, T_AX_02:55, T_AX_03:62.9, T_AX_04:71.9, T_AX_05:78.7, T_AX_06:85.5, T_AX_07:88.6, T_AX_08:87.4, T_AX_09:81.3, T_AX_10:71.8, T_AX_11:62.1, T_AX_12:52.9, T_AX_Ann:70.8, V_01:6.5, V_02:6.9, V_03:7.6, V_04:7.4, V_05:6.7, V_06:5.8, V_07:5.6, V_08:5.4, V_09:6, V_10:5.4, V_11:5.8, V_12:6, V_Ann:6.3, I_01:785, I_02:1029, I_03:1385, I_04:1741, I_05:1918, I_06:1996, I_07:1931, I_08:1731, I_09:1475, I_10:1177, I_11:866, I_12:707, I_Ann:1395, P_A_Ann:14.32};
//				var site154 = {metName:"Raleigh-Durham, NC", T_AN_01:32.1, T_AN_02:33.8, T_AN_03:40.3, T_AN_04:48.6, T_AN_05:56.9, T_AN_06:66, T_AN_07:69.9, T_AN_08:68.7, T_AN_09:61.9, T_AN_10:49.7, T_AN_11:40.4, T_AN_12:33.5, T_AN_Ann:50.2, T_AX_01:51, T_AX_02:54.2, T_AX_03:62.4, T_AX_04:71.6, T_AX_05:78.5, T_AX_06:85.9, T_AX_07:89.1, T_AX_08:87.7, T_AX_09:81.2, T_AX_10:71.7, T_AX_11:62.3, T_AX_12:52.8, T_AX_Ann:70.7, V_01:6.9, V_02:6.9, V_03:7.8, V_04:7.8, V_05:6.9, V_06:6, V_07:6, V_08:5.4, V_09:5.8, V_10:5.1, V_11:5.6, V_12:6, V_Ann:6.5, I_01:771, I_02:1029, I_03:1359, I_04:1725, I_05:1911, I_06:1969, I_07:1931, I_08:1744, I_09:1435, I_10:1155, I_11:853, I_12:699, I_Ann:1382, P_A_Ann:14.47};
//				var site155 = {metName:"Greensboro, NC", T_AN_01:30.9, T_AN_02:32.7, T_AN_03:39.7, T_AN_04:48.1, T_AN_05:56.7, T_AN_06:65.6, T_AN_07:69.3, T_AN_08:68.2, T_AN_09:61.1, T_AN_10:49.3, T_AN_11:39.8, T_AN_12:32.5, T_AN_Ann:49.5, T_AX_01:48.4, T_AX_02:51.7, T_AX_03:60, T_AX_04:69.7, T_AX_05:76.5, T_AX_06:83.7, T_AX_07:86.8, T_AX_08:85.6, T_AX_09:79, T_AX_10:69.6, T_AX_11:59.8, T_AX_12:50.1, T_AX_Ann:68.4, V_01:8.1, V_02:8.1, V_03:8.7, V_04:8.7, V_05:7.6, V_06:6.7, V_07:6.3, V_08:5.8, V_09:6.3, V_10:6.3, V_11:6.7, V_12:6.9, V_Ann:7.2, I_01:758, I_02:1023, I_03:1354, I_04:1701, I_05:1875, I_06:1956, I_07:1912, I_08:1717, I_09:1418, I_10:1146, I_11:851, I_12:692, I_Ann:1367, P_A_Ann:14.23};
//				var site156 = {metName:"Wilmington, NC", T_AN_01:36.9, T_AN_02:38, T_AN_03:44.2, T_AN_04:52.5, T_AN_05:60.7, T_AN_06:69.2, T_AN_07:73, T_AN_08:71.5, T_AN_09:66.2, T_AN_10:55.1, T_AN_11:45.3, T_AN_12:38.1, T_AN_Ann:54.2, T_AX_01:56.3, T_AX_02:58.8, T_AX_03:65.5, T_AX_04:73.7, T_AX_05:79.7, T_AX_06:85.7, T_AX_07:88.7, T_AX_08:87.2, T_AX_09:82.6, T_AX_10:74.8, T_AX_11:66.7, T_AX_12:58.4, T_AX_Ann:73.2, V_01:8.1, V_02:8.3, V_03:8.9, V_04:9.2, V_05:8.3, V_06:7.4, V_07:6.9, V_08:6.5, V_09:7.2, V_10:6.5, V_11:6.9, V_12:7.4, V_Ann:7.6, I_01:811, I_02:1068, I_03:1426, I_04:1808, I_05:1938, I_06:1942, I_07:1917, I_08:1722, I_09:1405, I_10:1178, I_11:910, I_12:747, I_Ann:1406, P_A_Ann:14.68};
//				var site157 = {metName:"Bismarck, ND", T_AN_01:2.1, T_AN_02:8.4, T_AN_03:19.3, T_AN_04:31.3, T_AN_05:43, T_AN_06:52.9, T_AN_07:57.8, T_AN_08:56.1, T_AN_09:46.1, T_AN_10:33.1, T_AN_11:20, T_AN_12:8.4, T_AN_Ann:31.5, T_AX_01:21.6, T_AX_02:27.6, T_AX_03:39.9, T_AX_04:55.9, T_AX_05:67.3, T_AX_06:76.2, T_AX_07:83.4, T_AX_08:83, T_AX_09:72.3, T_AX_10:56.7, T_AX_11:39.5, T_AX_12:26.8, T_AX_Ann:54.2, V_01:8.9, V_02:9.2, V_03:10.1, V_04:10.7, V_05:10.7, V_06:9.6, V_07:8.7, V_08:8.9, V_09:9.2, V_10:9.4, V_11:8.9, V_12:9.2, V_Ann:9.4, I_01:411, I_02:666, I_03:1092, I_04:1523, I_05:1811, I_06:1994, I_07:2092, I_08:1798, I_09:1335, I_10:859, I_11:488, I_12:348, I_Ann:1201, P_A_Ann:13.85};
//				var site158 = {metName:"Fargo, ND", T_AN_01:0.3, T_AN_02:5.7, T_AN_03:19.3, T_AN_04:33.5, T_AN_05:45.3, T_AN_06:56, T_AN_07:59.6, T_AN_08:57.8, T_AN_09:48.6, T_AN_10:36.1, T_AN_11:21.6, T_AN_12:7.9, T_AN_Ann:32.6, T_AX_01:16.7, T_AX_02:22.7, T_AX_03:35.2, T_AX_04:54.3, T_AX_05:67.6, T_AX_06:76.3, T_AX_07:80.5, T_AX_08:80, T_AX_09:70.8, T_AX_10:55.2, T_AX_11:37.1, T_AX_12:22.7, T_AX_Ann:51.6, V_01:11, V_02:11.4, V_03:12.1, V_04:12.3, V_05:12.3, V_06:10.3, V_07:9.2, V_08:9.6, V_09:10.5, V_10:11.4, V_11:11.4, V_12:11.2, V_Ann:11, I_01:383, I_02:606, I_03:1023, I_04:1562, I_05:1804, I_06:1914, I_07:1984, I_08:1716, I_09:1261, I_10:785, I_11:445, I_12:313, I_Ann:1149, P_A_Ann:14.23};
//				var site159 = {metName:"Minot, ND", T_AN_01:3.5, T_AN_02:8.8, T_AN_03:19.3, T_AN_04:32.1, T_AN_05:43.3, T_AN_06:53.4, T_AN_07:58.2, T_AN_08:56.2, T_AN_09:47, T_AN_10:34.4, T_AN_11:20.9, T_AN_12:8.9, T_AN_Ann:32.2, T_AX_01:19.4, T_AX_02:24.9, T_AX_03:36.4, T_AX_04:53.9, T_AX_05:65.4, T_AX_06:73.7, T_AX_07:80.2, T_AX_08:80.5, T_AX_09:70.1, T_AX_10:54.4, T_AX_11:36.7, T_AX_12:23.9, T_AX_Ann:51.6, V_01:12.1, V_02:11.6, V_03:11.6, V_04:11.4, V_05:11.9, V_06:10.5, V_07:9.6, V_08:9.8, V_09:10.5, V_10:11.6, V_11:11.9, V_12:12.1, V_Ann:11.2, I_01:380, I_02:628, I_03:1069, I_04:1537, I_05:1781, I_06:1928, I_07:2042, I_08:1735, I_09:1249, I_10:793, I_11:433, I_12:299, I_Ann:1156, P_A_Ann:13.81};
//				var site160 = {metName:"Williston, ND", T_AN_01:0.5, T_AN_02:7.4, T_AN_03:18.4, T_AN_04:30.9, T_AN_05:40.9, T_AN_06:50.6, T_AN_07:56.6, T_AN_08:54.9, T_AN_09:43.8, T_AN_10:31.3, T_AN_11:18.1, T_AN_12:6, T_AN_Ann:29.9, T_AX_01:20.3, T_AX_02:26.9, T_AX_03:39.3, T_AX_04:55.5, T_AX_05:66, T_AX_06:74.9, T_AX_07:82.9, T_AX_08:82.8, T_AX_09:71.5, T_AX_10:55.2, T_AX_11:37.7, T_AX_12:25, T_AX_Ann:53.2, V_01:8.3, V_02:8.5, V_03:9.2, V_04:10.1, V_05:10.3, V_06:9.4, V_07:8.3, V_08:8.7, V_09:8.7, V_10:8.9, V_11:8.5, V_12:8.5, V_Ann:8.9, I_01:369, I_02:634, I_03:1067, I_04:1545, I_05:1838, I_06:2010, I_07:2154, I_08:1817, I_09:1312, I_10:813, I_11:445, I_12:311, I_Ann:1193, P_A_Ann:13.72};
//				var site161 = {metName:"Akron, OH", T_AN_01:20.1, T_AN_02:21.7, T_AN_03:29, T_AN_04:39.7, T_AN_05:49.2, T_AN_06:58.9, T_AN_07:62.5, T_AN_08:61.5, T_AN_09:53.9, T_AN_10:43, T_AN_11:34.1, T_AN_12:24.7, T_AN_Ann:41.5, T_AX_01:33.4, T_AX_02:36.1, T_AX_03:46, T_AX_04:59.6, T_AX_05:69, T_AX_06:77.8, T_AX_07:81.3, T_AX_08:80.1, T_AX_09:72.8, T_AX_10:60.8, T_AX_11:48.5, T_AX_12:36.9, T_AX_Ann:58.5, V_01:10.7, V_02:10.5, V_03:10.3, V_04:10.1, V_05:8.7, V_06:7.6, V_07:7.4, V_08:6.7, V_09:7.4, V_10:8.5, V_11:9.6, V_12:10.3, V_Ann:8.9, I_01:490, I_02:720, I_03:1075, I_04:1421, I_05:1683, I_06:1840, I_07:1859, I_08:1645, I_09:1327, I_10:892, I_11:538, I_12:432, I_Ann:1160, P_A_Ann:14.07};
//				var site162 = {metName:"Cleveland, OH", T_AN_01:21.6, T_AN_02:23.2, T_AN_03:29.8, T_AN_04:40.4, T_AN_05:50, T_AN_06:60.1, T_AN_07:64.1, T_AN_08:63.2, T_AN_09:55.8, T_AN_10:45.3, T_AN_11:36.3, T_AN_12:26.4, T_AN_Ann:43, T_AX_01:34.2, T_AX_02:36.7, T_AX_03:45.2, T_AX_04:58.3, T_AX_05:68.5, T_AX_06:77.9, T_AX_07:81.3, T_AX_08:80, T_AX_09:73.3, T_AX_10:61.7, T_AX_11:49.7, T_AX_12:37.9, T_AX_Ann:58.7, V_01:11.2, V_02:10.5, V_03:10.5, V_04:10.3, V_05:9.2, V_06:8.3, V_07:8.1, V_08:7.6, V_09:8.3, V_10:9.4, V_11:10.5, V_12:11, V_Ann:9.6, I_01:462, I_02:689, I_03:1067, I_04:1430, I_05:1756, I_06:1944, I_07:1923, I_08:1672, I_09:1335, I_10:851, I_11:511, I_12:380, I_Ann:1168, P_A_Ann:14.29};
//				var site163 = {metName:"Columbus, OH", T_AN_01:23, T_AN_02:25, T_AN_03:32.7, T_AN_04:43.1, T_AN_05:52.4, T_AN_06:62.3, T_AN_07:65.7, T_AN_08:64.6, T_AN_09:56.8, T_AN_10:45.2, T_AN_11:36.2, T_AN_12:27.2, T_AN_Ann:44.5, T_AX_01:36.5, T_AX_02:39.9, T_AX_03:50.3, T_AX_04:63.4, T_AX_05:72.5, T_AX_06:81.1, T_AX_07:84.1, T_AX_08:83.3, T_AX_09:76.7, T_AX_10:64.7, T_AX_11:51.9, T_AX_12:40.1, T_AX_Ann:62, V_01:9.2, V_02:8.9, V_03:8.9, V_04:8.9, V_05:7.6, V_06:6.7, V_07:6.3, V_08:5.8, V_09:6, V_10:6.9, V_11:8.1, V_12:8.7, V_Ann:7.6, I_01:527, I_02:743, I_03:1080, I_04:1472, I_05:1716, I_06:1889, I_07:1866, I_08:1692, I_09:1388, I_10:971, I_11:601, I_12:456, I_Ann:1200, P_A_Ann:14.27};
//				var site164 = {metName:"Dayton, OH", T_AN_01:21.1, T_AN_02:23.6, T_AN_03:31.6, T_AN_04:42.3, T_AN_05:52.2, T_AN_06:61.9, T_AN_07:64.9, T_AN_08:63.6, T_AN_09:55.4, T_AN_10:44.7, T_AN_11:34.9, T_AN_12:25.4, T_AN_Ann:43.5, T_AX_01:34.9, T_AX_02:38.7, T_AX_03:49.1, T_AX_04:62.1, T_AX_05:71.3, T_AX_06:80, T_AX_07:83.2, T_AX_08:82.4, T_AX_09:75.9, T_AX_10:63.9, T_AX_11:50.7, T_AX_12:38.4, T_AX_Ann:60.9, V_01:11.4, V_02:11, V_03:11, V_04:11, V_05:9.4, V_06:8.3, V_07:7.8, V_08:7.2, V_09:7.8, V_10:9.2, V_11:10.3, V_12:10.7, V_Ann:9.6, I_01:517, I_02:759, I_03:1122, I_04:1479, I_05:1747, I_06:1925, I_07:1936, I_08:1738, I_09:1409, I_10:993, I_11:607, I_12:456, I_Ann:1224, P_A_Ann:14.17};
//				var site165 = {metName:"Mansfield, OH", T_AN_01:19.4, T_AN_02:21.3, T_AN_03:28.8, T_AN_04:39.3, T_AN_05:48.9, T_AN_06:58.6, T_AN_07:61.9, T_AN_08:61, T_AN_09:53.2, T_AN_10:42.9, T_AN_11:33.6, T_AN_12:24.4, T_AN_Ann:41.1, T_AX_01:32.8, T_AX_02:35.6, T_AX_03:45.4, T_AX_04:59.1, T_AX_05:68.9, T_AX_06:77.7, T_AX_07:80.8, T_AX_08:79.5, T_AX_09:72.9, T_AX_10:61.3, T_AX_11:48.1, T_AX_12:37.1, T_AX_Ann:58.3, V_01:11.2, V_02:10.7, V_03:10.5, V_04:10.7, V_05:9.2, V_06:7.8, V_07:7.4, V_08:6.7, V_09:7.4, V_10:8.9, V_11:10.3, V_12:10.7, V_Ann:9.4, I_01:492, I_02:700, I_03:1071, I_04:1438, I_05:1709, I_06:1882, I_07:1904, I_08:1643, I_09:1329, I_10:918, I_11:553, I_12:423, I_Ann:1172, P_A_Ann:14.03};
//				var site166 = {metName:"Toledo, OH", T_AN_01:19.4, T_AN_02:21.5, T_AN_03:28.9, T_AN_04:39.7, T_AN_05:49.4, T_AN_06:59.5, T_AN_07:62.8, T_AN_08:61.8, T_AN_09:53.5, T_AN_10:42.9, T_AN_11:33.7, T_AN_12:24.1, T_AN_Ann:41.5, T_AX_01:32.4, T_AX_02:35.7, T_AX_03:46.2, T_AX_04:59.8, T_AX_05:70.3, T_AX_06:80.1, T_AX_07:83.5, T_AX_08:81.6, T_AX_09:75.1, T_AX_10:62.5, T_AX_11:48.9, T_AX_12:36.3, T_AX_Ann:59.4, V_01:10.5, V_02:9.8, V_03:9.8, V_04:10.3, V_05:8.7, V_06:7.2, V_07:6.9, V_08:6.3, V_09:6.7, V_10:8.3, V_11:9.4, V_12:9.6, V_Ann:8.7, I_01:485, I_02:754, I_03:1125, I_04:1446, I_05:1747, I_06:1939, I_07:1938, I_08:1656, I_09:1360, I_10:912, I_11:537, I_12:408, I_Ann:1192, P_A_Ann:14.34};
//				var site167 = {metName:"Youngstown, OH", T_AN_01:20.1, T_AN_02:21.3, T_AN_03:28.2, T_AN_04:38.8, T_AN_05:47.3, T_AN_06:56.6, T_AN_07:60.2, T_AN_08:59.2, T_AN_09:52.1, T_AN_10:42, T_AN_11:34.3, T_AN_12:24.7, T_AN_Ann:40.4, T_AX_01:33.3, T_AX_02:36, T_AX_03:45.5, T_AX_04:59.3, T_AX_05:68.9, T_AX_06:77.5, T_AX_07:80.9, T_AX_08:79.8, T_AX_09:72.4, T_AX_10:60.6, T_AX_11:48.7, T_AX_12:36.9, T_AX_Ann:58.3, V_01:10.1, V_02:9.6, V_03:9.6, V_04:9.6, V_05:8.3, V_06:7.2, V_07:6.9, V_08:6.5, V_09:7.2, V_10:8.1, V_11:9.2, V_12:9.6, V_Ann:8.5, I_01:476, I_02:714, I_03:1070, I_04:1410, I_05:1680, I_06:1842, I_07:1839, I_08:1631, I_09:1295, I_10:859, I_11:520, I_12:423, I_Ann:1147, P_A_Ann:14.08};
//				var site168 = {metName:"Oklahoma City, OK", T_AN_01:28.7, T_AN_02:32.8, T_AN_03:40.5, T_AN_04:49.1, T_AN_05:59.3, T_AN_06:67.4, T_AN_07:71.5, T_AN_08:70.6, T_AN_09:62.5, T_AN_10:51, T_AN_11:39.5, T_AN_12:30.9, T_AN_Ann:50.3, T_AX_01:48.7, T_AX_02:54.1, T_AX_03:62.1, T_AX_04:70.8, T_AX_05:78.9, T_AX_06:86.9, T_AX_07:92.8, T_AX_08:92.1, T_AX_09:83.2, T_AX_10:72.6, T_AX_11:60.3, T_AX_12:50.4, T_AX_Ann:71.1, V_01:11.4, V_02:11.9, V_03:13.4, V_04:13.4, V_05:11.4, V_06:10.7, V_07:9.8, V_08:9.2, V_09:9.6, V_10:11, V_11:11.6, V_12:11.4, V_Ann:11.2, I_01:831, I_02:1090, I_03:1389, I_04:1757, I_05:1898, I_06:2111, I_07:2215, I_08:1982, I_09:1600, I_10:1235, I_11:889, I_12:751, I_Ann:1479, P_A_Ann:14.01};
//				var site169 = {metName:"Tulsa, OK", T_AN_01:28.9, T_AN_02:32.9, T_AN_03:40.9, T_AN_04:50.1, T_AN_05:60.2, T_AN_06:68.6, T_AN_07:73.4, T_AN_08:72.2, T_AN_09:62.6, T_AN_10:51.3, T_AN_11:40.4, T_AN_12:31.3, T_AN_Ann:51.1, T_AX_01:47.4, T_AX_02:53.4, T_AX_03:61.7, T_AX_04:71, T_AX_05:78.7, T_AX_06:86.5, T_AX_07:92.3, T_AX_08:92.4, T_AX_09:83.2, T_AX_10:72.6, T_AX_11:60.2, T_AX_12:49.6, T_AX_Ann:70.8, V_01:9.2, V_02:9.4, V_03:10.7, V_04:11.2, V_05:9.6, V_06:9.2, V_07:8.7, V_08:7.6, V_09:7.8, V_10:8.7, V_11:9.4, V_12:9.2, V_Ann:9.2, I_01:748, I_02:1023, I_03:1320, I_04:1671, I_05:1822, I_06:2027, I_07:2152, I_08:1938, I_09:1523, I_10:1166, I_11:816, I_12:682, I_Ann:1407, P_A_Ann:14.36};
//				var site170 = {metName:"Astoria, OR", T_AN_01:38.7, T_AN_02:38.1, T_AN_03:39.5, T_AN_04:41.9, T_AN_05:46.5, T_AN_06:50.7, T_AN_07:54.1, T_AN_08:54.1, T_AN_09:50.4, T_AN_10:45.3, T_AN_11:41, T_AN_12:38.6, T_AN_Ann:44.9, T_AX_01:49.1, T_AX_02:51.3, T_AX_03:52.7, T_AX_04:55.3, T_AX_05:59.8, T_AX_06:63.2, T_AX_07:66.8, T_AX_08:67.7, T_AX_09:66.8, T_AX_10:60, T_AX_11:53.2, T_AX_12:48.6, T_AX_Ann:57.9, V_01:8.5, V_02:7.8, V_03:7.8, V_04:7.8, V_05:7.6, V_06:7.8, V_07:8.1, V_08:7.2, V_09:6.7, V_10:6.7, V_11:7.8, V_12:8.7, V_Ann:7.6, I_01:343, I_02:600, I_03:877, I_04:1252, I_05:1537, I_06:1627, I_07:1708, I_08:1492, I_09:1196, I_10:728, I_11:391, I_12:302, I_Ann:1005, P_A_Ann:14.69};
//				var site171 = {metName:"Burns, OR", T_AN_01:17.3, T_AN_02:19.4, T_AN_03:25.6, T_AN_04:29.5, T_AN_05:37.3, T_AN_06:42.5, T_AN_07:48.4, T_AN_08:45.6, T_AN_09:37.3, T_AN_10:28.3, T_AN_11:22.3, T_AN_12:16, T_AN_Ann:30.8, T_AX_01:35.1, T_AX_02:39.3, T_AX_03:49, T_AX_04:55.6, T_AX_05:65.8, T_AX_06:74, T_AX_07:86, T_AX_08:84.4, T_AX_09:76, T_AX_10:61.2, T_AX_11:45, T_AX_12:34.7, T_AX_Ann:58.8, V_01:5.1, V_02:5.6, V_03:6.9, V_04:7.8, V_05:7.6, V_06:7.2, V_07:6.7, V_08:6.5, V_09:6, V_10:5.8, V_11:5.4, V_12:5.1, V_Ann:6.3, I_01:475, I_02:707, I_03:1195, I_04:1606, I_05:2000, I_06:2285, I_07:2459, I_08:2155, I_09:1691, I_10:1098, I_11:573, I_12:384, I_Ann:1386, P_A_Ann:12.63};
//				var site172 = {metName:"Eugene, OR", T_AN_01:35.6, T_AN_02:36, T_AN_03:38, T_AN_04:40.5, T_AN_05:44.7, T_AN_06:48.3, T_AN_07:52.7, T_AN_08:52.2, T_AN_09:48.4, T_AN_10:42.4, T_AN_11:38.6, T_AN_12:35.5, T_AN_Ann:42.7, T_AX_01:47.1, T_AX_02:50.9, T_AX_03:55.4, T_AX_04:59.6, T_AX_05:66.2, T_AX_06:72.1, T_AX_07:82.5, T_AX_08:82, T_AX_09:76.7, T_AX_10:63.4, T_AX_11:51.8, T_AX_12:45.9, T_AX_Ann:62.8, V_01:6.9, V_02:6.9, V_03:7.2, V_04:6.9, V_05:6.5, V_06:6.9, V_07:7.4, V_08:7.2, V_09:6.7, V_10:6.5, V_11:6.7, V_12:7.2, V_Ann:6.9, I_01:396, I_02:673, I_03:998, I_04:1386, I_05:1739, I_06:1961, I_07:2238, I_08:1960, I_09:1491, I_10:839, I_11:449, I_12:322, I_Ann:1204, P_A_Ann:14.5};
//				var site173 = {metName:"Medford, OR", T_AN_01:33, T_AN_02:34.5, T_AN_03:37.2, T_AN_04:40.6, T_AN_05:47, T_AN_06:52.1, T_AN_07:58.7, T_AN_08:57.5, T_AN_09:50.8, T_AN_10:42.2, T_AN_11:36.4, T_AN_12:33.1, T_AN_Ann:43.6, T_AX_01:47.6, T_AX_02:54.3, T_AX_03:58.8, T_AX_04:63.4, T_AX_05:72.6, T_AX_06:80, T_AX_07:90.7, T_AX_08:89.6, T_AX_09:83.9, T_AX_10:69.2, T_AX_11:52.9, T_AX_12:45.8, T_AX_Ann:67.4, V_01:3.4, V_02:4, V_03:4.5, V_04:4.7, V_05:5.1, V_06:5.4, V_07:5.1, V_08:4.7, V_09:3.6, V_10:3.1, V_11:2.9, V_12:3.4, V_Ann:4, I_01:502, I_02:774, I_03:1143, I_04:1490, I_05:1917, I_06:2257, I_07:2415, I_08:2117, I_09:1649, I_10:1051, I_11:541, I_12:430, I_Ann:1357, P_A_Ann:13.69};
//				var site174 = {metName:"Pendleton, OR", T_AN_01:29.5, T_AN_02:31.4, T_AN_03:35.4, T_AN_04:39.6, T_AN_05:46.4, T_AN_06:52, T_AN_07:58.4, T_AN_08:57.5, T_AN_09:50.6, T_AN_10:40.8, T_AN_11:34, T_AN_12:29.1, T_AN_Ann:42.1, T_AX_01:41.1, T_AX_02:46.2, T_AX_03:54.3, T_AX_04:60.8, T_AX_05:69.4, T_AX_06:77.1, T_AX_07:87.9, T_AX_08:86.2, T_AX_09:77.4, T_AX_10:62.6, T_AX_11:48.3, T_AX_12:40.1, T_AX_Ann:62.6, V_01:7.2, V_02:7.2, V_03:8.9, V_04:9.4, V_05:9.2, V_06:9.2, V_07:8.7, V_08:8.5, V_09:8.1, V_10:7.6, V_11:7.4, V_12:7.2, V_Ann:8.3, I_01:376, I_02:678, I_03:1117, I_04:1628, I_05:1970, I_06:2228, I_07:2372, I_08:2058, I_09:1541, I_10:960, I_11:460, I_12:309, I_Ann:1308, P_A_Ann:13.92};
//				var site175 = {metName:"Salem, OR", T_AN_01:36, T_AN_02:35.9, T_AN_03:38.3, T_AN_04:40.9, T_AN_05:46.1, T_AN_06:50.3, T_AN_07:54.9, T_AN_08:54.3, T_AN_09:50.2, T_AN_10:43.7, T_AN_11:39.4, T_AN_12:35.7, T_AN_Ann:43.8, T_AX_01:47.4, T_AX_02:51.6, T_AX_03:55.6, T_AX_04:59.9, T_AX_05:67.1, T_AX_06:72.6, T_AX_07:81.8, T_AX_08:81.3, T_AX_09:76.3, T_AX_10:63.4, T_AX_11:52.2, T_AX_12:46.6, T_AX_Ann:63, V_01:7.2, V_02:6.7, V_03:7.2, V_04:6.7, V_05:6.3, V_06:6.5, V_07:6.3, V_08:5.8, V_09:5.4, V_10:5.6, V_11:6.9, V_12:7.4, V_Ann:6.5, I_01:370, I_02:638, I_03:951, I_04:1355, I_05:1703, I_06:1859, I_07:2099, I_08:1846, I_09:1392, I_10:807, I_11:416, I_12:307, I_Ann:1145, P_A_Ann:14.59};
//				var site176 = {metName:"Allentown, PA", T_AN_01:22, T_AN_02:23.1, T_AN_03:30.5, T_AN_04:40.3, T_AN_05:49.7, T_AN_06:59.7, T_AN_07:63.9, T_AN_08:62.5, T_AN_09:54.6, T_AN_10:42.8, T_AN_11:34.5, T_AN_12:25.9, T_AN_Ann:42.5, T_AX_01:36.7, T_AX_02:39.5, T_AX_03:49, T_AX_04:61.4, T_AX_05:71.1, T_AX_06:79.8, T_AX_07:83.8, T_AX_08:82.5, T_AX_09:75, T_AX_10:63.3, T_AX_11:52.1, T_AX_12:40.8, T_AX_Ann:61.3, V_01:8.3, V_02:8.7, V_03:8.9, V_04:8.7, V_05:7.4, V_06:6.7, V_07:6.3, V_08:5.6, V_09:6.3, V_10:6.5, V_11:6.9, V_12:7.8, V_Ann:7.4, I_01:568, I_02:845, I_03:1165, I_04:1495, I_05:1739, I_06:1841, I_07:1869, I_08:1636, I_09:1309, I_10:950, I_11:614, I_12:495, I_Ann:1210, P_A_Ann:14.49};
//				var site177 = {metName:"Bradford, PA", T_AN_01:15.5, T_AN_02:15.9, T_AN_03:22.9, T_AN_04:33.2, T_AN_05:41.6, T_AN_06:50.7, T_AN_07:54.1, T_AN_08:53.5, T_AN_09:46.4, T_AN_10:36.9, T_AN_11:30, T_AN_12:20, T_AN_Ann:35.1, T_AX_01:29.2, T_AX_02:31.7, T_AX_03:40.9, T_AX_04:54.6, T_AX_05:64.9, T_AX_06:73, T_AX_07:75.8, T_AX_08:74.9, T_AX_09:67.6, T_AX_10:56.1, T_AX_11:44.3, T_AX_12:32.9, T_AX_Ann:53.8, V_01:8.9, V_02:8.7, V_03:8.5, V_04:8.3, V_05:6.9, V_06:5.8, V_07:5.4, V_08:5.1, V_09:5.8, V_10:6.7, V_11:7.6, V_12:8.3, V_Ann:7.2, I_01:483, I_02:742, I_03:1056, I_04:1439, I_05:1651, I_06:1781, I_07:1759, I_08:1563, I_09:1218, I_10:820, I_11:508, I_12:412, I_Ann:1119, P_A_Ann:13.62};
//				var site178 = {metName:"Erie, PA", T_AN_01:22, T_AN_02:22, T_AN_03:28.3, T_AN_04:39, T_AN_05:49.1, T_AN_06:59.7, T_AN_07:64.2, T_AN_08:63.4, T_AN_09:56.5, T_AN_10:46.1, T_AN_11:37.3, T_AN_12:27.5, T_AN_Ann:42.9, T_AX_01:33.7, T_AX_02:35, T_AX_03:42.6, T_AX_04:55.4, T_AX_05:65.8, T_AX_06:75.4, T_AX_07:78.9, T_AX_08:78, T_AX_09:71.3, T_AX_10:60.2, T_AX_11:49, T_AX_12:38, T_AX_Ann:56.9, V_01:11.9, V_02:10.7, V_03:10.5, V_04:10.1, V_05:9.2, V_06:8.3, V_07:8.1, V_08:7.8, V_09:8.9, V_10:9.8, V_11:11.2, V_12:11.6, V_Ann:9.8, I_01:367, I_02:647, I_03:994, I_04:1425, I_05:1756, I_06:1946, I_07:1921, I_08:1661, I_09:1281, I_10:825, I_11:474, I_12:327, I_Ann:1135, P_A_Ann:14.32};
//				var site179 = {metName:"Middletown, PA", T_AN_01:24.1, T_AN_02:25.3, T_AN_03:33.2, T_AN_04:43.2, T_AN_05:53.1, T_AN_06:63.2, T_AN_07:67.5, T_AN_08:66.1, T_AN_09:58, T_AN_10:45.5, T_AN_11:37.1, T_AN_12:28.4, T_AN_Ann:45.4, T_AX_01:37.9, T_AX_02:40.9, T_AX_03:50.4, T_AX_04:62.9, T_AX_05:72.5, T_AX_06:81.4, T_AX_07:85.4, T_AX_08:83.8, T_AX_09:76, T_AX_10:64.4, T_AX_11:53.3, T_AX_12:42.2, T_AX_Ann:62.6, V_01:8.9, V_02:9.2, V_03:9.8, V_04:9.2, V_05:7.6, V_06:6.7, V_07:6.3, V_08:5.8, V_09:6.3, V_10:6.5, V_11:7.8, V_12:8.5, V_Ann:7.6, I_01:580, I_02:840, I_03:1164, I_04:1497, I_05:1754, I_06:1889, I_07:1852, I_08:1639, I_09:1304, I_10:967, I_11:630, I_12:512, I_Ann:1219, P_A_Ann:14.53};
//				var site180 = {metName:"Philadelphia, PA", T_AN_01:27.4, T_AN_02:28.3, T_AN_03:35.5, T_AN_04:45.4, T_AN_05:54.8, T_AN_06:64.9, T_AN_07:70.2, T_AN_08:69, T_AN_09:61.6, T_AN_10:49.6, T_AN_11:40.5, T_AN_12:31.5, T_AN_Ann:48.2, T_AX_01:40.7, T_AX_02:43.2, T_AX_03:52.1, T_AX_04:63.9, T_AX_05:73.3, T_AX_06:82.3, T_AX_07:86.5, T_AX_08:85, T_AX_09:77.7, T_AX_10:66.1, T_AX_11:55.3, T_AX_12:44.5, T_AX_Ann:64.2, V_01:10.3, V_02:10.5, V_03:11, V_04:10.3, V_05:8.9, V_06:8.7, V_07:8.5, V_08:8.1, V_09:8.5, V_10:8.7, V_11:9.2, V_12:10.1, V_Ann:9.4, I_01:611, I_02:911, I_03:1190, I_04:1537, I_05:1778, I_06:1917, I_07:1891, I_08:1698, I_09:1357, I_10:1015, I_11:678, I_12:549, I_Ann:1261, P_A_Ann:14.69};
//				var site181 = {metName:"Pittsburgh, PA", T_AN_01:22.2, T_AN_02:23.5, T_AN_03:30.8, T_AN_04:41.3, T_AN_05:50.2, T_AN_06:59.6, T_AN_07:63.5, T_AN_08:62.5, T_AN_09:54.8, T_AN_10:43.4, T_AN_11:35.3, T_AN_12:26.2, T_AN_Ann:42.8, T_AX_01:36.2, T_AX_02:38.9, T_AX_03:48.7, T_AX_04:62, T_AX_05:70.6, T_AX_06:78.9, T_AX_07:81.9, T_AX_08:81.2, T_AX_09:73.9, T_AX_10:62.4, T_AX_11:50.7, T_AX_12:39.5, T_AX_Ann:60.4, V_01:9.4, V_02:9.2, V_03:9.4, V_04:9.2, V_05:7.6, V_06:6.9, V_07:6.5, V_08:6, V_09:6.3, V_10:6.9, V_11:8.1, V_12:8.7, V_Ann:7.8, I_01:520, I_02:760, I_03:1080, I_04:1440, I_05:1691, I_06:1846, I_07:1823, I_08:1636, I_09:1306, I_10:919, I_11:566, I_12:459, I_Ann:1170, P_A_Ann:14.1};
//				var site182 = {metName:"Scranton, PA", T_AN_01:20.3, T_AN_02:21.5, T_AN_03:28.7, T_AN_04:39.2, T_AN_05:48.6, T_AN_06:57.8, T_AN_07:61.7, T_AN_08:60.7, T_AN_09:53.2, T_AN_10:42.2, T_AN_11:34.5, T_AN_12:25, T_AN_Ann:41.1, T_AX_01:33.8, T_AX_02:36.5, T_AX_03:45.8, T_AX_04:59.1, T_AX_05:69.5, T_AX_06:77.6, T_AX_07:81.6, T_AX_08:80.2, T_AX_09:72.4, T_AX_10:60.4, T_AX_11:49.2, T_AX_12:37.7, T_AX_Ann:58.6, V_01:7.6, V_02:8.1, V_03:8.1, V_04:7.8, V_05:6.9, V_06:6, V_07:6, V_08:5.6, V_09:6, V_10:6.3, V_11:6.9, V_12:7.4, V_Ann:6.9, I_01:538, I_02:789, I_03:1115, I_04:1455, I_05:1710, I_06:1843, I_07:1852, I_08:1616, I_09:1261, I_10:888, I_11:548, I_12:455, I_Ann:1173, P_A_Ann:14.21};
//				var site183 = {metName:"Williamsport, PA", T_AN_01:20.8, T_AN_02:21.8, T_AN_03:29.5, T_AN_04:39.5, T_AN_05:48.5, T_AN_06:58.6, T_AN_07:62.3, T_AN_08:61.3, T_AN_09:53.7, T_AN_10:42, T_AN_11:34, T_AN_12:25, T_AN_Ann:41.4, T_AX_01:34.9, T_AX_02:37.9, T_AX_03:47.9, T_AX_04:61.3, T_AX_05:71.4, T_AX_06:79.8, T_AX_07:83.5, T_AX_08:82, T_AX_09:73.8, T_AX_10:62.1, T_AX_11:50.2, T_AX_12:38.6, T_AX_Ann:60.3, V_01:7.6, V_02:7.8, V_03:7.8, V_04:7.6, V_05:6.5, V_06:5.6, V_07:5.4, V_08:4.7, V_09:5.1, V_10:5.6, V_11:6.5, V_12:7.2, V_Ann:6.5, I_01:550, I_02:803, I_03:1122, I_04:1457, I_05:1714, I_06:1846, I_07:1830, I_08:1603, I_09:1233, I_10:884, I_11:545, I_12:449, I_Ann:1170, P_A_Ann:14.42};
//				var site184 = {metName:"Providence, RI", T_AN_01:22.5, T_AN_02:24, T_AN_03:30.7, T_AN_04:40.2, T_AN_05:49.2, T_AN_06:59.3, T_AN_07:64.9, T_AN_08:64, T_AN_09:56.6, T_AN_10:44.9, T_AN_11:36.8, T_AN_12:27.6, T_AN_Ann:43.4, T_AX_01:37.4, T_AX_02:39.5, T_AX_03:47, T_AX_04:58.1, T_AX_05:67.7, T_AX_06:76.9, T_AX_07:82.2, T_AX_08:80.9, T_AX_09:73.5, T_AX_10:62.5, T_AX_11:52.4, T_AX_12:42.2, T_AX_Ann:60, V_01:9.6, V_02:10.1, V_03:10.5, V_04:10.3, V_05:9.4, V_06:8.7, V_07:8.5, V_08:8.1, V_09:8.1, V_10:8.5, V_11:8.7, V_12:9.4, V_Ann:9.2, I_01:579, I_02:859, I_03:1150, I_04:1477, I_05:1738, I_06:1847, I_07:1840, I_08:1640, I_09:1301, I_10:937, I_11:604, I_12:501, I_Ann:1206, P_A_Ann:14.66};
//				var site185 = {metName:"Charleston, SC", T_AN_01:39.6, T_AN_02:41.6, T_AN_03:47.8, T_AN_04:54.8, T_AN_05:63.2, T_AN_06:70.7, T_AN_07:74, T_AN_08:73.3, T_AN_09:68.3, T_AN_10:57.7, T_AN_11:48, T_AN_12:41.1, T_AN_Ann:56.7, T_AX_01:59.2, T_AX_02:62.1, T_AX_03:68.9, T_AX_04:75.8, T_AX_05:82.3, T_AX_06:87.3, T_AX_07:90.2, T_AX_08:88.7, T_AX_09:84.1, T_AX_10:76.5, T_AX_11:68.6, T_AX_12:60.9, T_AX_Ann:75.4, V_01:8.3, V_02:8.5, V_03:9.2, V_04:9.2, V_05:8.3, V_06:7.6, V_07:7.2, V_08:6.7, V_09:7.4, V_10:7.2, V_11:7.2, V_12:7.6, V_Ann:7.8, I_01:852, I_02:1111, I_03:1471, I_04:1856, I_05:1992, I_06:1943, I_07:1951, I_08:1723, I_09:1438, I_10:1210, I_11:972, I_12:797, I_Ann:1443, P_A_Ann:14.68};
//				var site186 = {metName:"Columbia, SC", T_AN_01:35.3, T_AN_02:37.4, T_AN_03:43.9, T_AN_04:51.7, T_AN_05:60.7, T_AN_06:68.8, T_AN_07:72.2, T_AN_08:71.5, T_AN_09:65.2, T_AN_10:52.7, T_AN_11:42.4, T_AN_12:35.7, T_AN_Ann:53.1, T_AX_01:56.2, T_AX_02:59.6, T_AX_03:67.4, T_AX_04:75.7, T_AX_05:82.9, T_AX_06:88.6, T_AX_07:91.6, T_AX_08:90, T_AX_09:84.5, T_AX_10:75.3, T_AX_11:66.1, T_AX_12:57.4, T_AX_Ann:74.6, V_01:6.7, V_02:6.7, V_03:7.4, V_04:7.4, V_05:6.7, V_06:6, V_07:5.6, V_08:5.1, V_09:5.6, V_10:5.1, V_11:5.1, V_12:5.8, V_Ann:6, I_01:824, I_02:1073, I_03:1415, I_04:1781, I_05:1944, I_06:1975, I_07:1949, I_08:1756, I_09:1497, I_10:1206, I_11:923, I_12:761, I_Ann:1425, P_A_Ann:14.58};
//				var site187 = {metName:"Greer, SC", T_AN_01:33.5, T_AN_02:35.5, T_AN_03:41.9, T_AN_04:49.5, T_AN_05:58.1, T_AN_06:66.1, T_AN_07:69.8, T_AN_08:69.2, T_AN_09:62.5, T_AN_10:51.1, T_AN_11:41.6, T_AN_12:34.7, T_AN_Ann:51.1, T_AX_01:51.7, T_AX_02:55.2, T_AX_03:62.9, T_AX_04:71.7, T_AX_05:78.6, T_AX_06:85.4, T_AX_07:88.8, T_AX_08:87.3, T_AX_09:81.1, T_AX_10:71.4, T_AX_11:61.9, T_AX_12:52.8, T_AX_Ann:70.7, V_01:7.4, V_02:7.6, V_03:8.3, V_04:7.8, V_05:6.9, V_06:6, V_07:5.8, V_08:5.4, V_09:5.8, V_10:5.8, V_11:6.3, V_12:6.7, V_Ann:6.7, I_01:812, I_02:1057, I_03:1401, I_04:1767, I_05:1936, I_06:1988, I_07:1945, I_08:1780, I_09:1493, I_10:1196, I_11:888, I_12:741, I_Ann:1417, P_A_Ann:14.2};
//				var site188 = {metName:"Aberdeen, SD", T_AN_01:2.2, T_AN_02:8.2, T_AN_03:20.4, T_AN_04:32.9, T_AN_05:45.2, T_AN_06:55.7, T_AN_07:60.1, T_AN_08:57.3, T_AN_09:47.2, T_AN_10:34.4, T_AN_11:20.4, T_AN_12:8.5, T_AN_Ann:32.7, T_AX_01:21.1, T_AX_02:27.6, T_AX_03:39.7, T_AX_04:56.2, T_AX_05:68.3, T_AX_06:77.2, T_AX_07:82.2, T_AX_08:81, T_AX_09:72.4, T_AX_10:57.6, T_AX_11:40.1, T_AX_12:26.5, T_AX_Ann:54.1, V_01:10.1, V_02:10.5, V_03:11.2, V_04:12.1, V_05:12.1, V_06:10.3, V_07:8.7, V_08:8.7, V_09:10.1, V_10:10.3, V_11:10.3, V_12:10.3, V_Ann:10.5, I_01:435, I_02:703, I_03:1115, I_04:1559, I_05:1815, I_06:1996, I_07:2073, I_08:1799, I_09:1358, I_10:880, I_11:520, I_12:372, I_Ann:1219, P_A_Ann:14.01};
//				var site189 = {metName:"Huron, SD", T_AN_01:6.7, T_AN_02:12, T_AN_03:22.6, T_AN_04:34.6, T_AN_05:46.5, T_AN_06:57, T_AN_07:61.9, T_AN_08:59.9, T_AN_09:49.7, T_AN_10:36.3, T_AN_11:23.1, T_AN_12:11.9, T_AN_Ann:35.2, T_AX_01:25, T_AX_02:31.3, T_AX_03:42.9, T_AX_04:57.8, T_AX_05:69.2, T_AX_06:78.4, T_AX_07:84.6, T_AX_08:83.1, T_AX_09:74.4, T_AX_10:59.9, T_AX_11:42.6, T_AX_12:29.3, T_AX_Ann:56.5, V_01:10.5, V_02:10.7, V_03:11.4, V_04:11.9, V_05:11.4, V_06:9.8, V_07:9.2, V_08:9.2, V_09:10.1, V_10:10.3, V_11:10.5, V_12:10.5, V_Ann:10.5, I_01:483, I_02:770, I_03:1131, I_04:1556, I_05:1845, I_06:2014, I_07:2094, I_08:1817, I_09:1404, I_10:919, I_11:562, I_12:403, I_Ann:1250, P_A_Ann:14.03};
//				var site190 = {metName:"Pierre, SD", T_AN_01:10, T_AN_02:14.7, T_AN_03:23.7, T_AN_04:34.8, T_AN_05:45.9, T_AN_06:56, T_AN_07:62.1, T_AN_08:60.4, T_AN_09:50.5, T_AN_10:37.2, T_AN_11:24.6, T_AN_12:14.6, T_AN_Ann:36.2, T_AX_01:28.7, T_AX_02:34.7, T_AX_03:45.4, T_AX_04:58.9, T_AX_05:69.5, T_AX_06:79.2, T_AX_07:87.7, T_AX_08:86.7, T_AX_09:77.2, T_AX_10:60.6, T_AX_11:44.6, T_AX_12:32.6, T_AX_Ann:58.8, V_01:10.7, V_02:10.7, V_03:11.9, V_04:12.1, V_05:11.9, V_06:10.5, V_07:10.3, V_08:10.3, V_09:10.7, V_10:11, V_11:10.5, V_12:11, V_Ann:11, I_01:506, I_02:772, I_03:1135, I_04:1521, I_05:1857, I_06:2054, I_07:2099, I_08:1853, I_09:1428, I_10:927, I_11:553, I_12:421, I_Ann:1261, P_A_Ann:13.81};
//				var site191 = {metName:"Rapid City, SD", T_AN_01:13.6, T_AN_02:16.6, T_AN_03:23.8, T_AN_04:32.7, T_AN_05:43, T_AN_06:52.3, T_AN_07:59.1, T_AN_08:57.6, T_AN_09:47.4, T_AN_10:35.4, T_AN_11:23.4, T_AN_12:15.5, T_AN_Ann:35, T_AX_01:35.5, T_AX_02:39, T_AX_03:47.3, T_AX_04:56.5, T_AX_05:66.6, T_AX_06:76.4, T_AX_07:85.9, T_AX_08:85.7, T_AX_09:75.5, T_AX_10:60.6, T_AX_11:46.4, T_AX_12:37.2, T_AX_Ann:59.4, V_01:9.8, V_02:10.7, V_03:11.4, V_04:12.1, V_05:11.6, V_06:10.1, V_07:9.4, V_08:9.4, V_09:9.8, V_10:10.7, V_11:10.3, V_12:9.8, V_Ann:10.5, I_01:599, I_02:844, I_03:1212, I_04:1588, I_05:1906, I_06:2092, I_07:2150, I_08:1920, I_09:1505, I_10:1016, I_11:619, I_12:503, I_Ann:1329, P_A_Ann:13.11};
//				var site192 = {metName:"Sioux Falls, SD", T_AN_01:7.9, T_AN_02:13.1, T_AN_03:23.5, T_AN_04:35.4, T_AN_05:47.2, T_AN_06:57.9, T_AN_07:62.5, T_AN_08:60.6, T_AN_09:50.6, T_AN_10:37.8, T_AN_11:24.2, T_AN_12:12.7, T_AN_Ann:36.1, T_AX_01:25.2, T_AX_02:31.2, T_AX_03:42.5, T_AX_04:57.5, T_AX_05:68.9, T_AX_06:78.4, T_AX_07:82.9, T_AX_08:81, T_AX_09:73.2, T_AX_10:59.6, T_AX_11:42.7, T_AX_12:29.4, T_AX_Ann:56, V_01:10.1, V_02:10.3, V_03:11.2, V_04:11.9, V_05:11.2, V_06:9.8, V_07:9.2, V_08:8.7, V_09:9.6, V_10:9.8, V_11:10.1, V_12:9.8, V_Ann:10.1, I_01:507, I_02:777, I_03:1169, I_04:1523, I_05:1751, I_06:1979, I_07:2046, I_08:1762, I_09:1393, I_10:947, I_11:576, I_12:442, I_Ann:1239, P_A_Ann:13.95};
//				var site193 = {metName:"Bristol, TN", T_AN_01:27.2, T_AN_02:29.5, T_AN_03:35.5, T_AN_04:44, T_AN_05:52.5, T_AN_06:61.2, T_AN_07:64.9, T_AN_08:63.7, T_AN_09:56.4, T_AN_10:44.7, T_AN_11:35.6, T_AN_12:28.9, T_AN_Ann:45.3, T_AX_01:45.5, T_AX_02:49.2, T_AX_03:58, T_AX_04:67.9, T_AX_05:75.5, T_AX_06:82.1, T_AX_07:84.6, T_AX_08:84.5, T_AX_09:78.8, T_AX_10:68.8, T_AX_11:57.7, T_AX_12:47.9, T_AX_Ann:66.7, V_01:5.4, V_02:5.6, V_03:6, V_04:5.6, V_05:4.7, V_06:3.8, V_07:3.6, V_08:2.9, V_09:3.1, V_10:3.6, V_11:4, V_12:4.7, V_Ann:4.5, I_01:682, I_02:901, I_03:1249, I_04:1616, I_05:1853, I_06:1928, I_07:1885, I_08:1780, I_09:1483, I_10:1128, I_11:790, I_12:611, I_Ann:1325, P_A_Ann:13.92};
//				var site194 = {metName:"Chattanooga, TN", T_AN_01:32.7, T_AN_02:34.8, T_AN_03:41.6, T_AN_04:49.7, T_AN_05:58.5, T_AN_06:66.8, T_AN_07:70.6, T_AN_08:70, T_AN_09:63, T_AN_10:50.8, T_AN_11:40.5, T_AN_12:34.2, T_AN_Ann:51.1, T_AX_01:50.4, T_AX_02:54.3, T_AX_03:63, T_AX_04:72.5, T_AX_05:79.4, T_AX_06:86.1, T_AX_07:89.2, T_AX_08:89, T_AX_09:83, T_AX_10:72.8, T_AX_11:61.4, T_AX_12:51.9, T_AX_Ann:71.1, V_01:5.8, V_02:6, V_03:6.5, V_04:6, V_05:4.9, V_06:4.3, V_07:4.3, V_08:3.8, V_09:4, V_10:4, V_11:4.5, V_12:5.4, V_Ann:4.9, I_01:722, I_02:965, I_03:1295, I_04:1662, I_05:1859, I_06:1950, I_07:1915, I_08:1796, I_09:1471, I_10:1170, I_11:824, I_12:654, I_Ann:1357, P_A_Ann:14.34};
//				var site195 = {metName:"Knoxville, TN", T_AN_01:30.8, T_AN_02:33.3, T_AN_03:40, T_AN_04:48.7, T_AN_05:57.3, T_AN_06:65.6, T_AN_07:69.2, T_AN_08:68.3, T_AN_09:61.4, T_AN_10:49.2, T_AN_11:39.3, T_AN_12:32.4, T_AN_Ann:49.6, T_AX_01:47.3, T_AX_02:51.4, T_AX_03:60.2, T_AX_04:69.8, T_AX_05:77.5, T_AX_06:84.2, T_AX_07:87.2, T_AX_08:87, T_AX_09:81.1, T_AX_10:70.4, T_AX_11:59.1, T_AX_12:49.1, T_AX_Ann:68.7, V_01:6.5, V_02:6.7, V_03:7.2, V_04:6.9, V_05:6.3, V_06:5.4, V_07:5.4, V_08:4.5, V_09:4.7, V_10:4.7, V_11:5.4, V_12:6, V_Ann:5.8, I_01:692, I_02:933, I_03:1270, I_04:1656, I_05:1877, I_06:1970, I_07:1925, I_08:1808, I_09:1484, I_10:1160, I_11:798, I_12:625, I_Ann:1350, P_A_Ann:14.18};
//				var site196 = {metName:"Memphis, TN", T_AN_01:34, T_AN_02:37.1, T_AN_03:44.7, T_AN_04:53.9, T_AN_05:63.1, T_AN_06:70.9, T_AN_07:74.1, T_AN_08:73.2, T_AN_09:65.8, T_AN_10:54.6, T_AN_11:43.9, T_AN_12:36.2, T_AN_Ann:54.3, T_AX_01:49.7, T_AX_02:54.3, T_AX_03:62.9, T_AX_04:72.4, T_AX_05:80.7, T_AX_06:88.1, T_AX_07:90.8, T_AX_08:90.7, T_AX_09:84.6, T_AX_10:74, T_AX_11:61.6, T_AX_12:51.7, T_AX_Ann:71.8, V_01:9.2, V_02:9.2, V_03:9.8, V_04:9.6, V_05:8.5, V_06:7.4, V_07:6.9, V_08:6.7, V_09:7.2, V_10:7.2, V_11:8.1, V_12:8.7, V_Ann:8.3, I_01:696, I_02:939, I_03:1275, I_04:1661, I_05:1860, I_06:2008, I_07:1967, I_08:1832, I_09:1508, I_10:1165, I_11:794, I_12:626, I_Ann:1361, P_A_Ann:14.55};
//				var site197 = {metName:"Nashville, TN", T_AN_01:30.5, T_AN_02:32.9, T_AN_03:40.2, T_AN_04:49.3, T_AN_05:58.5, T_AN_06:66.7, T_AN_07:70.8, T_AN_08:69.8, T_AN_09:62.1, T_AN_10:50.3, T_AN_11:40.2, T_AN_12:32.8, T_AN_Ann:50.3, T_AX_01:47.2, T_AX_02:51.5, T_AX_03:60.5, T_AX_04:70.4, T_AX_05:77.9, T_AX_06:85.2, T_AX_07:88.6, T_AX_08:88.6, T_AX_09:82.2, T_AX_10:71.4, T_AX_11:59.5, T_AX_12:49.5, T_AX_Ann:69.4, V_01:8.1, V_02:8.1, V_03:8.3, V_04:8.1, V_05:6.7, V_06:6, V_07:5.8, V_08:5.6, V_09:5.8, V_10:6.3, V_11:7.2, V_12:7.6, V_Ann:6.9, I_01:654, I_02:896, I_03:1261, I_04:1614, I_05:1798, I_06:1955, I_07:1886, I_08:1778, I_09:1467, I_10:1128, I_11:772, I_12:583, I_Ann:1316, P_A_Ann:14.39};
//				var site198 = {metName:"Abilene, TX", T_AN_01:34.2, T_AN_02:37.8, T_AN_03:44.9, T_AN_04:52.6, T_AN_05:62.1, T_AN_06:69.1, T_AN_07:72.6, T_AN_08:72, T_AN_09:64.4, T_AN_10:54.6, T_AN_11:43.4, T_AN_12:35.2, T_AN_Ann:53.6, T_AX_01:56.5, T_AX_02:60.6, T_AX_03:68, T_AX_04:76.6, T_AX_05:83.9, T_AX_06:89.9, T_AX_07:93.6, T_AX_08:92.8, T_AX_09:85.9, T_AX_10:76.8, T_AX_11:65.4, T_AX_12:57.4, T_AX_Ann:75.6, V_01:11, V_02:11.4, V_03:12.5, V_04:13.2, V_05:11.9, V_06:11.2, V_07:10.1, V_08:8.7, V_09:8.9, V_10:10.3, V_11:10.7, V_12:10.7, V_Ann:11, I_01:959, I_02:1205, I_03:1557, I_04:1936, I_05:2052, I_06:2245, I_07:2252, I_08:2006, I_09:1701, I_10:1375, I_11:1046, I_12:902, I_Ann:1603, P_A_Ann:13.79};
//				var site199 = {metName:"Amarillo, TX", T_AN_01:24.9, T_AN_02:28, T_AN_03:34.1, T_AN_04:42.4, T_AN_05:52.8, T_AN_06:61.7, T_AN_07:65.8, T_AN_08:64.8, T_AN_09:56.9, T_AN_10:45.3, T_AN_11:33.2, T_AN_12:25.8, T_AN_Ann:44.7, T_AX_01:50.1, T_AX_02:54.4, T_AX_03:61.9, T_AX_04:70, T_AX_05:78.9, T_AX_06:87.1, T_AX_07:90.5, T_AX_08:88.3, T_AX_09:81.8, T_AX_10:71.3, T_AX_11:59, T_AX_12:50.1, T_AX_Ann:70.3, V_01:12.1, V_02:12.5, V_03:13.9, V_04:14.8, V_05:13.6, V_06:13.9, V_07:12.3, V_08:11.6, V_09:12.1, V_10:12.5, V_11:12.5, V_12:12.1, V_Ann:12.8, I_01:882, I_02:1232, I_03:1607, I_04:1972, I_05:2156, I_06:2357, I_07:2313, I_08:2021, I_09:1748, I_10:1388, I_11:1057, I_12:877, I_Ann:1634, P_A_Ann:12.95};
//				var site200 = {metName:"Austin, TX", T_AN_01:40.3, T_AN_02:43.9, T_AN_03:49.9, T_AN_04:57.5, T_AN_05:66.3, T_AN_06:71.9, T_AN_07:73.8, T_AN_08:73.5, T_AN_09:68.2, T_AN_10:58.8, T_AN_11:48.3, T_AN_12:41, T_AN_Ann:57.8, T_AX_01:61.6, T_AX_02:65.3, T_AX_03:71.6, T_AX_04:78.9, T_AX_05:85.9, T_AX_06:91.5, T_AX_07:94.4, T_AX_08:95.5, T_AX_09:89.8, T_AX_10:81.4, T_AX_11:70.5, T_AX_12:63.1, T_AX_Ann:79.1, V_01:8.3, V_02:8.7, V_03:9.2, V_04:8.9, V_05:8.5, V_06:8.1, V_07:7.4, V_08:6.5, V_09:6.3, V_10:6.9, V_11:7.6, V_12:7.8, V_Ann:7.8, I_01:868, I_02:1085, I_03:1368, I_04:1699, I_05:1812, I_06:2094, I_07:2135, I_08:2023, I_09:1645, I_10:1313, I_11:956, I_12:806, I_Ann:1484, P_A_Ann:14.33};
//				var site201 = {metName:"Brownsville, TX", T_AN_01:52.8, T_AN_02:56, T_AN_03:60.7, T_AN_04:66.6, T_AN_05:72.7, T_AN_06:76.4, T_AN_07:76.9, T_AN_08:76.8, T_AN_09:73.6, T_AN_10:67.6, T_AN_11:59.9, T_AN_12:53.5, T_AN_Ann:66.1, T_AX_01:70.6, T_AX_02:73.7, T_AX_03:78.1, T_AX_04:82.8, T_AX_05:88, T_AX_06:91.6, T_AX_07:92.8, T_AX_08:93.5, T_AX_09:89.6, T_AX_10:84.7, T_AX_11:78, T_AX_12:71.6, T_AX_Ann:82.9, V_01:10.1, V_02:11.2, V_03:11.9, V_04:12.5, V_05:12.1, V_06:11, V_07:11, V_08:9.2, V_09:7.4, V_10:8.7, V_11:9.2, V_12:9.6, V_Ann:10.3, I_01:899, I_02:1152, I_03:1425, I_04:1673, I_05:1913, I_06:2051, I_07:2061, I_08:1951, I_09:1616, I_10:1386, I_11:1040, I_12:846, I_Ann:1501, P_A_Ann:14.68};
//				var site202 = {metName:"Corpus Christi, TX", T_AN_01:48.4, T_AN_02:51.9, T_AN_03:57.3, T_AN_04:63.9, T_AN_05:70.6, T_AN_06:74.5, T_AN_07:75.3, T_AN_08:75.5, T_AN_09:72.5, T_AN_10:65.3, T_AN_11:56.2, T_AN_12:49.6, T_AN_Ann:63.4, T_AX_01:66.9, T_AX_02:70.6, T_AX_03:75.5, T_AX_04:81.1, T_AX_05:86.2, T_AX_06:90.4, T_AX_07:92.4, T_AX_08:93.8, T_AX_09:89.3, T_AX_10:83.7, T_AX_11:75.1, T_AX_12:68.5, T_AX_Ann:81.1, V_01:12.1, V_02:12.5, V_03:13.4, V_04:14.1, V_05:12.5, V_06:10.5, V_07:10.7, V_08:9.8, V_09:9.2, V_10:10.7, V_11:11.4, V_12:11.6, V_Ann:11.6, I_01:891, I_02:1113, I_03:1385, I_04:1636, I_05:1850, I_06:2072, I_07:2110, I_08:1975, I_09:1662, I_10:1397, I_11:1040, I_12:838, I_Ann:1497, P_A_Ann:14.68};
//				var site203 = {metName:"Dallas-Fort Worth, TX", T_AN_01:37, T_AN_02:40.8, T_AN_03:47.8, T_AN_04:55.8, T_AN_05:65.4, T_AN_06:72.6, T_AN_07:76.3, T_AN_08:76.1, T_AN_09:68.6, T_AN_10:57.8, T_AN_11:47.1, T_AN_12:38.8, T_AN_Ann:57, T_AX_01:56.2, T_AX_02:60.7, T_AX_03:67.8, T_AX_04:75.7, T_AX_05:83.4, T_AX_06:91, T_AX_07:95.3, T_AX_08:95.3, T_AX_09:87.8, T_AX_10:78, T_AX_11:66.2, T_AX_12:57.7, T_AX_Ann:76.3, V_01:10.5, V_02:10.7, V_03:11.9, V_04:12.1, V_05:11, V_06:10.5, V_07:9.8, V_08:8.5, V_09:8.3, V_10:9.4, V_11:10.3, V_12:10.3, V_Ann:10.3, I_01:837, I_02:1089, I_03:1388, I_04:1744, I_05:1860, I_06:2087, I_07:2171, I_08:1981, I_09:1623, I_10:1263, I_11:933, I_12:795, I_Ann:1481, P_A_Ann:14.4};
//				var site204 = {metName:"El Paso, TX", T_AN_01:34.6, T_AN_02:38.8, T_AN_03:44.3, T_AN_04:52.2, T_AN_05:62.3, T_AN_06:69.8, T_AN_07:72.2, T_AN_08:70.6, T_AN_09:64.5, T_AN_10:53.3, T_AN_11:40.8, T_AN_12:33.9, T_AN_Ann:53.1, T_AX_01:58.2, T_AX_02:63.2, T_AX_03:70.3, T_AX_04:78.7, T_AX_05:88.2, T_AX_06:95.4, T_AX_07:94.4, T_AX_08:92.4, T_AX_09:87.4, T_AX_10:78.3, T_AX_11:66.1, T_AX_12:57.3, T_AX_Ann:77.5, V_01:7.8, V_02:8.9, V_03:10.1, V_04:11, V_05:10.1, V_06:9.2, V_07:8.1, V_08:7.4, V_09:7.4, V_10:7.6, V_11:7.4, V_12:7.4, V_Ann:8.5, I_01:1125, I_02:1406, I_03:1856, I_04:2259, I_05:2494, I_06:2537, I_07:2276, I_08:2106, I_09:1895, I_10:1574, I_11:1244, I_12:1048, I_Ann:1818, P_A_Ann:12.76};
//				var site205 = {metName:"Houston, TX", T_AN_01:43.8, T_AN_02:47, T_AN_03:52.7, T_AN_04:59.6, T_AN_05:67.9, T_AN_06:73.4, T_AN_07:75.1, T_AN_08:74.7, T_AN_09:69.9, T_AN_10:61, T_AN_11:51.2, T_AN_12:44.9, T_AN_Ann:60.1, T_AX_01:62.6, T_AX_02:66.4, T_AX_03:72.3, T_AX_04:78.7, T_AX_05:85.9, T_AX_06:90.7, T_AX_07:93.1, T_AX_08:93.4, T_AX_09:88.9, T_AX_10:81.2, T_AX_11:71.2, T_AX_12:64.1, T_AX_Ann:79, V_01:7.8, V_02:8.3, V_03:8.5, V_04:8.9, V_05:8.1, V_06:6.7, V_07:5.8, V_08:5.6, V_09:6, V_10:6.7, V_11:7.2, V_12:7.6, V_Ann:7.4, I_01:832, I_02:1022, I_03:1333, I_04:1635, I_05:1828, I_06:1915, I_07:1930, I_08:1804, I_09:1567, I_10:1288, I_11:930, I_12:767, I_Ann:1404, P_A_Ann:14.65};
//				var site206 = {metName:"Lubbock, TX", T_AN_01:28, T_AN_02:31.6, T_AN_03:38.2, T_AN_04:46.8, T_AN_05:57.3, T_AN_06:65.4, T_AN_07:69, T_AN_08:67.5, T_AN_09:59.6, T_AN_10:48.6, T_AN_11:36.6, T_AN_12:28.5, T_AN_Ann:48.1, T_AX_01:54, T_AX_02:58.8, T_AX_03:66.1, T_AX_04:74.7, T_AX_05:83.3, T_AX_06:90.3, T_AX_07:92.3, T_AX_08:90.6, T_AX_09:84, T_AX_10:74.8, T_AX_11:62.7, T_AX_12:54.6, T_AX_Ann:73.9, V_01:11.6, V_02:12.3, V_03:13.9, V_04:14.3, V_05:13.6, V_06:13, V_07:11, V_08:9.8, V_09:10.1, V_10:11, V_11:11.4, V_12:11.4, V_Ann:11.9, I_01:968, I_02:1252, I_03:1627, I_04:2008, I_05:2166, I_06:2352, I_07:2283, I_08:2060, I_09:1728, I_10:1406, I_11:1081, I_12:904, I_Ann:1653, P_A_Ann:13.07};
//				var site207 = {metName:"Lufkin, TX", T_AN_01:39.3, T_AN_02:42.4, T_AN_03:48.6, T_AN_04:55.6, T_AN_05:64.7, T_AN_06:70.7, T_AN_07:72.8, T_AN_08:72.1, T_AN_09:66.8, T_AN_10:56.5, T_AN_11:46.8, T_AN_12:40.3, T_AN_Ann:56.4, T_AX_01:59.8, T_AX_02:64, T_AX_03:70.5, T_AX_04:77.5, T_AX_05:84.6, T_AX_06:90, T_AX_07:93.1, T_AX_08:93.6, T_AX_09:88.3, T_AX_10:79.5, T_AX_11:68.8, T_AX_12:61.1, T_AX_Ann:77.6, V_01:6.9, V_02:7.4, V_03:7.6, V_04:7.6, V_05:6.9, V_06:5.8, V_07:5.4, V_08:4.9, V_09:5.4, V_10:5.8, V_11:6.3, V_12:6.5, V_Ann:6.5, I_01:796, I_02:1027, I_03:1342, I_04:1686, I_05:1856, I_06:1988, I_07:2043, I_08:1915, I_09:1590, I_10:1275, I_11:913, I_12:747, I_Ann:1432, P_A_Ann:14.55};
//				var site208 = {metName:"Midland, TX", T_AN_01:31.8, T_AN_02:35.9, T_AN_03:42.1, T_AN_04:50.1, T_AN_05:60.9, T_AN_06:68.5, T_AN_07:71, T_AN_08:69.7, T_AN_09:62.7, T_AN_10:52.4, T_AN_11:39.8, T_AN_12:32.1, T_AN_Ann:51.4, T_AX_01:57.4, T_AX_02:62.2, T_AX_03:69.4, T_AX_04:78.4, T_AX_05:87.1, T_AX_06:93, T_AX_07:93.8, T_AX_08:92.4, T_AX_09:86, T_AX_10:77.5, T_AX_11:65.6, T_AX_12:58.1, T_AX_Ann:76.7, V_01:10.1, V_02:11, V_03:12.1, V_04:12.8, V_05:12.3, V_06:12.3, V_07:10.7, V_08:9.6, V_09:9.6, V_10:10.3, V_11:9.8, V_12:9.8, V_Ann:11, I_01:1015, I_02:1294, I_03:1695, I_04:2089, I_05:2226, I_06:2365, I_07:2272, I_08:2073, I_09:1776, I_10:1458, I_11:1140, I_12:973, I_Ann:1698, P_A_Ann:13.26};
//				var site209 = {metName:"Port Arthur, TX", T_AN_01:44.6, T_AN_02:47.7, T_AN_03:53.2, T_AN_04:60.1, T_AN_05:68, T_AN_06:73.5, T_AN_07:75, T_AN_08:74.7, T_AN_09:70.6, T_AN_10:61.5, T_AN_11:51.7, T_AN_12:45.7, T_AN_Ann:60.5, T_AX_01:61.9, T_AX_02:65.3, T_AX_03:71.2, T_AX_04:77.3, T_AX_05:84.3, T_AX_06:89.1, T_AX_07:91, T_AX_08:91.5, T_AX_09:87.8, T_AX_10:80.2, T_AX_11:70.5, T_AX_12:63.4, T_AX_Ann:77.8, V_01:9.6, V_02:10.1, V_03:10.3, V_04:10.3, V_05:9.2, V_06:7.6, V_07:6, V_08:5.8, V_09:7.2, V_10:8.1, V_11:8.5, V_12:9.2, V_Ann:8.5, I_01:824, I_02:1017, I_03:1355, I_04:1646, I_05:1868, I_06:1931, I_07:1918, I_08:1801, I_09:1552, I_10:1300, I_11:955, I_12:773, I_Ann:1412, P_A_Ann:14.68};
//				var site210 = {metName:"San Angelo, TX", T_AN_01:34.4, T_AN_02:38, T_AN_03:45.2, T_AN_04:52.8, T_AN_05:62.8, T_AN_06:69.6, T_AN_07:72.1, T_AN_08:71.3, T_AN_09:64, T_AN_10:53.8, T_AN_11:42.7, T_AN_12:35.1, T_AN_Ann:53.5, T_AX_01:59.5, T_AX_02:63.7, T_AX_03:70.7, T_AX_04:79.5, T_AX_05:87.4, T_AX_06:92.4, T_AX_07:95.1, T_AX_08:94, T_AX_09:87.4, T_AX_10:78.6, T_AX_11:67.4, T_AX_12:60.5, T_AX_Ann:78, V_01:9.6, V_02:10.1, V_03:10.7, V_04:11.4, V_05:10.5, V_06:10.1, V_07:9.2, V_08:8.1, V_09:7.8, V_10:8.5, V_11:9.2, V_12:9.4, V_Ann:9.6, I_01:968, I_02:1229, I_03:1591, I_04:1961, I_05:2072, I_06:2236, I_07:2220, I_08:2021, I_09:1711, I_10:1382, I_11:1090, I_12:921, I_Ann:1617, P_A_Ann:13.71};
//				var site211 = {metName:"San Antonio, TX", T_AN_01:42, T_AN_02:45.8, T_AN_03:51.8, T_AN_04:59.1, T_AN_05:67.6, T_AN_06:73.2, T_AN_07:75.2, T_AN_08:75.3, T_AN_09:69.8, T_AN_10:60.8, T_AN_11:50.5, T_AN_12:43.1, T_AN_Ann:59.5, T_AX_01:62.9, T_AX_02:67.2, T_AX_03:73.1, T_AX_04:79.9, T_AX_05:86.6, T_AX_06:91.9, T_AX_07:94, T_AX_08:95, T_AX_09:89.5, T_AX_10:81.6, T_AX_11:71.3, T_AX_12:64.3, T_AX_Ann:79.8, V_01:7.6, V_02:7.8, V_03:8.9, V_04:9.4, V_05:9.4, V_06:9.2, V_07:8.5, V_08:7.8, V_09:6.9, V_10:7.4, V_11:7.6, V_12:7.4, V_Ann:8.1, I_01:893, I_02:1083, I_03:1377, I_04:1682, I_05:1821, I_06:2059, I_07:2081, I_08:1961, I_09:1640, I_10:1323, I_11:985, I_12:825, I_Ann:1477, P_A_Ann:14.27};
//				var site212 = {metName:"Victoria, TX", T_AN_01:44.5, T_AN_02:48, T_AN_03:53.7, T_AN_04:60.5, T_AN_05:68.3, T_AN_06:73.3, T_AN_07:74.8, T_AN_08:74.4, T_AN_09:70.1, T_AN_10:61.6, T_AN_11:51.9, T_AN_12:45.5, T_AN_Ann:60.5, T_AX_01:64.6, T_AX_02:68.2, T_AX_03:73.5, T_AX_04:79.6, T_AX_05:86.1, T_AX_06:91, T_AX_07:93.1, T_AX_08:94, T_AX_09:89.5, T_AX_10:82.7, T_AX_11:73.1, T_AX_12:66.1, T_AX_Ann:80.1, V_01:9.8, V_02:10.1, V_03:10.5, V_04:11, V_05:10.3, V_06:9.2, V_07:8.3, V_08:7.4, V_09:7.4, V_10:8.3, V_11:8.7, V_12:9.2, V_Ann:9.2, I_01:849, I_02:1038, I_03:1328, I_04:1597, I_05:1823, I_06:2009, I_07:2029, I_08:1887, I_09:1596, I_10:1328, I_11:989, I_12:801, I_Ann:1439, P_A_Ann:14.63};
//				var site213 = {metName:"Waco, TX", T_AN_01:37.6, T_AN_02:41.3, T_AN_03:48.1, T_AN_04:55.7, T_AN_05:64.7, T_AN_06:71.7, T_AN_07:75, T_AN_08:74.4, T_AN_09:67.3, T_AN_10:57.2, T_AN_11:46.9, T_AN_12:39, T_AN_Ann:56.6, T_AX_01:58.4, T_AX_02:62.4, T_AX_03:69.2, T_AX_04:77.1, T_AX_05:84.7, T_AX_06:91.5, T_AX_07:95.8, T_AX_08:96, T_AX_09:89.4, T_AX_10:79.8, T_AX_11:68, T_AX_12:59.7, T_AX_Ann:77.7, V_01:9.8, V_02:10.1, V_03:11, V_04:11.2, V_05:10.1, V_06:9.6, V_07:9.6, V_08:8.5, V_09:7.8, V_10:8.7, V_11:9.4, V_12:9.4, V_Ann:9.6, I_01:864, I_02:1081, I_03:1387, I_04:1732, I_05:1890, I_06:2135, I_07:2198, I_08:2022, I_09:1674, I_10:1302, I_11:958, I_12:823, I_Ann:1505, P_A_Ann:14.43};
//				var site214 = {metName:"Cedar City, UT", T_AN_01:19.2, T_AN_02:23.3, T_AN_03:28.3, T_AN_04:33.5, T_AN_05:42.2, T_AN_06:50.9, T_AN_07:59, T_AN_08:57.7, T_AN_09:47.7, T_AN_10:36, T_AN_11:25, T_AN_12:18.7, T_AN_Ann:36.8, T_AX_01:41.9, T_AX_02:46, T_AX_03:54.6, T_AX_04:61.1, T_AX_05:72.3, T_AX_06:82.5, T_AX_07:89.5, T_AX_08:87.2, T_AX_09:79.3, T_AX_10:65.7, T_AX_11:51.7, T_AX_12:41.5, T_AX_Ann:64.4, V_01:6.3, V_02:6.7, V_03:8.1, V_04:8.9, V_05:8.7, V_06:8.7, V_07:7.6, V_08:7.6, V_09:7.2, V_10:6.7, V_11:6.3, V_12:6.3, V_Ann:7.4, I_01:818, I_02:1072, I_03:1548, I_04:1969, I_05:2299, I_06:2534, I_07:2285, I_08:2082, I_09:1827, I_10:1355, I_11:944, I_12:741, I_Ann:1623, P_A_Ann:12.01};
//				var site215 = {metName:"Salt Lake City, UT", T_AN_01:23.3, T_AN_02:26.9, T_AN_03:34.4, T_AN_04:40.2, T_AN_05:49, T_AN_06:57.3, T_AN_07:66.4, T_AN_08:64.9, T_AN_09:54.3, T_AN_10:42.2, T_AN_11:31.1, T_AN_12:24.1, T_AN_Ann:42.9, T_AX_01:37.7, T_AX_02:43.1, T_AX_03:53.4, T_AX_04:60.3, T_AX_05:71.5, T_AX_06:81.8, T_AX_07:92.4, T_AX_08:90.1, T_AX_09:78.9, T_AX_10:64, T_AX_11:48.7, T_AX_12:38, T_AX_Ann:63.3, V_01:6.7, V_02:7.2, V_03:8.7, V_04:9.6, V_05:8.9, V_06:9.2, V_07:8.9, V_08:9.6, V_09:8.7, V_10:8.1, V_11:7.4, V_12:7.2, V_Ann:8.3, I_01:596, I_02:877, I_03:1348, I_04:1685, I_05:2071, I_06:2336, I_07:2338, I_08:2052, I_09:1689, I_10:1144, I_11:700, I_12:469, I_Ann:1442, P_A_Ann:12.62};
//				var site216 = {metName:"Burlington, VT", T_AN_01:11.6, T_AN_02:13.1, T_AN_03:22.7, T_AN_04:35.1, T_AN_05:46.1, T_AN_06:56.4, T_AN_07:61, T_AN_08:59.2, T_AN_09:51.5, T_AN_10:40.2, T_AN_11:31.6, T_AN_12:19.8, T_AN_Ann:37.4, T_AX_01:27, T_AX_02:29.8, T_AX_03:39.6, T_AX_04:54.1, T_AX_05:66.8, T_AX_06:76.2, T_AX_07:79.9, T_AX_08:78.6, T_AX_09:70.3, T_AX_10:56.6, T_AX_11:45.1, T_AX_12:33.2, T_AX_Ann:54.8, V_01:8.9, V_02:8.5, V_03:8.5, V_04:8.7, V_05:8.1, V_06:7.4, V_07:6.9, V_08:6.9, V_09:7.6, V_10:8.1, V_11:8.7, V_12:8.9, V_Ann:8.1, I_01:474, I_02:733, I_03:1046, I_04:1449, I_05:1720, I_06:1874, I_07:1835, I_08:1642, I_09:1239, I_10:770, I_11:464, I_12:377, I_Ann:1135, P_A_Ann:14.52};
//				var site217 = {metName:"DC-Dulles, VA", T_AN_01:25.8, T_AN_02:26.7, T_AN_03:33.9, T_AN_04:43.4, T_AN_05:52.3, T_AN_06:61.9, T_AN_07:66.5, T_AN_08:65.4, T_AN_09:57.6, T_AN_10:44.8, T_AN_11:36.2, T_AN_12:28.2, T_AN_Ann:45.2, T_AX_01:42.4, T_AX_02:45.2, T_AX_03:54.4, T_AX_04:66.3, T_AX_05:74, T_AX_06:82.5, T_AX_07:86.4, T_AX_08:85.9, T_AX_09:78.3, T_AX_10:67, T_AX_11:56.2, T_AX_12:45.2, T_AX_Ann:65.3, V_01:7.8, V_02:8.1, V_03:8.5, V_04:8.1, V_05:6.7, V_06:6, V_07:5.8, V_08:5.6, V_09:6, V_10:6, V_11:6.7, V_12:7.2, V_Ann:6.9, I_01:653, I_02:939, I_03:1233, I_04:1567, I_05:1771, I_06:1900, I_07:1862, I_08:1684, I_09:1376, I_10:1062, I_11:711, I_12:590, I_Ann:1279, P_A_Ann:14.55};
//				var site218 = {metName:"DC-Reagan, VA", T_AN_01:30, T_AN_02:31.2, T_AN_03:38.3, T_AN_04:47.9, T_AN_05:57, T_AN_06:66.7, T_AN_07:71.5, T_AN_08:70.4, T_AN_09:63.2, T_AN_10:51.2, T_AN_11:41.7, T_AN_12:33.3, T_AN_Ann:50.2, T_AX_01:43.6, T_AX_02:46.3, T_AX_03:55.2, T_AX_04:66.3, T_AX_05:74.6, T_AX_06:83.3, T_AX_07:87.6, T_AX_08:86.3, T_AX_09:79, T_AX_10:67.6, T_AX_11:57, T_AX_12:46.5, T_AX_Ann:66.1, V_01:9.6, V_02:9.6, V_03:10.5, V_04:9.8, V_05:8.9, V_06:8.5, V_07:8.1, V_08:7.8, V_09:8.3, V_10:8.1, V_11:8.7, V_12:8.9, V_Ann:8.9, I_01:653, I_02:934, I_03:1246, I_04:1578, I_05:1767, I_06:1903, I_07:1864, I_08:1712, I_09:1371, I_10:1045, I_11:718, I_12:587, I_Ann:1282, P_A_Ann:14.69};
//				var site219 = {metName:"Lynchburg, VA", T_AN_01:27.6, T_AN_02:29.1, T_AN_03:35.9, T_AN_04:44.7, T_AN_05:53, T_AN_06:61.9, T_AN_07:65.8, T_AN_08:64.7, T_AN_09:57.5, T_AN_10:45.5, T_AN_11:36.5, T_AN_12:29.1, T_AN_Ann:46, T_AX_01:45.5, T_AX_02:48.3, T_AX_03:57.2, T_AX_04:67.9, T_AX_05:74.6, T_AX_06:82.2, T_AX_07:85.6, T_AX_08:84.7, T_AX_09:77.9, T_AX_10:67.9, T_AX_11:57.7, T_AX_12:47.4, T_AX_Ann:66.4, V_01:6, V_02:6, V_03:6.7, V_04:6.5, V_05:5.6, V_06:4.7, V_07:4.3, V_08:3.8, V_09:4.3, V_10:4.3, V_11:4.9, V_12:5.1, V_Ann:5.1, I_01:740, I_02:1006, I_03:1334, I_04:1655, I_05:1855, I_06:2001, I_07:1913, I_08:1758, I_09:1439, I_10:1128, I_11:807, I_12:662, I_Ann:1358, P_A_Ann:14.2};
//				var site220 = {metName:"Norfolk, VA", T_AN_01:34.5, T_AN_02:35.2, T_AN_03:41.6, T_AN_04:50.2, T_AN_05:58.7, T_AN_06:68.1, T_AN_07:72.7, T_AN_08:71.6, T_AN_09:66.4, T_AN_10:54.8, T_AN_11:45.1, T_AN_12:37.2, T_AN_Ann:53, T_AX_01:49.3, T_AX_02:50.9, T_AX_03:58.3, T_AX_04:68.1, T_AX_05:75.1, T_AX_06:83.1, T_AX_07:87.2, T_AX_08:85.2, T_AX_09:79.3, T_AX_10:70, T_AX_11:60.6, T_AX_12:52.1, T_AX_Ann:68.3, V_01:9.8, V_02:10.1, V_03:10.5, V_04:10.7, V_05:9.8, V_06:8.7, V_07:8.3, V_08:7.8, V_09:9.2, V_10:8.7, V_11:8.9, V_12:9.2, V_Ann:9.2, I_01:723, I_02:962, I_03:1312, I_04:1674, I_05:1872, I_06:1989, I_07:1940, I_08:1743, I_09:1406, I_10:1101, I_11:807, I_12:655, I_Ann:1349, P_A_Ann:14.68};
//				var site221 = {metName:"Richmond, VA", T_AN_01:30.2, T_AN_02:31, T_AN_03:38, T_AN_04:47.2, T_AN_05:55.8, T_AN_06:65.2, T_AN_07:69.5, T_AN_08:68.3, T_AN_09:61.2, T_AN_10:49.2, T_AN_11:40.2, T_AN_12:32.3, T_AN_Ann:49, T_AX_01:47.5, T_AX_02:50.5, T_AX_03:59, T_AX_04:69.7, T_AX_05:76.6, T_AX_06:84.7, T_AX_07:88.5, T_AX_08:86.9, T_AX_09:80.3, T_AX_10:70.2, T_AX_11:60.2, T_AX_12:50.1, T_AX_Ann:68.7, V_01:8.3, V_02:8.5, V_03:9.2, V_04:8.9, V_05:7.8, V_06:7.2, V_07:6.7, V_08:6.3, V_09:6.9, V_10:6.7, V_11:7.4, V_12:7.6, V_Ann:7.6, I_01:723, I_02:993, I_03:1305, I_04:1650, I_05:1856, I_06:1986, I_07:1890, I_08:1735, I_09:1415, I_10:1099, I_11:798, I_12:649, I_Ann:1341, P_A_Ann:14.61};
//				var site222 = {metName:"Roanoke, VA", T_AN_01:29.4, T_AN_02:31, T_AN_03:37.9, T_AN_04:46.7, T_AN_05:54.7, T_AN_06:63.4, T_AN_07:67.2, T_AN_08:66.2, T_AN_09:58.8, T_AN_10:47.7, T_AN_11:38.7, T_AN_12:31.3, T_AN_Ann:47.8, T_AX_01:45.8, T_AX_02:48.7, T_AX_03:57.3, T_AX_04:67.8, T_AX_05:75, T_AX_06:82.3, T_AX_07:85.9, T_AX_08:85.1, T_AX_09:78, T_AX_10:68.4, T_AX_11:57.7, T_AX_12:47.4, T_AX_Ann:66.6, V_01:8.1, V_02:8.1, V_03:8.3, V_04:7.8, V_05:6.5, V_06:5.8, V_07:5.6, V_08:4.9, V_09:5.1, V_10:5.6, V_11:6.5, V_12:7.4, V_Ann:6.7, I_01:729, I_02:986, I_03:1293, I_04:1611, I_05:1795, I_06:1892, I_07:1860, I_08:1699, I_09:1395, I_10:1104, I_11:781, I_12:646, I_Ann:1316, P_A_Ann:14.1};
//				var site223 = {metName:"Olympia, WA", T_AN_01:33.8, T_AN_02:32.9, T_AN_03:35.3, T_AN_04:38, T_AN_05:43.4, T_AN_06:47.8, T_AN_07:51.3, T_AN_08:50.9, T_AN_09:46.4, T_AN_10:40.9, T_AN_11:36.6, T_AN_12:33.4, T_AN_Ann:40.9, T_AX_01:45.7, T_AX_02:49.3, T_AX_03:53.2, T_AX_04:58, T_AX_05:64.9, T_AX_06:69.7, T_AX_07:76.7, T_AX_08:76.6, T_AX_09:71.5, T_AX_10:59.7, T_AX_11:50.2, T_AX_12:44.5, T_AX_Ann:60, V_01:6, V_02:5.6, V_03:6.3, V_04:6.3, V_05:6, V_06:6, V_07:5.4, V_08:4.9, V_09:4.7, V_10:5.1, V_11:6, V_12:6, V_Ann:5.6, I_01:319, I_02:562, I_03:866, I_04:1257, I_05:1574, I_06:1721, I_07:1876, I_08:1624, I_09:1257, I_10:676, I_11:352, I_12:264, I_Ann:1029, P_A_Ann:14.58};
//				var site224 = {metName:"Quillayute, WA", T_AN_01:36.4, T_AN_02:35.6, T_AN_03:37, T_AN_04:39.1, T_AN_05:43.5, T_AN_06:47.9, T_AN_07:51.2, T_AN_08:51, T_AN_09:47.5, T_AN_10:42.4, T_AN_11:38.6, T_AN_12:35.7, T_AN_Ann:42.2, T_AX_01:47.1, T_AX_02:49.5, T_AX_03:50.8, T_AX_04:54.2, T_AX_05:59.1, T_AX_06:62.7, T_AX_07:66.9, T_AX_08:67.6, T_AX_09:65.8, T_AX_10:57.9, T_AX_11:50.7, T_AX_12:46.5, T_AX_Ann:56.6, V_01:6.5, V_02:6, V_03:6.3, V_04:5.8, V_05:5.4, V_06:4.9, V_07:4.7, V_08:4.5, V_09:4, V_10:4.9, V_11:6, V_12:6.3, V_Ann:5.4, I_01:304, I_02:556, I_03:831, I_04:1225, I_05:1520, I_06:1600, I_07:1681, I_08:1469, I_09:1170, I_10:653, I_11:351, I_12:257, I_Ann:968, P_A_Ann:14.59};
//				var site225 = {metName:"Seattle, WA", T_AN_01:37.6, T_AN_02:37.8, T_AN_03:39.7, T_AN_04:42.8, T_AN_05:48, T_AN_06:52.4, T_AN_07:56.4, T_AN_08:56.5, T_AN_09:52.9, T_AN_10:46.5, T_AN_11:40.5, T_AN_12:36.8, T_AN_Ann:45.7, T_AX_01:46.4, T_AX_02:49.4, T_AX_03:52.4, T_AX_04:57.2, T_AX_05:63.7, T_AX_06:68.5, T_AX_07:75.1, T_AX_08:74.8, T_AX_09:69.5, T_AX_10:58.6, T_AX_11:50.3, T_AX_12:45.4, T_AX_Ann:59.3, V_01:8.5, V_02:8.3, V_03:8.5, V_04:7.8, V_05:7.6, V_06:7.6, V_07:7.2, V_08:6.9, V_09:6.7, V_10:7.2, V_11:8.1, V_12:8.7, V_Ann:7.8, I_01:316, I_02:595, I_03:882, I_04:1329, I_05:1678, I_06:1842, I_07:1951, I_08:1679, I_09:1235, I_10:671, I_11:356, I_12:267, I_Ann:1067, P_A_Ann:14.47};
//				var site226 = {metName:"Spokane, WA", T_AN_01:24.3, T_AN_02:26.4, T_AN_03:30.9, T_AN_04:36.4, T_AN_05:43.8, T_AN_06:49.9, T_AN_07:56.7, T_AN_08:55.7, T_AN_09:47.7, T_AN_10:37.3, T_AN_11:29.3, T_AN_12:23.7, T_AN_Ann:38.5, T_AX_01:34.1, T_AX_02:39.7, T_AX_03:48.1, T_AX_04:56, T_AX_05:65.8, T_AX_06:72.5, T_AX_07:83.2, T_AX_08:82.2, T_AX_09:72.8, T_AX_10:57.2, T_AX_11:41.5, T_AX_12:33, T_AX_Ann:57.2, V_01:8.3, V_02:8.3, V_03:9.6, V_04:9.6, V_05:9.4, V_06:9.2, V_07:8.5, V_08:8.1, V_09:7.8, V_10:8.1, V_11:8.3, V_12:8.3, V_Ann:8.7, I_01:345, I_02:650, I_03:1060, I_04:1497, I_05:1893, I_06:2071, I_07:2274, I_08:1947, I_09:1430, I_10:841, I_11:401, I_12:283, I_Ann:1224, P_A_Ann:13.4};
//				var site227 = {metName:"Stampede Pass, WA", T_AN_01:24, T_AN_02:25.7, T_AN_03:28.6, T_AN_04:31.8, T_AN_05:37.8, T_AN_06:42.4, T_AN_07:49, T_AN_08:49.3, T_AN_09:45.5, T_AN_10:36.7, T_AN_11:29.2, T_AN_12:23.5, T_AN_Ann:35.3, T_AX_01:30.7, T_AX_02:33.8, T_AX_03:37.9, T_AX_04:43.1, T_AX_05:51, T_AX_06:56.6, T_AX_07:65.7, T_AX_08:65.7, T_AX_09:60, T_AX_10:47.3, T_AX_11:36.2, T_AX_12:30.1, T_AX_Ann:46.5, V_01:7.4, V_02:7.4, V_03:6.9, V_04:6.7, V_05:6.9, V_06:7.4, V_07:7.4, V_08:6.9, V_09:6.7, V_10:6.7, V_11:6.9, V_12:7.4, V_Ann:7.2, I_01:345, I_02:595, I_03:857, I_04:1281, I_05:1599, I_06:1703, I_07:1946, I_08:1676, I_09:1218, I_10:678, I_11:366, I_12:286, I_Ann:1046, P_A_Ann:12.73};
//				var site228 = {metName:"Yakima, WA", T_AN_01:24.1, T_AN_02:27.1, T_AN_03:30.8, T_AN_04:35.5, T_AN_05:43.5, T_AN_06:49.6, T_AN_07:55.1, T_AN_08:53, T_AN_09:45, T_AN_10:35.2, T_AN_11:27.5, T_AN_12:23.4, T_AN_Ann:37.5, T_AX_01:38.1, T_AX_02:46, T_AX_03:55.3, T_AX_04:62.6, T_AX_05:71.8, T_AX_06:78.6, T_AX_07:87.9, T_AX_08:86.2, T_AX_09:77.9, T_AX_10:63, T_AX_11:47.3, T_AX_12:36.6, T_AX_Ann:62.6, V_01:4.3, V_02:5.4, V_03:6.7, V_04:7.4, V_05:7.4, V_06:7.6, V_07:7.2, V_08:6.7, V_09:6.3, V_10:5.6, V_11:4.7, V_12:4, V_Ann:6, I_01:399, I_02:740, I_03:1187, I_04:1639, I_05:1987, I_06:2252, I_07:2374, I_08:2033, I_09:1537, I_10:937, I_11:483, I_12:315, I_Ann:1324, P_A_Ann:14.14};
//				var site229 = {metName:"Beckley, WV", T_AN_01:24.2, T_AN_02:26.2, T_AN_03:32.9, T_AN_04:42.7, T_AN_05:50.3, T_AN_06:58.6, T_AN_07:62, T_AN_08:61.1, T_AN_09:54.2, T_AN_10:43.8, T_AN_11:35.2, T_AN_12:27, T_AN_Ann:43.2, T_AX_01:39.5, T_AX_02:42.2, T_AX_03:50.7, T_AX_04:62.6, T_AX_05:69.3, T_AX_06:76, T_AX_07:78.7, T_AX_08:78.4, T_AX_09:72.3, T_AX_10:62.8, T_AX_11:51.9, T_AX_12:41.6, T_AX_Ann:60.5, V_01:8.3, V_02:8.1, V_03:8.1, V_04:7.8, V_05:6.7, V_06:5.6, V_07:5.1, V_08:4.9, V_09:5.6, V_10:6.3, V_11:6.9, V_12:7.6, V_Ann:6.7, I_01:632, I_02:847, I_03:1144, I_04:1499, I_05:1680, I_06:1797, I_07:1752, I_08:1643, I_09:1346, I_10:1018, I_11:691, I_12:538, I_Ann:1216, P_A_Ann:13.42};
//				var site230 = {metName:"Charleston, WV", T_AN_01:26.8, T_AN_02:28.6, T_AN_03:35.1, T_AN_04:44.9, T_AN_05:52.6, T_AN_06:61.6, T_AN_07:65.2, T_AN_08:64.3, T_AN_09:56.6, T_AN_10:45, T_AN_11:36.4, T_AN_12:29.2, T_AN_Ann:45.5, T_AX_01:43.1, T_AX_02:46.3, T_AX_03:55.5, T_AX_04:68.1, T_AX_05:74.5, T_AX_06:81.6, T_AX_07:84.4, T_AX_08:83.9, T_AX_09:77.7, T_AX_10:67.6, T_AX_11:56.3, T_AX_12:45.5, T_AX_Ann:65.4, V_01:5.4, V_02:5.1, V_03:5.1, V_04:5.1, V_05:4, V_06:3.4, V_07:3.1, V_08:2.7, V_09:2.9, V_10:3.1, V_11:4, V_12:4.7, V_Ann:4, I_01:579, I_02:814, I_03:1126, I_04:1524, I_05:1737, I_06:1916, I_07:1843, I_08:1721, I_09:1378, I_10:1024, I_11:667, I_12:512, I_Ann:1237, P_A_Ann:14.16};
//				var site231 = {metName:"Elkins, WV", T_AN_01:20.6, T_AN_02:21.5, T_AN_03:28.1, T_AN_04:37, T_AN_05:45.9, T_AN_06:55.1, T_AN_07:58.9, T_AN_08:58.3, T_AN_09:50.7, T_AN_10:38.1, T_AN_11:30.3, T_AN_12:22.9, T_AN_Ann:39, T_AX_01:39.7, T_AX_02:42.3, T_AX_03:51.2, T_AX_04:63.3, T_AX_05:70.5, T_AX_06:77.7, T_AX_07:80.5, T_AX_08:80.3, T_AX_09:73.9, T_AX_10:64, T_AX_11:52.7, T_AX_12:42.2, T_AX_Ann:61.5, V_01:5.8, V_02:5.8, V_03:5.8, V_04:5.8, V_05:4.5, V_06:3.6, V_07:3.1, V_08:2.7, V_09:2.9, V_10:3.6, V_11:4.7, V_12:5.1, V_Ann:4.5, I_01:574, I_02:794, I_03:1113, I_04:1461, I_05:1619, I_06:1793, I_07:1738, I_08:1611, I_09:1293, I_10:972, I_11:618, I_12:498, I_Ann:1173, P_A_Ann:13.69};
//				var site232 = {metName:"Huntington, WV", T_AN_01:26.7, T_AN_02:28.9, T_AN_03:35.9, T_AN_04:45.8, T_AN_05:53.7, T_AN_06:62.5, T_AN_07:66.1, T_AN_08:65, T_AN_09:57.1, T_AN_10:45.7, T_AN_11:37.2, T_AN_12:29.4, T_AN_Ann:46.2, T_AX_01:42.4, T_AX_02:45.9, T_AX_03:55.5, T_AX_04:67.7, T_AX_05:74.7, T_AX_06:82, T_AX_07:85, T_AX_08:84.7, T_AX_09:78.2, T_AX_10:67.6, T_AX_11:55.7, T_AX_12:44.9, T_AX_Ann:65.3, V_01:6.9, V_02:6.7, V_03:6.9, V_04:6.7, V_05:5.6, V_06:4.9, V_07:4.7, V_08:4.3, V_09:4.5, V_10:4.9, V_11:5.8, V_12:6.3, V_Ann:5.6, I_01:570, I_02:828, I_03:1163, I_04:1545, I_05:1751, I_06:1915, I_07:1856, I_08:1725, I_09:1404, I_10:1045, I_11:676, I_12:519, I_Ann:1250, P_A_Ann:14.26};
//				var site233 = {metName:"Eau Claire, WI", T_AN_01:6.6, T_AN_02:11.2, T_AN_03:22, T_AN_04:34.8, T_AN_05:46.1, T_AN_06:56.4, T_AN_07:60.5, T_AN_08:58.9, T_AN_09:49.8, T_AN_10:38.1, T_AN_11:25.7, T_AN_12:12.8, T_AN_Ann:35.2, T_AX_01:22.7, T_AX_02:28.6, T_AX_03:40.7, T_AX_04:56.9, T_AX_05:68.6, T_AX_06:77.6, T_AX_07:81.4, T_AX_08:79.6, T_AX_09:71.2, T_AX_10:57.7, T_AX_11:41.2, T_AX_12:27.9, T_AX_Ann:54.5, V_01:7.4, V_02:7.6, V_03:7.6, V_04:8.7, V_05:8.3, V_06:7.2, V_07:6.5, V_08:6.3, V_09:6.9, V_10:7.6, V_11:7.6, V_12:7.2, V_Ann:7.4, I_01:485, I_02:734, I_03:1116, I_04:1485, I_05:1716, I_06:1866, I_07:1895, I_08:1616, I_09:1234, I_10:802, I_11:484, I_12:377, I_Ann:1151, P_A_Ann:14.23};
//				var site234 = {metName:"Green Bay, WI", T_AN_01:10.7, T_AN_02:14, T_AN_03:23.7, T_AN_04:35.1, T_AN_05:45.5, T_AN_06:55.9, T_AN_07:59.2, T_AN_08:58, T_AN_09:49.6, T_AN_10:39.1, T_AN_11:28.4, T_AN_12:16.9, T_AN_Ann:36.3, T_AX_01:24.9, T_AX_02:29.1, T_AX_03:39.9, T_AX_04:54.3, T_AX_05:66.2, T_AX_06:75.7, T_AX_07:79.6, T_AX_08:78.1, T_AX_09:70.8, T_AX_10:57.5, T_AX_11:43.1, T_AX_12:30.3, T_AX_Ann:54.1, V_01:9.6, V_02:9.4, V_03:9.4, V_04:10.5, V_05:9.2, V_06:7.6, V_07:7.2, V_08:6.7, V_09:7.6, V_10:8.7, V_11:9.2, V_12:8.9, V_Ann:8.7, I_01:426, I_02:678, I_03:1103, I_04:1501, I_05:1748, I_06:1923, I_07:1900, I_08:1624, I_09:1274, I_10:820, I_11:504, I_12:373, I_Ann:1156, P_A_Ann:14.33};
//				var site235 = {metName:"La Crosse, WI", T_AN_01:9.9, T_AN_02:15, T_AN_03:25.7, T_AN_04:38.7, T_AN_05:49.5, T_AN_06:59.6, T_AN_07:63.6, T_AN_08:61.9, T_AN_09:53.2, T_AN_10:41.6, T_AN_11:29.3, T_AN_12:16.5, T_AN_Ann:38.7, T_AX_01:25.6, T_AX_02:31.4, T_AX_03:43.7, T_AX_04:58.7, T_AX_05:70.1, T_AX_06:79.5, T_AX_07:83.2, T_AX_08:81, T_AX_09:73.2, T_AX_10:60, T_AX_11:43.8, T_AX_12:30.4, T_AX_Ann:56.7, V_01:8.7, V_02:8.9, V_03:9.2, V_04:9.8, V_05:9.2, V_06:8.1, V_07:7.6, V_08:7.4, V_09:8.3, V_10:9.2, V_11:9.4, V_12:8.7, V_Ann:8.7, I_01:507, I_02:767, I_03:1131, I_04:1445, I_05:1723, I_06:1887, I_07:1895, I_08:1615, I_09:1260, I_10:829, I_11:512, I_12:397, I_Ann:1164, P_A_Ann:14.36};
//				var site236 = {metName:"Madison, WI", T_AN_01:12.1, T_AN_02:16.2, T_AN_03:25.4, T_AN_04:36.7, T_AN_05:47.3, T_AN_06:57.6, T_AN_07:61.5, T_AN_08:59.8, T_AN_09:51, T_AN_10:40.1, T_AN_11:29.3, T_AN_12:17.6, T_AN_Ann:37.9, T_AX_01:26.7, T_AX_02:31.6, T_AX_03:43.3, T_AX_04:57, T_AX_05:68.3, T_AX_06:77.8, T_AX_07:81, T_AX_08:79.2, T_AX_09:72.1, T_AX_10:59.4, T_AX_11:44.5, T_AX_12:31.4, T_AX_Ann:56, V_01:8.5, V_02:8.5, V_03:8.9, V_04:9.6, V_05:8.3, V_06:6.9, V_07:6.5, V_08:6, V_09:6.7, V_10:7.8, V_11:8.5, V_12:8.1, V_Ann:7.8, I_01:441, I_02:718, I_03:1122, I_04:1478, I_05:1735, I_06:1931, I_07:1911, I_08:1634, I_09:1324, I_10:871, I_11:541, I_12:422, I_Ann:1177, P_A_Ann:14.24};
//				var site237 = {metName:"Milwaukee, WI", T_AN_01:16.9, T_AN_02:20.6, T_AN_03:28.5, T_AN_04:38.1, T_AN_05:47.7, T_AN_06:58.5, T_AN_07:64.2, T_AN_08:64.1, T_AN_09:55.9, T_AN_10:44.6, T_AN_11:33, T_AN_12:21.9, T_AN_Ann:41.2, T_AX_01:29.5, T_AX_02:33.1, T_AX_03:42.5, T_AX_04:53.6, T_AX_05:64.5, T_AX_06:75, T_AX_07:79.6, T_AX_08:78.4, T_AX_09:71.5, T_AX_10:59.6, T_AX_11:46.1, T_AX_12:33.8, T_AX_Ann:55.6, V_01:11, V_02:10.7, V_03:10.7, V_04:11.6, V_05:10.3, V_06:8.7, V_07:8.9, V_08:8.5, V_09:8.9, V_10:10.1, V_11:10.5, V_12:10.5, V_Ann:10.1, I_01:477, I_02:755, I_03:1096, I_04:1444, I_05:1729, I_06:1926, I_07:1894, I_08:1612, I_09:1322, I_10:873, I_11:536, I_12:411, I_Ann:1173, P_A_Ann:14.34};
//				var site238 = {metName:"Casper, WY", T_AN_01:16.2, T_AN_02:18.1, T_AN_03:23.7, T_AN_04:30, T_AN_05:38.7, T_AN_06:46.7, T_AN_07:54.4, T_AN_08:53.3, T_AN_09:43.4, T_AN_10:32.7, T_AN_11:23.8, T_AN_12:16.4, T_AN_Ann:33.1, T_AX_01:35.1, T_AX_02:38.5, T_AX_03:47.8, T_AX_04:55.6, T_AX_05:66.5, T_AX_06:77.7, T_AX_07:87.6, T_AX_08:85.6, T_AX_09:74.2, T_AX_10:59, T_AX_11:44.7, T_AX_12:35.1, T_AX_Ann:58.9, V_01:14.8, V_02:13.4, V_03:12.5, V_04:11.6, V_05:10.5, V_06:10.3, V_07:9.2, V_08:9.4, V_09:9.8, V_10:11, V_11:13.4, V_12:15, V_Ann:11.6, I_01:601, I_02:877, I_03:1259, I_04:1631, I_05:1980, I_06:2243, I_07:2292, I_08:1988, I_09:1552, I_10:1046, I_11:650, I_12:505, I_Ann:1385, P_A_Ann:12.13};
//				var site239 = {metName:"Cheyenne, WY", T_AN_01:18.8, T_AN_02:19.8, T_AN_03:25.1, T_AN_04:31.3, T_AN_05:40.7, T_AN_06:49.2, T_AN_07:56.1, T_AN_08:54.6, T_AN_09:45.4, T_AN_10:34.4, T_AN_11:25.1, T_AN_12:19.1, T_AN_Ann:35, T_AX_01:38.8, T_AX_02:40.4, T_AX_03:47.3, T_AX_04:53.7, T_AX_05:63.9, T_AX_06:74.3, T_AX_07:82.6, T_AX_08:80.2, T_AX_09:71.3, T_AX_10:58, T_AX_11:45.8, T_AX_12:38.6, T_AX_Ann:57.9, V_01:14.1, V_02:13.6, V_03:13.6, V_04:13.2, V_05:12.1, V_06:11, V_07:9.8, V_08:9.8, V_09:10.5, V_10:11.9, V_11:13.2, V_12:13.9, V_Ann:12.3, I_01:712, I_02:975, I_03:1360, I_04:1668, I_05:1919, I_06:2196, I_07:2163, I_08:1883, I_09:1588, I_10:1131, I_11:761, I_12:609, I_Ann:1414, P_A_Ann:11.78};
//				var site240 = {metName:"Lander, WY", T_AN_01:12.5, T_AN_02:16.2, T_AN_03:24.9, T_AN_04:32.5, T_AN_05:41.6, T_AN_06:49.6, T_AN_07:57.5, T_AN_08:56.1, T_AN_09:46.4, T_AN_10:34.2, T_AN_11:21.8, T_AN_12:13.2, T_AN_Ann:33.9, T_AX_01:32, T_AX_02:36.2, T_AX_03:46.9, T_AX_04:55.1, T_AX_05:65.7, T_AX_06:76, T_AX_07:86.2, T_AX_08:84.3, T_AX_09:73, T_AX_10:57.8, T_AX_11:42.6, T_AX_12:32.3, T_AX_Ann:57.3, V_01:4.9, V_02:4.9, V_03:6.7, V_04:7.4, V_05:7.4, V_06:7.4, V_07:7.2, V_08:6.9, V_09:6.5, V_10:5.6, V_11:5.1, V_12:4.9, V_Ann:6.3, I_01:640, I_02:920, I_03:1320, I_04:1658, I_05:2026, I_06:2242, I_07:2256, I_08:1966, I_09:1564, I_10:1086, I_11:696, I_12:551, I_Ann:1411, P_A_Ann:12.02};
//				var site241 = {metName:"Rock Springs, WY", T_AN_01:13.6, T_AN_02:15.5, T_AN_03:23.8, T_AN_04:29.7, T_AN_05:38.6, T_AN_06:46.8, T_AN_07:55, T_AN_08:53.3, T_AN_09:43.6, T_AN_10:33.2, T_AN_11:22.1, T_AN_12:14.2, T_AN_Ann:32.5, T_AX_01:29.2, T_AX_02:32.3, T_AX_03:42.8, T_AX_04:51.9, T_AX_05:62.7, T_AX_06:73, T_AX_07:82.9, T_AX_08:80.2, T_AX_09:69.4, T_AX_10:55.5, T_AX_11:39.9, T_AX_12:29.6, T_AX_Ann:54.1, V_01:12.1, V_02:11.2, V_03:12.1, V_04:12.3, V_05:11.2, V_06:10.7, V_07:9.4, V_08:8.9, V_09:9.4, V_10:11, V_11:11.2, V_12:11.4, V_Ann:11, I_01:654, I_02:928, I_03:1342, I_04:1738, I_05:2044, I_06:2307, I_07:2301, I_08:2019, I_09:1673, I_10:1186, I_11:716, I_12:564, I_Ann:1456, P_A_Ann:13.05};
//				var site242 = {metName:"Sheridan, WY", T_AN_01:13, T_AN_02:16.8, T_AN_03:23.4, T_AN_04:31.4, T_AN_05:39.8, T_AN_06:47.9, T_AN_07:54.8, T_AN_08:53.2, T_AN_09:43.5, T_AN_10:32.5, T_AN_11:21.5, T_AN_12:13.6, T_AN_Ann:32.6, T_AX_01:34.4, T_AX_02:38.5, T_AX_03:47.5, T_AX_04:55.7, T_AX_05:65.4, T_AX_06:74.8, T_AX_07:85.9, T_AX_08:85.2, T_AX_09:74, T_AX_10:58.8, T_AX_11:45.5, T_AX_12:35.4, T_AX_Ann:58.4, V_01:6.5, V_02:6.9, V_03:7.8, V_04:8.9, V_05:8.3, V_06:7.2, V_07:6.5, V_08:6, V_09:6.3, V_10:6.7, V_11:6.5, V_12:6.5, V_Ann:6.9, I_01:482, I_02:767, I_03:1145, I_04:1509, I_05:1850, I_06:2030, I_07:2152, I_08:1860, I_09:1419, I_10:909, I_11:569, I_12:429, I_Ann:1260, P_A_Ann:12.73};
//
//				//put paint objects into array
//				var aryMetData = [site1, site2, site3, site4, site5, site6, site7, site8, site9, site10, site11, site12, site13, site14, site15, site16, site17, site18, site19, site20, site21, site22, site23, site24, site25, site26, site27, site28, site29, site30, site31, site32, site33, site34, site35, site36, site37, site38, site39, site40, site41, site42, site43, site44, site45, site46, site47, site48, site49, site50, site51, site52, site53, site54, site55, site56, site57, site58, site59, site60, site61, site62, site63, site64, site65, site66, site67, site68, site69, site70, site71, site72, site73, site74, site75, site76, site77, site78, site79, site80, site81, site82, site83, site84, site85, site86, site87, site88, site89, site90, site91, site92, site93, site94, site95, site96, site97, site98, site99, site100, site101, site102, site103, site104, site105, site106, site107, site108, site109, site110, site111, site112, site113, site114, site115, site116, site117, site118, site119, site120, site121, site122, site123, site124, site125, site126, site127, site128, site129, site130, site131, site132, site133, site134, site135, site136, site137, site138, site139, site140, site141, site142, site143, site144, site145, site146, site147, site148, site149, site150, site151, site152, site153, site154, site155, site156, site157, site158, site159, site160, site161, site162, site163, site164, site165, site166, site167, site168, site169, site170, site171, site172, site173, site174, site175, site176, site177, site178, site179, site180, site181, site182, site183, site184, site185, site186, site187, site188, site189, site190, site191, site192, site193, site194, site195, site196, site197, site198, site199, site200, site201, site202, site203, site204, site205, site206, site207, site208, site209, site210, site211, site212, site213, site214, site215, site216, site217, site218, site219, site220, site221, site222, site223, site224, site225, site226, site227, site228, site229, site230, site231, site232, site233, site234, site235, site236, site237, site238, site239, site240, site241, site242];
//				
//				return aryMetData;
//			}
//				
//			function appendMetData() {
//				//declare variables:
//				var i, lenAry, text, aryMetData;
//				aryMetData = MetData(select);
//				//put names into dropdown box "metSite"
//				lenAry = aryMetData.length;
//				var select = document.getElementById("metSite");
//				for(var i = 0; i < lenAry; i++)
//				{
//					var option = document.createElement("OPTION"),
//						txt1 = document.createTextNode(aryMetData[i].metName);
//					option.appendChild(txt1);
//					option.setAttribute("value",aryMetData[i].metName);
//					select.insertBefore(option,metSite.lastChild);
//				}
//			}

////Begin calculations=============================================================================
//function beginCalcs() {
//	var validate;
//	
//	validate = ValidateAll();
//	
//	if (validate == 0) {
//		//reset aryVarVals
//		resetAryVarVals();
//		
//		//get met site
//		getMet();
//		
//		//get liquid
//		getLiq();
//		
//		//get paint
//		getSolar();
//		
//		//process by tank type
//		var x = document.getElementById("tankType").value;
//		aryVarVals.tankType = tankType.options[tankType.selectedIndex].innerHTML;
//		aryVarVals.Desc = document.getElementById("tankDesc").value;
//		aryVarVals.tankID = document.getElementById("tankID").value;
//		if (x == "VFR") {
//			Eq1_1();
//			outputWindow(); 
//		} else if (x == "HFR") {
//			Eq1_1();
//			outputWindow(); 
//		} else if (x == "EFR") {
//		
//		} else if (x == "IFR") {
//		
//		}
//		
//	} else {
//		validateErrorMsg(validate); 
//	}
//}
//			
//function getMet() {
//	var i, x, site, length;
//	var select = document.getElementById("metSite").value;
//	aryVarVals.site = select;
//	aryVarDesc.site = "Nearest major city";
//	
//	site = MetData();
//	length = site.length;
//	for (i = 0; i < length; i++) {
//		if (site[i].metName == select) {
//			x = i;
//			i = length;
//		}
//	}
//		
//	//need to make "site[x].... dynamic"
//	aryVarVals.T_AN = site[x].T_AN_Ann + 459.7;
//	aryVarVals.T_AX = site[x].T_AX_Ann + 459.7;
//	aryVarVals.v = site[x].V_Ann;
//	aryVarVals.I = site[x].I_Ann;
//	aryVarVals.P_A = site[x].P_A_Ann;
//}
//
//function getLiq() {
//	var liq, i, x, y, length;
//	var liqSelect = LiqType.options[LiqType.selectedIndex].innerHTML;
//	aryVarVals.LiqCat = liqSelect;
//	aryVarDesc.LiqCat = "Liquid category";
//	
//	
//	aryVarVals.LiqInput = LiqInput.options[LiqInput.selectedIndex].innerHTML;
//	y = document.getElementById("LiqInput").value;
//	z = document.getElementById("calcMethod").value;
//	
//	
//	if (y == "Manual") {
//		aryVarVals.LiqName = "User Liquid";
//		aryVarDesc.LiqName = "Liquid selected"
//		aryVarVals.M_V = parseFloat(document.getElementById("inputM_V").value);
//		aryVarNames2.RVP = "RVP";
//		if (aryVarVals.LiqCat == "Crude Oil") {						
//			if (z == "RVP") {
//			aryVarVals.RVP = parseFloat(document.getElementById("inputRVP").value);
//			aryVarDesc.RVP = "Reid vapor pressure, psia";
//
//			} else {
//			aryVarVals.A = parseFloat(document.getElementById("inputA").value);
//			aryVarVals.B = parseFloat(document.getElementById("inputB").value);
//			}
//			aryVarDesc.B = "Constant in vapor pressure equation, &deg;R"
//		} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
//			aryVarVals.Slope = parseFloat(document.getElementById("inputSlope").value);
//			aryVarDesc.Slope = "Stock ASTM-D86 distillation slope at 10% evaporated, &deg;F/vol%"
//			if (z == "RVP") {
//				aryVarVals.RVP = parseFloat(document.getElementById("inputRVP").value);
//				aryVarDesc.RVP = "Reid vapor pressure, psia";
//
//			} else {
//				aryVarVals.A = parseFloat(document.getElementById("inputA").value);
//				aryVarVals.B = parseFloat(document.getElementById("inputB").value);	
//			}
//			aryVarDesc.B = "Constant in vapor pressure equation, &deg;R"						
//		} else {
//			aryVarVals.A = parseFloat(document.getElementById("inputA").value);
//			aryVarVals.B = parseFloat(document.getElementById("inputB").value);
//			aryVarVals.C = parseFloat(document.getElementById("inputC").value);
//			aryVarDesc.B = "Constant in vapor pressure equation, &deg;C"
//			aryVarDesc.C = "Constant in vapor pressure equation, &deg;C"
//			
//		}
//	} else {
//	
//		var select = document.getElementById("tankContents").value;				
//		aryVarVals.LiqName = select;
//		
//		if (aryVarVals.LiqCat == "Crude Oil") {
//			liq = CrudeProperties();
//			length = liq.length;
//			for (i = 0; i < length; i++) {
//				if (liq[i].propName == select) {
//					x = i;
//					i = length;
//				}
//			}
//			aryVarVals.M_V = liq[x].M_V;
//			aryVarVals.M_L = liq[x].M_L;
//			aryVarVals.W_L = liq[x].W_L;
//			aryVarVals.Slope = liq[x].S;
//			aryVarDesc.Slope = "Stock ASTM-D86 distillation slope at 10% evaporated, &deg;F/vol%"
//			aryVarVals.A = liq[x].A;
//			aryVarVals.B = liq[x].B;
//			aryVarVals.P_VA = liq[x].P_VA;
//			aryVarVals.RVP = liq[x].RVP;
//			aryVarDesc.RVP = "Reid vapor pressure, psia";
//			aryVarNames2.RVP = "RVP";
//		} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
//			liq = PertoleumProperties();
//			length = liq.length;
//			for (i = 0; i < length; i++) {
//				if (liq[i].propName == select) {
//					x = i;
//					i = length;
//				}
//			}
//			aryVarVals.M_V = liq[x].M_V;
//			aryVarVals.M_L = liq[x].M_L;
//			aryVarVals.W_L = liq[x].W_L;
//			aryVarVals.Slope = liq[x].S;
//			aryVarDesc.Slope = "Stock ASTM-D86 distillation slope at 10% evaporated, &deg;F/vol%"
//			aryVarVals.A = liq[x].A;
//			aryVarVals.B = liq[x].B;
//			aryVarVals.P_VA = liq[x].P_VA;
//			aryVarVals.RVP = liq[x].RVP;
//			aryVarDesc.RVP = "Reid vapor pressure, psia";
//			aryVarNames2.RVP = "RVP";
//		} else {
//			liq = PetroChemProperties();
//			length = liq.length;
//			for (i = 0; i < length; i++) {
//				if (liq[i].propName == select) {
//					x = i;
//					i = length;
//				}
//			}
//			
//			aryVarVals.M_V = liq[x].M_L;
//			aryVarVals.M_L = liq[x].M_L;
//			aryVarVals.W_L = liq[x].W_L;
//			aryVarVals.A = liq[x].A;
//			aryVarVals.B = liq[x].B;
//			aryVarVals.C = liq[x].C;
//			aryVarVals.P_VA = liq[x].P_VA;
//		}
//	}
//}
//
//function getSolar() {
//	aryVarVals.roofColor = document.getElementById("paintRoof").value;
//	aryVarVals.roofCond = document.getElementById("conditionRoof").value;
//	aryVarVals.shellColor = document.getElementById("paintShell").value;
//	aryVarVals.shellCond = document.getElementById("conditionShell").value;
//	
//	aryVarVals.a_S = getPaint(aryVarVals.shellColor, aryVarVals.shellCond);
//	
//	if (document.getElementById("tankType").value != "HFR") {
//		aryVarVals.a_R = getPaint(aryVarVals.roofColor, aryVarVals.roofCond);
//		aryVarVals.a = (aryVarVals.a_R + aryVarVals.a_S) / 2;
//	} else {
//		aryVarVals.a = aryVarVals.a_S;
//	}
//}
//
//function getPaint(color, condition) {
//	var i, x, paint, length;
//	
//	paint = PaintProperties();
//	length = paint.length;
//	for (i = 0; i < length; i++) {
//		if (paint[i].paintName == color) {
//			x = i;
//			i = length;
//		}
//	}
//	return eval("paint[x]." + condition);
//}
//
//
//
//function ValidateAll() {
//	var aryInputs = ["tankType","metSite","LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC","HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced","insulated","heat","setVac","setPres","gaugePres","paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad","heatCycles","minBulkTemp","maxBulkTemp","calcBasis","outputType"];
//	var aryMins = ["","","","","","","0","0","0","0","0","0","0","0","0","0;avgLiqH","0","0;minLiqH","0","0","","","","","setVac","0","","","","","","0","0","0","365","460","460;minBulkTemp","",""];
//	var aryMaxs = ["","","","","","","","","","","","","","","","tankType:VFR:HeightFixed;tankType:HFR:diamFixed","avgLiqH","maxLiqH","","","","","","setPres","","","","","","","","","","diamFixed","","maxBulkTemp","","",""];
//					
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//
//function ValidateInput1() {
//	//tank type
//	var aryInputs = ["tankType"];
//	var aryMins = [""];
//	var aryMaxs = [""];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput2() {
//	//met data
//	var aryInputs = ["metSite"];
//	var aryMins = [""];
//	var aryMaxs = [""];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput3() {
//	//liquid data
//	var aryInputs = ["LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC"];
//	var aryMins = ["","","","","0","0","0","0","0","0"];
//	var aryMaxs = ["","","","","","","","","",""];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput4() {
//	//tank dimensions
//	var aryInputs = ["HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced"];
//	var aryMins = ["0","0","0","0;avgLiqH","0","0;minLiqH","0","0",""];
//	var aryMaxs = ["","","","tankType:VFR:HeightFixed;tankType:HFR:diamFixed","avgLiqH","maxLiqH","","",""];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput5() {
//	//Breather vent settings/insulation
//	var aryInputs = ["paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad"];
//	var aryMins = ["","","","","","0","0","0"];
//	var aryMaxs = ["","","","","","","","diamFixed"];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput6() {
//	//shell/roof characteristics
//	var aryInputs = ["setVac","setPres","gaugePres","insulated","heat"];
//	var aryMins = ["","setVac","0","",""];
//	var aryMaxs = ["setPres","","","",""];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput7() {
//	//Heating Charactersistics
//	var aryInputs = ["heatCycles","minBulkTemp","maxBulkTemp"];
//	var aryMins = ["365","460","460;minBulkTemp"];
//	var aryMaxs = ["","maxBulkTemp",""];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput8() {
//	//floating roof characteristics
//	var aryInputs = [];
//	var aryMins = [];
//	var aryMaxs = [];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function ValidateInput20() {
//	//Calucation settings
//	var aryInputs = ["calcBasis","outputType"];
//	var aryMins = ["",""];
//	var aryMaxs = ["",""];
//	
//	validate = validateInput(aryInputs, aryMins, aryMaxs);
//	return validate;
//}
//
//function validateInput(aryInputs, aryMins, aryMaxs) {
//
//	//for all empty inputs
//	//var aryInputs = ["tankType","metSite","LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC","HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced","insulated","heat","setVac","setPres","gaugePres","paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad","heatCycles","minBulkTemp","maxBulkTemp","calcBasis","outputType"];
//	// the following two arrays hold max and min values:  "" means no max/min; ";" means max/min has multiple conditions; ":" separates parameters for each condition (first parameter is parameter ID, second parameter is parameter value, third condition is min/max ID or value.).
//	//var aryMins = ["","","","","","","0","0","0","0","0","0","0","0","0","0;avgLiqH","0","0;minLiqH","0","0","","","","","setVac","0","","","","","","0","0","0","365","460","460;minBulkTemp","",""];
//	//var aryMaxs = ["","","","","","","","","","","","","","","","tankType:VFR:HeightFixed;tankType:HFR:diamFixed","avgLiqH","maxLiqH","","","","","","setPres","","","","","","","","","","diamFixed","","maxBulkTemp","","",""];
//	var aryTemp1;
//	var aryTemp2;
//	var i;
//	var select1;
//	var select2a;
//	var select2b;
//	var select2c;
//	var select2d;
//	var x;
//	var z;
//	
//	var y = 0;
//	var validate = 0;
//	
//	for (i = 0; i < aryInputs.length; i++) {
//		select1 = eval("document.getElementById('" + aryInputs[i] + "')");
//
//		if (select1.offsetParent === null) {
//			//not visible, no need to validate.
//		} else {
//			if (select1.type === "select-one") {
//				if (select1.selectedIndex == "0") {
//					y++;
//				}
//			} else if (select1.type === "text") {
//				if (select1.value == "") {
//					y++;
//				}
//			} else if (select1.type === "number") {
//				//no entry
//				if (select1.value == "") {
//					y++;
//				}
//				//Not a Number 
//				if (isNaN(select1.value)) {
//					y++;
//				}
//									
//				//min values
//				aryTemp1 = aryMins[i].split(";");
//				for (x = 0; x < aryTemp1.length; x++) {
//					z = 0;
//					aryTemp2 = aryTemp1[x].split(":");
//					if (aryTemp2.length > 1) {																
//						select2a = eval("document.getElementById('" + aryTemp2[0] + "')");
//						select2b = aryTemp2[1];
//						select2c = eval("document.getElementById('" + aryTemp2[2] + "')");
//						if (select2a.value == select2b) {
//							select2d = select2c.value;
//							z = 1;
//						}
//					} else {
//						if (isNaN(aryTemp2[0])) {
//						//value is an ID
//							select2c = eval("document.getElementById('" + aryTemp2[0] + "')");
//							select2d = select2c.value;
//						} else {
//						//value is a value
//							select2c = aryTemp2[0];
//							select2d = select2c;
//						}
//						z = 1;
//					}
//					if (z == 1) {
//						if (parseFloat(select1.value) < parseFloat(select2d) && select2d != "") {
//							y++;
//						}
//					}
//				}
//				
//				//max values
//				aryTemp1 = aryMaxs[i].split(";");
//				for (x = 0; x < aryTemp1.length; x++) {
//					z = 0;
//					aryTemp2 = aryTemp1[x].split(":");
//					if (aryTemp2.length > 1) {																
//						select2a = eval("document.getElementById('" + aryTemp2[0] + "')");
//						select2b = aryTemp2[1];
//						select2c = eval("document.getElementById('" + aryTemp2[2] + "')");
//						if (select2a.value == select2b) {
//							select2d = select2c.value;
//							z = 1;
//						}
//					} else {
//						if (isNaN(aryTemp2[0])) {
//						//value is an ID
//							select2c = eval("document.getElementById('" + aryTemp2[0] + "')");
//							select2d = select2c.value;
//						} else {
//						//value is a value
//							select2c = aryTemp2[0];
//							select2d = select2c;
//						}
//						z = 1;
//					}
//					if (z == 1) {
//						if (parseFloat(select1.value) > parseFloat(select2d) && select2d != "") {
//							y++;
//						}
//					}
//				}
//				
//			} else {
//				//should be no alternate cases
//			}					
//		}
//		
//		
//		
//		if (y > 0) {
//			validate ++;
//			select1.style.backgroundColor = "Yellow";
//		} else {
//			select1.style.backgroundColor = "White";
//		}
//		y = 0;
//
//	}
//
//	
//	return validate;
//}
//
//function validateErrorMsg(validate) {
//	alert("Please correct the " + validate + " highlighted input elements which need additional review.  These inputs elements are in error for one of the following reasons.\n\n  --Data was not entered/selected.\n  --Data is outside of the acceptable input range.");
//}
//
//
////AP-42 Calculations=============================================================================
//
////Fixed roof tanks===============================================================================
//
////Eq1_1 Total Tank Losses, L_T (lbs/yrL) [DONE]
//function Eq1_1() {
//	Eq1_4();
//	Eq1_35();
//	
//	//Eq1_1
//	aryVarVals.L_T = aryVarVals.L_S + aryVarVals.L_W;
//}
//
////Eq1_2 was skipped becasue Eq1_4 is a simplified combination of Eq1_2 and Eq1_3
//
////Eq1_3 Tank Vapor Space Volume, V_V (ft<sup>3</sup>) [DONE].  This equation was included for the purpose of the output report.
//function Eq1_3() {
//
//aryVarVals.V_V = (Math.PI * Math.pow(aryVarVals.D_E,2) / 4) * aryVarVals.H_VO;
//}
//
////Eq1_4 Standing Losses, L_S (lbs/yr) [UNITS GOOD]
//function Eq1_4() {
//
//	var heatingCycles;
//	aryVarVals.heat = document.getElementById("heat").value;
//	if ( document.getElementById("insulated").value == "Underground") {
//		aryVarVals.insulated = "Full"
//	} else {				
//		aryVarVals.insulated = document.getElementById("insulated").value;
//	}
//	if (document.getElementById("heatCycles").value != "" && isNaN(document.getElementById("heatCycles").value) == false) {
//		aryVarVals.heatingCycles = parseFloat(document.getElementById("heatCycles").value);
//	} else {
//		aryVarVals.heatingCycles = 365;
//	}
//	
//	// get D and/or D_E.  need if for HFR to calculate D_E EQ1-14 (in feet)
//	Eq1_14();
//	//get H_VO.  Need if for VFR or HFR. Eq1_16 or Eq1_15.  determines if Eq1_15 is needed in Eq1_16 (feet)
//	Eq1_16();
//	//get K_E.  Need if statement for Eq1_5 or Eq1_12. (per day)
//	Eq1_5();
//	//get K_S. Eq1_21 (dimensionless)
//	Eq1_21();
//	//get W_V. Eq1_22 (lbs/ft^3)
//	Eq1_22();
//	//aryVarVals.insulated = insulated.options[insulated.selectedIndex].innerHTML;
//
//	//get V_V
//	Eq1_3();
//	
//	if (document.getElementById("insulated").value == "Underground" && document.getElementById("tankType").value == "VFR" && document.getElementById("heat").value == "No") {
//		aryVarVals.L_S = 0;
//	} else {
//		//Eq1_4
//		Eq1_3();
//		aryVarVals.L_S = aryVarVals.heatingCycles * aryVarVals.K_E * (Math.PI * Math.pow(aryVarVals.D_E,2) / 4) * aryVarVals.H_VO * aryVarVals.K_S * aryVarVals.W_V;
//		
//	}
//}
//
////Eq1_5 Vapor Expansion Factor, K_E (per day) [prefered method] [UNITS GOOD]
//function Eq1_5() {
//	
//	//get average daily liquid surface temperature, T_LA
//	//get T_AA
//	Eq1_30();			
//	//get T_B
//	Eq1_31();
//	//get T_LA
//	Eq1_27();
//	
//	
//	// calculate P_VA at T_LA
//	var liqSelect = LiqType.options[LiqType.selectedIndex].innerHTML;
//	
//	if (aryVarVals.LiqCat == "Crude Oil") {
//		//crude oils
//		if (isNaN(aryVarVals.A) == true || aryVarVals.A == "" || aryVarVals.A == null) {
//			//get Antoine's Equation constants
//			Fig1_16();
//			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
//			//could also send to Fig1_13b
//		} else {
//			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
//			//could also send to Fig1_13b
//		}
//	} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
//		//refined liquids
//		if (isNaN(aryVarVals.A) == true || aryVarVals.A == "" || aryVarVals.A == null) { 
//		//get Antoine's Equation constants
//			Fig1_15();
//			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
//		} else {
//			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
//		}
//	} else {
//		//petrochem
//		aryVarVals.P_VA = Eq1_26(aryVarVals.T_LA);
//	}
//	
//	//need deltaT_V
//	Eq1_6();
//	
//	//need deltaP_V
//	Eq1_9();
//	//need deltaP_B
//	Eq1_10();
//	
//	//Eq1_5
//	aryVarVals.K_E = (aryVarVals.deltaT_V / aryVarVals.T_LA) + ((aryVarVals.deltaP_V - aryVarVals.deltaP_B) / (aryVarVals.P_A - aryVarVals.P_VA));
//	
//	if (aryVarVals.K_E > 1) {
//		aryVarVals.K_E = 1;
//	} else if (aryVarVals.K_E < 0) {
//		aryVarVals.K_E = 0;
//	}
//}
//
////Eq1_6 average daily vapor temperature range, deltaT_V (degrees R) [prefered method] [DONE]
//function Eq1_6() {
//	//get deltaT_A
//	Eq1_11();
//	
//	//calculate deltaT_V based on insulation
//	if (aryVarVals.insulated == "Shell") {
//		//only shell is insulated
//		Eq1_8();
//	} else if (aryVarVals.insulated == "Full") {
//		//fully insulated, including underground
//		if (aryVarVals.heat == "No") {
//			aryVarVals.deltaT_V = 0;
//		} else {
//			//for fully insulated tanks
//			//from section 7.1.3.8.4
//			Eq8_1();
//		}
//	} else {
//		//not insulated
//		//Eq1_6
//		aryVarVals.deltaT_V = ((1- (0.8 / (2.2 * (aryVarVals.H_S / aryVarVals.D) + 1.9))) * aryVarVals.deltaT_A) + (((0.042 * aryVarVals.a_R * aryVarVals.I) + (0.026 * (aryVarVals.H_S / aryVarVals.D) * aryVarVals.a_S * aryVarVals.I)) / (2.2 * (aryVarVals.H_S/aryVarVals.D) + 1.9));
//	} 
//}
//
////Eq1_7 skipped because tool does not rely on the base assumption for this equation
//
////Eq1_8 More accurate deltaT_V for shell only insulated tanks, deltaT_V (degrees R) [DONE]
//function Eq1_8() {
//	//Eq1_8
//	aryVarVals.deltaT_V = (0.6 * aryVarVals.deltaT_A) + (0.02 * aryVarVals.a_R * aryVarVals.I);
//}
//
////Eq1_9 get average daily vapro pressure range, deltaP_V (psia) [UNITS GOOD]
//function Eq1_9() {
//
//	//get T_LX and T_LN
//	Fig1_17();
//	
//	//get P_VX  and P_VN
//	if (aryVarVals.LiqCat == "Crude Oil") {
//		aryVarVals.P_VX = Eq1_25(aryVarVals.T_LX);
//		aryVarVals.P_VN = Eq1_25(aryVarVals.T_LN);
//	} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
//		aryVarVals.P_VX = Eq1_25(aryVarVals.T_LX);
//		aryVarVals.P_VN = Eq1_25(aryVarVals.T_LN);
//	} else {
//		aryVarVals.P_VX = Eq1_26(aryVarVals.T_LX);
//		aryVarVals.P_VN = Eq1_26(aryVarVals.T_LN);
//	}
//	if (aryVarVals.insulated == "Full" && aryVarVals.heat == "No") {
//		aryVarVals.deltaP_V = 0;
//	} else {
//		//Eq1_9
//		aryVarVals.deltaP_V = aryVarVals.P_VX - aryVarVals.P_VN;
//	}
//}
//
////Eq1_10 breather vent pressure setting range, deltaP_B (psig) [DONE]
//function Eq1_10() {
//	//get P_BP
//	aryVarVals.P_BP = parseFloat(document.getElementById("setPres").value);
//	//get P_BV 
//	aryVarVals.P_BV = parseFloat(document.getElementById("setVac").value);
//	//Eq1_10
//	aryVarVals.deltaP_B = aryVarVals.P_BP - aryVarVals.P_BV;
//}
//
////Eq1_11 average daily ambient temperature range, deltaT_A (degrees R) [DONE]
//function Eq1_11() {
//	//Eq1_11
//	aryVarVals.deltaT_A = (aryVarVals.T_AX - aryVarVals.T_AN);
//}
//
////Eq1_12 skipped because not allowing acceptable loss in accuracy
//
////Eq1_13 skipped because tool requires location to be known
//
////Eq1_14 Effective Diameter for HFR, D_E (feet) [DONE]
//function Eq1_14() {
//	
//	aryVarVals.D = parseFloat(document.getElementById("diamFixed").value);
//	if (document.getElementById("tankType").value == "VFR") {
//		aryVarVals.D_E = aryVarVals.D;
//	} else if (document.getElementById("tankType").value == "HFR") {
//		aryVarVals.L = parseFloat(document.getElementById("lengthFixed").value);
//		aryVarVals.D_E = Math.sqrt((aryVarVals.L * aryVarVals.D) / (Math.PI / 4));
//	} 
//}
//
////Eq1_15 effective height, H_E (ft) [DONE]
//function Eq1_15() {
//	//Eq1_15
//	aryVarVals.H_E = Math.PI * aryVarVals.D / 4;
//	aryVarNames1.H_E = "H_E";
//	aryVarNames2.H_E = "H<sub>E</sub>";
//	aryVarDesc.H_E = "Effective tank height, ft";
//}
//
////Eq1_16 vapor space outage for VFR tanks, H_VO (feet) [DONE]
//function Eq1_16() {
//	
//	if (document.getElementById("tankType").value == "VFR") {
//		aryVarVals.H_L = parseFloat(document.getElementById("avgLiqH").value);
//		aryVarDesc.H_L = "Liquid height, ft";
//		aryVarNames2.H_L = "H<sub>L</sub>";
//		aryVarVals.H_S = parseFloat(document.getElementById("HeightFixed").value);
//		aryVarVals.roofType = roofType.options[roofType.selectedIndex].innerHTML;
//		if (document.getElementById("roofType").value == "Cone") {
//			Eq1_17();
//		} else if (document.getElementById("roofType").value == "Dome") {
//			Eq1_19();
//		}
//		
//		//Eq1_16
//		aryVarVals.H_VO = aryVarVals.H_S - aryVarVals.H_L + aryVarVals.H_RO;
//		
//	} else if (document.getElementById("tankType").value == "HFR") {
//		Eq1_15();
//		aryVarVals.H_VO = aryVarVals.H_E / 2;
//	}
//}
//
////Eq1_17 roof outage for cone roof, H_RO (feet) [DONE]
//function Eq1_17() {
//	//call to get H_R
//	Eq1_18();
//	//Eq1_17
//	aryVarVals.H_RO = aryVarVals.H_R / 3;
//}
//
////Eq1_18 tank roof height for cone roof, H_R (feet) [DONE]
//function Eq1_18() {
//	aryVarVals.S_R = parseFloat(document.getElementById("fixedRoofSlope").value);
//	aryVarVals.R_S = aryVarVals.D / 2;
//	//get H_R
//	aryVarVals.H_R = parseFloat(document.getElementById("roofH").value);
//	//Eq1_18
//	if (aryVarVals.H_R == 0) {
//		aryVarVals.H_R = aryVarVals.S_R * aryVarVals.R_S;
//	}
//}
//
////Eq1_19 roof outage for dome roof, H_RO (feet) [DONE]
//function Eq1_19() {
//	//get tank dome  roof radius R_R
//	aryVarVals.R_R = parseFloat(document.getElementById("fixedRoofRad").value);
//	//get tank radius R_S
//	aryVarVals.R_S = aryVarVals.D/2;
//	//call to get H_R
//	Eq1_20();
//	if (aryVarVals.R_R == aryVarVals.D) {
//		aryVarVals.H_RO = 0.137 * aryVarVals.R_S;
//	} else {
//		//Eq1_19
//		aryVarVals.H_RO = aryVarVals.H_R * ((1 / 2) + ((1 / 6) * Math.pow((aryVarVals.H_R / aryVarVals.R_S),2)));
//	}
//}
//
////Eq1_20 tank roof height for dome roof, H_R (feet) [DONE]
//function Eq1_20() {
//	//get roof height
//	aryVarVals.H_R = parseFloat(document.getElementById("roofH").value);
//	if (aryVarVals.H_R == 0) { 
//		if (aryVarVals.R_R == aryVarVals.D) {
//			aryVarVals.H_R = 0.268 * aryVarVals.R_S;
//		} else {
//			//Eq1_20
//			aryVarVals.H_R = aryVarVals.R_R - Math.pow(Math.pow(aryVarVals.R_R,2) - Math.pow(aryVarVals.R_S,2), 0.5);
//		}
//	}
//}
//
////Eq1_21 vented bapor saturation factor, K_S (dimensionless) [CHECK UNITS fo P_VA]
//function Eq1_21() {
//	//Eq1_21
//	aryVarVals.K_S = 1 / (1 + (0.053 * aryVarVals.P_VA  * aryVarVals.H_VO));
//}
//
////Eq1_22 vapor denisty, W_V (lb/ft^3) [UNITS GOOD]
//function Eq1_22() {
//	//get average vapor temperature, T_V
//	if (aryVarVals.insulated == "Shell") {
//		//only shell is insulated
//		//get T_V
//		Eq1_34();
//	} else if (aryVarVals.insulated == "Full") {
//		//fully insulated
//		//set T_V
//		aryVarVals.T_V = aryVarVals.T_B;
//	} else {
//		//not insulated
//		//get T_V
//		Eq1_32();
//	}	
//	
//	aryVarVals.R = 10.731;
//	
//	//Eq1_22
//	aryVarVals.W_V = (aryVarVals.M_V * aryVarVals.P_VA) / (10.731 * aryVarVals.T_V);
//}
//
////Eq1_23 skipped because not allowing components
//
////Eq1_24 skipped because not allowing components
//
////Eq1_25 true vapor pressure of select petroleum stocks, P_VA (psia) [CHECK UNITS FOR B]
//function Eq1_25(T_R) {
//	var P; // used to calculate P_VA, P_VX, and P_VN
//	
//	//Eq1_25 
//	P = Math.exp(aryVarVals.A - (aryVarVals.B / T_R));
//	aryVarDesc.B = "Constant in vapor pressure equation, °R"
//	return P;
//}
//
////Eq1_26 true vapor pressure of organic liquids, P_VA (converted from mmHg to psia) [CHECK UNITS OF T_LA, B, and C]
//function Eq1_26(T_R) {
//	var P; // used to calculate P_VA, P_VX, and P_VN
//	var T_C;
//	T_C = (T_R - 491.67) * 5 / 9;
//	
//	//Eq1_26
//	P = 14.7 / 760 * Math.pow(10,aryVarVals.A - (aryVarVals.B / (T_C + aryVarVals.C)));
//	aryVarDesc.B = "Constant in vapor pressure equation, °C"
//	aryVarDesc.C = "Constant in vapor pressure equation, °C"
//	return P;
//}
//
////Eq1_27 average daily liquid surface temperature for uninsulated tanks, T_LA (degrees R) [DONE]
//function Eq1_27() {
//					
//	if (aryVarVals.insulated == "Full") {				
//		//from section 7.1.3.8.4
//		Eq8_2();
//	} else if (aryVarVals.insulated == "Shell") {
//		//only shell is insulated
//		if (aryVarVals.heat == "Yes" && aryVarVals.T_B > aryVarVals.T_AA) {
//			//from section 7.1.3.8.4
//			Eq8_2();
//		} else {
//			Eq1_29();
//		}
//	} else if (aryVarVals.insulated == "None") {
//		if (aryVarVals.heat == "Yes" && aryVarVals.T_B > aryVarVals.T_AA) {
//			//from section 7.1.3.8.4
//			Eq8_2();
//		} else {
//			//Eq1_27
//			aryVarVals.T_LA =  ((0.5 - (0.8 / (4.4 * (aryVarVals.H_S / aryVarVals.D) + 3.8))) * aryVarVals.T_AA) + ((0.5 + (0.8 / (4.4 * (aryVarVals.H_S / aryVarVals.D) + 3.8))) * aryVarVals.T_B) + (((0.021 * aryVarVals.a_R * aryVarVals.I) + (0.013 * (aryVarVals.H_S / aryVarVals.D) * aryVarVals.a_S * aryVarVals.I)) / (4.4 * (aryVarVals.H_S / aryVarVals.D) + 3.8));
//		}
//	}
//}
//
////Eq1_28 skipped because tool does not rely on the base assumption for this equation
//
////Eq1_29 average daily liquid surface temperature for partially insullated fixed roof tanks, T_LA (degrees R) [DONE]
//function Eq1_29() {
//	//Eq1_29
//	aryVarVals.T_LA = (0.3 * aryVarVals.T_AA) + (0.7 * aryVarVals.T_B) + (0.005 * aryVarVals.a_R * aryVarVals.I);
//}
//
////Eq1_30  average daily ambient temperature, T_AA (degrees R) [DONE]
//function Eq1_30() {
//	//Eq1_30
//	aryVarVals.T_AA = (aryVarVals.T_AX + aryVarVals.T_AN) / 2;
//}
//
////Eq1_31 liquid bulk temperature, T_B (degrees R) [DONE]
//function Eq1_31() {
//	
//	if (document.getElementById("minBulkTemp").value != "" && isNaN(document.getElementById("minBulkTemp").value) == false) {
//		//from section 7.1.3.8.4
//		//for temperature range
//		aryVarVals.T_BX = parseFloat(document.getElementById("maxBulkTemp").value);
//		aryVarVals.T_BN = parseFloat(document.getElementById("minBulkTemp").value);
//		aryVarVals.T_B = (aryVarVals.T_BX + aryVarVals.T_BN) / 2;
//	/*	
//	} else if (document.getElementById("constBulkTemp").value != "" && isNaN(document.getElementById("constBulkTemp").value) == false) {
//		//from section 7.1.3.8.4
//		//for constant temperature
//		aryVarVals.T_B = parseFloat(document.getElementById("constBulkTemp").value);
//	*/
//	} else {
//		//Eq1_31
//		aryVarVals.T_B = aryVarVals.T_AA + (0.003 * aryVarVals.a_S * aryVarVals.I);
//	}
//}
//
////Eq1_32 average vapor temperature for uninsulated tanks, T_V (degrees R) [DONE]
//function Eq1_32() {
//	//Eq1_32
//	aryVarVals.T_V =  (((2.2 * (aryVarVals.H_S / aryVarVals.D) +1.1) * aryVarVals.T_AA) + (0.8 * aryVarVals.T_B) + (0.021 * aryVarVals.a_R * aryVarVals.I) + (0.013 * (aryVarVals.H_S / aryVarVals.D) * aryVarVals.a_S * aryVarVals.I)) / (2.2 * (aryVarVals.H_S / aryVarVals.D) +1.9);
//}
//
////Eq1_33 skipped because tool does not rely on the base assumption for this equation
//
////Eq1_34 average vapor temperature tank with insulated shell, but uninsulated roof, T_V (degrees R) [DONE]
//function Eq1_34() {
//	//Eq1_34
//	aryVarVals.T_V = (0.6 * aryVarVals.T_AA) + (0.4 * aryVarVals.T_B) + (0.01 * aryVarVals.a_R * aryVarVals.I);
//}
//
////Eq1_35 Working Loss, L_W (lbs/yr) [CHECK UNITS]
//function Eq1_35() {
//	//get sumH_QI
//	Eq1_37();
//	//get V_Q
//	Eq1_38();
//	//get N
//	Eq1_36();
//	//get K_N
//	aryVarVals.Balanced = document.getElementById("balanced").value;
//	if (aryVarVals.Balanced == "Yes") {
//		aryVarVals.K_N = 1;
//	}else if (aryVarVals.N > 36) {
//		aryVarVals.K_N = (180 + aryVarVals.N) / (6 * aryVarVals.N);
//	} else {
//		aryVarVals.K_N = 1;
//	}
//	//get working loss production factor, K_P (dimensionless)
//	if (aryVarVals.LiqCat == "Crude Oil") {
//		aryVarVals.K_P = 0.75;
//	} else {
//		aryVarVals.K_P = 1;
//	}
//	//get K_B
//	Eq1_41();
//	//Eq1_35
//	aryVarVals.L_W = aryVarVals.V_Q * aryVarVals.K_N * aryVarVals.K_P * aryVarVals.W_V * aryVarVals.K_B;
//	
//}
//
////Eq1_36 Number of turnovers per year, N (dimensionless) [DONE]
//function Eq1_36() {
//	//get max liquid height H_LX
//	aryVarVals.H_LX = parseFloat(document.getElementById("maxLiqH").value)
//	//get min liquid height H_LN
//	aryVarVals.H_LN = parseFloat(document.getElementById("minLiqH").value)
//	
//	//Eq1_36
//	aryVarVals.N = aryVarVals.sumH_QI / (aryVarVals.H_LX - aryVarVals.H_LN);
//}
//
////Eq1_37 Annual summ of the increases in liquid level, sumH_QI (ft/yr) [DONE]
//function Eq1_37() {
//	// get Q in barrels per year
//	aryVarVals.Q = parseFloat(document.getElementById("throughput").value.replace(/,/g,"")) /42;
//	//Eq1_37
//	aryVarVals.sumH_QI = (5.614 * aryVarVals.Q) / ((Math.PI / 4) * Math.pow(aryVarVals.D_E,2));
//}
//
////Eq1_38 Net Working Loss Throughput, V_Q (ft<sup>3</sup>/yr) [DONE]
//function Eq1_38() {
//	//Eq1_38
//	aryVarVals.V_Q = aryVarVals.sumH_QI * (Math.PI / 4) * Math.pow(aryVarVals.D_E,2);
//}
//
////Eq1_39 net working loss throughput, V_Q (ft<sup>3</sup>/yr) [DONE - not called upon since included in Eq1_38 and Eq1_37]
//function Eq1_39() {
//	aryVarVals.V_Q = 5.614 * aryVarVals.Q;
//}
//
////Eq1_40 verify vent setting correction factor [DONE]
//function Eq1_40() {
//	
//	if (aryVarVals.deltaP_B > 0.06) {
//		aryVarVals.P_I = parseFloat(document.getElementById("gaugePres").value);
//		if (aryVarVals.K_N * ((aryVarVals.P_BP + aryVarVals.P_A) / (aryVarVals.P_I + aryVarVals.P_A)) > 1) {
//			return 1;
//		} else {
//			return 0;
//		}
//	} else {
//		return 0;
//	}
//}
//
////Eq1_41 vent setting correction factor, K_B (DIMENSIONLESS) [CHECK UNITS]
//function Eq1_41() {
//	if (Eq1_40() == 1) {
//		//Eq1_41				
//		aryVarVals.K_B = (((aryVarVals.P_I + aryVarVals.P_A) / aryVarVals.K_N) - aryVarVals.P_VA) / (aryVarVals.P_BP + aryVarVals.P_A - aryVarVals.P_VA);
//	} else {
//		aryVarVals.K_B = 1;
//	}
//	aryVarNames1.K_B = "K_B";
//	aryVarNames2.K_B = "K<sub>B</sub>";
//	aryVarDesc.K_B = "Vent setting correction factor, dimensionless";
//}
//
////7.1.3.8.4 Heating Cycles in Fully Insulated Fixed Roof Tanks===============================================================================
////Eq8_1 average vapor temperature for insulated tanks, T_V (degrees R)
//function Eq8_1() {
//	//from section 7.1.3.8.4
//	//Eq8_1
//	aryVarVals.deltaT_V = aryVarVals.T_BX - aryVarVals.T_BN;
//}
//
////Eq8_2 average liquid surface temperature for insulated tanks, T_LA (degrees R)
//function Eq8_2() {
//	//from section 7.1.3.8.4
//	//Eq8_2
//	aryVarVals.T_LA = aryVarVals.T_B;
//}
//
