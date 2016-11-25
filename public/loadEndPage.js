"use strict";

function loadEndPage(orphans) {
    var orphanIds = JSON.parse(orphans);
    var orphan_container = document.getElementById("orphan_container");
    
    var index;
    for (index = 0; index < orphanIds.length; ++index) {
	var divOrphan = document.createElement("div");
	divOrphan.className = "orphan";
	divOrphan.style.backgroundImage = "url('" + apathetic_path_t.format(orphanIds[index]) + "')";
	orphan_container.appendChild(divOrphan);
    }

}
