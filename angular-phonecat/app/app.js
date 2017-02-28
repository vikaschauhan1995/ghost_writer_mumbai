
function menuButOver(x,c){
  var main_circ = document.getElementById("mainCircle");
  main_circ.style.backgroundColor="#8C8C8C";
  main_circ.style.transition="1s";
  main_circ.style.transform="rotate(5deg)";
  menuShadow(x,c);
}
function menuButLev(x,c){
  var main_circ = document.getElementById("mainCircle");
  menuShadowRem(x,c);
  main_circ.style.backgroundColor="grey";
  main_circ.style.transform="rotate(0deg)";
}
function menuShadow(i_d,c){
	for(var x=0;x<c;x++){
		document.getElementById(i_d).getElementsByTagName("span")[x].style.boxShadow="0px -5px 0px #8C8C8C";
	}
}
function menuShadowRem(i_d,c){
	for(var x=0;x<c;x++){
		document.getElementById(i_d).getElementsByTagName("span")[x].style.boxShadow="";
	}
}
