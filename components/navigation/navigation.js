export class Navigation extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./style/global.css">
            <ul>
                <p>Projects</p>
                <ds-link type="closed">Splitcost</ds-link>
                <ds-link type="closed">Carpii</ds-link>
                <ds-link type="closed">Contabuleiro</ds-link>
            </ul>
            <ul>
                <p>Personal projects</p>
                <ds-link type="closed">Geneses Design System</ds-link>
                <ds-link link="https://www.google.com">FelpsAlanbits</ds-link>
            </ul>
            <ul>
                <p>Find me</p>
                <ds-link>Linkedin</ds-link>
                <ds-link>Twitter</ds-link>
                <ds-link type="closed">Behance</ds-link>
            </ul> 
        `
    }
}
