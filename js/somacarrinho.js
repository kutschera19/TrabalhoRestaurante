function somarSalada(){
	var v1=document.getElementById("qntd1").value;
	if(v1<=0){
	}else{
	soma1="R$"+v1*20+",00";
	document.getElementById("resultado1").innerHTML=soma1;
}
}
function somarBolinho(){
	var v2=document.getElementById("qntd2").value;
	if(v2<=0){
	}else{
	soma2="R$"+v2*24.90+"0";
	document.getElementById("resultado2").innerHTML=soma2;
}
}
function somarCouvert(){
	var v3=document.getElementById("qntd3").value;
	if(v3<=0){
	}else{
	soma3="R$"+v3*15+",00";
	document.getElementById("resultado3").innerHTML=soma3;
}
}
function somarTabua(){
	var v4=document.getElementById("qntd4").value;
	if(v4<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma4="R$"+v4*22.90+"0";
	document.getElementById("resultado4").innerHTML=soma4;
}
}
function somarPasteis(){
	var v5=document.getElementById("qntd5").value;
	if(v5<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma5="R$"+v5*18+",00";
	document.getElementById("resultado5").innerHTML=soma5;
}
}
function somarRisoto(){
	var v6=document.getElementById("qntd6").value;
	if(v6<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma6="R$"+v6*68+",00";
	document.getElementById("resultado6").innerHTML=soma6;
}
}
function somarFile(){
	var v7=document.getElementById("qntd7").value;
	if(v7<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma7="R$"+v7*45+",00";
	document.getElementById("resultado7").innerHTML=soma7;
}
}
function somarLasanha(){
	var v8=document.getElementById("qntd8").value;
	if(v8<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma8="R$"+v8*32+",00";
	document.getElementById("resultado8").innerHTML=soma8;
}
}
function somarFeijoada(){
	var v9=document.getElementById("qntd9").value;
	if(v9<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma9="R$"+v9*39.90+"0";
	document.getElementById("resultado9").innerHTML=soma9;
}
}
function somarEscondidinho(){
	var v10=document.getElementById("qntd10").value;
	if(v10<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma10="R$"+v10*28+",00";
	document.getElementById("resultado10").innerHTML=soma10;
}
}
function somarSorvete(){
	var v11=document.getElementById("qntd11").value;
	if(v11<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma11="R$"+v11*8+",00";
	document.getElementById("resultado11").innerHTML=soma11;
}
}
function somarPave(){
	var v12=document.getElementById("qntd12").value;
	if(v12<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma12="R$"+v12*10+",00";
	document.getElementById("resultado12").innerHTML=soma12;
}
}
function somarPetit(){
	var v13=document.getElementById("qntd13").value;
	if(v13<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma13="R$"+v13*15+",00";
	document.getElementById("resultado13").innerHTML=som13;
}
}
function somarCascata(){
	var v14=document.getElementById("qntd14").value;
	if(v14<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma14="R$"+v14*18+",00";
	document.getElementById("resultado14").innerHTML=soma14;
}
}
function somarPudim(){
	var v15=document.getElementById("qntd15").value;
	if(v15<=0){
		alert("Escolha uma quantidade válida");
	}else{
	soma15="R$"+v15*10+",00";
	document.getElementById("resultado15").innerHTML=soma15;
}
}
function calcularValor() {
	var v1 = document.getElementById("qntd1").value;
	var v2 = document.getElementById("qntd2").value;
	var v3 = document.getElementById("qntd3").value;
	var v4 = document.getElementById("qntd4").value;
	var v5 = document.getElementById("qntd5").value;
	var v6 = document.getElementById("qntd6").value;
	var v7 = document.getElementById("qntd7").value;
	var v8 = document.getElementById("qntd8").value;
	var v9 = document.getElementById("qntd9").value;
	var v10 = document.getElementById("qntd10").value;
	var v11 = document.getElementById("qntd11").value;
	var v12 = document.getElementById("qntd12").value;
	var v13 = document.getElementById("qntd13").value;
	var v14 = document.getElementById("qntd14").value;
	var v15 = document.getElementById("qntd15").value;
	var total = parseFloat(v1*20)+parseFloat(v2*24.90)+parseFloat(v3*15)+parseFloat(v4*22.90)+parseFloat(v5*18)+parseFloat(v6*68)+parseFloat(v7*45)+parseFloat(v8*32)+parseFloat(v9*39)+parseFloat(v10*28)+parseFloat(v11*8)+parseFloat(v12*10)+parseFloat(v13*15)+parseFloat(v14*18)+parseFloat(v15*10)
	var preco = "R$"+total;
	document.getElementById("totalGeral").innerHTML=preco;
}