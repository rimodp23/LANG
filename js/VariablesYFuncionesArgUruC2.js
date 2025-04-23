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
palabra = { PalabraIngles:"	Work	", PalabraNativa:"	Travail  	", PalabraTraducida:"	Laburar	"}; unasPalabras[	0	] = palabra;
palabra = { PalabraIngles:"	Money	", PalabraNativa:"	Argent  	", PalabraTraducida:"	Guita	"}; unasPalabras[	1	] = palabra;
palabra = { PalabraIngles:"	Money	", PalabraNativa:"	Argent  	", PalabraTraducida:"	Mango	"}; unasPalabras[	2	] = palabra;
palabra = { PalabraIngles:"	Work with few gain	", PalabraNativa:"	Travailler pour peu de gain  	", PalabraTraducida:"	Changa	"}; unasPalabras[	3	] = palabra;
palabra = { PalabraIngles:"	Work/Work with tricks	", PalabraNativa:"	Travailler / Travailler avec des astuces  	", PalabraTraducida:"	Currar	"}; unasPalabras[	4	] = palabra;
palabra = { PalabraIngles:"	Tour, related with many actions	", PalabraNativa:"	Tournée, liée à de nombreuses actions  	", PalabraTraducida:"	Gira	"}; unasPalabras[	5	] = palabra;
palabra = { PalabraIngles:"	Nightclub	", PalabraNativa:"	Boîte de nuit  	", PalabraTraducida:"	Boliche	"}; unasPalabras[	6	] = palabra;
palabra = { PalabraIngles:"	Girl	", PalabraNativa:"	Fille  	", PalabraTraducida:"	Mina	"}; unasPalabras[	7	] = palabra;
palabra = { PalabraIngles:"	Girl	", PalabraNativa:"	Fille  	", PalabraTraducida:"	Flaca	"}; unasPalabras[	8	] = palabra;
palabra = { PalabraIngles:"	kid / kid	", PalabraNativa:"	Enfant / gamin  	", PalabraTraducida:"	Pibe / piba	"}; unasPalabras[	9	] = palabra;
palabra = { PalabraIngles:"	Guy	", PalabraNativa:"	Mec  	", PalabraTraducida:"	Chabón / chabona	"}; unasPalabras[	10	] = palabra;
palabra = { PalabraIngles:"	Be Tired or no energy to do something	", PalabraNativa:"	Être fatigué ou sans énergie  	", PalabraTraducida:"	Fiaca	"}; unasPalabras[	11	] = palabra;
palabra = { PalabraIngles:"	100 pesos	", PalabraNativa:"	100 pesos  	", PalabraTraducida:"	Una Gamba	"}; unasPalabras[	12	] = palabra;
palabra = { PalabraIngles:"	1 millon de pesos	", PalabraNativa:"	1 million de pesos  	", PalabraTraducida:"	Un Palo	"}; unasPalabras[	13	] = palabra;
palabra = { PalabraIngles:"	Disaster	", PalabraNativa:"	Désastre  	", PalabraTraducida:"	Kilombo	"}; unasPalabras[	14	] = palabra;
palabra = { PalabraIngles:"	Disaster	", PalabraNativa:"	Désastre  	", PalabraTraducida:"	Bardo	"}; unasPalabras[	15	] = palabra;
palabra = { PalabraIngles:"	Thief	", PalabraNativa:"	Voleur  	", PalabraTraducida:"	Chorro	"}; unasPalabras[	16	] = palabra;
palabra = { PalabraIngles:"	Police	", PalabraNativa:"	Police  	", PalabraTraducida:"	Yuta	"}; unasPalabras[	17	] = palabra;
palabra = { PalabraIngles:"	Bus	", PalabraNativa:"	Bus  	", PalabraTraducida:"	Bondi	"}; unasPalabras[	18	] = palabra;
palabra = { PalabraIngles:"	Party	", PalabraNativa:"	Fête  	", PalabraTraducida:"	Joda	"}; unasPalabras[	19	] = palabra;
palabra = { PalabraIngles:"	Beer	", PalabraNativa:"	Bière  	", PalabraTraducida:"	Birra	"}; unasPalabras[	20	] = palabra;
palabra = { PalabraIngles:"	Beer	", PalabraNativa:"	Bière  	", PalabraTraducida:"	Fresca	"}; unasPalabras[	21	] = palabra;
palabra = { PalabraIngles:"	Beer	", PalabraNativa:"	Bière  	", PalabraTraducida:"	Chicha	"}; unasPalabras[	22	] = palabra;
palabra = { PalabraIngles:"	Hustler	", PalabraNativa:"	Arnaqueur  	", PalabraTraducida:"	Garca	"}; unasPalabras[	23	] = palabra;
palabra = { PalabraIngles:"	Steal	", PalabraNativa:"	Voler  	", PalabraTraducida:"	Afanar	"}; unasPalabras[	24	] = palabra;
palabra = { PalabraIngles:"	Shoes	", PalabraNativa:"	Chaussures  	", PalabraTraducida:"	Llantas	"}; unasPalabras[	25	] = palabra;
palabra = { PalabraIngles:"	Person that don't want share something with you	", PalabraNativa:"	Personne qui ne veut rien partager  	", PalabraTraducida:"	Ortiva	"}; unasPalabras[	26	] = palabra;
palabra = { PalabraIngles:"	Drink	", PalabraNativa:"	Boisson  	", PalabraTraducida:"	Escabio	"}; unasPalabras[	27	] = palabra;
palabra = { PalabraIngles:"	Cigar or (Weed sometime)	", PalabraNativa:"	Cigare ou (parfois herbe)  	", PalabraTraducida:"	Faso	"}; unasPalabras[	28	] = palabra;
palabra = { PalabraIngles:"	Cocaine or (products sometime)	", PalabraNativa:"	Cocaïne ou (parfois d'autres produits)  	", PalabraTraducida:"	Merca	"}; unasPalabras[	29	] = palabra;
palabra = { PalabraIngles:"	Dealer	", PalabraNativa:"	Dealer  	", PalabraTraducida:"	Tranza	"}; unasPalabras[	30	] = palabra;
palabra = { PalabraIngles:"	House	", PalabraNativa:"	Maison  	", PalabraTraducida:"	Rancho	"}; unasPalabras[	31	] = palabra;
palabra = { PalabraIngles:"	Staying in house	", PalabraNativa:"	Rester à la maison  	", PalabraTraducida:"	Ranchear	"}; unasPalabras[	32	] = palabra;
palabra = { PalabraIngles:"	Gun	", PalabraNativa:"	Arme à feu  	", PalabraTraducida:"	Fierro	"}; unasPalabras[	33	] = palabra;
palabra = { PalabraIngles:"	Stupid People	", PalabraNativa:"	Personne stupide  	", PalabraTraducida:"	Cabeza	"}; unasPalabras[	34	] = palabra;
palabra = { PalabraIngles:"	Nice person, or something good	", PalabraNativa:"	Gentille personne, ou quelque chose de bien  	", PalabraTraducida:"	Piola	"}; unasPalabras[	35	] = palabra;
palabra = { PalabraIngles:"	So/well	", PalabraNativa:"	Alors / eh bien  	", PalabraTraducida:"	Ósea	"}; unasPalabras[	36	] = palabra;
palabra = { PalabraIngles:"	Verb - Tell somebody things that not are true	", PalabraNativa:"	Verbe - Dire des choses fausses à quelqu’un  	", PalabraTraducida:"	Chamuyar	"}; unasPalabras[	37	] = palabra;
palabra = { PalabraIngles:"	Something that is not true	", PalabraNativa:"	Quelque chose de faux  	", PalabraTraducida:"	Chamuyo	"}; unasPalabras[	38	] = palabra;
palabra = { PalabraIngles:"	Something noisy	", PalabraNativa:"	Quelque chose de bruyant  	", PalabraTraducida:"	Baruyo	"}; unasPalabras[	39	] = palabra;
palabra = { PalabraIngles:"	Money	", PalabraNativa:"	Argent  	", PalabraTraducida:"	Biyuya	"}; unasPalabras[	40	] = palabra;
palabra = { PalabraIngles:"	Money	", PalabraNativa:"	Argent  	", PalabraTraducida:"	Pasta	"}; unasPalabras[	41	] = palabra;
palabra = { PalabraIngles:"	A lay that seems true	", PalabraNativa:"	Un mensonge qui semble vrai  	", PalabraTraducida:"	Tramoya	"}; unasPalabras[	42	] = palabra;
palabra = { PalabraIngles:"	Something with bad appearance or bad bad life.	", PalabraNativa:"	Quelque chose avec une mauvaise apparence ou mauvaise vie  	", PalabraTraducida:"	Mamarracho	"}; unasPalabras[	43	] = palabra;
palabra = { PalabraIngles:"	Somebody opposite to cool	", PalabraNativa:"	Quelqu’un d’opposé à cool	", PalabraTraducida:"	Grasa	"}; unasPalabras[	44	] = palabra;
		
	cantidadPalabras = unasPalabras.length;
}