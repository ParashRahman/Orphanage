"use strict"

const ORPHAN_ID_PREFIX = "orphan_";

OrphanBlock = {
    var id,

    init: function(id) {
	this.id = id;
    },
    
    getOrphanBlock: function() {
	if (id == undefined) {
	    throw("initialize first!");
	}
	var block = document.createElement("div");
	block.id = ORPHAN_ID_PREFIX + id;
    },
};

OrphanContainer = {
    orphan_blocks
    
    init: function() {
	var orphan_container = document.getElementById("orphan_container");
	
    },
};
