//Table 7.1-6: Paint Solar Absorptance

function getDeckFittingsProperties() {
	//declare objects:
	var fit1 = {fittingName:"Access hatch", fittingType:"Bolted cover, gasketed",     Kfa:1.6,  Kfb:0,   m:0.0};
	var fit2 = {fittingName:"Access hatch", fittingType:"Unbolted cover, ungasketed", Kfa:36,   Kfb:5.9, m:1.2};
	var fit3 = {fittingName:"Access hatch", fittingType:"Unbolted cover, ungasketed", Kfa:36,   Kfb:5.9, m:1.2};
	var fit4 = {fittingName:"Fixed roof support column well", fittingType:"Bolted cover, gasketed", Kfa:1.6,Kfb:0,m:0};
	var fit5 = {fittingName:'Unslotted guidepole and well',fittingType:'Ungasketed sliding cover'		,	Kfa:31  , Kfb:150, m:1.4};
	var fit6 = {fittingName:'Unslotted guidepole and well',fittingType:'Ungasketed sliding cover w/pole sleeve',    Kfa:25  , Kfb:2.2, m:2.1};
	var fit7 = {fittingName:'Unslotted guidepole and well',fittingType:'Gasketed sliding cover'              ,      Kfa:25  , Kfb:13 , m:2.2};
	var fit8 = {fittingName:'Unslotted guidepole and well',fittingType:'Gasketed sliding cover w/pole wiper',       Kfa:14  , Kfb:3.7, m:0.78};
	var fit9 = {fittingName:'Unslotted guidepole and well',fittingType:'Gasketed sliding cover w/pole sleeve',      Kfa:8.6 , Kfb:12 , m:0.81};

	//put paint objects into array
	var deckFittingProp = [fit1, fit2, fit3, fit4, fit5, fit6, fit7, fit8, fit9];	
	
	return deckFittingProp;
}

