//Begin calculations=============================================================================
function beginCalcs() {
	var validate;
	
	validate = ValidateAll();
	
	if (validate == 0) {
		//reset aryVarVals
		resetAryVarVals();
		
		//get met site
		getMet();
		
		//get liquid
		getLiq();
		
		//get paint
		getSolar();
		
		//process by tank type
		var x = document.getElementById("tankType").value;
		aryVarVals.tankType = tankType.options[tankType.selectedIndex].innerHTML;
		aryVarVals.Desc = document.getElementById("tankDesc").value;
		aryVarVals.tankID = document.getElementById("tankID").value;
		if (x == "VFR") {
			Eq1_1();
			outputWindow(); 
		} else if (x == "HFR") {
			Eq1_1();
			outputWindow(); 
		} else if (x == "EFR") {
		
		} else if (x == "IFR") {
		
		}
		
	} else {
		validateErrorMsg(validate); 
	}
}
			
function getMet() {
	var i, x, site, length;
	var select = document.getElementById("metSite").value;
	aryVarVals.site = select;
	aryVarDesc.site = "Nearest major city";
	
	site = MetData();
	length = site.length;
	for (i = 0; i < length; i++) {
		if (site[i].metName == select) {
			x = i;
			i = length;
		}
	}
		
	//need to make "site[x].... dynamic"
	aryVarVals.T_AN = site[x].T_AN_Ann + 459.7;
	aryVarVals.T_AX = site[x].T_AX_Ann + 459.7;
	aryVarVals.v = site[x].V_Ann;
	aryVarVals.I = site[x].I_Ann;
	aryVarVals.P_A = site[x].P_A_Ann;
}

function getLiq() {
	var liq, i, x, y, length;
	var liqSelect = LiqType.options[LiqType.selectedIndex].innerHTML;
	aryVarVals.LiqCat = liqSelect;
	aryVarDesc.LiqCat = "Liquid category";
	
	
	aryVarVals.LiqInput = LiqInput.options[LiqInput.selectedIndex].innerHTML;
	y = document.getElementById("LiqInput").value;
	z = document.getElementById("calcMethod").value;
	
	
	if (y == "Manual") {
		aryVarVals.LiqName = "User Liquid";
		aryVarDesc.LiqName = "Liquid selected"
		aryVarVals.M_V = parseFloat(document.getElementById("inputM_V").value);
		aryVarNames2.RVP = "RVP";
		if (aryVarVals.LiqCat == "Crude Oil") {						
			if (z == "RVP") {
			aryVarVals.RVP = parseFloat(document.getElementById("inputRVP").value);
			aryVarDesc.RVP = "Reid vapor pressure, psia";

			} else {
			aryVarVals.A = parseFloat(document.getElementById("inputA").value);
			aryVarVals.B = parseFloat(document.getElementById("inputB").value);
			}
			aryVarDesc.B = "Constant in vapor pressure equation, &deg;R"
		} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
			aryVarVals.Slope = parseFloat(document.getElementById("inputSlope").value);
			aryVarDesc.Slope = "Stock ASTM-D86 distillation slope at 10% evaporated, &deg;F/vol%"
			if (z == "RVP") {
				aryVarVals.RVP = parseFloat(document.getElementById("inputRVP").value);
				aryVarDesc.RVP = "Reid vapor pressure, psia";

			} else {
				aryVarVals.A = parseFloat(document.getElementById("inputA").value);
				aryVarVals.B = parseFloat(document.getElementById("inputB").value);	
			}
			aryVarDesc.B = "Constant in vapor pressure equation, &deg;R"						
		} else {
			aryVarVals.A = parseFloat(document.getElementById("inputA").value);
			aryVarVals.B = parseFloat(document.getElementById("inputB").value);
			aryVarVals.C = parseFloat(document.getElementById("inputC").value);
			aryVarDesc.B = "Constant in vapor pressure equation, &deg;C"
			aryVarDesc.C = "Constant in vapor pressure equation, &deg;C"
			
		}
	} else {
	
		var select = document.getElementById("tankContents").value;				
		aryVarVals.LiqName = select;
		
		if (aryVarVals.LiqCat == "Crude Oil") {
			liq = CrudeProperties();
			length = liq.length;
			for (i = 0; i < length; i++) {
				if (liq[i].propName == select) {
					x = i;
					i = length;
				}
			}
			aryVarVals.M_V = liq[x].M_V;
			aryVarVals.M_L = liq[x].M_L;
			aryVarVals.W_L = liq[x].W_L;
			aryVarVals.Slope = liq[x].S;
			aryVarDesc.Slope = "Stock ASTM-D86 distillation slope at 10% evaporated, &deg;F/vol%"
			aryVarVals.A = liq[x].A;
			aryVarVals.B = liq[x].B;
			aryVarVals.P_VA = liq[x].P_VA;
			aryVarVals.RVP = liq[x].RVP;
			aryVarDesc.RVP = "Reid vapor pressure, psia";
			aryVarNames2.RVP = "RVP";
		} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
			liq = PertoleumProperties();
			length = liq.length;
			for (i = 0; i < length; i++) {
				if (liq[i].propName == select) {
					x = i;
					i = length;
				}
			}
			aryVarVals.M_V = liq[x].M_V;
			aryVarVals.M_L = liq[x].M_L;
			aryVarVals.W_L = liq[x].W_L;
			aryVarVals.Slope = liq[x].S;
			aryVarDesc.Slope = "Stock ASTM-D86 distillation slope at 10% evaporated, &deg;F/vol%"
			aryVarVals.A = liq[x].A;
			aryVarVals.B = liq[x].B;
			aryVarVals.P_VA = liq[x].P_VA;
			aryVarVals.RVP = liq[x].RVP;
			aryVarDesc.RVP = "Reid vapor pressure, psia";
			aryVarNames2.RVP = "RVP";
		} else {
			liq = PetroChemProperties();
			length = liq.length;
			for (i = 0; i < length; i++) {
				if (liq[i].propName == select) {
					x = i;
					i = length;
				}
			}
			
			aryVarVals.M_V = liq[x].M_L;
			aryVarVals.M_L = liq[x].M_L;
			aryVarVals.W_L = liq[x].W_L;
			aryVarVals.A = liq[x].A;
			aryVarVals.B = liq[x].B;
			aryVarVals.C = liq[x].C;
			aryVarVals.P_VA = liq[x].P_VA;
		}
	}
}

function getSolar() {
	aryVarVals.roofColor = document.getElementById("paintRoof").value;
	aryVarVals.roofCond = document.getElementById("conditionRoof").value;
	aryVarVals.shellColor = document.getElementById("paintShell").value;
	aryVarVals.shellCond = document.getElementById("conditionShell").value;
	
	aryVarVals.a_S = getPaint(aryVarVals.shellColor, aryVarVals.shellCond);
	
	if (document.getElementById("tankType").value != "HFR") {
		aryVarVals.a_R = getPaint(aryVarVals.roofColor, aryVarVals.roofCond);
		aryVarVals.a = (aryVarVals.a_R + aryVarVals.a_S) / 2;
	} else {
		aryVarVals.a = aryVarVals.a_S;
	}
}

function getPaint(color, condition) {
	var i, x, paint, length;
	
	paint = PaintProperties();
	length = paint.length;
	for (i = 0; i < length; i++) {
		if (paint[i].paintName == color) {
			x = i;
			i = length;
		}
	}
	return eval("paint[x]." + condition);
}



function ValidateAll() {
	var aryInputs = ["tankType","metSite","LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC","HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced","insulated","heat","setVac","setPres","gaugePres","paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad","heatCycles","minBulkTemp","maxBulkTemp","calcBasis","outputType"];
	var aryMins = ["","","","","","","0","0","0","0","0","0","0","0","0","0;avgLiqH","0","0;minLiqH","0","0","","","","","setVac","0","","","","","","0","0","0","365","460","460;minBulkTemp","",""];
	var aryMaxs = ["","","","","","","","","","","","","","","","tankType:VFR:HeightFixed;tankType:HFR:diamFixed","avgLiqH","maxLiqH","","","","","","setPres","","","","","","","","","","diamFixed","","maxBulkTemp","","",""];
					
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}


function ValidateInput1() {
	//tank type
	var aryInputs = ["tankType"];
	var aryMins = [""];
	var aryMaxs = [""];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput2() {
	//met data
	var aryInputs = ["metSite"];
	var aryMins = [""];
	var aryMaxs = [""];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput3() {
	//liquid data
	var aryInputs = ["LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC"];
	var aryMins = ["","","","","0","0","0","0","0","0"];
	var aryMaxs = ["","","","","","","","","",""];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput4() {
	//tank dimensions
	var aryInputs = ["HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced"];
	var aryMins = ["0","0","0","0;avgLiqH","0","0;minLiqH","0","0",""];
	var aryMaxs = ["","","","tankType:VFR:HeightFixed;tankType:HFR:diamFixed","avgLiqH","maxLiqH","","",""];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput5() {
	//Breather vent settings/insulation
	var aryInputs = ["paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad"];
	var aryMins = ["","","","","","0","0","0"];
	var aryMaxs = ["","","","","","","","diamFixed"];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput6() {
	//shell/roof characteristics
	var aryInputs = ["setVac","setPres","gaugePres","insulated","heat"];
	var aryMins = ["","setVac","0","",""];
	var aryMaxs = ["setPres","","","",""];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput7() {
	//Heating Charactersistics
	var aryInputs = ["heatCycles","minBulkTemp","maxBulkTemp"];
	var aryMins = ["365","460","460;minBulkTemp"];
	var aryMaxs = ["","maxBulkTemp",""];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput8() {
	//floating roof characteristics
	var aryInputs = [];
	var aryMins = [];
	var aryMaxs = [];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function ValidateInput20() {
	//Calucation settings
	var aryInputs = ["calcBasis","outputType"];
	var aryMins = ["",""];
	var aryMaxs = ["",""];
	
	validate = validateInput(aryInputs, aryMins, aryMaxs);
	return validate;
}

function validateInput(aryInputs, aryMins, aryMaxs) {

	//for all empty inputs
	//var aryInputs = ["tankType","metSite","LiqInput","LiqType","tankContents","calcMethod","inputM_V","inputSlope","inputRVP","inputA","inputB","inputC","HeightFixed","lengthFixed","diamFixed","maxLiqH","minLiqH","avgLiqH","turn","throughput","balanced","insulated","heat","setVac","setPres","gaugePres","paintShell","conditionShell","paintRoof","conditionRoof","roofType","roofH","fixedRoofSlope","fixedRoofRad","heatCycles","minBulkTemp","maxBulkTemp","calcBasis","outputType"];
	// the following two arrays hold max and min values:  "" means no max/min; ";" means max/min has multiple conditions; ":" separates parameters for each condition (first parameter is parameter ID, second parameter is parameter value, third condition is min/max ID or value.).
	//var aryMins = ["","","","","","","0","0","0","0","0","0","0","0","0","0;avgLiqH","0","0;minLiqH","0","0","","","","","setVac","0","","","","","","0","0","0","365","460","460;minBulkTemp","",""];
	//var aryMaxs = ["","","","","","","","","","","","","","","","tankType:VFR:HeightFixed;tankType:HFR:diamFixed","avgLiqH","maxLiqH","","","","","","setPres","","","","","","","","","","diamFixed","","maxBulkTemp","","",""];
	var aryTemp1;
	var aryTemp2;
	var i;
	var select1;
	var select2a;
	var select2b;
	var select2c;
	var select2d;
	var x;
	var z;
	
	var y = 0;
	var validate = 0;
	
	for (i = 0; i < aryInputs.length; i++) {
		select1 = eval("document.getElementById('" + aryInputs[i] + "')");

		if (select1.offsetParent === null) {
			//not visible, no need to validate.
		} else {
			if (select1.type === "select-one") {
				if (select1.selectedIndex == "0") {
					y++;
				}
			} else if (select1.type === "text") {
				if (select1.value == "") {
					y++;
				}
			} else if (select1.type === "number") {
				//no entry
				if (select1.value == "") {
					y++;
				}
				//Not a Number 
				if (isNaN(select1.value)) {
					y++;
				}
									
				//min values
				aryTemp1 = aryMins[i].split(";");
				for (x = 0; x < aryTemp1.length; x++) {
					z = 0;
					aryTemp2 = aryTemp1[x].split(":");
					if (aryTemp2.length > 1) {																
						select2a = eval("document.getElementById('" + aryTemp2[0] + "')");
						select2b = aryTemp2[1];
						select2c = eval("document.getElementById('" + aryTemp2[2] + "')");
						if (select2a.value == select2b) {
							select2d = select2c.value;
							z = 1;
						}
					} else {
						if (isNaN(aryTemp2[0])) {
						//value is an ID
							select2c = eval("document.getElementById('" + aryTemp2[0] + "')");
							select2d = select2c.value;
						} else {
						//value is a value
							select2c = aryTemp2[0];
							select2d = select2c;
						}
						z = 1;
					}
					if (z == 1) {
						if (parseFloat(select1.value) < parseFloat(select2d) && select2d != "") {
							y++;
						}
					}
				}
				
				//max values
				aryTemp1 = aryMaxs[i].split(";");
				for (x = 0; x < aryTemp1.length; x++) {
					z = 0;
					aryTemp2 = aryTemp1[x].split(":");
					if (aryTemp2.length > 1) {																
						select2a = eval("document.getElementById('" + aryTemp2[0] + "')");
						select2b = aryTemp2[1];
						select2c = eval("document.getElementById('" + aryTemp2[2] + "')");
						if (select2a.value == select2b) {
							select2d = select2c.value;
							z = 1;
						}
					} else {
						if (isNaN(aryTemp2[0])) {
						//value is an ID
							select2c = eval("document.getElementById('" + aryTemp2[0] + "')");
							select2d = select2c.value;
						} else {
						//value is a value
							select2c = aryTemp2[0];
							select2d = select2c;
						}
						z = 1;
					}
					if (z == 1) {
						if (parseFloat(select1.value) > parseFloat(select2d) && select2d != "") {
							y++;
						}
					}
				}
				
			} else {
				//should be no alternate cases
			}					
		}
		
		
		
		if (y > 0) {
			validate ++;
			select1.style.backgroundColor = "Yellow";
		} else {
			select1.style.backgroundColor = "White";
		}
		y = 0;

	}

	
	return validate;
}

function validateErrorMsg(validate) {
	alert("Please correct the " + validate + " highlighted input elements which need additional review.  These inputs elements are in error for one of the following reasons.\n\n  --Data was not entered/selected.\n  --Data is outside of the acceptable input range.");
}


//AP-42 Calculations=============================================================================

//Fixed roof tanks===============================================================================

//Eq1_1 Total Tank Losses, L_T (lbs/yrL) [DONE]
function Eq1_1() {
	Eq1_4();
	Eq1_35();
	
	//Eq1_1
	aryVarVals.L_T = aryVarVals.L_S + aryVarVals.L_W;
}

//Eq1_2 was skipped becasue Eq1_4 is a simplified combination of Eq1_2 and Eq1_3

//Eq1_3 Tank Vapor Space Volume, V_V (ft<sup>3</sup>) [DONE].  This equation was included for the purpose of the output report.
function Eq1_3() {

aryVarVals.V_V = (Math.PI * Math.pow(aryVarVals.D_E,2) / 4) * aryVarVals.H_VO;
}

//Eq1_4 Standing Losses, L_S (lbs/yr) [UNITS GOOD]
function Eq1_4() {

	var heatingCycles;
	aryVarVals.heat = document.getElementById("heat").value;
	if ( document.getElementById("insulated").value == "Underground") {
		aryVarVals.insulated = "Full"
	} else {				
		aryVarVals.insulated = document.getElementById("insulated").value;
	}
	if (document.getElementById("heatCycles").value != "" && isNaN(document.getElementById("heatCycles").value) == false) {
		aryVarVals.heatingCycles = parseFloat(document.getElementById("heatCycles").value);
	} else {
		aryVarVals.heatingCycles = 365;
	}
	
	// get D and/or D_E.  need if for HFR to calculate D_E EQ1-14 (in feet)
	Eq1_14();
	//get H_VO.  Need if for VFR or HFR. Eq1_16 or Eq1_15.  determines if Eq1_15 is needed in Eq1_16 (feet)
	Eq1_16();
	//get K_E.  Need if statement for Eq1_5 or Eq1_12. (per day)
	Eq1_5();
	//get K_S. Eq1_21 (dimensionless)
	Eq1_21();
	//get W_V. Eq1_22 (lbs/ft^3)
	Eq1_22();
	//aryVarVals.insulated = insulated.options[insulated.selectedIndex].innerHTML;

	//get V_V
	Eq1_3();
	
	if (document.getElementById("insulated").value == "Underground" && document.getElementById("tankType").value == "VFR" && document.getElementById("heat").value == "No") {
		aryVarVals.L_S = 0;
	} else {
		//Eq1_4
		Eq1_3();
		aryVarVals.L_S = aryVarVals.heatingCycles * aryVarVals.K_E * (Math.PI * Math.pow(aryVarVals.D_E,2) / 4) * aryVarVals.H_VO * aryVarVals.K_S * aryVarVals.W_V;
		
	}
}

//Eq1_5 Vapor Expansion Factor, K_E (per day) [prefered method] [UNITS GOOD]
function Eq1_5() {
	
	//get average daily liquid surface temperature, T_LA
	//get T_AA
	Eq1_30();			
	//get T_B
	Eq1_31();
	//get T_LA
	Eq1_27();
	
	
	// calculate P_VA at T_LA
	var liqSelect = LiqType.options[LiqType.selectedIndex].innerHTML;
	
	if (aryVarVals.LiqCat == "Crude Oil") {
		//crude oils
		if (isNaN(aryVarVals.A) == true || aryVarVals.A == "" || aryVarVals.A == null) {
			//get Antoine's Equation constants
			Fig1_16();
			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
			//could also send to Fig1_13b
		} else {
			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
			//could also send to Fig1_13b
		}
	} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
		//refined liquids
		if (isNaN(aryVarVals.A) == true || aryVarVals.A == "" || aryVarVals.A == null) { 
		//get Antoine's Equation constants
			Fig1_15();
			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
		} else {
			aryVarVals.P_VA = Eq1_25(aryVarVals.T_LA);
		}
	} else {
		//petrochem
		aryVarVals.P_VA = Eq1_26(aryVarVals.T_LA);
	}
	
	//need deltaT_V
	Eq1_6();
	
	//need deltaP_V
	Eq1_9();
	//need deltaP_B
	Eq1_10();
	
	//Eq1_5
	aryVarVals.K_E = (aryVarVals.deltaT_V / aryVarVals.T_LA) + ((aryVarVals.deltaP_V - aryVarVals.deltaP_B) / (aryVarVals.P_A - aryVarVals.P_VA));
	
	if (aryVarVals.K_E > 1) {
		aryVarVals.K_E = 1;
	} else if (aryVarVals.K_E < 0) {
		aryVarVals.K_E = 0;
	}
}

//Eq1_6 average daily vapor temperature range, deltaT_V (degrees R) [prefered method] [DONE]
function Eq1_6() {
	//get deltaT_A
	Eq1_11();
	
	//calculate deltaT_V based on insulation
	if (aryVarVals.insulated == "Shell") {
		//only shell is insulated
		Eq1_8();
	} else if (aryVarVals.insulated == "Full") {
		//fully insulated, including underground
		if (aryVarVals.heat == "No") {
			aryVarVals.deltaT_V = 0;
		} else {
			//for fully insulated tanks
			//from section 7.1.3.8.4
			Eq8_1();
		}
	} else {
		//not insulated
		//Eq1_6
		aryVarVals.deltaT_V = ((1- (0.8 / (2.2 * (aryVarVals.H_S / aryVarVals.D) + 1.9))) * aryVarVals.deltaT_A) + (((0.042 * aryVarVals.a_R * aryVarVals.I) + (0.026 * (aryVarVals.H_S / aryVarVals.D) * aryVarVals.a_S * aryVarVals.I)) / (2.2 * (aryVarVals.H_S/aryVarVals.D) + 1.9));
	} 
}

//Eq1_7 skipped because tool does not rely on the base assumption for this equation

//Eq1_8 More accurate deltaT_V for shell only insulated tanks, deltaT_V (degrees R) [DONE]
function Eq1_8() {
	//Eq1_8
	aryVarVals.deltaT_V = (0.6 * aryVarVals.deltaT_A) + (0.02 * aryVarVals.a_R * aryVarVals.I);
}

//Eq1_9 get average daily vapro pressure range, deltaP_V (psia) [UNITS GOOD]
function Eq1_9() {

	//get T_LX and T_LN
	Fig1_17();
	
	//get P_VX  and P_VN
	if (aryVarVals.LiqCat == "Crude Oil") {
		aryVarVals.P_VX = Eq1_25(aryVarVals.T_LX);
		aryVarVals.P_VN = Eq1_25(aryVarVals.T_LN);
	} else if (aryVarVals.LiqCat == "Refined Petroleum Liquids") {
		aryVarVals.P_VX = Eq1_25(aryVarVals.T_LX);
		aryVarVals.P_VN = Eq1_25(aryVarVals.T_LN);
	} else {
		aryVarVals.P_VX = Eq1_26(aryVarVals.T_LX);
		aryVarVals.P_VN = Eq1_26(aryVarVals.T_LN);
	}
	if (aryVarVals.insulated == "Full" && aryVarVals.heat == "No") {
		aryVarVals.deltaP_V = 0;
	} else {
		//Eq1_9
		aryVarVals.deltaP_V = aryVarVals.P_VX - aryVarVals.P_VN;
	}
}

//Eq1_10 breather vent pressure setting range, deltaP_B (psig) [DONE]
function Eq1_10() {
	//get P_BP
	aryVarVals.P_BP = parseFloat(document.getElementById("setPres").value);
	//get P_BV 
	aryVarVals.P_BV = parseFloat(document.getElementById("setVac").value);
	//Eq1_10
	aryVarVals.deltaP_B = aryVarVals.P_BP - aryVarVals.P_BV;
}

//Eq1_11 average daily ambient temperature range, deltaT_A (degrees R) [DONE]
function Eq1_11() {
	//Eq1_11
	aryVarVals.deltaT_A = (aryVarVals.T_AX - aryVarVals.T_AN);
}

//Eq1_12 skipped because not allowing acceptable loss in accuracy

//Eq1_13 skipped because tool requires location to be known

//Eq1_14 Effective Diameter for HFR, D_E (feet) [DONE]
function Eq1_14() {
	
	aryVarVals.D = parseFloat(document.getElementById("diamFixed").value);
	if (document.getElementById("tankType").value == "VFR") {
		aryVarVals.D_E = aryVarVals.D;
	} else if (document.getElementById("tankType").value == "HFR") {
		aryVarVals.L = parseFloat(document.getElementById("lengthFixed").value);
		aryVarVals.D_E = Math.sqrt((aryVarVals.L * aryVarVals.D) / (Math.PI / 4));
	} 
}

//Eq1_15 effective height, H_E (ft) [DONE]
function Eq1_15() {
	//Eq1_15
	aryVarVals.H_E = Math.PI * aryVarVals.D / 4;
	aryVarNames1.H_E = "H_E";
	aryVarNames2.H_E = "H<sub>E</sub>";
	aryVarDesc.H_E = "Effective tank height, ft";
}

//Eq1_16 vapor space outage for VFR tanks, H_VO (feet) [DONE]
function Eq1_16() {
	
	if (document.getElementById("tankType").value == "VFR") {
		aryVarVals.H_L = parseFloat(document.getElementById("avgLiqH").value);
		aryVarDesc.H_L = "Liquid height, ft";
		aryVarNames2.H_L = "H<sub>L</sub>";
		aryVarVals.H_S = parseFloat(document.getElementById("HeightFixed").value);
		aryVarVals.roofType = roofType.options[roofType.selectedIndex].innerHTML;
		if (document.getElementById("roofType").value == "Cone") {
			Eq1_17();
		} else if (document.getElementById("roofType").value == "Dome") {
			Eq1_19();
		}
		
		//Eq1_16
		aryVarVals.H_VO = aryVarVals.H_S - aryVarVals.H_L + aryVarVals.H_RO;
		
	} else if (document.getElementById("tankType").value == "HFR") {
		Eq1_15();
		aryVarVals.H_VO = aryVarVals.H_E / 2;
	}
}

//Eq1_17 roof outage for cone roof, H_RO (feet) [DONE]
function Eq1_17() {
	//call to get H_R
	Eq1_18();
	//Eq1_17
	aryVarVals.H_RO = aryVarVals.H_R / 3;
}

//Eq1_18 tank roof height for cone roof, H_R (feet) [DONE]
function Eq1_18() {
	aryVarVals.S_R = parseFloat(document.getElementById("fixedRoofSlope").value);
	aryVarVals.R_S = aryVarVals.D / 2;
	//get H_R
	aryVarVals.H_R = parseFloat(document.getElementById("roofH").value);
	//Eq1_18
	if (aryVarVals.H_R == 0) {
		aryVarVals.H_R = aryVarVals.S_R * aryVarVals.R_S;
	}
}

//Eq1_19 roof outage for dome roof, H_RO (feet) [DONE]
function Eq1_19() {
	//get tank dome  roof radius R_R
	aryVarVals.R_R = parseFloat(document.getElementById("fixedRoofRad").value);
	//get tank radius R_S
	aryVarVals.R_S = aryVarVals.D/2;
	//call to get H_R
	Eq1_20();
	if (aryVarVals.R_R == aryVarVals.D) {
		aryVarVals.H_RO = 0.137 * aryVarVals.R_S;
	} else {
		//Eq1_19
		aryVarVals.H_RO = aryVarVals.H_R * ((1 / 2) + ((1 / 6) * Math.pow((aryVarVals.H_R / aryVarVals.R_S),2)));
	}
}

//Eq1_20 tank roof height for dome roof, H_R (feet) [DONE]
function Eq1_20() {
	//get roof height
	aryVarVals.H_R = parseFloat(document.getElementById("roofH").value);
	if (aryVarVals.H_R == 0) { 
		if (aryVarVals.R_R == aryVarVals.D) {
			aryVarVals.H_R = 0.268 * aryVarVals.R_S;
		} else {
			//Eq1_20
			aryVarVals.H_R = aryVarVals.R_R - Math.pow(Math.pow(aryVarVals.R_R,2) - Math.pow(aryVarVals.R_S,2), 0.5);
		}
	}
}

//Eq1_21 vented bapor saturation factor, K_S (dimensionless) [CHECK UNITS fo P_VA]
function Eq1_21() {
	//Eq1_21
	aryVarVals.K_S = 1 / (1 + (0.053 * aryVarVals.P_VA  * aryVarVals.H_VO));
}

//Eq1_22 vapor denisty, W_V (lb/ft^3) [UNITS GOOD]
function Eq1_22() {
	//get average vapor temperature, T_V
	if (aryVarVals.insulated == "Shell") {
		//only shell is insulated
		//get T_V
		Eq1_34();
	} else if (aryVarVals.insulated == "Full") {
		//fully insulated
		//set T_V
		aryVarVals.T_V = aryVarVals.T_B;
	} else {
		//not insulated
		//get T_V
		Eq1_32();
	}	
	
	aryVarVals.R = 10.731;
	
	//Eq1_22
	aryVarVals.W_V = (aryVarVals.M_V * aryVarVals.P_VA) / (10.731 * aryVarVals.T_V);
}

//Eq1_23 skipped because not allowing components

//Eq1_24 skipped because not allowing components

//Eq1_25 true vapor pressure of select petroleum stocks, P_VA (psia) [CHECK UNITS FOR B]
function Eq1_25(T_R) {
	var P; // used to calculate P_VA, P_VX, and P_VN
	
	//Eq1_25 
	P = Math.exp(aryVarVals.A - (aryVarVals.B / T_R));
	aryVarDesc.B = "Constant in vapor pressure equation, °R"
	return P;
}

//Eq1_26 true vapor pressure of organic liquids, P_VA (converted from mmHg to psia) [CHECK UNITS OF T_LA, B, and C]
function Eq1_26(T_R) {
	var P; // used to calculate P_VA, P_VX, and P_VN
	var T_C;
	T_C = (T_R - 491.67) * 5 / 9;
	
	//Eq1_26
	P = 14.7 / 760 * Math.pow(10,aryVarVals.A - (aryVarVals.B / (T_C + aryVarVals.C)));
	aryVarDesc.B = "Constant in vapor pressure equation, °C"
	aryVarDesc.C = "Constant in vapor pressure equation, °C"
	return P;
}

//Eq1_27 average daily liquid surface temperature for uninsulated tanks, T_LA (degrees R) [DONE]
function Eq1_27() {
					
	if (aryVarVals.insulated == "Full") {				
		//from section 7.1.3.8.4
		Eq8_2();
	} else if (aryVarVals.insulated == "Shell") {
		//only shell is insulated
		if (aryVarVals.heat == "Yes" && aryVarVals.T_B > aryVarVals.T_AA) {
			//from section 7.1.3.8.4
			Eq8_2();
		} else {
			Eq1_29();
		}
	} else if (aryVarVals.insulated == "None") {
		if (aryVarVals.heat == "Yes" && aryVarVals.T_B > aryVarVals.T_AA) {
			//from section 7.1.3.8.4
			Eq8_2();
		} else {
			//Eq1_27
			aryVarVals.T_LA =  ((0.5 - (0.8 / (4.4 * (aryVarVals.H_S / aryVarVals.D) + 3.8))) * aryVarVals.T_AA) + ((0.5 + (0.8 / (4.4 * (aryVarVals.H_S / aryVarVals.D) + 3.8))) * aryVarVals.T_B) + (((0.021 * aryVarVals.a_R * aryVarVals.I) + (0.013 * (aryVarVals.H_S / aryVarVals.D) * aryVarVals.a_S * aryVarVals.I)) / (4.4 * (aryVarVals.H_S / aryVarVals.D) + 3.8));
		}
	}
}

//Eq1_28 skipped because tool does not rely on the base assumption for this equation

//Eq1_29 average daily liquid surface temperature for partially insullated fixed roof tanks, T_LA (degrees R) [DONE]
function Eq1_29() {
	//Eq1_29
	aryVarVals.T_LA = (0.3 * aryVarVals.T_AA) + (0.7 * aryVarVals.T_B) + (0.005 * aryVarVals.a_R * aryVarVals.I);
}

//Eq1_30  average daily ambient temperature, T_AA (degrees R) [DONE]
function Eq1_30() {
	//Eq1_30
	aryVarVals.T_AA = (aryVarVals.T_AX + aryVarVals.T_AN) / 2;
}

//Eq1_31 liquid bulk temperature, T_B (degrees R) [DONE]
function Eq1_31() {
	
	if (document.getElementById("minBulkTemp").value != "" && isNaN(document.getElementById("minBulkTemp").value) == false) {
		//from section 7.1.3.8.4
		//for temperature range
		aryVarVals.T_BX = parseFloat(document.getElementById("maxBulkTemp").value);
		aryVarVals.T_BN = parseFloat(document.getElementById("minBulkTemp").value);
		aryVarVals.T_B = (aryVarVals.T_BX + aryVarVals.T_BN) / 2;
	/*	
	} else if (document.getElementById("constBulkTemp").value != "" && isNaN(document.getElementById("constBulkTemp").value) == false) {
		//from section 7.1.3.8.4
		//for constant temperature
		aryVarVals.T_B = parseFloat(document.getElementById("constBulkTemp").value);
	*/
	} else {
		//Eq1_31
		aryVarVals.T_B = aryVarVals.T_AA + (0.003 * aryVarVals.a_S * aryVarVals.I);
	}
}

//Eq1_32 average vapor temperature for uninsulated tanks, T_V (degrees R) [DONE]
function Eq1_32() {
	//Eq1_32
	aryVarVals.T_V =  (((2.2 * (aryVarVals.H_S / aryVarVals.D) +1.1) * aryVarVals.T_AA) + (0.8 * aryVarVals.T_B) + (0.021 * aryVarVals.a_R * aryVarVals.I) + (0.013 * (aryVarVals.H_S / aryVarVals.D) * aryVarVals.a_S * aryVarVals.I)) / (2.2 * (aryVarVals.H_S / aryVarVals.D) +1.9);
}

//Eq1_33 skipped because tool does not rely on the base assumption for this equation

//Eq1_34 average vapor temperature tank with insulated shell, but uninsulated roof, T_V (degrees R) [DONE]
function Eq1_34() {
	//Eq1_34
	aryVarVals.T_V = (0.6 * aryVarVals.T_AA) + (0.4 * aryVarVals.T_B) + (0.01 * aryVarVals.a_R * aryVarVals.I);
}

//Eq1_35 Working Loss, L_W (lbs/yr) [CHECK UNITS]
function Eq1_35() {
	//get sumH_QI
	Eq1_37();
	//get V_Q
	Eq1_38();
	//get N
	Eq1_36();
	//get K_N
	aryVarVals.Balanced = document.getElementById("balanced").value;
	if (aryVarVals.Balanced == "Yes") {
		aryVarVals.K_N = 1;
	}else if (aryVarVals.N > 36) {
		aryVarVals.K_N = (180 + aryVarVals.N) / (6 * aryVarVals.N);
	} else {
		aryVarVals.K_N = 1;
	}
	//get working loss production factor, K_P (dimensionless)
	if (aryVarVals.LiqCat == "Crude Oil") {
		aryVarVals.K_P = 0.75;
	} else {
		aryVarVals.K_P = 1;
	}
	//get K_B
	Eq1_41();
	//Eq1_35
	aryVarVals.L_W = aryVarVals.V_Q * aryVarVals.K_N * aryVarVals.K_P * aryVarVals.W_V * aryVarVals.K_B;
	
}

//Eq1_36 Number of turnovers per year, N (dimensionless) [DONE]
function Eq1_36() {
	//get max liquid height H_LX
	aryVarVals.H_LX = parseFloat(document.getElementById("maxLiqH").value)
	//get min liquid height H_LN
	aryVarVals.H_LN = parseFloat(document.getElementById("minLiqH").value)
	
	//Eq1_36
	aryVarVals.N = aryVarVals.sumH_QI / (aryVarVals.H_LX - aryVarVals.H_LN);
}

//Eq1_37 Annual summ of the increases in liquid level, sumH_QI (ft/yr) [DONE]
function Eq1_37() {
	// get Q in barrels per year
	aryVarVals.Q = parseFloat(document.getElementById("throughput").value.replace(/,/g,"")) /42;
	//Eq1_37
	aryVarVals.sumH_QI = (5.614 * aryVarVals.Q) / ((Math.PI / 4) * Math.pow(aryVarVals.D_E,2));
}

//Eq1_38 Net Working Loss Throughput, V_Q (ft<sup>3</sup>/yr) [DONE]
function Eq1_38() {
	//Eq1_38
	aryVarVals.V_Q = aryVarVals.sumH_QI * (Math.PI / 4) * Math.pow(aryVarVals.D_E,2);
}

//Eq1_39 net working loss throughput, V_Q (ft<sup>3</sup>/yr) [DONE - not called upon since included in Eq1_38 and Eq1_37]
function Eq1_39() {
	aryVarVals.V_Q = 5.614 * aryVarVals.Q;
}

//Eq1_40 verify vent setting correction factor [DONE]
function Eq1_40() {
	
	if (aryVarVals.deltaP_B > 0.06) {
		aryVarVals.P_I = parseFloat(document.getElementById("gaugePres").value);
		if (aryVarVals.K_N * ((aryVarVals.P_BP + aryVarVals.P_A) / (aryVarVals.P_I + aryVarVals.P_A)) > 1) {
			return 1;
		} else {
			return 0;
		}
	} else {
		return 0;
	}
}

//Eq1_41 vent setting correction factor, K_B (DIMENSIONLESS) [CHECK UNITS]
function Eq1_41() {
	if (Eq1_40() == 1) {
		//Eq1_41				
		aryVarVals.K_B = (((aryVarVals.P_I + aryVarVals.P_A) / aryVarVals.K_N) - aryVarVals.P_VA) / (aryVarVals.P_BP + aryVarVals.P_A - aryVarVals.P_VA);
	} else {
		aryVarVals.K_B = 1;
	}
	aryVarNames1.K_B = "K_B";
	aryVarNames2.K_B = "K<sub>B</sub>";
	aryVarDesc.K_B = "Vent setting correction factor, dimensionless";
}

//7.1.3.8.4 Heating Cycles in Fully Insulated Fixed Roof Tanks===============================================================================
//Eq8_1 average vapor temperature for insulated tanks, T_V (degrees R)
function Eq8_1() {
	//from section 7.1.3.8.4
	//Eq8_1
	aryVarVals.deltaT_V = aryVarVals.T_BX - aryVarVals.T_BN;
}

//Eq8_2 average liquid surface temperature for insulated tanks, T_LA (degrees R)
function Eq8_2() {
	//from section 7.1.3.8.4
	//Eq8_2
	aryVarVals.T_LA = aryVarVals.T_B;
}

