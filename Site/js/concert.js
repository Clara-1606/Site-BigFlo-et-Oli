"use strict"


document.getElementById("areaBelgique").addEventListener ("click", function (e){
	e.preventDefault();
	belgiqueChange();

},false);

function belgiqueChange(){
	
	document.getElementById('belgique').classList.remove("cache");
	document.getElementById('belgique').classList.add("actif");

}

document.getElementById("areaCorse").addEventListener ("click", function (e){
	e.preventDefault();
	corseChange();

},false);
function corseChange(){
	document.getElementById('corse').classList.remove("cache");
	document.getElementById('corse').classList.add("actif");
};


document.getElementById("areaHdf").addEventListener ("click", function (e){
	e.preventDefault();
	hdfChange();

},false);

function hdfChange(){
	document.getElementById('hdf').classList.remove("cache");
	document.getElementById('hdf').classList.add("actif");
};

document.getElementById("areaIdf").addEventListener ("click", function (e){
	e.preventDefault();
	idfChange();

},false);

function idfChange(){
	document.getElementById('idf').classList.remove("cache");
	document.getElementById('idf').classList.add("actif");
};

document.getElementById("areaBretagne").addEventListener ("click", function (e){
	e.preventDefault();
	bretagneChange();

},false);

function bretagneChange(){
	document.getElementById('bretagne').classList.remove("cache");
	document.getElementById('bretagne').classList.add("actif");
};

document.getElementById("areaPdll").addEventListener ("click", function (e){
	e.preventDefault();
	pdllChange();

},false);

function pdllChange(){
	document.getElementById('pdll').classList.remove("cache");
	document.getElementById('pdll').classList.add("actif");
};

document.getElementById("areaCvdl").addEventListener ("click", function (e){
	e.preventDefault();
	cvdlChange();

},false);

function cvdlChange(){
	document.getElementById('cvdl').classList.remove("cache");
	document.getElementById('cvdl').classList.add("actif");
};

document.getElementById("areaAquitaine").addEventListener ("click", function (e){
	e.preventDefault();
	aquitaineChange();

},false);

function aquitaineChange(){
	document.getElementById('na').classList.remove("cache");
	document.getElementById('na').classList.add("actif");
};

document.getElementById("areaOccitanie").addEventListener ("click", function (e){
	e.preventDefault();
	occitanieChange();

},false);

function occitanieChange(){
	document.getElementById('occitanie').classList.remove("cache");
	document.getElementById('occitanie').classList.add("actif");
};

document.getElementById("areaPaca").addEventListener ("click", function (e){
	e.preventDefault();
	pacaChange();

},false);

function pacaChange(){
	document.getElementById('paca').classList.remove("cache");
	document.getElementById('paca').classList.add("actif");
};

document.getElementById("areaAuvergne").addEventListener ("click", function (e){
	e.preventDefault();
	auvergneChange();

},false);

function auvergneChange(){
	document.getElementById('auvergne').classList.remove("cache");
	document.getElementById('auvergne').classList.add("actif");
};

document.getElementById("areaBourgone").addEventListener ("click", function (e){
	e.preventDefault();
	bourgoneChange();

},false);

function bourgogneChange(){
	document.getElementById('bourgogne').classList.remove("cache");
	document.getElementById('bourgogne').classList.add("actif");
};

document.getElementById("areaSuisse").addEventListener ("click", function (e){
	e.preventDefault();
	suisseChange();

},false);

function suisseChange(){
	document.getElementById('suisse').classList.remove("cache");
	document.getElementById('suisse').classList.add("actif");
};

document.getElementById("areaGe").addEventListener ("click", function (e){
	e.preventDefault();
	geChange();

},false);

function geChange(){
	document.getElementById('ge').classList.remove("cache");
	document.getElementById('ge').classList.add("actif");
};

document.getElementById("areaNormandie").addEventListener ("click", function (e){
	e.preventDefault();
	normandieChange();

},false);

function normandieChange(){
	document.getElementById('normandie').classList.remove("cache");
	document.getElementById('normandie').classList.add("actif");
};