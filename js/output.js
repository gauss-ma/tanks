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
                <title>HERRAMIENTA TANQUES - FAUBA</title>
                <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>

                <!-- call css -->
                <link rel="stylesheet" href="css/style.css">

                <!-- call js -->
        </head>

	<body>
	<section>

	${printSeparador("Identificación y Características Físicas del Tanque")}

	<!-- *****Identificación **** -->
	<h3> Identificación </h3>
	<table width = "80%">
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Usuario:</td>
		<td> ${ id.userID } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Ciudad:</td>
		<td> ${ id.city } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Provincia:</td>
		<td> ${ id.state } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Empresa:</td>
		<td> ${ id.company } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Tipo de tanque:</td>
		<td> ${ id.tankType } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Descripción:</td>
		<td> ${ id.description } </td>
	</tr>
	</table>
	<p/>
	<!-- ***** Fin de la identificación **** -->

	<!-- *****Dimensiones del tanque **** -->
	<h3> Dimensiones del tanque </h3>
	<table width = "35%">
`

if( t.type=='VFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Altura del tanque (ft):</td>
			<td > ${ t.height } </td>
		</tr>
`;
}
if( t.type =='HFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Largo del tanque (ft):</td>
			<td > ${ t.height } </td>
		</tr>
`;
};

report+=`	
        <!-- Todos los tipos de tanques tienen diámetro -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Diámetro (ft):</td>
		<td > ${ t.diameter } </td>
	</tr>
	<!-- Fin diámetro -->
`;

if(t.type == 'VFR'){
report+=`	<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Altura Máxima del Líquido (ft) :</td>
			<td > ${ t.maxLiquidHeight } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Altura Mínima del Líquido (ft):</td>
			<td > ${ t.minLiquidHeight } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Altura Promedio del Líquido (ft):</td>
			<td > ${ t.avgLiquidHeight } </td>
		</tr>
`
};

report+=`	<!-- Todos los tanques tienen volumen y un número de llenados anuales -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Volumen (gallons):</td>
		<td > ${ parseFloat(t.workingVolume).toFixed(2) } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Llenados anuales:</td>
		<td > ${ t.turnoversPerYear } </td>
	</tr>
	<!-- Fin volumen y llenados anuales -->
`;

if (t.type == 'VFR' || t.type == 'HFR'){
report+=`	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Volumen neto anual almacenado(ft3/yr):</td>
			<td > ${ parseFloat(netWorkingLossThroughput).toFixed(2) } </td>		
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Tiene calentamiento (Si/No):</td>
`
		if(t.heating.heating == "true"){
			report+=`	
			<td> Sí </td>
			</tr>
			`
		} else {
			report+=`	
			<td> No </td>
			</tr>
			`
		};
};

if ( t.type == 'IFR'){
report+=`	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Número de columnas:</td>
			<td > ${ t.columns.number } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Diámetro efectivo columnas (ft):</td>
			<td > ${ effectiveColumnDiameter } </td>
		</tr>
`;
};

if (t.type == 'HFR'){
	report+=`		
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Es un tanque subterráneo? (Sí/No):</td>
	`		
		if(t.insulation == "underground") {
			report+=`	
			<td> Sí </td>
			</tr>
			`
		} else {
			report+=`
			<td> No </td>
			</tr>
			`
		};	
};

report+=`
	</table>
	<!-- *****Fin Dimesiones del Tanque **** -->
	<br>

	<!-- *****Características de la Pintura **** -->
	
	<h3>Características de la pintura</h3>
	<table width = "35%">
`
if ( t.type == "EFR"  || t.type== 'IFR' || t.type == "DEFR"){
	report+=`
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Condición de la pared interna:</td>
			<td> ${ t.shellTexture } </td>
		</tr>
	`
};

report+=`	
	
	<!-- Todos los tanques tienen atributo de color y condición de la pared externa -->
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Color/Tonalidad de la pared:</td>
		<td> ${ t.shell.color } </td>
	</tr>
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Condición de la pared</td>
		<td> ${ t.shell.condition } </td>
	</tr>
	<!-- Fin color y condición -->
`;

if (t.type == "VFR" || t.type == "IFR") {
	report+=`
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Color/Tonalidad del techo:</td>
			<td> ${ t.roof.color } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Condición del techo:</td>
			<td> ${ t.roof.condition } </td>
		</tr>
	`
};	

report+=` 
	</table>
	<p/>
	<!-- *****Fin características pintura **** -->
	

<!-- *****Características del techo **** -->
<p/>
`
if(t.type =="VFR") {
	report+=`
		<h3>Características del techo</h3>
		<table width = "35%">	
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Tipo:</td>
			<td> ${ t.roof.type } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Altura (ft)</td>
			<td > ${ t.roof.height } </td>
		</tr>
	`		
	if (t.roof.type == "dome") {
		report+=`
			<tr>
				<td width = "20">&#160;</td>
				<td width = "180">Radio (ft) (Domo)</td>
				<td > ${ t.roof.radius } </td>
			</tr>	
		`
	} else if (t.roof.type == "cone") {
		report+=`
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Pendiente (ft/ft) (Techo cónico)</td>
			<td > ${ t.roof.slope } </td>
		</tr>	
		`
	}
};
report+=`
		</table>
<p/>
<!-- *****Fin características techo **** -->

<!-- *****Ajustes válvulas de ventilación **** -->
<p/>	
	<h3>Ajustes válvulas de ventilación</h3>
	<table width = "35%">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Ajuste de vacío (psig):</td>
			<td > ${ t.ventVacuumSetting } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Ajuste de presión (psig)</td>
			<td > ${ t.ventPressureSetting } </td>
		</tr>
	</table>
<p/>
	
<!-- *****Características del sello de la plataforma flotante **** -->
<p/>	
`	
if(t.type == "EFR"|| t.type == "IFR"|| t.type == "DEFR") {
	report+=`
	<h3>Sello de la plataforma flotante</h3>
	<table width = "35%">
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Construcción del tanque:</td>
			<td> ${ t.construction } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Ajuste del sello:</td>
			<td> ${ t.rimSeal.fit } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Sello primario:</td>
			<td> ${ t.rimSeal.type} </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Sello secundario:</td>
			<td> ${ t.rimSeal.secondary } </td>
		</tr>
	</table>
<p/>
	
<!-- *****Características de la plataforma flotante**** -->
<p/>
	<h3>Características de la plataforma flotante</h3>

	<table width = "35%">
	<tr>
		<td width = "20">&#160;</td>
		<td width = "180">Tipo:</td>
	`	
	if (t.type == "EFR"||t.type=="DEFR") {
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
			<td width = "180">Construcción:</td>
			<td> ${ t.deck.construction } </td>
		</tr>
		<tr>
			<td width = "20">&#160;</td>
			<td width = "180">Longitud costuras (ft):</td>
			<td > ${ t.deck.seamLength } </td>    <!--NOTA SABRI: Este dato no es imprescindible que esté (osea el usuario puede no saberlo y se calcula en base a otros inputs) -->
		</tr>
		`
	};
report+=`
	</table>
<p/>
	
<!-- *****Accesorios de la plataforma flotante  **** -->
<p/>
	<h3>Accesorios de la plataforma flotante</h3>

	<table width = "80%">
	<tr>
		<td width = "500"><b>Accesorio</b></td>
		<td ><b>Características</b></td>
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

	<h4>Factores de pérdida de los accesorios</h4>
		<table width = "80%">
		<tr>
			<td width = "350">Accesorio/Características</td>
			<td width = "98" >KFa(lb-mole/yr)</td>
			<td width = "98" >KFb(lb-mole/(yr mph^n))</td>
			<td width = "98" >m</td>
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
			</tr>
			`
		};
		report+=`	
		</table>		
		`
};	

report+=`
		<br>
		<h3> Datos meteorológicos </h3>
		<table width = "80%">
			<tr>
				<td> Ubicación:  ${m.siteName} () </td>
				<td> Presión atmosférica promedio = ${m.atmPressure} psia</td>
			</tr>
		</table>
		
		<p style="page-break-before: always"></p>

		<!-- Contenido del tanque  -->
		
		${printSeparador("Contenido del tanque")}
		<span><b> ${ id.userID &&"-"&& id.tankType }</b></span><br> 
		<span><b> ${ id.city &&","&& id.state }     </b></span>
		
	<p/>		
		<table width = "80%">
		<tr>
		  	<td colspan = "1">&#160;</td>
		  	<td colspan = "1" >Temp. Diaria Prom.<br/>Superficie Líquido</td>
		  	<td >Temp.<br/>Seno del<br/>Líquido</td>
		  	<td>&#160;</td>
		  	<td colspan = "1" >Presión de vapor (psia)</td>
		  	<td >Peso<br/>Mol.</td>
		  	<td>&#160;</td>
		  	<td >Peso<br/>Mol.</td>
		  	<td>&#160;</td>
		</tr>
		<tr>
			<td width = "180">Componente</td>
			<td width = "40" > (grad. F)</td>
			<td width = "30" >(grad. F)</td>
			<td width = "20">&#160;</td>
			<td width = "40" >Promedio</td>
			<td width = "30" >Vapor</td>
			<td width = "20">&#160;</td>
			<td width = "30" >Líquido</td>
			<td width = "20">&#160;</td>
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
		   	<td >  ${ parseFloat(avgBulkTemp).toFixed(2) } </td>
		   	<td>&#160;</td>
		   	<td > ${ parseFloat(c.vaporPressure).toFixed(2)} </td>
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
  		</tr>
		</table>
		
		<p style="page-break-before: always"></p>
		<!--this is the detail page-->
		${printSeparador("Detalle de cálculos (según indicaciones del AP-42)")}

		<h3>Cálculo de emisiones anuales</h3>
	
		<table>
		<tr><td colspan = "3"><hr/></td></tr>
		`

	for (let i=0; i< resultadosIntermedios.length; i++){

		report+=`<tr>
			<td>&#160;  				    </td> 
			<td width="180">${resultadosIntermedios[i].varName}: </td>
			<td width="30" >${parseFloat(resultadosIntermedios[i].value).toFixed(2)}  </td> 
			</tr>`

	};
	
	report+=`

		<tr><td colspan = "3"><hr/></td></tr>
		</table>


		<p style="page-break-before: always"></p>	

		<!-- Reporte de resultados resumen -->


		<p style="page-break-before: always"></p>

		${printSeparador("Emisiones totales del tanque")}
		
		<h3>Reporte de emisiones</h3>
		`
 
		if( t.type== 'VFR' ||  t.type == 'HFR'){
		report+=`
			<table width = "80%" border = "1">
				<tr>
					<td width = "200">&#160;</td>
					<td colspan = "3" >Pérdidas(lbs)</td>
				</tr>
				<tr>
					<td>Componente</td>
					<td width = "140" >Pérdidas por llenado/vaciado</td>
					<td width = "140" >Pérdidas almacenamiento</td>
					<td width = "140" >Emisiones totales</td>
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
					<td width = "140" > ${ parseFloat(o.workingLosses).toFixed(2) } </td>		
					<td width = "140" > ${ parseFloat(o.standingLosses).toFixed(2) } </td>	
					<td width = "140" > ${ parseFloat(o.totalLosses).toFixed(2) } </td>
				</tr>
			</table>
		`;
		} else {
		report+=`			
			<table width = "80%" border = "1">
				<tr>
					<td width = "200">&#160;</td>
					<td colspan = "5" >Pérdidas (lbs)</td>
				</tr>
				<tr>
					<td>Componente</td>
					<td width = "140" >Pérdidas sello</td>
					<td width = "140" >Pérdidas vaciado</td>
					<td width = "140" >Pérdidas accesorios</td>
					<td width = "140" >Pérdidas costuras</td>
					<td width = "140" >Emisiones totales</td>
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
					<td width = "140" > ${ parseFloat(o.deckSeamLosses).toFixed(5) } </td>	
					<td width = "140" > ${ parseFloat(o.totalLosses).toFixed(5) } </td>	
				</tr>
			</table>
		`;
		};
		
report+=`	
		<p style="page-break-before: always"></p>
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
		<h1 style="color:#303030;">HERRAMIENTA TANQUES - FAUBA</h1>
		<h2>Reporte de Emisiones - Formato Detallado </h2>
		<h2>${sectionTitle}</h2>
	</center> 
	<br>
	`;

	return str;
};
