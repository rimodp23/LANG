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
palabra = { PalabraIngles:"	add 1	", PalabraNativa:"	Ajouter  	", PalabraTraducida:"	Añadir  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	buy	", PalabraNativa:"	Acheter  	", PalabraTraducida:"	Comprar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	carry	", PalabraNativa:"	Porter  	", PalabraTraducida:"	Llevar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	catch 3	", PalabraNativa:"	Attraper  	", PalabraTraducida:"	Atrapar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	cleaning	", PalabraNativa:"	Nettoyer  	", PalabraTraducida:"	Limpiar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	close	", PalabraNativa:"	Fermer  	", PalabraTraducida:"	Cerrar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	cook 1	", PalabraNativa:"	Cuisiner  	", PalabraTraducida:"	Cocinar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	count	", PalabraNativa:"	Compter  	", PalabraTraducida:"	Contar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	cut 1	", PalabraNativa:"	Couper  	", PalabraTraducida:"	Cortar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	cut	", PalabraNativa:"	Couper  	", PalabraTraducida:"	Cortar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	cycling	", PalabraNativa:"	Faire du vélo  	", PalabraTraducida:"	Andar en bicicleta  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	dance 2	", PalabraNativa:"	Danser  	", PalabraTraducida:"	Bailar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	eat 1	", PalabraNativa:"	Manger  	", PalabraTraducida:"	Comer  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	go to bed	", PalabraNativa:"	Aller au lit  	", PalabraTraducida:"	Ir a la cama  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	kiss	", PalabraNativa:"	Embrasser  	", PalabraTraducida:"	Besar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	listen	", PalabraNativa:"	Écouter  	", PalabraTraducida:"	Escuchar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	play 1	", PalabraNativa:"	Jouer  	", PalabraTraducida:"	Jugar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	playing cards	", PalabraNativa:"	Jouer aux cartes  	", PalabraTraducida:"	Jugar a las cartas  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	punch	", PalabraNativa:"	Donner un coup de poing  	", PalabraTraducida:"	Golpear,con el puño 	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	read	", PalabraNativa:"	Lire  	", PalabraTraducida:"	Leer  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	ride 1	", PalabraNativa:"	Monter,ou faire du vélo/cheval 	", PalabraTraducida:"	Montar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	run 3	", PalabraNativa:"	Courir  	", PalabraTraducida:"	Correr  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	shake hands	", PalabraNativa:"	Se serrer la main  	", PalabraTraducida:"	Dar la mano  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	sing	", PalabraNativa:"	Chanter  	", PalabraTraducida:"	Cantar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	sleep	", PalabraNativa:"	Dormir  	", PalabraTraducida:"	Dormir  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	take a shower	", PalabraNativa:"	Prendre une douche  	", PalabraTraducida:"	Ducharse  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	think	", PalabraNativa:"	Penser  	", PalabraTraducida:"	Pensar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	throw away	", PalabraNativa:"	Jeter  	", PalabraTraducida:"	Tirar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	wake up	", PalabraNativa:"	Se réveiller  	", PalabraTraducida:"	Despertarse  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	walk	", PalabraNativa:"	Marcher  	", PalabraTraducida:"	Caminar  	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	Wave	", PalabraNativa:"	Faire signe  	", PalabraTraducida:"	Saludar, con la mano	"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"	write	", PalabraNativa:"	Écrire	", PalabraTraducida:"	Escribir	"}; unasPalabras.push(palabra);




			
	cantidadPalabras = unasPalabras.length;
}