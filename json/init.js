function pricesTable(prices) {
	/*
		Beim Erstellen von DOM Element in JS: erst am Ende
		das vollständige Element in den body einfügen, da es sonst
		beim Erstellen der Kindelemente jedes mal zu einem redraw im Browser
		kommen kann
	*/
	const tbl = document.createElement('table');
	tbl.classList.add('table',  'table-striped');
	tbl.setAttribute('border', 1);
	// Kopfzeile
	const headerRow = document.createElement('tr');

	const head1 = document.createElement('th');
	head1.innerText = 'Date';

	const head2 = document.createElement('th');
	head2.innerText = 'Price';
	// header Zellen in Zeile einfügen
	headerRow.appendChild(head1);
	headerRow.appendChild(head2);
	// Zeile in Tabelle einfügen
	tbl.appendChild(headerRow);

	// Jeden Eintrag in einer Zeile ausgeben
	prices.forEach(element => {
		const row = document.createElement('tr');

		// Datum
		const data1 = document.createElement('td');

		const date = new Date(element[0]); // timestamp
		const locDate = date.toLocaleDateString('de-DE');
		const locTime = date.toLocaleTimeString('de-DE');
		data1.innerText = locDate + ' ' + locTime;

		const data2 = document.createElement('td');
		data2.innerText = element[1];

		row.append(data1);
		row.append(data2);
		tbl.append(row);
	});

	// Erst am Ende wird die vollständige Tabelle dem DOM hinzugefügt
	document.body.append(tbl);
}

let prices;

fetch('prices.json')
	.then(response => response.json())
	.then(data => {
		prices = data.prices;
		pricesTable(prices);
	});