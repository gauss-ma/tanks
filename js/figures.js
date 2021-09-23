//FIGURES=================================================================================================================================================

//Figure 7.1-13b: Equations for true vapor pressure of crude oils with a Reid vapor pressure of 2 to 15 psi
function Fig1_13b() {
	//T = T_LA
	//requires RVP
	var P;
	P = Math.exp((((2799 / aryVarVals.T_LA) - 2.227) * Math.log10(aryVarVals.RVP)) - (7261 / aryVarVals.T_LA) + 12.82);
	
	return P;
}

//Figure 7.1-14b: Equations for true vapor pressure of refined petroleum stocks with Reid vapor pressure of 1 to 20 psi
function Fig1_14b() {
	//T = T_LA
	//requires RVP and S
	var P;
	//T = T_LA
	P = Math.exp(((0.7553 - (413.0 / aryVarVals.T_LA)) * Math.pow(aryVarVals.Slope,0.5) * Math.log10(aryVarVals.RVP)) - ((1.854 - (1042 / aryVarVals.T_LA)) * Math.pow(aryVarVals.Slope,0.5)) + (((2416 / aryVarVals.T_LA) - 2.013) * Math.log10(aryVarVals.RVP)) - (8742 / aryVarVals.T_LA) +15.64);

	return P;
}

//Figure 7.1-15: Equations to determine vapor pressure Constants A and B for refined petroleum stocks
function Fig1_15() {
	//requires RVP and S
	aryVarVals.A = 15.64 - (1.854 * Math.pow(aryVarVals.Slope,0.5)) - ((0.8742 - (0.3280 * Math.pow (aryVarVals.Slope,0.5))) * Math.log(aryVarVals.RVP));
	aryVarVals.B = 8742 - (1042 * Math.pow(aryVarVals.Slope,0.5)) - ((1049 - 179.4 * Math.pow(aryVarVals.Slope,0.5)) * Math.log(aryVarVals.RVP));
}

//Figure 7.1-16: Equations to determine vapor pressure Constants A and B for crude oil stocks

function Fig1_16() {
	aryVarVals.A = 12.82 - (0.9672 * Math.log(aryVarVals.RVP));
	aryVarVals.B = 7261 - (1216 * Math.log(aryVarVals.RVP));
}

//Figure 7.1-17: Equations for the average daily maximum and minimum liquid surface temperatures, T_LX and T_LN (degrees R) [DONE]
function Fig1_17() {

	if (document.getElementById("minBulkTemp").value != "" && isNaN(document.getElementById("minBulkTemp").value) == false) {
		//fully insulated and heated tank
		//from section 7.1.3.8.4
		aryVarVals.T_LN = aryVarVals.T_BN;
		aryVarVals.T_LX = aryVarVals.T_BX;
	} else {
		//Fig1_17
		aryVarVals.T_LN = aryVarVals.T_LA - (0.25 * aryVarVals.deltaT_V);
		aryVarVals.T_LX = aryVarVals.T_LA + (0.25 * aryVarVals.deltaT_V);
	}
	
	aryVarDesc.T_LN = "Average daily minimum liquid surface temperature, &deg;R";
	aryVarNames1.T_LN = "T_LN";
	aryVarNames2.T_LN = "T<sub>LN</sub>";
	
	aryVarDesc.T_LX = "Average daily maximum liquid surface temperature, &deg;R";
	aryVarNames1.T_LX = "T_LX";
	aryVarNames2.T_LX = "T<sub>LX</sub>";
}
