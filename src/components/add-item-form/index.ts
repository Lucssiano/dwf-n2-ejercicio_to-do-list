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

		this.shadow.appendChild(style);
	}
}

customElements.define('add-item-form', ItemForm);
