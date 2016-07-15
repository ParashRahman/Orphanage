<!--

function loadfamily(){
	var family = JSON.parse( readCookie("family") );

	if ( family.length == 0 ){
		var goodbye_paragraph = document.getElementById( "goodbye" );
		goodbye_paragraph.innerHTML = "Glad you are satisfied with your current family."
	}

	for ( var i = 0; i < family.length; i++ ){
		final = document.getElementById("final".concat( (i+1).toString()) );
		final.src = family[i];
	}
}

// http://www.javascripter.net/faq/readinga.htm
function readCookie(cookieName) {
	var theCookie=" "+document.cookie;
	var ind=theCookie.indexOf(" "+cookieName+"=");
	if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
	if (ind==-1 || cookieName=="") return "";
	var ind1=theCookie.indexOf(";",ind+1);
	if (ind1==-1) ind1=theCookie.length; 
	return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
}

//-->