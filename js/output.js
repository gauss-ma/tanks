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
	<table width = "80%" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
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
	<table width = "35%" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
`

if( t.type=='VFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Shell Height (ft):</td>
			<td align = "right"> ${ t.height } </td>
		</tr>
`;
}
if( t.type =='HFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Shell Length (ft):</td>
			<td align = "right"> ${ t.height } </td>
		</tr>
`;
};

report+=`	
        <!-- All tanks have diameter -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Diameter (ft):</td>
		<td align = "right"> ${ t.diameter } </td>
	</tr>
	<!-- End diameter -->
`;

if(t.type == 'VFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Maximum Liquid Height (ft) :</td>
			<td align = "right"> ${ t.maxLiquidHeight } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Minimum Liquid Height (ft):</td>
			<td align = "right"> ${ t.minLiquidHeight } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Avg. Liquid Height (ft):</td>
			<td align = "right"> ${ t.avgLiquidHeight } </td>
		</tr>
`
};

report+=`	<!-- All tanks have volume and turnover -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Volume (gallons):</td>
		<td align = "right"> ${ t.workingVolume } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Turnovers:</td>
		<td align = "right"> ${ turnoversPerYear } </td>
	</tr>
	<!-- end volume and turnover -->
`;

if (t.type == 'VFR' || t.type == 'HFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Net Throughput(gal/yr):</td>
			<td align = "right"> ${ "NetThroughput" } </td>		<!--NOTA SABRI: Ver como ingresarlo en el output en funcion de turnoversPerYer (si el usuario no lo ingreso) -->
		</tr>
	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Is Tank Heated (y/n):</td>
			<td> ${ "Heated" } </td>
		</tr>
`;
};
if ( t.type == 'IFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Self Supp. Roof? (y/n):</td>
			<td> ${ "SuppRoof" } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">No. of Columns:</td>
			<td align = "right"> ${ "NumCols" } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Eff. Col. Diam. (ft):</td>
			<td align = "right"> ${ "ColDiam" } </td>
		</tr>
`;
};
if (t.type == 'HFR'){
report+=`		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Is Tank Underground (y/n):</td>
			<td> ${ "Underground" } </td>
		</tr>
`;	
}
report+=`
	</table>
	<!-- *****End Tank Dimensions **** -->
	<br>

	<!-- *****Paint Characteristics **** -->
	
	<h3>Paint Characteristics</h3>
	<table width = "35%" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
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
	<!-- *****Paint Characteristics **** -->
	

	<!-- *****Roof  Characteristics **** -->
	<p/>
	
	<h3>Roof Characteristics</h3>
	<table width = "350" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Type:</td>
		<td> ${ t.roof.type } </td>
	</tr>
`
if(t.type =="VFR") {
	report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Height (ft)</td>
			<td align = "right"> ${ t.roof.height } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
	`		
	if (t.roof.type == "dome") {
		report+=`<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Radius (ft) (Dome Roof)</td>
		<td align = "right"> ${ t.roof.radius } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>		
		`
	} else if (t.roof.type == "cone") {
		report+=`<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Slope (ft/ft) (Cone Roof)</td>
		<td align = "right"> ${ t.roof.slope } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>		
		`
	};

	report+=`
			<td align = "right"> ${ "Size" } </td>  	<!--NOTA SABRI: No se a que haría referencia ese Size -->
			</tr>
	`
};
		
	if(t.type == "EFR" || t.type == "DEFR" ) {
		report+=`<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Fitting Category</td>
			<td> ${ "Category" } </td>
		</tr>
		`
	};
	
	report+=`
	</table>
	
	<p/>
	<!-- *****Roof Characteristics **** -->

	<!-- *****Breather Vent Settings **** -->
	<p/>
	
	<table width = "35%" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
	<tr>
		<td colspan = "2"><b>Breather Vent Settings</b></td>
		<td width = "150">&#160;</td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Vacuum Settings (psig):</td>
		<td align = "right"> ${ "Vacuum" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Pressure Settings (psig)</td>
		<td align = "right"> ${ "Pressure" } </td>
	</tr>
	
	</table>
	<p/>
	

	<!-- *****Rim Seal Vent Settings **** -->
	<p/>
	
	<table width = "35%" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
	
	<xsl:if match = ".[@Type = 'Internal Floating Roof Tank'] ">
		<tr>
			<td colspan = "2"><b>Rim-Seal System</b></td>
			<td width = "150">&#160;</td>
		</tr>
	</xsl:if>
	<xsl:if match = ".[@Type = 'External Floating Roof Tank'  $or$ @Type = 'Domed External Floating Roof Tank'] ">
		<tr>
			<td colspan = "3"><b>Tank Construction and Rim-Seal System</b></td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Construction:</td>
			<td> ${ "Construction" } </td>
		</tr>
		
	
	</xsl:if>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Primary Seal:</td>
		<td> ${ "Primary" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Secondary Seal</td>
		<td> ${ "Secondary" } </td>
	</tr>
	</table>
	<p/>

	<!-- *****Deck Characteristics   **** -->
	<p/>
	
	<table width = "35%" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
	<tr>
		<td colspan = "2"><b>Deck Characteristics</b></td>
		<td width = "150">&#160;</td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Deck Fitting Category:</td>
		<td> ${ "Fitting" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Deck Type:</td>
		<td> ${ "Type" } </td>
	</tr>
	<xsl:if match = ".[Type = 'Bolted']">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Construction:</td>
			<td> ${ "Construction" } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Deck Seam:</td>
			<td> ${ "DeckSeam" } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Deck Seam Len. (ft):</td>
			<td align = "right"> ${ "SeamLength" } </td>
		</tr>
	</xsl:if>
	
	</table>
	<p/>
	

	<!-- *****Deck Fittings  **** -->

	<p/>
	<table width = "80%" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:11pt">
	<tr>
		<td width = "700"><b>Deck Fitting/Status</b></td>
		<td align = "right"><b>Quantity</b></td>
	</tr>
	<tr><td colspan = "2"><hr/></td></tr>
`
for (i=0; i<t.fittings.length; i){
report+=`<tr>
		<td> ${ t.fittings[i].type }</td>
		<td> ${ t.fittings[i].cover}</td>
		<td align = "right"> ${ t.fittings[i].quantity} </td>
	   </tr>
`
};
report+=`
	</table>
	<p/>

	<h3>Roof Fitting Loss Factors</h3>

	 	<table width = "840" style = "font-family:arial; font-size:6pt" border = "0" cellpadding = "0" cellspacing = "0">
		   <tr>
		   	<td width = "350">Roof Fitting/Status</td>
		   	<td width = "98" align = "right">Quantity</td>
		   	<td width = "98" align = "right">KFa(lb-mole/yr)</td>
		   	<td width = "98" align = "right">KFb(lb-mole/(yr mph^n))</td>
		   	<td width = "98" align = "right">m</td>
		   	<td width = "98" align = "right">Losses(lb)</td>
		   </tr>
		   <tr><td colspan = "6"><hr/></td></tr>
		   <xsl:for-each match = "Value">
		   	<tr align = "right">
		   		<td align = "left"> ${ "@label" } </td>
		   		<td> ${ "@quantity" } </td>
		   		<td> ${ "@KFa" } </td>
		   		<td> ${ "@KFb" } </td>
		   		<td> ${ "@m" } </td>
		   		<td> ${ "@losses" } </td>
		   	</tr>
		   </xsl:for-each>	
		</table>		
	

		<table width = "90%" style = "font-family:arial; font-size:11pt">
			<tr><td>Meterological Data used in Emissions Calculations:  ${m.siteName} (Avg Atmospheric Pressure = ${m.atmPressure} psia) </td></tr>
		</table>
		
	<p style="page-break-before: always"></p>
	
		<!-- Liquid Contents Report  -->
		${printSeparador("Liquid Contents of Storage Tank")}
		
		<span><font size = "2" face = "Arial"><b> ${ "TankName" }</b></font></span><br> 
		<span><font size = "2" face = "Arial"><b> ${ "Location" }</b></font></span>
		<p/>
		
		
		<table width = "900" cellpadding = "1" cellspacing = "0" style = "font-family:arial; font-size:6pt">
		  <tr>
		  	<td colspan = "19"><hr/></td>
		  </tr>
		  <tr valign = "bottom">
		  	<td colspan = "2">&#160;</td>
		  	<td colspan = "3" align = "center">Daily Liquid Surf.<br/>Temperature (deg F)</td>
		  	<td align = "right">Liquid<br/>Bulk<br/>Temp</td>
		  	<td>&#160;</td>
		  	<td colspan = "3" align = "center">Vapor Pressure (psia)</td>
		  	<td align = "right">Vapor<br/>Mol.</td>
		  	<td>&#160;</td>
		  	<td align = "right">Liquid<br/>Mass</td>
		  	<td>&#160;</td>
		  	<td align = "right">Vapor<br/>Mass</td>
		  	<td>&#160;</td>
		  	<td align = "right">Mol.</td>
		  	<td>&#160;</td>
		  	<td>Basis for Vapor Pressure</td>
		  </tr>
		  <tr>
			<td width = "160">Mixture/Component</td>
			<td width = "30" align = "right">Month</td>
			<td width = "40" align = "center">Avg.</td>
			<td width = "40" align = "center">Min.</td>
			<td width = "40" align = "center">Max.</td>
			<td width = "30" align = "right">(deg F)</td>
			<td width = "20">&#160;</td>
			<td width = "40" align = "center">Avg.</td>
			<td width = "40" align = "center">Min.</td>
			<td width = "40" align = "center">Max.</td>
			<td width = "30" align = "right">Weight.</td>
			<td width = "20">&#160;</td>
			<td width = "30" align = "right">Fract.</td>
			<td width = "20">&#160;</td>
			<td width = "30" align = "right">Fract.</td>
			<td width = "20">&#160;</td>
			<td width = "30" align = "right">Weight</td>
			<td width = "20">&#160;</td>
			<td width = "220">Calculations</td>
		   </tr>
		   <tr>	
		   	<td colspan = "19"><hr/></td>
		   </tr>
		   
		   <tr>
		   	<td> ${ "MixtureComponent" } </td>
		   	<td> ${ "Month" } </td>
		   	<td align = "center"> ${ "AveDailyTemp" } </td>
		   	<td align = "center"> ${ "MinDailyTemp" } </td>
		   	<td align = "center"> ${ "MaxDailyTemp" } </td>
		   	<td align = "right"> ${ "BulkTemp" } </td>
		   	<td>&#160;</td>
		   	<td align = "center"> ${ "AvePressure" } </td>
		   	<td align = "center"> ${ "MinPressure" } </td>
		   	<td align = "center"> ${ "MaxPressure" } </td>
		   	<td align = "right"> ${ "VapMolWeight" } </td>
		   	<td>&#160;</td>
		   	<td align = "right"> ${ "LiquidMassFraction" } </td>
		   	<td>&#160;</td>
		   	<td align = "right"> ${ "VaporMassFraction" } </td>
		   	<td>&#160;</td>
		   	<td align = "right"> ${ "MolWeight" } </td>
		   	<td>&#160;</td>
		   	<td> ${ "Basis" } </td>
  		   </tr>
		</table>
	


	<p style="page-break-before: always"></p>

		<!--this is the detail page-->
		${printSeparador("Detail Calculations (AP-42)")}
	
		<span><font size = "2" face = "Arial"><b> ${ "TankName" } </b></font></span><br> 
		<span><font size = "2" face = "Arial"><b> ${ "TankLocation" } </b></font></span>
		<p/>
		<p/>
	
		<h4>Annual Emission Calcaulations</h4>
		
		<table width = "262" style = "font-family:arial; font-size:6pt" cellpadding = "0" cellspacing = "0">
		<tr><td colspan = "2"><hr/></td></tr>
	
			<xsl:for-each match = "Value">	
				<tr align = "right">
				<td align = "left"> ${ "@label" } </td>
				<td> ${ "@month_0" } </td>	
				</tr>			
			</xsl:for-each>
		</table>


	<p style="page-break-before: always"></p>	

		<!-- Now we need to add in the code that does the "brief" part of the report -->


	<p style="page-break-before: always"></p>

		${printSeparador("Individual Tank Emission Totals")}
		
		<p/>
		<h3>Emissions Report for:  ${ "TimePeriod" } 	</h3>
		<p/>
		
		<p/>
		<span><font size = "2" face = "Arial"><b> ${ "TankName" }</b></font></span><br> 
		<span><font size = "2" face = "Arial"><b> ${ "Location" } </b></font></span>
		<p/>
`
 if( t.type== 'Vertical Fixed Roof Tank' ||  t.type == 'Horizontal Tank'){

	report+=`
		<table width = "100%" border = "1" style = "font-family:arial; font-size:11pt">
			<tr>
				<td width = "200">&#160;</td>
				<td colspan = "3" align = "center">Losses(lbs)</td>
			</tr>
			<tr>
				<td>Components</td>
				<td width = "140" align = "right">Working Loss</td>
				<td width = "140" align = "right">Breathing Loss</td>
				<td width = "140" align = "right">Total Emissions</td>
			</tr>
			<tr>
			<td> ${ "NAME" } </td>
				<td width = "140" align = "right"> ${ o.workingLosses } </td>		
				<td width = "140" align = "right"> ${ "BreathingLoss" } </td>	
				<td width = "140" align = "right"> ${ "TotalEmissions" } </td>
			</tr>
		</table>
	`;
};
if (t.type !='Vertical Fixed Roof Tank'&& t.type != 'Horizontal Tank'){
report+=`			<table width = "100%" border = "1" style = "font-family:arial; font-size:11pt">
			<tr>
				<td width = "200">&#160;</td>
				<td colspan = "5" align = "center">Losses(lbs)</td>
			</tr>
			<tr>
				<td>Components</td>
				<td width = "140" align = "right">Rim Seal Loss</td>
				<td width = "140" align = "right">Withdrawl Loss</td>
				<td width = "140" align = "right">Deck Fitting Loss</td>
				<td width = "140" align = "right">Deck Seam Loss</td>
				<td width = "140" align = "right">Total Emissions</td>
			</tr>
				<td> ${ "NAME" } </td>
				<td width = "140" align = "right"> ${ "RimSealLoss" } </td>		
				<td width = "140" align = "right"> ${ "WithdrawlLoss" } </td>	
				<td width = "140" align = "right"> ${ "DeckFittingLoss" } </td>
				<td width = "140" align = "right"> ${ "DeckSeamLoss" } </td>	
				<td width = "140" align = "right"> ${ "TotalEmissions" } </td>	
			</tr>
			</table>
`;
};
		
report+=`	
		<p style="page-break-before: always"></p>
		${printSeparador("Total Emissions Summaries - All Tanks in Report")}
		
		<span><font size = "3" face = "Arial"><b>Emissions Report for:  ${ "@months" } </b></font></span>
		<p/>
		
		<table width = "90%" border = "0" style = "font-family:arial; font-size:11pt" cellpadding = "0" cellspacing = "0">
			<tr><td colspan = "5"><hr/></td></tr>
			<tr>
				<td width = "180">Tank Identification</td>
				<td width = "250">&#160;</td>
				<td width = "150">&#160;</td>
				<td width = "150">&#160;</td>
				<td width = "170" align = "right">Losses (lbs)</td>
			</tr>
			<tr><td colspan = "5"><hr/></td></tr>
		
			<xsl:apply-templates/>
			
			<tr>
				<td colspan = "4">Total Emissions for all Tanks:</td>
				<td align = "right"> ${ "Total" } </td>
			</tr>
			<tr><td colspan = "5"><hr/></td></tr>
		</table>
	
	<br>
        <button onclick='window.print()'>Imprimir reporte</button>";
        <br>
        
	</section>
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
