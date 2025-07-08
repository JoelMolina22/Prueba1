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

/*Permite que los usuarios normales vean unicamente su nombre y edad*/
function FillT(){
	var variables= window.location.search;
	const urlParams= new URLSearchParams(variables);
	var nombreUsuario=urlParams.get("nombre")
	var tabla=document.getElementById("tabla");
	
	for(let i=0; i < usuarios.length; i++){
		if(usuarios[i].nombre == nombreUsuario && usuarios[i].nivel == "normal"){
			var tr = document.createElement("tr");
			var td=document.createElement("td");
			var td2 = document.createElement("td");

			td.innerHTML= usuarios[i].nombre;
			td2.innerHTML= usuarios[i].edad;

			tr.appendChild(td);
			tr.appendChild(td2);
			tabla.appendChild(tr);
}
}
}
