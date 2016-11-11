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

function createMouseOutListener(id) {
    return function() {
	var block = document.getElementById(id);
	console.log(crying_path_t.format(id));
	block.style.backgroundImage = "url('" + apathetic_path_t.format(id) + "')";
    }
}

function createMouseOverListener(id) {
    return function() {
	var block = document.getElementById(id);
	console.log(crying_path_t.format(id));
	block.style.backgroundImage = "url('" + crying_path_t.format(id) + "')";
    }
}

function Orphan(id) {
    this.id = id;

    this.getOrphanId = function() {
	return ORPHAN_ID_PREFIX + this.id;
    };
    
    this.getOrphanBlock = function() {
	var block = document.createElement("div");
	var oID = this.getOrphanId();
	block.id = oID;
	block.className = "orphan";
	console.log(apathetic_path_t.format(oID));
	block.style.backgroundImage = "url('" + apathetic_path_t.format(oID) + "')";
	block.addEventListener("mouseover", createMouseOverListener(oID));
	block.addEventListener("mouseout", createMouseOutListener(oID));
	
	return block;
    };
}

function OrphanContainer() {
    this.getOrphanContainer = function() {
	var orphan_container = document.createElement("div");
	orphan_container.className = "orphan_container";

	var oindex;
	for (oindex = 1; oindex <= 42; ++oindex) {
	    var orphobj = new Orphan(oindex);
	    orphan_container.appendChild(orphobj.getOrphanBlock());
	}

	return orphan_container;
    };
}

