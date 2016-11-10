"use script"

const MAX_CAPACITY = 5;

function ShoppingCartView(viewId) {
    this.viewId = viewId;

    this.updateView = function (shoppingCartModel) {
	var cartOrphans = shoppingCartModel.getShoppingCartOrphans();
	var viewNode = document.getElementById(this.viewId)
	while (viewNode.firstChild) {
	    viewNode.removeChild(viewNode.firstChild);
	}

	var index;
	for (index = 0; index < cartOrphans.length; ++index) {
	    var orphanClone = document.getElementById(cartOrphans[index]);
	    viewNode.appendChild(orphanClone);
	}
    }
    
}

function ShoppingCart() {
    this.orphans = [];
    
    // returns true if added successful
    this.addOrphan = function(orphan_id) {
	if (orphans.length >= MAX_CAPACITY) {
	    return false;
	}

	this.orphans.push(orphan_id);
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
	return this.orphans;
    }
}
