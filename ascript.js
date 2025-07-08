function captura(){
	var titulo= document.getElementById("bie")
	var variables= window.location.search;
	const urlParams= new URLSearchParams(variables);
	var N=urlParams.get("nombre")
	var B = urlParams.get("B")
	bie.innerHTML="bienvenido " + N

	if(B==1){
		console.log(N+B)
	}
	else{
		alert("no tienes acceso");
		window.location="index.html"
	}
}
var usuarios = [
	{nivel: "administrador", nombre: "Juan", pass: "acb", edad: 17},
	{nivel: "normal", nombre: "Pepe", pass: "124", edad: 18},
	{nivel: "normal", nombre: "Lola", pass: "123", edad: 17},
	{nivel: "normal", nombre: "Pollo", pass: "qwe", edad: 17},
	{nivel: "administrador", nombre: "ilo", pass: "asd", edad: 17},
];
/*Permite que los usuarios de nivel administrador ver los usuarios registrados, sus edades 
y el nivel que tienen*/

console.log(usuarios[1].nombre)
function FillT(){
	var tabla=document.getElementById("tabla");
	for(let i=0; i < usuarios.length;i++){
		var tr = document.createElement("tr");
		var td=document.createElement("td");
		var td2 = document.createElement("td");
		var td3=document.createElement("td");

		tr.id="R"+i;

		td.innerHTML= usuarios[i].nombre;
		td2.innerHTML= usuarios[i].edad;
		td3.innerHTML= usuarios[i].nivel;

		tr.appendChild(td);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tabla.appendChild(tr);
	}
}
