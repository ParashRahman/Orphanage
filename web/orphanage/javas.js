<!--

var cart_item = 1;

function loadup(){
    for( var i = 1; i <= 42; i++ ){
	document.getElementById( i.toString() ).src="orphans/"+i+".png";
    }
}

function hover( number ){
    var pic = document.getElementById( number );
    var hoverpic = document.getElementById( "side_pic" );

    pic.src="orphans/crying/"+number+"_c.png";
    hoverpic.src = pic.src;
    hoverpic.style.display = "inline";
}

function out( number ){
    var pic = document.getElementById( number );
    var hoverpic = document.getElementById( "side_pic" );

    pic.src="orphans/"+number+".png";
    hoverpic.style.display = "none";
    can_disappear = false;
}

function clic( number ){
    if ( cart_item > 5 ){
	alert("too many children");
	return;
    } 

    alert("added to cart");

    var c = "cart";
    var cartimg = document.getElementById( c.concat(cart_item.toString()) );
    var pic = document.getElementById( number );
    
    cartimg.src = pic.src;
    cart_item++;
}

//-->