var usuarios = [
	{nivel: "administrador", nombre: "Juan", pass: "acb", edad: 17},
	{nivel: "normal", nombre: "Pepe", pass: "124", edad: 18},
	{nivel: "normal", nombre: "Lola", pass: "123", edad: 17},
	{nivel: "normal", nombre: "Pollo", pass: "qwe", edad: 17},
	{nivel: "administrador", nombre: "ilo", pass: "asd", edad: 17},
];

/*esto es para que te envie a un lugar dependiendo de los usuarios y contraseñas*/
function Aceptar(){

var U= document.getElementById("user").value;
var P= document.getElementById("pass").value;
var v=true;

for(let i=0;i< usuarios.length; i++){
	if(U==usuarios[i].nombre && P==usuarios[i].pass){
		v=false;
		if(usuarios[i].nivel=="administrador"){
		window.location="administrador.html?nombre="+usuarios[i].nombre+"&B=1";
		}else{
		window.location="normal.html?nombre="+usuarios[i].nombre+"&B=1";
		}

	}
}

if(v){
	alert("usuarios y/o contraseña invalidos");
}
}
