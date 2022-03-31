function onCloseModal(e) {
	modalWrapper.classList.remove('show');
}

const modalWrapper = document.getElementById('modalWrapper');
const modalClose = document.getElementById('modalClose');
const modalOpen = document.querySelectorAll('.button-modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

/*
	Haben wir mehrere Elemente selektiert, müssen wir in einer Schleife jedem
	einzelnen Elment den Listener zuweisen.
*/
modalOpen.forEach(el => {
	el.addEventListener('click', function (e) {
		const url = e.currentTarget.dataset.url;
		// Wenn eine URL gesetzt ist, lade sie und füge sie in den
		// modalHead und modalBody ein
		if (url !== undefined) {
			// fetch
			fetch(url)
				.then(response => response.json())
				.then(data => {
					modalTitle.innerText = data.title;
					modalBody.innerHTML = data.body;
				});
		}

		modalWrapper.classList.add('show');
	});
});

modalClose.addEventListener('click', onCloseModal);
modalWrapper.addEventListener('click', function (e) {
	// Nur wenn das umliegende Wrapper Element geklickt wurde ...
	// Alternativ: e.target.isSameNode(e.currentTarget)
	if (e.target === e.currentTarget) {
		modalWrapper.classList.remove('show');
	}
});