"use strict";


function createMouseOutListener(id) {
    return function() {
	var block = document.getElementById(id);
	block.style.backgroundImage = "url('" + apathetic_path_t.format(id) + "')";
    }
}

function createMouseOverListener(id) {
    return function() {
	    var block = document.getElementById(id);
	    block.style.backgroundImage = "url('" + crying_path_t.format(id) + "')";
    }
}

function Orphan(id) {
    this.id = id;
    this.getOrphanId = function() {
	    return ORPHAN_ID_PREFIX + this.id;
    };
    
    this.generateOrphanBlock = function() {
	    var block = document.createElement("div");
	    var oID = this.getOrphanId();
	    block.id = oID;
	    block.className = "orphan";

	    block.style.backgroundImage = "url('" + apathetic_path_t.format(oID) + "')";
	    block.addEventListener("mouseover", createMouseOverListener(oID));
	    block.addEventListener("mouseout", createMouseOutListener(oID));
	
	    return block;
    };
}

function OrphanContainer(onOrphanClick) {
    this.getOrphanContainer = function() {
	    var orphan_container = document.createElement("div");
	    orphan_container.className = "orphan_container";

	    var oindex;
	    for (oindex = 1; oindex <= 42; ++oindex) {
	        var orphobj = new Orphan(oindex);
	        var orphBlock = orphobj.generateOrphanBlock();
	        orphBlock.onclick = onOrphanClick;
	        orphan_container.appendChild(orphBlock);
	    }

	    return orphan_container;
    };
}

