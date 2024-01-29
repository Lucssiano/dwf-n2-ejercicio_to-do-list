import { state } from '../../state';

export function initForm() {
	class ItemForm extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: 'open' });

			const form = document.createElement('form');
			form.classList.add('to-do-list-form');
			form.innerHTML = `
      <form class="to-do-list-form">
        <input type="text" name="item" placeholder="Agregá un item" class="form__input"/>
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

			const formEl = form.querySelector('.to-do-list-form');
			formEl?.addEventListener('click', (event) => {
				event.preventDefault();
				// agregar funcionalidad
			});

			shadow.appendChild(form);
			shadow.appendChild(style);
		}
	}
	customElements.define('add-item-form', ItemForm);
}
