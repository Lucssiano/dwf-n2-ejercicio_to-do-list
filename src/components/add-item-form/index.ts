import { state } from '../../state';

class ItemForm extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
		const formEl = this.shadow.querySelector('.to-do-list-form');
		formEl?.addEventListener('submit', (e: Event) => {
			e.preventDefault();
			const lastState = state.getState();
			if (lastState.list.length === 6) {
				alert('No se pueden agregar más de 6 items');
				return;
			}
			const form = e.target as HTMLFormElement;
			const inputTextValue = form.text.value;
			state.addItem(inputTextValue);
			form.reset();
		});
	}

	render() {
		this.shadow.innerHTML = `
      <form class="to-do-list-form">
        <input type="text" name="text" placeholder="Agregá un item" class="form__input" required/>
        <button type="submit" class="form__button">+</button>
      </form>
      `;

		const style = document.createElement('style');
		style.innerHTML = `
			.to-do-list-form {
			  display: flex;
			  justify-content: space-between;
			  gap: 10px;
			  height: 100%;
			}
			.form__input {
			  min-width: 130px;
			  width: 80%;
			  padding: 20px;
			}
			.form__button {
			  min-width: 60px;
			  font-size: 30px;
			}
			@media (min-width: 769px) {
			  .form__button {
			    cursor: pointer;
			  }
			}
			`;

		// const listContainer = document.querySelector('.to-do-list-box');
		// const formEl = divRoot.querySelector('.to-do-list-form');

		// formEl?.addEventListener('submit', (e: Event) => {
		// 	e.preventDefault();
		// 	const form = e.target as HTMLFormElement;
		// 	const inputText = form.item.value;
		// 	if (listContainer && listContainer.childElementCount <= 5) {
		// 		const newItem = document.createElement('items-list') as any;
		// 		newItem.setAttribute('text', inputText);
		// 		newItem.render();
		// 		listContainer?.appendChild(newItem);

		// 		state.addItem(newItem);
		// 		const lastState = state.getState();
		// 		state.setState({
		// 			...lastState,
		// 			list: [...lastState.list],
		// 		});
		// 	} else {
		// 		alert('No se pueden agregar más de 6 items');
		// 	}
		// 	form.reset();
		// });

		// state.subscribe(() => {
		// 	const newState = state.getState();
		// 	console.log('este es el listener', newState);
		// });

		// shadow.appendChild(divRoot);
		this.shadow.appendChild(style);
	}
}

customElements.define('add-item-form', ItemForm);
