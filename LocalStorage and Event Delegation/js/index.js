(function() {
	const addItems = document.querySelector('.add-items');
	const itemsList = document.querySelector('.plates');
	const items = JSON.parse(localStorage.getItem('items')) || [];

	function addItem(ev) {
		console.log('hello!');
		ev.preventDefault();
		const text = (this.querySelector('[name=item]')).value;
		const item = {
			text,
			done: false
		}
		items.push(item);
		populateList(items, itemsList);
		localStorage.setItem('items', JSON.stringify(items));
		this.reset();
	}

	function populateList(plates = [], platesList) {
		platesList.innerHTML = plates.map((plate, i) => {
			return `
				<li>
					<input type="checkbox" data-index=${i} id="item${i}" 
					${plate.done ? 'checked' : ''} />
					<label for="item${i}">${plate.text}</label>
				</li>
			`;
		}).join('');
	}

	function toggleDone(ev) {
		if(!ev.target.matches('input')) return;
		const el = ev.target;
		const index = el.dataset.index;
		items[index].done = !items[index].done;
		localStorage.setItem('items', JSON.stringify(items));
		populateList(items, itemsList);

	}

	addItems.addEventListener('submit', addItem);
	itemsList.addEventListener('click', toggleDone);
	populateList(items, itemsList);
})();






