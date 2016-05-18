// JavaScript Document
$(document).ready(function (e){
	//watchID se refier a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//Cuando esta listo el dispositivo
	function Dispositivo_Listo(){
	comienza();
	}
	
	//Empieza la observacion de la aceleracion
	function Comienza(){
		
		//Actualiza la aceleracion cada 2 segundos
		//
		var opciones={frequency:2000};
		
		watchID=navigator.accelerometer.watchAcceleration(Correcto,Error,opciones);
		navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	//Detiene la observacion de la aceleracion
	
	function Detente(){
		if(watchID){
			navigator.accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//Correcto:Toma una captura de la aceleracion
	function Correcto (acceleration){
		var element=document.getElementById('acelerometro');
		
	element.innerHTML='Aceleracion en x:'+acceleration.x+'<br />'+
	'Aceleracion en y:'+acceleration.y+'<br />'+
	'intervalo:'+acceleration.timestamp+'<br />';
	}
	
	//eRROR:FALLA al obtener la aceleracion
	function ERROR(){
		alert('Error!');
	}
	//Exito al localizar
	function Localiza(posicion){
		var element= document.getElementById('geolocalizacion');
		element.innerHTML='latitud:'+posicion.coords.latitude +'<br />'+
		'longitud:' +posicion.coords.longitude  +'<br />'+
		'precision:' +posicion.coords.accuracy  +'<br />'+
	    'intervalo:' +posicion.timestamp+'<br />';
	}
	//Error en la geolocalizacion
	function ErrorLocalizacion(error){
	alert('codigo:'+error.code +'\n'+
   'mensaje:'+error.message+'\n');
	}
});//document ready
	
	
	
	