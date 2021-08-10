import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Meus Horários");
    }

    async getEjs() {
        return `
        <div class="main">
            <div class="main_top_bar">
                <div class="top_bar_toggle">
                    <span id="menuButton" class="material-icons">menu</span>
                </div>
                <div class="top_bar_reference">
                    Meus Horários
                </div>
                <div class="top_bar_icon">
                    <span class="material-icons">psychology</span>
                </div>
            </div>   

        </div>

         `;
    }
}

