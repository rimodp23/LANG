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
palabra = { PalabraIngles:"	To step down  	", PalabraNativa:"	Descendre  	", PalabraTraducida:"	Bajar  	"}; unasPalabras[	0	] = palabra;
palabra = { PalabraIngles:"	To cook  	", PalabraNativa:"	Cuisiner  	", PalabraTraducida:"	Cocinar  	"}; unasPalabras[	1	] = palabra;
palabra = { PalabraIngles:"	To buy  	", PalabraNativa:"	Acheter  	", PalabraTraducida:"	Comprar  	"}; unasPalabras[	2	] = palabra;
palabra = { PalabraIngles:"	To talk  	", PalabraNativa:"	Parler  	", PalabraTraducida:"	Conversar  	"}; unasPalabras[	3	] = palabra;
palabra = { PalabraIngles:"	To cooperate  	", PalabraNativa:"	Coopérer  	", PalabraTraducida:"	Cooperar  	"}; unasPalabras[	4	] = palabra;
palabra = { PalabraIngles:"	To draw  	", PalabraNativa:"	Dessiner  	", PalabraTraducida:"	Dibujar  	"}; unasPalabras[	5	] = palabra;
palabra = { PalabraIngles:"	To listen  	", PalabraNativa:"	Écouter  	", PalabraTraducida:"	Escuchar  	"}; unasPalabras[	6	] = palabra;
palabra = { PalabraIngles:"	To clean  	", PalabraNativa:"	Nettoyer  	", PalabraTraducida:"	Limpiar  	"}; unasPalabras[	7	] = palabra;
palabra = { PalabraIngles:"	To prepare  	", PalabraNativa:"	Préparer  	", PalabraTraducida:"	Preparar  	"}; unasPalabras[	8	] = palabra;
palabra = { PalabraIngles:"	To take out  	", PalabraNativa:"	Sortir  	", PalabraTraducida:"	Sacar  	"}; unasPalabras[	9	] = palabra;
palabra = { PalabraIngles:"	To add (up)  	", PalabraNativa:"	Additionner  	", PalabraTraducida:"	Sumar  	"}; unasPalabras[	10	] = palabra;
palabra = { PalabraIngles:"	To work  	", PalabraNativa:"	Travailler  	", PalabraTraducida:"	Trabajar  	"}; unasPalabras[	11	] = palabra;
palabra = { PalabraIngles:"	To drink  	", PalabraNativa:"	Boire  	", PalabraTraducida:"	Beber  	"}; unasPalabras[	12	] = palabra;
palabra = { PalabraIngles:"	To eat  	", PalabraNativa:"	Manger  	", PalabraTraducida:"	Comer  	"}; unasPalabras[	13	] = palabra;
palabra = { PalabraIngles:"	To understand  	", PalabraNativa:"	Comprendre  	", PalabraTraducida:"	Comprender  	"}; unasPalabras[	14	] = palabra;
palabra = { PalabraIngles:"	To run  	", PalabraNativa:"	Courir  	", PalabraTraducida:"	Correr  	"}; unasPalabras[	15	] = palabra;
palabra = { PalabraIngles:"	To believe  	", PalabraNativa:"	Croire  	", PalabraTraducida:"	Creer  	"}; unasPalabras[	16	] = palabra;
palabra = { PalabraIngles:"	To read  	", PalabraNativa:"	Lire  	", PalabraTraducida:"	Leer  	"}; unasPalabras[	17	] = palabra;
palabra = { PalabraIngles:"	To answer  	", PalabraNativa:"	Répondre  	", PalabraTraducida:"	Responder  	"}; unasPalabras[	18	] = palabra;
palabra = { PalabraIngles:"	To break  	", PalabraNativa:"	Casser  	", PalabraTraducida:"	Romper  	"}; unasPalabras[	19	] = palabra;
palabra = { PalabraIngles:"	To fear  	", PalabraNativa:"	Craindre  	", PalabraTraducida:"	Temer  	"}; unasPalabras[	20	] = palabra;
palabra = { PalabraIngles:"	To sell  	", PalabraNativa:"	Vendre  	", PalabraTraducida:"	Vender  	"}; unasPalabras[	21	] = palabra;
palabra = { PalabraIngles:"	To open  	", PalabraNativa:"	Ouvrir  	", PalabraTraducida:"	Abrir  	"}; unasPalabras[	22	] = palabra;
palabra = { PalabraIngles:"	To share  	", PalabraNativa:"	Partager  	", PalabraTraducida:"	Compartir  	"}; unasPalabras[	23	] = palabra;
palabra = { PalabraIngles:"	To cover  	", PalabraNativa:"	Couvrir  	", PalabraTraducida:"	Cubrir  	"}; unasPalabras[	24	] = palabra;
palabra = { PalabraIngles:"	To decide  	", PalabraNativa:"	Décider  	", PalabraTraducida:"	Decidir  	"}; unasPalabras[	25	] = palabra;
palabra = { PalabraIngles:"	To discuss  	", PalabraNativa:"	Discuter  	", PalabraTraducida:"	Discutir  	"}; unasPalabras[	26	] = palabra;
palabra = { PalabraIngles:"	To write  	", PalabraNativa:"	Écrire  	", PalabraTraducida:"	Escribir  	"}; unasPalabras[	27	] = palabra;
palabra = { PalabraIngles:"	To distribute  	", PalabraNativa:"	Distribuer  	", PalabraTraducida:"	Repartir  	"}; unasPalabras[	28	] = palabra;
palabra = { PalabraIngles:"	To climb, to go up  	", PalabraNativa:"	Monter  	", PalabraTraducida:"	Subir  	"}; unasPalabras[	29	] = palabra;
palabra = { PalabraIngles:"	To suffer  	", PalabraNativa:"	Souffrir  	", PalabraTraducida:"	Sufrir  	"}; unasPalabras[	30	] = palabra;
palabra = { PalabraIngles:"	To live  	", PalabraNativa:"	Vivre  	", PalabraTraducida:"	Vivir  	"}; unasPalabras[	31	] = palabra;
palabra = { PalabraIngles:"	To fit  	", PalabraNativa:"	Tenir  	", PalabraTraducida:"	Caber  	"}; unasPalabras[	32	] = palabra;
palabra = { PalabraIngles:"	To fall  	", PalabraNativa:"	Tomber  	", PalabraTraducida:"	Caer  	"}; unasPalabras[	33	] = palabra;
palabra = { PalabraIngles:"	To give  	", PalabraNativa:"	Donner  	", PalabraTraducida:"	Dar  	"}; unasPalabras[	34	] = palabra;
palabra = { PalabraIngles:"	To be  	", PalabraNativa:"	Être  	", PalabraTraducida:"	Estar  	"}; unasPalabras[	35	] = palabra;
palabra = { PalabraIngles:"	To do  	", PalabraNativa:"	Faire  	", PalabraTraducida:"	Hacer  	"}; unasPalabras[	36	] = palabra;
palabra = { PalabraIngles:"	To put  	", PalabraNativa:"	Mettre  	", PalabraTraducida:"	Poner  	"}; unasPalabras[	37	] = palabra;
palabra = { PalabraIngles:"	To know  	", PalabraNativa:"	Savoir  	", PalabraTraducida:"	Saber  	"}; unasPalabras[	38	] = palabra;
palabra = { PalabraIngles:"	To leave  	", PalabraNativa:"	Partir  	", PalabraTraducida:"	Salir  	"}; unasPalabras[	39	] = palabra;
palabra = { PalabraIngles:"	To bring  	", PalabraNativa:"	Apporter  	", PalabraTraducida:"	Traer  	"}; unasPalabras[	40	] = palabra;
palabra = { PalabraIngles:"	To be worth  	", PalabraNativa:"	Valoir  	", PalabraTraducida:"	Valer  	"}; unasPalabras[	41	] = palabra;
palabra = { PalabraIngles:"	To see  	", PalabraNativa:"	Voir  	", PalabraTraducida:"	Ver  	"}; unasPalabras[	42	] = palabra;
palabra = { PalabraIngles:"	To compose  	", PalabraNativa:"	Composer  	", PalabraTraducida:"	Componer  	"}; unasPalabras[	43	] = palabra;
palabra = { PalabraIngles:"	To undo  	", PalabraNativa:"	Défaire  	", PalabraTraducida:"	Deshacer  	"}; unasPalabras[	44	] = palabra;
palabra = { PalabraIngles:"	To arrange  	", PalabraNativa:"	Disposer  	", PalabraTraducida:"	Disponer  	"}; unasPalabras[	45	] = palabra;
palabra = { PalabraIngles:"	To distract  	", PalabraNativa:"	Distraire  	", PalabraTraducida:"	Distraer(se)  	"}; unasPalabras[	46	] = palabra;
palabra = { PalabraIngles:"	To propose  	", PalabraNativa:"	Proposer  	", PalabraTraducida:"	Proponer  	"}; unasPalabras[	47	] = palabra;
palabra = { PalabraIngles:"	To remake  	", PalabraNativa:"	Refaire  	", PalabraTraducida:"	Rehacer  	"}; unasPalabras[	48	] = palabra;
palabra = { PalabraIngles:"	To replace  	", PalabraNativa:"	Remettre  	", PalabraTraducida:"	Reponer  	"}; unasPalabras[	49	] = palabra;
palabra = { PalabraIngles:"	To suppose  	", PalabraNativa:"	Supposer  	", PalabraTraducida:"	Suponer  	"}; unasPalabras[	50	] = palabra;
palabra = { PalabraIngles:"	To thank, to be grateful  	", PalabraNativa:"	Remercier  	", PalabraTraducida:"	Agradecer  	"}; unasPalabras[	51	] = palabra;
palabra = { PalabraIngles:"	To appear  	", PalabraNativa:"	Apparaître  	", PalabraTraducida:"	Aparecer  	"}; unasPalabras[	52	] = palabra;
palabra = { PalabraIngles:"	To please  	", PalabraNativa:"	Complaire  	", PalabraTraducida:"	Complacer  	"}; unasPalabras[	53	] = palabra;
palabra = { PalabraIngles:"	To grow  	", PalabraNativa:"	Grandir  	", PalabraTraducida:"	Crecer  	"}; unasPalabras[	54	] = palabra;
palabra = { PalabraIngles:"	To establish  	", PalabraNativa:"	Établir  	", PalabraTraducida:"	Establecer  	"}; unasPalabras[	55	] = palabra;
palabra = { PalabraIngles:"	To deserve  	", PalabraNativa:"	Mériter  	", PalabraTraducida:"	Merecer  	"}; unasPalabras[	56	] = palabra;
palabra = { PalabraIngles:"	To offer  	", PalabraNativa:"	Offrir  	", PalabraTraducida:"	Ofrecer  	"}; unasPalabras[	57	] = palabra;
palabra = { PalabraIngles:"	To suffer  	", PalabraNativa:"	Souffrir  	", PalabraTraducida:"	Padecer  	"}; unasPalabras[	58	] = palabra;
palabra = { PalabraIngles:"	To remain  	", PalabraNativa:"	Rester  	", PalabraTraducida:"	Permanecer  	"}; unasPalabras[	59	] = palabra;
palabra = { PalabraIngles:"	To belong  	", PalabraNativa:"	Appartenir  	", PalabraTraducida:"	Pertenecer  	"}; unasPalabras[	60	] = palabra;
palabra = { PalabraIngles:"	To recognize  	", PalabraNativa:"	Reconnaître  	", PalabraTraducida:"	Reconocer  	"}; unasPalabras[	61	] = palabra;
palabra = { PalabraIngles:"	To translate  	", PalabraNativa:"	Traduire  	", PalabraTraducida:"	Traducir  	"}; unasPalabras[	62	] = palabra;
palabra = { PalabraIngles:"	To drive, to lead  	", PalabraNativa:"	Conduire  	", PalabraTraducida:"	Conducir  	"}; unasPalabras[	63	] = palabra;
palabra = { PalabraIngles:"	To produce  	", PalabraNativa:"	Produire  	", PalabraTraducida:"	Producir  	"}; unasPalabras[	64	] = palabra;
palabra = { PalabraIngles:"	To shrink  	", PalabraNativa:"	Rétrécir  	", PalabraTraducida:"	Encoger  	"}; unasPalabras[	65	] = palabra;
palabra = { PalabraIngles:"	To choose  	", PalabraNativa:"	Choisir  	", PalabraTraducida:"	Escoger  	"}; unasPalabras[	66	] = palabra;
palabra = { PalabraIngles:"	To protect  	", PalabraNativa:"	Protéger  	", PalabraTraducida:"	Proteger  	"}; unasPalabras[	67	] = palabra;
palabra = { PalabraIngles:"	To pick up  	", PalabraNativa:"	Ramasser  	", PalabraTraducida:"	Recoger  	"}; unasPalabras[	68	] = palabra;
palabra = { PalabraIngles:"	To direct  	", PalabraNativa:"	Diriger  	", PalabraTraducida:"	Dirigir  	"}; unasPalabras[	69	] = palabra;
palabra = { PalabraIngles:"	To pretend  	", PalabraNativa:"	Faire semblant  	", PalabraTraducida:"	Fingir  	"}; unasPalabras[	70	] = palabra;
palabra = { PalabraIngles:"	To catch, grab  	", PalabraNativa:"	Attraper  	", PalabraTraducida:"	Coger  	"}; unasPalabras[	71	] = palabra;
palabra = { PalabraIngles:"	To demand  	", PalabraNativa:"	Exiger  	", PalabraTraducida:"	Exigir  	"}; unasPalabras[	72	] = palabra;
palabra = { PalabraIngles:"	To contain  	", PalabraNativa:"	Contenir  	", PalabraTraducida:"	Contener  	"}; unasPalabras[	73	] = palabra;
palabra = { PalabraIngles:"	To detain  	", PalabraNativa:"	Détenir  	", PalabraTraducida:"	Detener  	"}; unasPalabras[	74	] = palabra;
palabra = { PalabraIngles:"	To maintain  	", PalabraNativa:"	Maintenir  	", PalabraTraducida:"	Mantener  	"}; unasPalabras[	75	] = palabra;
palabra = { PalabraIngles:"	To obtain  	", PalabraNativa:"	Obtenir  	", PalabraTraducida:"	Obtener  	"}; unasPalabras[	76	] = palabra;
palabra = { PalabraIngles:"	To retain  	", PalabraNativa:"	Retenir  	", PalabraTraducida:"	Retener  	"}; unasPalabras[	77	] = palabra;
palabra = { PalabraIngles:"	To sustain  	", PalabraNativa:"	Soutenir  	", PalabraTraducida:"	Sostener  	"}; unasPalabras[	78	] = palabra;
palabra = { PalabraIngles:"	To say  	", PalabraNativa:"	Dire  	", PalabraTraducida:"	Decir  	"}; unasPalabras[	79	] = palabra;
palabra = { PalabraIngles:"	To go  	", PalabraNativa:"	Aller  	", PalabraTraducida:"	Ir  	"}; unasPalabras[	80	] = palabra;
palabra = { PalabraIngles:"	To hear  	", PalabraNativa:"	Entendre  	", PalabraTraducida:"	Oír  	"}; unasPalabras[	81	] = palabra;
palabra = { PalabraIngles:"	To be  	", PalabraNativa:"	Être  	", PalabraTraducida:"	Ser  	"}; unasPalabras[	82	] = palabra;
palabra = { PalabraIngles:"	To have  	", PalabraNativa:"	Avoir  	", PalabraTraducida:"	Tener  	"}; unasPalabras[	83	] = palabra;
palabra = { PalabraIngles:"	To come  	", PalabraNativa:"	Venir  	", PalabraTraducida:"	Venir  	"}; unasPalabras[	84	] = palabra;

			
	cantidadPalabras = unasPalabras.length;
}