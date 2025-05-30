var unasPalabras = [];
var unasPalabrasRadioButtonDisponibles = [];
var palabra;
var elnumeroRandom;
var elnumeroRandomRadioButton;
var seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
var cantidadRadioButton = 5;
var PrimeraVuelta = true;
var STOPTEMPORAL = 0; //Como hay 4 exactamente imagenes que no arreglamos por el tema del nombre, esta variable sera nuestro contador de todas las palabras
var IDIOMA = 1;

function ReforzamosLoad()
{
	var url_string = window.location.href
	var url = new URL(url_string);
	
	if(url.searchParams.get("Idioma") == 1)
	{				
		document.getElementById('VerbosConImagenesInglesA1Div').style.visibility='visible';  
		document.getElementById('VerbosConImagenesInglesA1-A2Div').style.visibility='visible';  
		document.getElementById('VerbosInglesA2Div').style.visibility='visible';  
		document.getElementById('VerbosInglesA2-B1Div').style.visibility='visible';  
		document.getElementById('PhrasalVerbsDiv').style.visibility='visible';  
		document.getElementById('PalabrasInglesArgUruC2Div').style.visibility='visible'; 
		
		document.getElementById('VerbosConImagenesInglesA1Div').style.display='block';  
		document.getElementById('VerbosConImagenesInglesA1-A2Div').style.display='block';
		document.getElementById('VerbosInglesA2Div').style.display='block';
		document.getElementById('VerbosInglesA2-B1Div').style.display='block';
		document.getElementById('PhrasalVerbsDiv').style.display='block';
		document.getElementById('PalabrasInglesArgUruC2Div').style.display='block';	
	};
	if(url.searchParams.get("Idioma") == 2)
	{
		document.getElementById('VerbosConImagenesFrancesA1Div').style.visibility='visible';  
		document.getElementById('VerbosConImagenesFrancesA1-A2Div').style.visibility='visible';  
		document.getElementById('VerbosFrancesA2Div').style.visibility='visible';  
		document.getElementById('VerbosFrancesA2-B1Div').style.visibility='visible';  
		document.getElementById('PhrasalVerbsDiv').style.visibility='visible';  
		document.getElementById('PalabrasFrancesArgUruC2Div').style.visibility='visible'; 
		
		document.getElementById('VerbosConImagenesFrancesA1Div').style.display='block';  
		document.getElementById('VerbosConImagenesFrancesA1-A2Div').display='block';
		document.getElementById('VerbosFrancesA2Div').style.display='block';
		document.getElementById('VerbosFrancesA2-B1Div').style.display='block';
		document.getElementById('PhrasalVerbsDiv').style.display='block';
		document.getElementById('PalabrasFranceArgUruC2Div').style.display='block';	
	};
}

function ATipoJuego(Ejercita)
{
	var url_string = window.location.href
	var url = new URL(url_string);
	var Idioma = url.searchParams.get("Idioma");
	window.location.href = 'TipoJuego.html?Idioma='+Idioma+'&Ejercita='+Ejercita;						
}



function PracticarUnoNuevo()
{
	if(PrimeraVuelta)
	{	
		PrimeraVuelta = false;
		
		var url_string = window.location.href;
		var url = new URL(url_string);		
		var Ejercita = url.searchParams.get("Ejercita");
		if(Ejercita == 1 || Ejercita == 2 || Ejercita == 6 || Ejercita == 7)
		{
			$('#image').css('display', 'block');
		}
		
		
		IDIOMA = url.searchParams.get("Idioma");
		
		if(url.searchParams.get("RondasCant")== 0)
		{
			STOPTEMPORAL = unasPalabras.length - 4;
		}
		else
		{
			STOPTEMPORAL = url.searchParams.get("RondasCant");
		}
		
		
	}
	
    seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
	var rbtnSeleccionado = 0;
	var ok;//para no repetir opciones
	var k;//para no repetir opciones
	
	unasPalabrasRadioButtonDisponibles = unasPalabras.slice();
	
	elnumeroRandom = Math.floor(Math.random()*(unasPalabras.length -1+1)+1) - 1;	
	
	seleccionadoNativo = Math.floor(Math.random()*(2-1+1)+1) - 1;//Random de si aparece palabra nativa o no
	rbtnSeleccionado = Math.floor(Math.random()*(cantidadRadioButton-1+1)+1);//Math.floor(Math.random()*(max-min+1)+min);	
	
	if(IDIOMA == 1)//Ingles
	{
		if (seleccionadoNativo == 0)
		{			
			$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraIngles);
			$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraTraducida);
			
			//imagen
			var image = document.getElementById('image');
			image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
			//imagen
			
			k = 0;
			ok = false;	
			
			while (ok == false)
			{
				if(unasPalabrasRadioButtonDisponibles[k].PalabraIngles == unasPalabras[elnumeroRandom].PalabraIngles)
				{
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandom, 1); 
					ok= true;
				}
				
				k= k + 1;
			}				
			
			var i;
			for (i = 1; i <= cantidadRadioButton; i++) 
			{ 
				if (i != rbtnSeleccionado)
				{
					elnumeroRandomRadioButton = Math.floor(Math.random()*(unasPalabrasRadioButtonDisponibles.length-1+1)+1) - 1;
					 
		
					$("#lrbtn" + i).text(unasPalabrasRadioButtonDisponibles[elnumeroRandomRadioButton].PalabraTraducida);
					
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandomRadioButton, 1);
				}
			}
		}
		else//traducida
		{
			$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraTraducida);
			$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraIngles);
			
			//imagen
			var image = document.getElementById('image');
			image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
			//imagen		
			
			k = 0;
			ok = false;	
			
			while (ok == false)
			{
				if(unasPalabrasRadioButtonDisponibles[k].PalabraIngles == unasPalabras[elnumeroRandom].PalabraIngles)
				{
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandom, 1); 
					ok= true;
				}
				
				k= k + 1;
			}				
			
			var i;
			for (i = 1; i <= cantidadRadioButton; i++) 
			{ 
				if (i != rbtnSeleccionado)
				{
					elnumeroRandomRadioButton = Math.floor(Math.random()*(unasPalabrasRadioButtonDisponibles.length-1+1)+1) - 1;
		
					$("#lrbtn" + i).text(unasPalabrasRadioButtonDisponibles[elnumeroRandomRadioButton].PalabraIngles);
					
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandomRadioButton, 1);
				}
			}
		}	
	}
	else//Frances
	{
		if (seleccionadoNativo == 0)
		{			
			$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraNativa);
			$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraTraducida);
			
			//imagen
			var image = document.getElementById('image');
			image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
			//imagen
			
			k = 0;
			ok = false;	
			
			while (ok == false)
			{
				if(unasPalabrasRadioButtonDisponibles[k].PalabraNativa == unasPalabras[elnumeroRandom].PalabraNativa)
				{
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandom, 1); 
					ok= true;
				}
				
				k= k + 1;
			}				
			
			var i;
			for (i = 1; i <= cantidadRadioButton; i++) 
			{ 
				if (i != rbtnSeleccionado)
				{
					elnumeroRandomRadioButton = Math.floor(Math.random()*(unasPalabrasRadioButtonDisponibles.length-1+1)+1) - 1;
		
					$("#lrbtn" + i).text(unasPalabrasRadioButtonDisponibles[elnumeroRandomRadioButton].PalabraTraducida);
					
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandomRadioButton, 1); 
				}
			}
		}
		else//traducida
		{
			$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraTraducida);
			$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraNativa);
			
			//imagen
			var image = document.getElementById('image');
			image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
			//imagen		
			
			k = 0;
			ok = false;	
			
			while (ok == false)
			{
				if(unasPalabrasRadioButtonDisponibles[k].PalabraNativa == unasPalabras[elnumeroRandom].PalabraNativa)
				{
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandom, 1); 
					ok= true;
				}
				
				k= k + 1;
			}				
			
			var i;
			for (i = 1; i <= cantidadRadioButton; i++) 
			{ 
				if (i != rbtnSeleccionado)
				{
					elnumeroRandomRadioButton = Math.floor(Math.random()*(unasPalabrasRadioButtonDisponibles.length-1+1)+1) - 1;
		
					$("#lrbtn" + i).text(unasPalabrasRadioButtonDisponibles[elnumeroRandomRadioButton].PalabraNativa);
					
					unasPalabrasRadioButtonDisponibles.splice(elnumeroRandomRadioButton, 1); 
				}
			}
		}	
	}	
}
	
function radioChanged(objeto) {
	
	var id = objeto.attr("id").replace(/[^0-9]+/, '');
	switch (id) {
					case"1":
							if(document.getElementById("rbtn1").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}							
						break;
					case"2":
							if(document.getElementById("rbtn2").checked == true) 
								{	
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case"3":
							if(document.getElementById("rbtn3").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case"4":
							if(document.getElementById("rbtn4").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}		
						break;
					case"5":
							if(document.getElementById("rbtn5").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn1").checked = 0;
								}	
						break;
					default:
						break;
				}
}

function Calificar() 
{
	if	(btnCalificar.value =="Calificar")
	{
		var palabra="";
		var palabraTestear ="";
			
		if (seleccionadoNativo == 0)
		{
			palabra = unasPalabras[elnumeroRandom].PalabraTraducida;
		}
		else
		{
			if(IDIOMA == 1)//Ingles
			{
				palabra = unasPalabras[elnumeroRandom].PalabraIngles;
			}
			else
			{
				palabra = unasPalabras[elnumeroRandom].PalabraNativa;
			}
		}
		
			var i;
			for (i = 1; i <= cantidadRadioButton; i++) 
			{ 
				if (document.getElementById("rbtn" + i).checked)
				{
					palabraTestear = $("#lrbtn" + i).text();
				}
			}
			
			if (Comparacion(palabra, palabraTestear))
			{
				Correcto();
			}
			else
			{
				Incorrecto();
			}
			
			$("#preguntasHechasCant").text(parseInt($("#preguntasHechasCant").text()) + 1);
		
	
			unasPalabras.splice(elnumeroRandom, 1);
			
			if (parseInt($("#preguntasHechasCant").text()) != STOPTEMPORAL)
			{
				document.getElementById("btnCalificar").value ="Continuar";
			}
			else
			{	
				$("#btnCalificar").hide();
				
				var porcentajeFinal = (100/STOPTEMPORAL) * parseInt($("#correctasCant").text());
				porcentajeFinal = Math.ceil(porcentajeFinal * 100) / 100;
				$("#preguntasHechasCant").text($("#preguntasHechasCant").text() + " | " + porcentajeFinal + " % de Exactitud");
			}		
	}
	else
	{
		restaurarVista();
		PracticarUnoNuevo();
		document.getElementById("btnCalificar").value ="Calificar";
	}
}	

function restaurarVista()
{
	$("#lblResultado").text("");
	document.getElementById("lblSeleccionado").style.color ="green";
	document.getElementById("lblSeleccionado").style.color ="rgb(64, 64, 64)";  
	var i;
	for (i = 1; i <= cantidadRadioButton ; i++)
	{
		$("#lrbtn" + i).text("");
	}
	
	document.getElementById("rbtn1").checked = 1;
    document.getElementById("rbtn2").checked = 0;
	document.getElementById("rbtn3").checked = 0;
	document.getElementById("rbtn4").checked = 0;
	document.getElementById("rbtn5").checked = 0;
}
		
function Comparacion(palabraAux, palabraTestear) {
		var ok = false;
		var faltas = 0;
		var i = 0;
		var j = 0;

		if (Math.abs((palabraAux.length - palabraTestear.length) < 2))
		{

			//Comparo letra a letra por su faltan o sobran letras o son distintas
			if (palabraAux.length > palabraTestear.length)
			{
				faltas++;
			}
			while (faltas < 2 && i < (palabraAux.length))
			{
					if (palabraAux.length < palabraTestear.length)
					{
						if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
						{
							j++;
							faltas++;
						}

					}
					else
					{
						if (palabraAux.length > palabraTestear.length)
						{
							if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
							{
								j--;
								faltas++;
							}
						}
						else
						{
							if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
							{
								faltas++;
							}
						}
					}

				i++;
				j++;
			}
			if (faltas<2)
			{
				if (faltas == 1)
				{
				   
					if (seleccionadoNativo == 0)
					{
				 
					}
					else
					{
	 
					}
					
				}
				ok = true;
			}
		}

		return ok;
	}
	
function Correcto() 
{
	document.getElementById("lblSeleccionado").style.color ="green";
	document.getElementById("lblResultado").style.color ="green";
	$("#lblResultado").text("Excelente!");
	
	$("#correctasCant").text(parseInt($("#correctasCant").text()) + 1);
	
	
	document.getElementById("lblResultado").style.color ="green";
}
	
function Incorrecto() 
{
	document.getElementById("lblSeleccionado").style.color ="red";
	document.getElementById("lblResultado").style.color ="red";
	$("#lblResultado").text("Mal");

	if (seleccionadoNativo == 0)
	{
		$("#lblSeleccionado").text($("#lblSeleccionado").text() +" = " + unasPalabras[elnumeroRandom].PalabraTraducida);
	}
	else
	{
		if(IDIOMA == 1)//Ingles
		{
			$("#lblSeleccionado").text($("#lblSeleccionado").text() +" = " + unasPalabras[elnumeroRandom].PalabraIngles);
		}
		else
		{
			$("#lblSeleccionado").text($("#lblSeleccionado").text() +" = " + unasPalabras[elnumeroRandom].PalabraNativa);
		}
			
		
	}
}
