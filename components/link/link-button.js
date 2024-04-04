export class Link extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const type = this.getAttribute('type')
        const link = this.getAttribute('link') ?? "#"

        if (type === 'closed') {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./components/link/style.css">
                <li class="disabled">
                    <slot></slot>
                    <ion-icon name="lock-closed-outline"></ion-icon> 
                </li>
            `
            return;
        }

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/link/style.css">
            <a href="${link}" target="_blank">
            <li>
                <slot></slot>
                <ion-icon class="r-45" name="arrow-forward-outline"></ion-icon> 
            </li>
            </a>
        `
        this.shadowRoot.appendChild = '<link rel="stylesheet" href="./style/global.css">'
    }
}
