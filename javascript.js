/*Check mail shape*/
document.getElementById("button-id").addEventListener("click", function(){
	var mail = document.forms["myForm"]["email"].value;
	if (!validateEmail(mail)) {
		document.getElementById("p-id-error-message").style.display = "block";
		document.getElementById("img-id-error").style.visibility = "visible";
		document.getElementById("img-id-error").parentElement.style.marginBottom = "0.2rem";
		document.getElementById("img-id-error").parentElement.style.border = "2px solid hsl(0, 100%, 74%)";
	}

/*Alert input*/
	var acc = document.getElementsByClassName("input-class");
	var i;
	for (i = 0; i < acc.length; i++) {
		if (acc[i].value == "") {
			acc[i].parentElement.nextElementSibling.style.display = "block";
			acc[i].nextElementSibling.style.visibility = "visible";
			acc[i].parentElement.style.marginBottom = "0.2rem";
			acc[i].parentElement.style.border = "2px solid hsl(0, 100%, 74%)";
		}
	} /* Closing [i]*/
} /* Closing first event listener called function.*/
) /* Closing first event listener.*/

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

/*Set original status and dark border on focused input box*/
var accc = document.getElementsByClassName("input-class");
	var ii;
	for (ii = 0; ii < accc.length; ii++) {
			accc[ii].addEventListener("focus", function(){
				this.parentElement.nextElementSibling.style.display = "none";
				this.nextElementSibling.style.visibility = "hidden";
				this.parentElement.style.marginBottom = "1rem";
				this.parentElement.style.border = "2px solid hsl(249, 10%, 26%)";
			} )
	} /* Closing [ii]*/

/*Set normal border leaved input box*/
var blur = document.getElementsByClassName("input-class");
	var iii;
	for (iii = 0; iii < blur.length; iii++) {
			blur[iii].addEventListener("blur", function(){
				this.parentElement.style.border = "1px solid hsl(0, 0%, 87%)";
			} )
	} /* Closing [iii]*/