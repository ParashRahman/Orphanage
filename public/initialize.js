"use strict";

const ORPHAN_ID_PREFIX = "orphan_";
const crying_path_t = "../private/orphanage/assets/crying/{0}_c.png";
const apathetic_path_t = "../private/orphanage/assets/depressed/{0}_d.png";

const B_CARTID = "shoppingCartButton";
const B_CHECKOUTID = "checkOutButton";
const CARTID = "shoppingCart";

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
