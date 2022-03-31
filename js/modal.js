const modalWrapper = document.getElementById('modalWrapper');
const modalClose = document.getElementById('modalClose');
const modalOpen = document.querySelector('.button-modal');

modalOpen.addEventListener('click', function (e) {
	console.log('open');

	modalWrapper.classList.add('show');
});

modalClose.addEventListener('click', function (e) {
	console.log('close');
	modalWrapper.classList.remove('show');
});


