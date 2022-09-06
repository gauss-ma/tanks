function printOutput(){

	let outputWindow = window.open();
	
	HTMLreport=printReport()

	outputWindow.document.write(HTMLreport);
};

function printReport(){

	report=`
<!DOCTYPE html>
<html lang="en">
        <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>TANKS - FAUBA</title>
                <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>

                <!-- call css -->
                <link rel="stylesheet" href="css/style.css">

                <!-- call js -->
        </head>

	<body>
	<section>

	${printSeparador("Tank Indentification and Physical Characteristics")}

	<!-- *****Identification **** -->
	<h3> Identification </h3>
	<table width = "80%">
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">User Identification:</td>
		<td> ${ i.userID } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">City:</td>
		<td> ${ i.city } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">State:</td>
		<td> ${ i.state } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Company:</td>
		<td> ${ i.company } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Type of Tank:</td>
		<td> ${ i.tankType } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Description:</td>
		<td> ${ i.description } </td>
	</tr>
	</table>
	<p/>
	<!-- ***** End Identification **** -->

	<!-- *****Tank Dimensions **** -->
	<h3> Tank dimensions </h3>
	<table width = "35%">
`

if( t.type=='VFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Shell Height (ft):</td>
			<td > ${ t.height } </td>
		</tr>
`;
}
if( t.type =='HFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Shell Length (ft):</td>
			<td > ${ t.height } </td>
		</tr>
`;
};

report+=`	
        <!-- All tanks have diameter -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Diameter (ft):</td>
		<td > ${ t.diameter } </td>
	</tr>
	<!-- End diameter -->
`;

if(t.type == 'VFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Maximum Liquid Height (ft) :</td>
			<td > ${ t.maxLiquidHeight } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Minimum Liquid Height (ft):</td>
			<td > ${ t.minLiquidHeight } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Avg. Liquid Height (ft):</td>
			<td > ${ t.avgLiquidHeight } </td>
		</tr>
`
};

report+=`	<!-- All tanks have volume and turnover -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Volume (gallons):</td>
		<td > ${ parseFloat(t.workingVolume).toFixed(1) } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Turnovers:</td>
		<td > ${ t.turnoversPerYear } </td>
	</tr>
	<!-- end volume and turnover -->
`;

if (t.type == 'VFR' || t.type == 'HFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Net Throughput(ft3/yr):</td>
			<td > ${ netWorkingLossThroughput } </td>		
		</tr>
	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Is Tank Heated (y/n):</td>
			<td> ${ "Heated" } </td>   <!--NOTA SABRI: Ver como hacer para que este input que lo tenemos como boolean, aca nos devuelva yes/no -->
		</tr>
`;
};

if ( t.type == 'IFR'){
report+=`	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">No. of Columns:</td>
			<td > ${ t.columns.number } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Eff. Col. Diam. (ft):</td>
			<td > ${ effectiveColumnDiameter } </td>
		</tr>
`;
};

if (t.type == 'HFR'){
	report+=`		
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Is Tank Underground (y/n):</td>
			<td> ${ "Underground" } </td>	 <!--NOTA SABRI: Nosotros solo tenemos la opcion underground como una de las posibles en t.insulation -->
		</tr>
	`;	
}

report+=`
	</table>
	<!-- *****End Tank Dimensions **** -->
	<br>

	<!-- *****Paint Characteristics **** -->
	
	<h3>Paint Characteristics</h3>
	<table width = "35%">
`
if ( t.type == "EFR"  || t.type== 'IFR' || t.type == "DEFR"){
	report+=`
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Internal Shell Condition:</td>
			<td> ${ t.shellTexture } </td>
		</tr>
	`
};

report+=`	
	
	<!-- All tanks have Shell color and condition -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Shell Color/Shade:</td>
		<td> ${ t.shell.color } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Shell Condition</td>
		<td> ${ t.shell.condition } </td>
	</tr>
	<!-- end color and condition -->
`;

if (t.type == "VFR" || t.type == "IFR") {
	report+=`
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Roof Color/Shade:</td>
			<td> ${ t.roof.color } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Roof Condition:</td>
			<td> ${ t.roof.condition } </td>
		</tr>
	`
};	

report+=` 
	</table>
	<p/>
	<!-- *****End of Paint Characteristics **** -->
	

<!-- *****Roof  Characteristics **** -->
<p/>
`
if(t.type =="VFR") {
	report+=`
		<h3>Roof Characteristics</h3>
		<table width = "35%">	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Type:</td>
			<td> ${ t.roof.type } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Height (ft)</td>
			<td > ${ t.roof.height } </td>
		</tr>
	`		
	if (t.roof.type == "dome") {
		report+=`
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Radius (ft) (Dome Roof)</td>
				<td > ${ t.roof.radius } </td>
			</tr>	
		`
	} else if (t.roof.type == "cone") {
		report+=`
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Slope (ft/ft) (Cone Roof)</td>
			<td > ${ t.roof.slope } </td>
		</tr>	
		`
	}
};
report+=`
		</table>
<p/>
<!-- *****End of Roof Characteristics **** -->

<!-- *****Breather Vent Settings **** -->
<p/>	
	<h3>Breather Vent Settings</h3>
	<table width = "35%">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Vacuum Settings (psig):</td>
			<td > ${ t.ventVacuumSetting } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Pressure Settings (psig)</td>
			<td > ${ t.ventPressureSetting } </td>
		</tr>
	</table>
<p/>
	
<!-- *****Rim Seal Vent Settings **** -->
<p/>	
`	
if(t.type == "EFR"|| t.type == "IFR"|| t.type == "DEFR") {
	report+=`
	<h3>Tank Construction and Rim-Seal System</h3>
	<table width = "35%">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Tank Construction:</td>
			<td> ${ t.construction } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Rim Seal Fit:</td>
			<td> ${ t.rimSeal.fit } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Primary Seal:</td>
			<td> ${ t.rimSeal.type} </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Secondary Seal</td>
			<td> ${ t.rimSeal.secondary } </td>
		</tr>
	</table>
<p/>
	
<!-- *****Deck Characteristics   **** -->
<p/>
	<h3>Deck Characteristics</h3>

	<table width = "35%">
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Deck Type:</td>
	`	
	if (t.type == "EFR") {
		report+=`<td> ${ t.deck.support } </td>
		`
	} else {
		report+=`<td> ${ t.deck.type } </td>
		`
	}
	report+=`	 
	</tr>
	`
	if (t.deck.type == "bolted") {
		report+=`
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Deck Construction:</td>
			<td> ${ t.deck.construction } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Deck Seam Length (ft):</td>
			<td > ${ t.deck.seamLength } </td><!--NOTA SABRI: Este dato no es imprescindible que esté (osea el usuario puede no saberlo y se calcula en base a otros inputs) -->
		</tr>
		`
	};
report+=`
	</table>
<p/>
	
<!-- *****Deck Fittings  **** -->
<p/>
	<table width = "80%">
	<tr>
		<td width = "500"><b>Deck Fitting</b></td>
		<td ><b>Status</b></td>
	</tr>
	<tr><td colspan = "2"><hr/></td></tr>
	`
	for (i=0; i<t.deck.fittings.length; i++){
	report+=`<tr>
		<td> ${ t.deck.fittings[i].fittingName }</td>
		<td> ${ t.deck.fittings[i].fittingType}</td>
	</tr>
	`
	};
report+=`
	</table>
<p/>

	<h4>Deck Fitting Loss Factors</h4>
		<table width = "80%">
		<tr>
			<td width = "350">Deck Fitting/Status</td>
			<td width = "98" >KFa(lb-mole/yr)</td>
			<td width = "98" >KFb(lb-mole/(yr mph^n))</td>
			<td width = "98" >m</td>
			<td width = "98" >Losses(lb)</td>
		</tr>
		<tr><td colspan = "6"><hr/></td></tr>
		`	
		for (i=0; i<t.deck.fittings.length; i++){
			report+=`
			<tr>
				<td> ${ t.deck.fittings[i].fittingName +". "+ t.deck.fittings[i].fittingType }</td>
				<td> ${ t.deck.fittings[i].Kfa } </td>
				<td> ${ t.deck.fittings[i].Kfb } </td>
				<td> ${ t.deck.fittings[i].m } </td>
				<td> ${ "@losses" } </td>  <!--NOTA SABRI: Ver cómo puedo hacer para que me muestre sólo las pérdidas de un tipo de fitting -->
			</tr>
			`
		};
		report+=`	
		</table>		
		`
};	

report+=`
		<br>
		<h3> Meteorological Data </h3>
		<table width = "80%">
			<tr><td>Meterological Data used in Emissions Calculations:  ${m.siteName} (Avg Atmospheric Pressure = ${m.atmPressure} psia) </td></tr>
		</table>
		
		<p style="page-break-before: always"></p>

		<!-- Liquid Contents Report  -->
		
		${printSeparador("Liquid Contents of Storage Tank")}
		<span><b> ${ i.userID &&"-"&& i.tankType }</b></span><br> 
		<span><b> ${ i.city &&","&& i.state }     </b></span>
		
	<p/>		
		<table width = "80%">
		<tr>
		  	<td colspan = "1">&#160;</td>
		  	<td colspan = "1" >Daily Liquid Surf.<br/>Temperature</td>
		  	<td >Liquid<br/>Bulk<br/>Temp</td>
		  	<td>&#160;</td>
		  	<td colspan = "1" >Vapor Pressure (psia)</td>
		  	<td >Vapor<br/>Mol.</td>
		  	<td>&#160;</td>
		  	<td >Liquid<br/>Mol.</td>
		  	<td>&#160;</td>
		  	<td>Basis for Vapor Pressure</td>
		</tr>
		<tr>
			<td width = "180">Mixture/Component</td>
			<td width = "40" > (deg F)</td>
			<td width = "30" >(deg F)</td>
			<td width = "20">&#160;</td>
			<td width = "40" >Avg.</td>
			<td width = "30" >Weight.</td>
			<td width = "20">&#160;</td>
			<td width = "30" >Weight</td>
			<td width = "20">&#160;</td>
			<td width = "220">Calculations</td>
		</tr>
		<tr>	
		   	<td colspan = "19"><hr/></td>
		</tr>
		<tr>
`  
		if (liquidCategory == "Other organic liquids") {  
		report+=`		
		   	<td> ${ c.compoundName } </td>
		`
		} else {
		report+=`		
			<td> ${ c.liquidName } </td>
 		`
		};	
		report+=`
		   	<td > ${ parseFloat(avgSurfaceTemp).toFixed(2) } </td>
		<!--	<td  } </td>	 NO DEFINIDO!! -->
		<!--	<td  } </td>	 NO DEFINIDO!! -->
		   	<td >  ${ parseFloat(avgBulkTemp).toFixed(2)    } </td>
		   	<td>&#160;</td>
		   	<td > ${ parseFloat(c.vaporPressure).toFixed(2)} </td>
		<!--	<td  } </td>	 NO DEFINIDO!! -->
		<!--	<td  } </td> 	 NO DEFINIDO!! -->
		`
		if (liquidCategory == "Other organic liquids") {  
		report+=`	
			<td > ${ c.molWeight } </td>
		`
		} else {
		report+=`
			<td > ${ c.vapMolWeight } </td>
		 `
		};		   	
		//report+=`	
		//   	<td>&#160;</td>
		//   	<td  } </td>  <!--NOTA SABRI: Nosotros por ahora no estamos considerando mezclas-->
		//   	<td>&#160;</td>
		//   	<td  } </td>  <!--NOTA SABRI: Nosotros por ahora no estamos considerando mezclas-->
		//   	<td>&#160;</td>
		//`
		if (liquidCategory == "Other organic liquids") {  
		report+=`		
			<td > ${ c.molWeight } </td>
		`
		} else {
		report+=`
			<td > ${ c.liqMolWeight } </td>
		`
		};		   	
		report+=`
			<td>&#160;</td>
		   	<td> ${ "Basis" } </td>   <!--NOTA SABRI: Esto no lo inclui por ahora-->
  		</tr>
		</table>
		
		<p style="page-break-before: always"></p>
		<!--this is the detail page-->
		${printSeparador("Detail Calculations (AP-42)")}

		<h3>Annual Emission Calculations</h3>
		
		<br>
		<center><h4>Sabri, acá habria que ver como resumir variables intermedias de los cálculos.</h4></center>
		<br>
	
		<table>
		<tr><td colspan = "3"><hr/></td></tr>
		`

// Por ejemplo, si tuvieras un array con todas las variables intermedias, te armas una tabla tipo:
misResultadosIntermedios=[
	{varName:"Mi variable 1", value:"1"},
	{varName:"Mi variable 2", value:"1"},
	{varName:"Mi variable 3", value:"2"},
	{varName:"Mi variable 4", value:"3"},
	{varName:"Mi variable 5", value:"5"},
	{varName:"Mi variable 6", value:"8"},
	{varName:"Mi variable 7", value:"13"} //fibonacci xD
	];

	for (let i=0; i< misResultadosIntermedios.length; i++){

		report+=`<tr>
			<td>&#160;  				    </td> 
			<td width="180">${misResultadosIntermedios[i].varName}: </td>
			<td width="30" >${misResultadosIntermedios[i].value  }  </td> 
			</tr>`

	};
	
	report+=`

		<tr><td colspan = "3"><hr/></td></tr>
		</table>


		<p style="page-break-before: always"></p>	

		<!-- Now we need to add in the code that does the "brief" part of the report -->


		<p style="page-break-before: always"></p>

		${printSeparador("Individual Tank Emission Totals")}
		
		<h3>Emissions Report</h3>
		`
 
		if( t.type== 'VFR' ||  t.type == 'HFR'){
		report+=`
			<table width = "80%" border = "1">
				<tr>
					<td width = "200">&#160;</td>
					<td colspan = "3" >Losses(lbs)</td>
				</tr>
				<tr>
					<td>Components</td>
					<td width = "140" >Working Loss</td>
					<td width = "140" >Breathing Loss</td>
					<td width = "140" >Total Emissions</td>
				</tr>
				<tr>
		`	
				if (liquidCategory == "Other organic liquids") {  
				report+=`		
					<td> ${ c.compoundName } </td>
				`
				} else {
				report+=`		
					<td> ${ c.liquidName } </td>
				`
				};	
		report+=`		
					<td width = "140" > ${ o.workingLosses } </td>		
					<td width = "140" > ${ o.standingLosses } </td>	
					<td width = "140" > ${ o.totalLosses } </td>
				</tr>
			</table>
		`;
		} else {
		report+=`			
			<table width = "80%" border = "1">
				<tr>
					<td width = "200">&#160;</td>
					<td colspan = "5" >Losses(lbs)</td>
				</tr>
				<tr>
					<td>Components</td>
					<td width = "140" >Rim Seal Loss</td>
					<td width = "140" >Withdrawl Loss</td>
					<td width = "140" >Deck Fitting Loss</td>
					<td width = "140" >Deck Seam Loss</td>
					<td width = "140" >Total Emissions</td>
				</tr>
		`		
				if (liquidCategory == "Other organic liquids") {  
				report+=`		
					<td> ${ c.compoundName } </td>
				`
				} else {
				report+=`		
					<td> ${ c.liquidName } </td>
				`
				};	
		report+=`		
					<td width = "140" > ${ parseFloat(o.rimSealLosses).toFixed(4) } </td>		
					<td width = "140" > ${ parseFloat(o.workingLosses).toFixed(4) } </td>	
					<td width = "140" > ${ parseFloat(o.deckFittingLosses).toFixed(5) } </td>
					<td width = "140" > ${ parseFloat(o.deckSeamLoss).toFixed(5) } </td>	
					<td width = "140" > ${ parseFloat(o.totalLosses).toFixed(5) } </td>	
				</tr>
			</table>
		`;
		};
		
report+=`	
		<p style="page-break-before: always"></p>
		${printSeparador("Total Emissions Summaries - All Tanks in Report")}
		
		<span><b>Emissions Report </b></span> 
		
		<table width = "80%">
			<tr><td colspan = "5"><hr/></td></tr>
			<tr>
				<td width = "180">Tank Identification</td>
				<td width = "250">&#160;</td>
				<td width = "150">&#160;</td>
				<td width = "150">&#160;</td>
				<td width = "170" >Losses (lbs)</td>
			</tr>
			<tr><td colspan = "5"><hr/></td></tr>
		
			<xsl:apply-templates/>
			
			<tr>
				<td colspan = "4">Total Emissions:</td>
				<td > ${ parseFloat(o.totalLosses).toFixed(5) } </td>	<!--NOTA SABRI: Por ahora, no tenemos la opción de hacer los cálculos para más de un tanque a la vez-->
			</tr>
		</table>
	
		<br>
       		 <center><button onclick='window.print()'>Imprimir reporte</button></center>
        	<br>
        
	</section>

	<style>
		table > * {
			font-family: arial;
			font-size: 11pt;
		};
	</style>
	</body>
</html>
`;	
	return report;
};

//=====================================================================
function printSeparador(sectionTitle){

	str=`	
	<center>
		<h1 style="color:#303030;">TANKS 4.0.9d</h1>
		<h2>Emissions Report - Detailed Format </h2>
		<h2>${sectionTitle}</h2>
	</center> 
	<br>
	`;

	return str;
};
