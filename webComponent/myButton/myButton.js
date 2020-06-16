const template = document.createElement('template')
template.innerHTML = `
  <style>
    .my-button{
      background-color: red;
      padding: 5px 20px;
      border-radius: 30px;
      color: white;
    }
  </style>
  <button class="my-button"><slot></slot></button>
`;

class Mybutton extends HTMLElement {
  
  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }
  
  constructor() {
    super()
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'})
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }

  connectedCallback() {
    console.log('my button is conneted !!!')
  }
}

export default window.WebComponents.waitFor(() => customElements.define('my-button', Mybutton))
