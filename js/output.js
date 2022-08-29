function printOutput(){

	let outputWindow = window.open();

        let HTMLhead=`
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
	<body><section>
        `;
	
	let HTMLbody=printReport();


	let HTMLfoot=`

<button onclick='window.print()'>Print this page</button>";

</section></body>
</html>
	`;
	
	HTMLstring=HTMLhead+HTMLbody+HTMLfoot;

	outputWindow.document.write(HTMLstring);
};

function printSeparador(sectionTitle){

	str=`	
	<table width = "900">
		<tr> <td align = "center"><font size = "3" face = "Arial"><b>TANKS 4.0.9d</b></font></td> </tr>
		<tr> <td align = "center"><font size = "3" face = "Arial"><b>Emissions Report - Detailed Format </b></font></td> </tr>
		<tr> <td align = "center"><font size = "3" face = "Arial"><b> ${sectionTitle}</b></font></td> </tr>
	</table> 
	<br>
	`;

	return str;
};


function printReport(){

//SECCIONES:

//<xsl:template match = "Identification">
identification=`
	<!-- *****Identification **** -->
	<table width = "800" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
	<tr>
		<td colspan = "2"><b>Identification</b></td>
		<td width = "600">&#160;</td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">User Identification:</td>
		<td> ${ "UserID" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">City:</td>
		<td> ${ "City" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">State:</td>
		<td> ${ "State" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Company:</td>
		<td> ${ "Company" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Type of Tank:</td>
		<td> ${ "TankType" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Description:</td>
		<td> ${ "Description" } </td>
	</tr>
	</table>
	<p/>
	<!-- ***** End Identification **** -->
`;
//</xsl:template>



//<xsl:template match = "Dimensions">
dimensions=`
	<!-- *****Tank Dimensions **** -->
	
	<table width = "350" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
	<tr>
		<td colspan = "2"><b>Tank Dimensions</b></td>
		<td width = "150">&#160;</td>
	</tr>
`

if( t.type=='Vertical Fixed Roof Tank'){
dimensions+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Shell Height (ft):</td>
			<td align = "right"> ${ "ShellHeight" } </td>
		</tr>
`;
}
if( t.type =='Horizontal Tank'){
dimensions+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Shell Length (ft):</td>
			<td align = "right"> ${ "ShellLength" } </td>
		</tr>
`;
};

dimensions+=`	
        <!-- All tanks have diameter -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Diameter (ft):</td>
		<td align = "right"> ${ "Diameter" } </td>
	</tr>
	<!-- End diameter -->
`;

if(t.type == 'Vertical Fixed Roof Tank'){
dimensions+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Liquid Height (ft) :</td>
			<td align = "right"> ${ "LiquidHeight" } </td>
		</tr>

		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Avg. Liquid Height (ft):</td>
			<td align = "right"> ${ "AveLiquidHeight" } </td>
		</tr>
`
};

dimensions+=`	<!-- All tanks have volume and turnover -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Volume (gallons):</td>
		<td align = "right"> ${ "Volume" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Turnovers:</td>
		<td align = "right"> ${ "Turnovers" } </td>
	</tr>
	<!-- end volume and turnover -->
`;

if (t.type == 'Vertical Fixed Roof Tank' || t.type == 'Horizontal Tank'){
dimensions+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Net Throughput(gal/yr):</td>
			<td align = "right"> ${ "NetThroughput" } </td>
		</tr>
	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Is Tank Heated (y/n):</td>
			<td> ${ "Heated" } </td>
		</tr>
`;
};
if ( t.type == 'Internal Floating Roof Tank'){
dimensions+=`	<tr>
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
		
		
`
};
if (t.type == 'Horizontal Tank'){
dimensions+=`		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Is Tank Underground (y/n):</td>
			<td> ${ "Underground" } </td>
		</tr>
`;	
}
dimensions+=`
	</table>
	<br
	
	<!-- *****End Tank Dimensions **** -->
`;
//</xsl:template>



//<xsl:template match = "PaintChar">	
paintChar=`
	<!-- *****Paint Characteristics **** -->
	<p/>
	
	<table width = "350" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
	<tr>
		<td colspan = "2"><b>Paint Characteristics</b></td>
		<td width = "150">&#160;</td>
	</tr>
	
	<xsl:if match = ".[@Type = 'External Floating Roof Tank'  $or$ @Type = 'Internal Floating Roof Tank' $or$ @Type = 'Domed External Floating Roof Tank'] ">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Internal Shell Condition:</td>
			<td> ${ "InternalCondition" } </td>
		</tr>
	</xsl:if>
	
	
	<!-- All tanks have Shell color and condition -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Shell Color/Shade:</td>
		<td> ${ "ShellColor" } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Shell Condition</td>
		<td> ${ "ShellCondition" } </td>
	</tr>
	<!-- end color and condition -->
	<xsl:if match = ".[@Type = 'Vertical Fixed Roof Tank'  $or$ @Type = 'Internal Floating Roof Tank'] ">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Roof Color/Shade:</td>
			<td> ${ "RoofColor" } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Roof Condition:</td>
			<td> ${ "RoofCondition" } </td>
		</tr>
	</xsl:if>
	</table>
	<p/>
	<!-- *****Paint Characteristics **** -->
`;
//</xsl:template>	
	

//<xsl:template match = "RoofChar">		
roofChar=`
	<!-- *****Roof  Characteristics **** -->
	<p/>
	
	<table width = "350" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
	<tr>
		<td colspan = "2"><b>Roof Characteristics</b></td>
		<td width = "150">&#160;</td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Type:</td>
		<td> ${ "Type" } </td>
	</tr>
	<xsl:if match = ".[@Type = 'Vertical Fixed Roof Tank']">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Height (ft)</td>
			<td align = "right"> ${ "Height" } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<xsl:if match = ".[Type = 'Dome']">
				<td width = "180">Radius (ft) (Dome Roof)</td>
			</xsl:if>
			<xsl:if match = ".[Type = 'Cone']">
				<td width = "180">Slope (ft/ft) (Cone Roof)</td>
			</xsl:if>
			<td align = "right"> ${ "Size" } </td>
		</tr>
	</xsl:if>
	<xsl:if match = ".[@Type = 'External Floating Roof Tank' $or$ @Type = 'Domed External Floating Roof Tank']">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Fitting Category</td>
			<td> ${ "Category" } </td>
		</tr>
	</xsl:if>
	
	
	</table>
	
	<p/>
	<!-- *****Roof Characteristics **** -->
`;
//</xsl:template>	

//<xsl:template match = "BreatherVent">
breatherVent=`	
	<!-- *****Breather Vent Settings **** -->
	<p/>
	
	<table width = "350" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
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
`;
//</xsl:template>	


//<xsl:template match = "RimSeal">
rimSeal=`	
	<!-- *****Rim Seal Vent Settings **** -->
	<p/>
	
	<table width = "350" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
	
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
`;
//</xsl:template>	


//<xsl:template match = "DeckChar">
deckChar=`
	<p/>
	
	<table width = "350" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
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
`;
//</xsl:template>	



//<xsl:template match = "DeckFitting">
deckFitting=`
	<p/>
	<table width = "800" border = "0" cellpadding = "0" cellspacing = "0" style = "font-family:arial; font-size:8pt">
	<tr>
		<td width = "700"><b>Deck Fitting/Status</b></td>
		<td align = "right"><b>Quantity</b></td>
	</tr>
	<tr><td colspan = "2"><hr/></td></tr>
	<xsl:for-each match = "Fitting">
	   <tr>
		<td> ${ "@FitType"}</td>
		<td> ${ "@CoverType"}</td>
		<td align = "right"> ${ "@Quantity" } </td>
	   </tr>
	</xsl:for-each>
	</table>
	<p/>
`;
//</xsl:template>


//<xsl:template match = "COMPONENT">
COMPONENT=`
	<tr>
	<td> ${ "NAME" } </td>
	<xsl:if match = ".[@Type = 'Vertical Fixed Roof Tank' $or$ @Type = 'Horizontal Tank']">
		<td width = "140" align = "right"> ${ "WorkingLoss" } </td>		
		<td width = "140" align = "right"> ${ "BreathingLoss" } </td>	
		<td width = "140" align = "right"> ${ "TotalEmissions" } </td>
	</xsl:if>
	<xsl:if match = ".[@Type != 'Vertical Fixed Roof Tank' $and$ @Type != 'Horizontal Tank']">
		<td width = "140" align = "right"> ${ "RimSealLoss" } </td>		
		<td width = "140" align = "right"> ${ "WithdrawlLoss" } </td>	
		<td width = "140" align = "right"> ${ "DeckFittingLoss" } </td>
		<td width = "140" align = "right"> ${ "DeckSeamLoss" } </td>	
		<td width = "140" align = "right"> ${ "TotalEmissions" } </td>	
	</xsl:if>
	
	</tr>
`;
//</xsl:template>



//<xsl:template match = "LiquidContents">
liquidContents=`
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
`;
//</xsl:template>



//<xsl:template match = "TankSum">
tankSum=`
	<tr>
		<td> ${ "@id" } </td>
		<td> ${ "@company" } </td>
		<td> ${ "@type" } </td>
		<td> ${ "@location" } </td>
		<td align = "right"> ${ "@loss" } </td>
		
	</tr>
	<tr><td colspan = "5"><hr/></td></tr>
`;
//</xsl:template>


////<xsl:template match = "Data">
//data=`
//	<xsl:if match = ".[@Unit = 'Monthly']">
//		<table width = "900" style = "font-family:arial; font-size:6pt" border = "0" cellpadding = "0" cellspacing = "0">
//		<tr><td colspan = "13"><hr/></td></tr>
//		<tr align = "right">
//			<td width = "204" align = "left">Month:</td>
//			<td width = "58">January</td>
//			<td width = "58">February</td>
//			<td width = "58">March</td>
//			<td width = "58">April</td>
//			<td width = "58">May</td>
//			<td width = "58">June</td>
//			<td width = "58">July</td>
//			<td width = "58">August</td>
//			<td width = "58">September</td>
//			<td width = "58">October</td>
//			<td width = "58">November</td>
//			<td width = "58">December</td>	
//		</tr>
//		<tr><td colspan = "13"><hr/></td></tr>
//		<xsl:for-each match = "Value">	
//			<tr align = "right">
//			<td align = "left"> ${ "@label" } </td>
//			<td> ${ "@month_1" } </td>	
//			<td> ${ "@month_2" } </td>	
//			<td> ${ "@month_3" } </td>	
//			<td> ${ "@month_4" } </td>	
//			<td> ${ "@month_5" } </td>	
//			<td> ${ "@month_6" } </td>	
//			<td> ${ "@month_7" } </td>	
//			<td> ${ "@month_8" } </td>	
//			<td> ${ "@month_9" } </td>	
//			<td> ${ "@month_10" } </td>	
//			<td> ${ "@month_11" } </td>	
//			<td> ${ "@month_12" } </td>	
//			</tr>			
//		</xsl:for-each>
//		</table>
//	</xsl:if>
//	<xsl:if match =  ".[@Unit = 'Annual']">
//		<table width = "262" style = "font-family:arial; font-size:6pt" cellpadding = "0" cellspacing = "0">
//		<tr><td colspan = "2"><hr/></td></tr>
//		<tr align = "right">
//			<td width = "204" align = "left">Annual Emission Calcaulations</td>
//			<td width = "58">&#160;</td>
//		</tr>
//		<tr><td colspan = "2"><hr/></td></tr>
//	
//		<xsl:for-each match = "Value">	
//			<tr align = "right">
//			<td align = "left"> ${ "@label" } </td>
//			<td> ${ "@month_0" } </td>	
//			</tr>			
//		</xsl:for-each>
//		</table>
//		
//	</xsl:if>
//	
//`;	
////</xsl:template>


//<xsl:template match = "RoofStatus">
roofStatus=`
	<table width = "840" style = "font-family:arial; font-size:6pt" border = "0" cellpadding = "0" cellspacing = "0">
		<tr><td colspan = "6"><hr/></td></tr>
		<tr>
			<td>&#160;</td>
			<td colspan = "5" align = "center">Roof Fitting Loss Factors</td>
		</tr>
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
	
	
`;//</xsl:template>

//<xsl:template match="/">
report=`
	<xsl:for-each select = "REPORT/Tank">

		${printSeparador("Tank Indentification and Physical Characteristics")}

				${identification}
				${dimensions}
				${paintChar}
				${roofChar}
				${breatherVent}


		<table width = "900" style = "font-family:arial; font-size:8pt">
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
		   <!--<xsl:for-each select = "Tank">-->
				<xsl:apply-templates/>
		   <!--</xsl:for-each>-->
		</table>
		<p style="page-break-before: always"></p>
`;

//<xsl:for-each select = "Detail">
report+=`
		<!--this is the detail page-->
		${printSeparador("Detail Calculations (AP-42)")}
	
		<span><font size = "2" face = "Arial"><b> ${ "TankName" } </b></font></span><br> 
		<span><font size = "2" face = "Arial"><b> ${ "TankLocation" } </b></font></span>
		<p/>
		<p/>
				<xsl:apply-templates/>
				
			<p style="page-break-before: always"></p>	

		<!-- Now we need to add in the code that does the "brief" part of the report -->
		<p style="page-break-before: always"></p>
		${printSeparador("Individual Tank Emission Totals")}
		
		<p/>
		<span><font size = "3" face = "Arial"><b>Emissions Report for:  ${ "TimePeriod" } 		
		</b></font></span>
		<p/>
		
		<p/>
		<span><font size = "2" face = "Arial"><b> ${ "TankName" }</b></font></span><br> 
		<span><font size = "2" face = "Arial"><b> ${ "Location" } </b></font></span>
		<p/>
`
 if( t.type== 'Vertical Fixed Roof Tank' ||  t.type == 'Horizontal Tank'){

	report+=`
		<table width = "620" border = "1" style = "font-family:arial; font-size:8pt">
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
			<xsl:for-each select = "EmissionTotals">		
				<xsl:apply-templates/>
			</xsl:for-each>
			${COMPONENT}
		</table>
	`;
};
if (t.type !='Vertical Fixed Roof Tank'&& t.type != 'Horizontal Tank'){
report+=`			<table width = "900" border = "1" style = "font-family:arial; font-size:8pt">
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
			<xsl:for-each select = "EmissionTotals">
				<xsl:apply-templates/>
			</xsl:for-each>
			${COMPONENT}	
			</table>
			
`
};
		
report+=`		<p style="page-break-before: always"></p>

		<p style="page-break-before: always"></p>
		${printSeparador("Total Emissions Summaries - All Tanks in Report")}
		
		<span><font size = "3" face = "Arial"><b>Emissions Report for:  ${ "@months" } </b></font></span>
		<p/>
		
		<table width = "900" border = "0" style = "font-family:arial; font-size:8pt" cellpadding = "0" cellspacing = "0">
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
	
	
`;	




	return report;
};
