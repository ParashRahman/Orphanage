"use strict";

var shoppingButtonListener = function(buttonController, shoppingCartModel, event) {
    if (shoppingCartModel.getShoppingCartOrphans().length > 0) {
	buttonController.toggleCartVisibility();
    } else {
	alert("Cart is empty");
    }
};


var checkoutButtonListener = function(shoppingCartModel) {
    window.location = "end.php?orphans=" + encodeURIComponent(JSON.stringify(shoppingCartModel.getShoppingCartOrphans()));
    /*var xmlhttp;
    
    if (window.XMLHttpRequest){
	xmlhttp=new XMLHttpRequest();
    } else {
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    var PageToSendTo = "end.php?";
    var MyVariable = JSON.stringify(shoppingCartModel.getShoppingCartOrphans());
    var VariablePlaceholder = "orphans=";
    var UrlToSend = PageToSendTo + VariablePlaceholder + MyVariable;

    xmlhttp.open("GET", UrlToSend);
    xmlhttp.send();*/
};

(function() {
    var shoppingCartModel = new ShoppingCart();
    var shoppingCartView = new ShoppingCartView(CARTID);
    var shoppingCartController = new ShoppingCartController(shoppingCartModel, shoppingCartView);
    var shoppingButtonController = new ShoppingButtonController(B_CARTID, CARTID);

    var checkoutButton = document.getElementById(B_CHECKOUTID);
    checkoutButton.addEventListener("click", checkoutButtonListener.bind(null, shoppingCartModel));
    
    var container = new OrphanContainer(shoppingCartController.onOrphanBought);
    document.body.appendChild(container.getOrphanContainer());
    
    console.log("debugging on");
    
    var domButton = document.getElementById(B_CARTID);
    var buttonListener = shoppingButtonListener.bind(null, shoppingButtonController, shoppingCartModel);
    domButton.addEventListener("click", buttonListener);      
})();
