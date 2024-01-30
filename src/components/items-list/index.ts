import { state } from '../../state';

class itemsList extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
	}

	connectedCallback() {
		state.subscribe(() => {
			this.render();
			// entender bien como funca esto
		});
	}

	render() {
		const list = state.getState().list;

		this.shadow.innerHTML = `${list
			.map((item) => {
				return ` 
				<div class="list-item-container">
					<div class="list-square"></div>
					<span class="item">${item}</span>	
				</div>
			`;
			})
			.join('')}
		`;

		const style = document.createElement('style');
		style.innerHTML = `
			.list-item-container {
				border-bottom: 2px solid #000;
				display: flex;
				align-items: center;
				gap: 10px;
				padding: 10px 0;
				margin-bottom: 15px;
			}
			.list-square {
				width: 30px;
				height: 30px;
				border: 1px solid #000;
			}
			.list-item {
				font-size: 18px;
			}
			`;

		const listSquare = this.shadow.querySelectorAll('.list-square');
		listSquare?.forEach((square) => {
			square.addEventListener('click', () => {
				(square?.parentNode as Element)?.remove();
				const itemToRemove = square?.nextElementSibling?.textContent;
				state.removeItem(itemToRemove);
			});
		});

		this.shadow.appendChild(style);
	}
}

customElements.define('items-list', itemsList);
