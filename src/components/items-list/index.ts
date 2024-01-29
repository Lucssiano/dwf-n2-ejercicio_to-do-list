import { state } from '../../state';

export function initList() {
	class itemsList extends HTMLElement {
		constructor() {
			super();
		}
		render() {
			const shadow = this.attachShadow({ mode: 'open' });

			const divRoot = document.createElement('div');
			divRoot.classList.add('list-item-container');

			const itemListText = this.getAttribute('text');

			divRoot.innerHTML = `
				<div class="list-square"></div>
				<div class="list-item">${itemListText}</div>
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

			const listSquare = divRoot.querySelector('.list-square');
			listSquare?.addEventListener('click', () => {
				state.removeItem(this);
				this.remove();
			});

			shadow.appendChild(divRoot);
			shadow.appendChild(style);
		}
	}
	customElements.define('items-list', itemsList);
}
