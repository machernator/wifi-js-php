function onCloseModal(e) {
	modalWrapper.classList.remove('show');
}

const modalWrapper = document.getElementById('modalWrapper');
const modalClose = document.getElementById('modalClose');
const modalOpen = document.querySelectorAll('.button-modal');

/*
	Haben wir mehrere Elemente selektiert, müssen wir in einer Schleife jedem
	einzelnen Elment den Listener zuweisen.
*/
modalOpen.forEach(el => {
	el.addEventListener('click', function (e) {
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


