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
		this.listeners.forEach((callback) => callback(newState)); // no se si es necesaro el parametro newState
	},
	subscribe(callback: (any) => any) {
		// recibe callbacks para ser avisados posteriormente
		this.listeners.push(callback);
	},
	addItem(item) {
		// suma el nuevo item a la lista
		this.data.list.push(item);
	},
};
