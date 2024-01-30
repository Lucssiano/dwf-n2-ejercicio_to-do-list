const t={data:{list:[]},listeners:[],getState(){return this.data},setState(t){this.data=t,this.listeners.forEach(t=>t()),console.log("la data",this.data),console.log("listeners",this.listeners)},subscribe(t){this.listeners.push(t)},addItem(t){let e=this.getState();e.list.push(t),this.setState(e)},removeItem(t){let e=this.getState(),s=e.list.filter(e=>e!==t);e.list=s,this.setState(e)}};class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();let e=this.shadow.querySelector(".to-do-list-form");e?.addEventListener("submit",e=>{if(e.preventDefault(),6===t.getState().list.length){alert("No se pueden agregar más de 6 items");return}let s=e.target,i=s.text.value;t.addItem(i),s.reset()})}render(){this.shadow.innerHTML=`
      <form class="to-do-list-form">
        <input type="text" name="text" placeholder="Agreg\xe1 un item" class="form__input" required/>
        <button type="submit" class="form__button">+</button>
      </form>
      `;let t=document.createElement("style");t.innerHTML=`
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
			`,this.shadow.appendChild(t)}}customElements.define("add-item-form",e);class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){t.subscribe(()=>{this.render()})}render(){let e=t.getState().list;this.shadow.innerHTML=`${e.map(t=>` 
				<div class="list-item-container">
					<div class="list-square"></div>
					<span class="item">${t}</span>	
				</div>
			`).join("")}
		`;let s=document.createElement("style");s.innerHTML=`
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
			`;let i=this.shadow.querySelectorAll(".list-square");i?.forEach(e=>{e.addEventListener("click",()=>{e?.parentNode?.remove();let s=e?.nextElementSibling?.textContent;t.removeItem(s)})}),this.shadow.appendChild(s)}}customElements.define("items-list",s);
//# sourceMappingURL=index.78b9f3f3.js.map
