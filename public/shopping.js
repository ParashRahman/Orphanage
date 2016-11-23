"use strict";

const MAX_CAPACITY = 5;

function ShoppingButtonController(viewId, shoppingCartViewId) {
    var that = this;
    this.cartShowing = false;
    this.shoppingCartViewId = shoppingCartViewId;
    
    this.updateCartVisibility = function() {
	    var element = document.getElementById(that.shoppingCartViewId);
	    if (that.cartShowing) {
	        element.style.display = 'block';
	    } else {
	        element.style.display = 'none';
	    }
    }

    this.toggleCartVisibility = function() {
	    that.cartShowing = !that.cartShowing;
	    that.updateCartVisibility();
    }
}

function ShoppingCartController(shoppingCartModel, shoppingCartView) {
    this.onOrphanBought = function(orphanEv) {
	    console.log("this shiz happens");
        shoppingCartModel.addOrphan(orphanEv.target.id);
	    shoppingCartView.updateView(shoppingCartModel);
    }
}

function ShoppingCartView(viewId) {
    this.viewId = viewId;
    var that = this;

    this.createSoldOrphanVersion = function(orphanId) {
        var newOrphan = document.createElement("div");
        newOrphan.style.backgroundImage = "url('" + apathetic_path_t.format(orphanId) + "')";
        newOrphan.className = "soldOrphan";
        newOrphan.addEventListener("click", function (event) { event.target.remove() });
        return newOrphan;
    }

    this.updateView = function (shoppingCartModel) {
	    var cartOrphans = shoppingCartModel.getShoppingCartOrphans();
	    var viewNode = document.getElementById(that.viewId)

        console.log(viewNode);

	    while (viewNode.firstChild) {
	        viewNode.removeChild(viewNode.firstChild);
	    }

	    var index;
	    for (index = 0; index < cartOrphans.length; ++index) {
	        var orphanClone = that.createSoldOrphanVersion(cartOrphans[index]);
            console.log(orphanClone);
	        viewNode.appendChild(orphanClone);
	    }
    }
    
}

function ShoppingCart() {
    this.orphans = [];
    var that = this;  

    // returns true if added successful
    this.addOrphan = function(orphan_id) {
        console.log("adding orphan");
	    if (that.orphans.length >= MAX_CAPACITY || that.orphans.indexOf(orphan_id) != -1) {
	        return false;
	    }

	    that.orphans.push(orphan_id);
	    return true;
    }

    // true if remove is successful. false otherwise
    this.removeOrphan = function(orphan_id) {
	    var index = orphans.indexOf(orphan_id);
	    if (index < 0) {
	        return false;
	    }
	    var temp = orphans[orphans.length - 1];
	    orphans[orphans.length - 1] = orphan_id;
	    orphans[index] = temp;
	    orphans.pop();

	    return true;
    }

    this.getShoppingCartOrphans = function() {
	    return that.orphans;
    }
}
