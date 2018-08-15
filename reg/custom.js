
function reg(){
	var inpt = document.querySelector('form input').value;
	var txt = document.querySelector('form textarea').value;
	var reg = new RegExp(inpt, "ig");
	var result = txt.match(reg);
	document.querySelector('.answer').innerHTML = "";
	if(result != null){
		var len = result.length;
		var html = "";
		for(var i = 0; i < len; i++){
			html += i + " => " + result[i] + "<br />";
		}
		document.querySelector('.answer').innerHTML = html;
	}
}
document.querySelector('form input').onchange = reg;
document.querySelector('form textarea').onchange = reg; 