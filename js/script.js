document.onclick = (e) => {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')){
			document.body.classList.toggle('menu-open');
	}
}