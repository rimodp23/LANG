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
palabra = { PalabraNativa:"	accept	"	, PalabraTraducida:	"	aceptar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	achieve	"	, PalabraTraducida:	"	lograr	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	add	"	, PalabraTraducida:	"	agregar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	admire	"	, PalabraTraducida:	"	admirar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	admit	"	, PalabraTraducida:	"	admitir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	advise	"	, PalabraTraducida:	"	aconsejar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	afford	"	, PalabraTraducida:	"	poder pagar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	agree	"	, PalabraTraducida:	"	aceptar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	allow	"	, PalabraTraducida:	"	permitir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	announce	"	, PalabraTraducida:	"	anunciar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	answer	"	, PalabraTraducida:	"	respuesta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	appear	"	, PalabraTraducida:	"	aparecer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	apply	"	, PalabraTraducida:	"	aplicar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	argue	"	, PalabraTraducida:	"	argumentar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	arrange	"	, PalabraTraducida:	"	arreglar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	arrive	"	, PalabraTraducida:	"	llegar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	ask	"	, PalabraTraducida:	"	preguntar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	avoid	"	, PalabraTraducida:	"	evitar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	bake	"	, PalabraTraducida:	"	hornear	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	bathe	"	, PalabraTraducida:	"	bañarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	become	"	, PalabraTraducida:	"	convertirse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	begin	"	, PalabraTraducida:	"	comenzar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	behave	"	, PalabraTraducida:	"	comportarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	believe	"	, PalabraTraducida:	"	creer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	belong	"	, PalabraTraducida:	"	pertenecer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	borrow	"	, PalabraTraducida:	"	pedir prestado	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	break	"	, PalabraTraducida:	"	romper	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	bring	"	, PalabraTraducida:	"	traer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	build	"	, PalabraTraducida:	"	construir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	buy	"	, PalabraTraducida:	"	comprar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	call	"	, PalabraTraducida:	"	llamar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	cancel	"	, PalabraTraducida:	"	cancelar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	care	"	, PalabraTraducida:	"	cuidado	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	carry	"	, PalabraTraducida:	"	llevar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	catch	"	, PalabraTraducida:	"	atrapar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	change	"	, PalabraTraducida:	"	cambiar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	check	"	, PalabraTraducida:	"	controlar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	choose	"	, PalabraTraducida:	"	elegir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	clean	"	, PalabraTraducida:	"	limpio	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	clear	"	, PalabraTraducida:	"	claro	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	climb	"	, PalabraTraducida:	"	trepar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	close	"	, PalabraTraducida:	"	cerca	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	collect	"	, PalabraTraducida:	"	recolectar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	come	"	, PalabraTraducida:	"	venir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	complain	"	, PalabraTraducida:	"	quejarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	complete	"	, PalabraTraducida:	"	completo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	concern	"	, PalabraTraducida:	"	inquietud	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	confirm	"	, PalabraTraducida:	"	confirmar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	connect	"	, PalabraTraducida:	"	conectar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	consider	"	, PalabraTraducida:	"	considerar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	contain	"	, PalabraTraducida:	"	contener	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	continue	"	, PalabraTraducida:	"	continuar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	cook	"	, PalabraTraducida:	"	cocinar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	copy	"	, PalabraTraducida:	"	copiar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	correct	"	, PalabraTraducida:	"	correcto	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	cost	"	, PalabraTraducida:	"	costo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	count	"	, PalabraTraducida:	"	contar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	cover	"	, PalabraTraducida:	"	cubrir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	create	"	, PalabraTraducida:	"	crear	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	cross	"	, PalabraTraducida:	"	cruz	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	cry	"	, PalabraTraducida:	"	llorar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	cut	"	, PalabraTraducida:	"	cortar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	dance	"	, PalabraTraducida:	"	bailar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	decide	"	, PalabraTraducida:	"	decidir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	deliver	"	, PalabraTraducida:	"	entregar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	depend	"	, PalabraTraducida:	"	depender	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	describe	"	, PalabraTraducida:	"	describir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	deserve	"	, PalabraTraducida:	"	merecer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	design	"	, PalabraTraducida:	"	diseño	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	destroy	"	, PalabraTraducida:	"	destruir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	develop	"	, PalabraTraducida:	"	desarrollar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	die	"	, PalabraTraducida:	"	morir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	discover	"	, PalabraTraducida:	"	descubrir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	discuss	"	, PalabraTraducida:	"	conversar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	divide	"	, PalabraTraducida:	"	dividir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	do	"	, PalabraTraducida:	"	hacer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	draw	"	, PalabraTraducida:	"	dibujar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	dress	"	, PalabraTraducida:	"	vestido	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	drink	"	, PalabraTraducida:	"	beber	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	drive	"	, PalabraTraducida:	"	conducir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	eat	"	, PalabraTraducida:	"	comer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	educate	"	, PalabraTraducida:	"	educar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	encourage	"	, PalabraTraducida:	"	alentar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	enjoy	"	, PalabraTraducida:	"	disfrutar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	examine	"	, PalabraTraducida:	"	examinar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	exist	"	, PalabraTraducida:	"	existir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	expect	"	, PalabraTraducida:	"	esperar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	explain	"	, PalabraTraducida:	"	explicar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	explore	"	, PalabraTraducida:	"	explorar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	express	"	, PalabraTraducida:	"	expresar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	extend	"	, PalabraTraducida:	"	extender	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	fail	"	, PalabraTraducida:	"	fallar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	fall	"	, PalabraTraducida:	"	caer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	fill	"	, PalabraTraducida:	"	llenar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	find	"	, PalabraTraducida:	"	encontrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	finish	"	, PalabraTraducida:	"	finalizar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	fix	"	, PalabraTraducida:	"	arreglar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	fly	"	, PalabraTraducida:	"	volar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	follow	"	, PalabraTraducida:	"	seguir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	force	"	, PalabraTraducida:	"	fuerza	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	forget	"	, PalabraTraducida:	"	olvidar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	forgive	"	, PalabraTraducida:	"	perdonar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	form	"	, PalabraTraducida:	"	forma	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	gain	"	, PalabraTraducida:	"	ganar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	get	"	, PalabraTraducida:	"	conseguir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	give	"	, PalabraTraducida:	"	dar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	grow	"	, PalabraTraducida:	"	crecer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	guess	"	, PalabraTraducida:	"	adivinar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	handle	"	, PalabraTraducida:	"	manejar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	happen	"	, PalabraTraducida:	"	suceder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	hate	"	, PalabraTraducida:	"	odiar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	have	"	, PalabraTraducida:	"	tener	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	hear	"	, PalabraTraducida:	"	escuchar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	help	"	, PalabraTraducida:	"	ayuda	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	hide	"	, PalabraTraducida:	"	esconder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	hit	"	, PalabraTraducida:	"	golpear	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	hold	"	, PalabraTraducida:	"	sostener	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	hope	"	, PalabraTraducida:	"	esperanza	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	identify	"	, PalabraTraducida:	"	identificar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	imagine	"	, PalabraTraducida:	"	imaginar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	improve	"	, PalabraTraducida:	"	mejorar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	include	"	, PalabraTraducida:	"	incluir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	increase	"	, PalabraTraducida:	"	aumentar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	inform	"	, PalabraTraducida:	"	informar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	insist	"	, PalabraTraducida:	"	insistir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	invite	"	, PalabraTraducida:	"	invitar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	involve	"	, PalabraTraducida:	"	involucrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	join	"	, PalabraTraducida:	"	unirse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	jump	"	, PalabraTraducida:	"	saltar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	keep	"	, PalabraTraducida:	"	mantener	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	kick	"	, PalabraTraducida:	"	patada	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	kill	"	, PalabraTraducida:	"	matar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	kiss	"	, PalabraTraducida:	"	beso	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	know	"	, PalabraTraducida:	"	saber	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	laugh	"	, PalabraTraducida:	"	reír	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	lead	"	, PalabraTraducida:	"	dirigir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	learn	"	, PalabraTraducida:	"	aprender	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	leave	"	, PalabraTraducida:	"	dejar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	lend	"	, PalabraTraducida:	"	prestar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	let	"	, PalabraTraducida:	"	dejar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	like	"	, PalabraTraducida:	"	como	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	listen	"	, PalabraTraducida:	"	escuchar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	live	"	, PalabraTraducida:	"	vivir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	look	"	, PalabraTraducida:	"	mirar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	lose	"	, PalabraTraducida:	"	perder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	love	"	, PalabraTraducida:	"	amar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	make	"	, PalabraTraducida:	"	hacer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	manage	"	, PalabraTraducida:	"	administrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	mark	"	, PalabraTraducida:	"	marca	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	marry	"	, PalabraTraducida:	"	casarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	mean	"	, PalabraTraducida:	"	significar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	measure	"	, PalabraTraducida:	"	medida	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	meet	"	, PalabraTraducida:	"	encontrarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	mention	"	, PalabraTraducida:	"	mencionar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	move	"	, PalabraTraducida:	"	mover	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	need	"	, PalabraTraducida:	"	necesidad	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	notice	"	, PalabraTraducida:	"	aviso	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	offer	"	, PalabraTraducida:	"	oferta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	open	"	, PalabraTraducida:	"	abierto	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	order	"	, PalabraTraducida:	"	orden	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	own	"	, PalabraTraducida:	"	propio	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	pay	"	, PalabraTraducida:	"	pagar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	perform	"	, PalabraTraducida:	"	llevar a cabo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	pick	"	, PalabraTraducida:	"	elegir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	plan	"	, PalabraTraducida:	"	plan	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	play	"	, PalabraTraducida:	"	jugar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	point	"	, PalabraTraducida:	"	punto	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	prefer	"	, PalabraTraducida:	"	preferir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	prepare	"	, PalabraTraducida:	"	preparar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	press	"	, PalabraTraducida:	"	prensa	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	pretend	"	, PalabraTraducida:	"	pretender	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	prevent	"	, PalabraTraducida:	"	prevenir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	promise	"	, PalabraTraducida:	"	promesa	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	protect	"	, PalabraTraducida:	"	proteger	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	prove	"	, PalabraTraducida:	"	probar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	pull	"	, PalabraTraducida:	"	jalar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	push	"	, PalabraTraducida:	"	empujar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	put	"	, PalabraTraducida:	"	poner	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	raise	"	, PalabraTraducida:	"	aumentar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	reach	"	, PalabraTraducida:	"	alcanzar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	realize	"	, PalabraTraducida:	"	darse cuenta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	receive	"	, PalabraTraducida:	"	recibir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	recognize	"	, PalabraTraducida:	"	reconocer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	record	"	, PalabraTraducida:	"	registro	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	reduce	"	, PalabraTraducida:	"	reducir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	reflect	"	, PalabraTraducida:	"	reflejar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	refuse	"	, PalabraTraducida:	"	rechazar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	regret	"	, PalabraTraducida:	"	arrepentirse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	relax	"	, PalabraTraducida:	"	relajarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	release	"	, PalabraTraducida:	"	liberar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	remember	"	, PalabraTraducida:	"	recordar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	remove	"	, PalabraTraducida:	"	eliminar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	repeat	"	, PalabraTraducida:	"	repetir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	replace	"	, PalabraTraducida:	"	reemplazar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	reply	"	, PalabraTraducida:	"	responder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	report	"	, PalabraTraducida:	"	informe	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	request	"	, PalabraTraducida:	"	pedido	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	rescue	"	, PalabraTraducida:	"	rescate	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	return	"	, PalabraTraducida:	"	devolver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	reveal	"	, PalabraTraducida:	"	revelar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	risk	"	, PalabraTraducida:	"	riesgo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	run	"	, PalabraTraducida:	"	correr	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	save	"	, PalabraTraducida:	"	ahorrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	say	"	, PalabraTraducida:	"	decir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	see	"	, PalabraTraducida:	"	ver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	seem	"	, PalabraTraducida:	"	parecer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	sell	"	, PalabraTraducida:	"	vender	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	send	"	, PalabraTraducida:	"	enviar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	serve	"	, PalabraTraducida:	"	atender	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	set	"	, PalabraTraducida:	"	colocar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	share	"	, PalabraTraducida:	"	compartir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	show	"	, PalabraTraducida:	"	espectáculo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	shut	"	, PalabraTraducida:	"	cerrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	sing	"	, PalabraTraducida:	"	cantar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	sit	"	, PalabraTraducida:	"	sentarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	sleep	"	, PalabraTraducida:	"	dormir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	smile	"	, PalabraTraducida:	"	sonrisa	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	solve	"	, PalabraTraducida:	"	resolver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	sound	"	, PalabraTraducida:	"	sonido	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	speak	"	, PalabraTraducida:	"	hablar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	spend	"	, PalabraTraducida:	"	gastar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	stand	"	, PalabraTraducida:	"	pararse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	start	"	, PalabraTraducida:	"	comenzar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	stay	"	, PalabraTraducida:	"	permanecer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	steal	"	, PalabraTraducida:	"	robar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	stop	"	, PalabraTraducida:	"	detener	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	study	"	, PalabraTraducida:	"	estudiar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	succeed	"	, PalabraTraducida:	"	tener éxito	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	suffer	"	, PalabraTraducida:	"	sufrir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	suggest	"	, PalabraTraducida:	"	sugerir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	supply	"	, PalabraTraducida:	"	suministrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	support	"	, PalabraTraducida:	"	apoyo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	suppose	"	, PalabraTraducida:	"	suponer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	surprise	"	, PalabraTraducida:	"	sorpresa	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	take	"	, PalabraTraducida:	"	llevar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	talk	"	, PalabraTraducida:	"	hablar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	teach	"	, PalabraTraducida:	"	enseñar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	tell	"	, PalabraTraducida:	"	decir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	test	"	, PalabraTraducida:	"	prueba	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	thank	"	, PalabraTraducida:	"	agradecer	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	think	"	, PalabraTraducida:	"	pensar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	throw	"	, PalabraTraducida:	"	tirar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	touch	"	, PalabraTraducida:	"	tocar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	train	"	, PalabraTraducida:	"	tren	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	travel	"	, PalabraTraducida:	"	viajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	treat	"	, PalabraTraducida:	"	tratar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	try	"	, PalabraTraducida:	"	intentar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	turn	"	, PalabraTraducida:	"	doblar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	understand	"	, PalabraTraducida:	"	entender	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	use	"	, PalabraTraducida:	"	usar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	visit	"	, PalabraTraducida:	"	visita	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	wait	"	, PalabraTraducida:	"	esperar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	walk	"	, PalabraTraducida:	"	caminar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	want	"	, PalabraTraducida:	"	desear	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	warn	"	, PalabraTraducida:	"	advertir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	wash	"	, PalabraTraducida:	"	lavar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	watch	"	, PalabraTraducida:	"	mirar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	wear	"	, PalabraTraducida:	"	tener puesto	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	win	"	, PalabraTraducida:	"	ganar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	wish	"	, PalabraTraducida:	"	desear	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	wonder	"	, PalabraTraducida:	"	preguntarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	work	"	, PalabraTraducida:	"	trabajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	worry	"	, PalabraTraducida:	"	preocuparse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	write	"	, PalabraTraducida:	"	escribir	"	}; unasPalabras.push(palabra);


			
	cantidadPalabras = unasPalabras.length;
}