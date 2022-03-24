// Elemente selektieren
let search = document.getElementById('search');
let autocomplete = document.getElementById('autocomplete');

// Event Listener zuweisen
/*
	// addEventListener erlaubt das Hinzufügen mehrerer Funktionen
	// zusätzlich können mit removeEventListener events wieder entfernt werden
	search.addEventListener('keyup', function(e){ a funciton });
	search.addEventListener('keyup', function(e){ another function });
*/

search.onkeyup = function (e) {
	// Falls nicht vorhanden, klasse show hinzufügen. Nur 1x hinzufügen
	if (!autocomplete.classList.contains('show')) {
		autocomplete.classList.add('show');
		// this im Kontext event: das Element, dem das Event zugewiesen wurde
		// Breite, Höhe, viewport Koordinaten auslesen
		// hier wäre auch search statt this möglich
		const bcr = this.getBoundingClientRect();
		autocomplete.style.left = bcr.x + window.scrollX + 'px';
		autocomplete.style.top = bcr.y + window.scrollY + bcr.height + 'px';
		autocomplete.style.width = bcr.width + 'px';
	}

	// Async Request absetzen und die Anwort ins autocomplete Feld schreiben

	// aktuellen value auslesen und an den Request weitergeben
	const searchText = this.value;
	fetch('ac-data.json?search=' + searchText)
		// Arrow function
		// wandelt den Text in der Response in ein Objekt um
		// und erzeugt ein Promise, das mit einem weiteren
		// then verarbeitet wird.
		.then(response => response.json())
		// Data ist der Response Text als JSON Objekt
		.then(data => {
			// Ul in autocomplete erstellen und befüllen
			// ul im Speicher erstellt
			const myUl = document.createElement('ul');
			// Schleife über data objekt, für jeden Eintrag ein li erstellen
			for (let i = 0; i < data.length; i++) {
				// aktuelles Element aus data
				const element = data[i];
				// neues Li Element erzeugen
				const myLi = document.createElement('li');
				// den Namen aus dem aktuellen Element auslesen und ins li reinschreiben
				myLi.innerText = element.name;
				// Das li Element dem Ul Element anfügen
				myUl.appendChild(myLi);
			}
			// Vorherige Einträge aus autocomplete löschen
			autocomplete.innerHTML = '';
			// das neue ul Elment in autocomplete reinschreiben
			autocomplete.appendChild(myUl);

		})
		.catch((error) => {
			console.error('Error:', error);
		});
	/*
	// Alte Schreibweise anonyme Funktion, heute arrow function
	.then(function (response) {
		console.log(response);
	}); */
};

// blur event - wenn das input Feld verlassen wird
search.onblur = function (e) {
	// Feld wieder verstecken.
	autocomplete.classList.remove('show');
};