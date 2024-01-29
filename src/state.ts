export const state = {
	data: {
		list: [],
	},
	listeners: [], // los callbacks
	getState() {
		return this.data;
	},
	setState(newState) {
		// modifica this.data (el state) e invoca los callbacks
		this.data = newState;
		this.listeners.forEach((callback) => callback()); // no se si es necesario el parametro newState en el callback
	},
	subscribe(callback: (any) => any) {
		// recibe callbacks para ser avisados posteriormente
		this.listeners.push(callback);
		/* Se está ejecutando una vez sola (?) */
	},
	addItem(item) {
		// suma el nuevo item a la lista
		this.data.list.push(item);
	},
	removeItem(item) {
		this.data.list = this.data.list.filter((el) => el !== item);
	},
};
