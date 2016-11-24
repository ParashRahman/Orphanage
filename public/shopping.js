"use strict";

const MAX_CAPACITY = 5;

function ShoppingButtonController(viewId, shoppingCartViewId) {
    var that = this;
    this.cartShowing = false;
    this.shoppingCartViewId = shoppingCartViewId;
    this.buttonId = viewId;
    
    this.toggleCartVisibility = function() {
	that.cartShowing = !that.cartShowing;
	var element = document.getElementById(that.shoppingCartViewId);
	var btnElement = document.getElementById(that.buttonId);
	
	if (that.cartShowing) {
	    btnElement.innerHTML = "Hide Cart";
	    element.style.display = 'flex';
	} else {
	    btnElement.innerHTML = "View Cart";
	    element.style.display = 'none';
	}
    }
}

function ShoppingCartController(shoppingCartModel, shoppingCartView) {
    this.onOrphanBought = function(orphanEv) {
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
        /*newOrphan.addEventListener("click",
				   function (event) {
           TODO: Add removal from cart option? (if ethical)
				   }); */
        return newOrphan;
    }
    
    this.updateView = function (shoppingCartModel) {
	var cartOrphans = shoppingCartModel.getShoppingCartOrphans();
	var viewNode = document.getElementById(that.viewId)
		
	while (viewNode.firstChild) {
	    viewNode.removeChild(viewNode.firstChild);
	}
	
	var index;
	for (index = 0; index < cartOrphans.length; ++index) {
	    var orphanClone = that.createSoldOrphanVersion(cartOrphans[index]);
	    viewNode.appendChild(orphanClone);
	}
    }
    
}

function ShoppingCart() {
    this.orphans = [];
    var that = this;  
    
    // returns true if added successful
    this.addOrphan = function(orphan_id) {
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
