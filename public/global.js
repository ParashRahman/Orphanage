"use strict";

var B_CARTID = "shoppingCartButton";
var CARTID = "shoppingCart";

function shoppingButtonListener(shoppingButtonController) {
    shoppingButtonController.toggleCartVisibility();
}

(function() {
    var container = new OrphanContainer();
    document.body.appendChild(container.getOrphanContainer());

    var shoppingCartModel = new ShoppingCart();
    var shoppingCartView = new ShoppingCartView(B_CARTID);
    var shoppingButtonController = new ShoppingButtonController(B_CARTID, CARTID);

    this.getElementById(B_CARTID).addEventListener("onclick", partial(shoppingButtonController(shoppingButtonController)));
    
    
})();
