// Elemente selektieren
let search = document.getElementById('search');
let autocomplete = document.getElementById('autocomplete');

// Event Listener zuweisen
search.onclick = function (e) {
	// this im Kontext event: das Element, dem das Event zugewiesen wurde
	// Breite, Höhe, viewport Koordinaten auslesen
	const bcr = this.getBoundingClientRect();
	autocomplete.style.left = bcr.x + window.scrollX + 'px';
	autocomplete.style.top = bcr.y + window.scrollY + bcr.height + 'px';
	autocomplete.style.width = bcr.width + 'px';


};