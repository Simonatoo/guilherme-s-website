export class Header extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style/global.css">
        <div class="top">
            <div class="avatarGroup">
                <img id="avatar" src="./assets/avatar.png" alt="Profile picture" width="44" height="44">
                <p class="c-white">Guilherme Simonato</p>
            </div>
            <div class="c-secondary f-micro op-50">
                <span>If necessary, use</span>
                <span class="keyalt">Tab</span>
                <span>or</span>
                <span class="keyalt">Shift</span>
                <span>+</span>
                <span class="keyalt">Tab</span>
                <span>to navegate around the site.</span>
            </div>
        </div> 
        `
    }
}
