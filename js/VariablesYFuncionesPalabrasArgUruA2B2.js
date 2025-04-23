$(function () {
	Load();
});	

function Load()
{
	SeteoVariablesGlobales();
	document.getElementById("rbtn1").checked = 1;
	PracticarUnoNuevo();
}
function SeteoVariablesGlobales()
{
	//document.getElementById("lblResultado").style.visibility = "hidden";
	//$("#lblEstado").text("0/1");
palabra = { PalabraNativa:"	Work	"	, PalabraTraducida:	"	Laburar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Money	"	, PalabraTraducida:	"	Guita	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Money	"	, PalabraTraducida:	"	Mango	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Work with few gain	"	, PalabraTraducida:	"	Changa	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Work/Work with tricks	"	, PalabraTraducida:	"	Currar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Tour, related with many actions	"	, PalabraTraducida:	"	Gira	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Nightclub	"	, PalabraTraducida:	"	Boliche	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Girl	"	, PalabraTraducida:	"	Mina	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Girl	"	, PalabraTraducida:	"	Flaca	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	kid / kid	"	, PalabraTraducida:	"	Pibe / piba	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Guy	"	, PalabraTraducida:	"	Chabón / chabona	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Be Tired or no energy to do something	"	, PalabraTraducida:	"	Fiaca	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	100 pesos	"	, PalabraTraducida:	"	Gamba	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"		"	, PalabraTraducida:	"		"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	1 millon de pesos	"	, PalabraTraducida:	"	Un Palo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Disaster	"	, PalabraTraducida:	"	Kilombo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Disaster	"	, PalabraTraducida:	"	Bardo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Thief	"	, PalabraTraducida:	"	Chorro	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Police	"	, PalabraTraducida:	"	Yuta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Bus	"	, PalabraTraducida:	"	Bondi	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Party	"	, PalabraTraducida:	"	Joda	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Beer	"	, PalabraTraducida:	"	Birra	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Beer	"	, PalabraTraducida:	"	Fresca	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Beer	"	, PalabraTraducida:	"	Chicha	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Hustler	"	, PalabraTraducida:	"	Garca	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Steal	"	, PalabraTraducida:	"	Afanar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Shoes	"	, PalabraTraducida:	"	Llantas	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Person that don't want share something with you	"	, PalabraTraducida:	"	Ortiva	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Drink	"	, PalabraTraducida:	"	Escabio	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Cigar or (Weed sometime)	"	, PalabraTraducida:	"	Faso	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Cocaine or (products sometime)	"	, PalabraTraducida:	"	Merca	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Dealer	"	, PalabraTraducida:	"	Tranza	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	House	"	, PalabraTraducida:	"	Rancho	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Staying in house	"	, PalabraTraducida:	"	Ranchear	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Gun	"	, PalabraTraducida:	"	Fierro	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Stupid People	"	, PalabraTraducida:	"	Cabeza	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Nice person, or something good	"	, PalabraTraducida:	"	Piola	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	So/well	"	, PalabraTraducida:	"	Ósea	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Verb - Tell somebody things that not are true	"	, PalabraTraducida:	"	Chamuyar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Something that is not true	"	, PalabraTraducida:	"	Chamuyo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Something noisy	"	, PalabraTraducida:	"	Baruyo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Money	"	, PalabraTraducida:	"	Biyuya	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Money	"	, PalabraTraducida:	"	Pasta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	A lay that seems true	"	, PalabraTraducida:	"	Tramoya	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Something with bad appearance or bad bad life.	"	, PalabraTraducida:	"	Mamarracho	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Somebody opposite to cool	"	, PalabraTraducida:	"	Grasa	"	}; unasPalabras.push(palabra);

			
	cantidadPalabras = unasPalabras.length;
}