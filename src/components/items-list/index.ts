// import { state } from '../../state';

export function initForm() {
	class itemsList extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: 'open' });


			
            const style = document.createElement("style");

			// shadow.appendChild(form);
			shadow.appendChild(style);
		}
	}
	customElements.define('items-list', itemsList);
}
