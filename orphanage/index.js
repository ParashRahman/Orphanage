<!--

var cart_item = 1;
var MAX_CART = 5;

function loadup(){
    for( var i = 1; i <= 42; i++ ){
	   document.getElementById( i.toString() ).src="orphans/"+i+".png";
    }
}

function hover( number ){
    var pic = document.getElementById( number );
    var hoverpic = document.getElementById( "side_pic" );
    var hover = document.getElementById( "side" );

    pic.src="orphans/crying/"+number+"_c.png";
    hoverpic.src = pic.src;
    hover.style.display = "block";
}

function out( number ){
    var pic = document.getElementById( number );
    var hover = document.getElementById( "side" );

    pic.src="orphans/"+number+".png";
    hover.style.display = "none";
}

function clic( number ){
    if ( cart_item > MAX_CART ){
	   alert("too many children");
	   return;
    } 

    alert("added to cart");

    var c = "cart";
    var cartimg = document.getElementById( c.concat(cart_item.toString()) );
    var pic = document.getElementById( number );
    
    cartimg.src = pic.src;
    cartimg.style.display = "inline";

    cart_item++;
}

function cart_clic( number ){
    var c = "cart";
    var cartimg = document.getElementById(  c.concat(cart_item-1) );
    cartimg.style.display = "none";

    for ( var i = parseInt(number, 10); i < cart_item - 1; i++ ){
        cartimg = document.getElementById( c.concat(i.toString()) );
        cartimg.src = document.getElementById( c.concat((i+1).toString()) ).src; 
    }

    cart_item--;
}

function confirm_cart(){
    var final_family = [];

    for ( var i = 1;  i < cart_item; i++ ){
        var cartimg_addr = "cart".concat( i.toString() );
        var cartimg = document.getElementById( cartimg_addr );
        final_family.push( cartimg.src );
    }

    setCookie( "family", JSON.stringify(final_family), 30 );

    window.location.href = 'final.html';
}

// http://www.javascripter.net/faq/settinga.htm
function setCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue)
                   + ";expires="+expire.toGMTString();
}

//-->