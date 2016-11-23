"use strict";

const ORPHAN_ID_PREFIX = "orphan_";
const crying_path_t = "../private/orphanage/assets/crying/{0}_c.png";
const apathetic_path_t = "../private/orphanage/assets/depressed/{0}_d.png";

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

var B_CARTID = "shoppingCartButton";
var CARTID = "shoppingCart";

var shoppingButtonListener = function(buttonController, event) {
    console.log(buttonController);
    buttonController.toggleCartVisibility();
};


(function() {
    var shoppingCartModel = new ShoppingCart();
    var shoppingCartView = new ShoppingCartView(CARTID);
    var shoppingCartController = new ShoppingCartController(shoppingCartModel, shoppingCartView);
    var shoppingButtonController = new ShoppingButtonController(B_CARTID, CARTID);

    console.log(shoppingCartController.onOrphanBought);
    var container = new OrphanContainer(shoppingCartController.onOrphanBought);
    document.body.appendChild(container.getOrphanContainer());

    console.log("debugging on");

    var domButton = document.getElementById(B_CARTID);
    var buttonListener = shoppingButtonListener.bind(null, shoppingButtonController);

    domButton.addEventListener("click", buttonListener);      
})();
