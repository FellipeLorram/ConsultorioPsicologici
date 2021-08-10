import AbstractView from "./AbstractView.js"


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Pacientes");

        this.img_modelo = "https://img.ibxk.com.br/2017/03/31/31153357416387.jpg?w=328"
    }


    async getEjs() {
        return `
                    <div class="main">
                        <div class="main_top_bar">
                            <div class="top_bar_toggle" id="menuButton">
                                <span class="material-icons">menu</span>
                            </div>
                            <div class="top_bar_reference">
                                Pacientes
                            </div>
                            <div class="top_bar_icon">
                                <span class="material-icons">psychology</span>
                            </div>

                        </div>

                        <div class="accordion__paciente">
                            <div class="box__paciente__header">
                                <div class="box_paciente_left_side">
                                    <div class="paciente_img"><img src=${this.img_modelo}></div>
                                    <span class="pacinte_nome">Beatriz</span>
                                </div>
                                <div>Presencial</div>
                                <div class="box_paciente_center">
                                    <span>Segundas</span>
                                    <span>16:00</span>
                                </div>
                                <div class="box_paciente_center">
                                    <div class="ativo_inativo"></div>
                                    <span class="ativo_inativo_text">Ativo</span>
                                </div>
                                <div class="box_paciente_left_right">
                                    <span class="material-icons">expand_more</span>
                                </div>
                            </div>
                            <div class="box__paciente_body ">
                                <div class="box__paciente_body_content">
                                    <div class="info_pessoais">
                                        <div class="info_header">
                                            <span class="material-icons">face</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Idade</span><span>21</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Telefone</span><span>(21)91234-5678</span>
                                        </div>
                                        <div class="info_container">
                                            <span>E-mail</span><span>email@email.com</span>
                                        </div>
                                    </div>
                                    <div class="info_consultas">
                                        <div class="info_header">
                                            <span class="material-icons">article</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Consultas</span><span>17</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Notas</span><span>8</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Faltas</span><span>2</span>
                                        </div>
                                    </div>
                                    <div class="info_financeiras">
                                        <div class="info_header">
                                            <span class="material-icons">monetization_on</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Pagamento</span><span>Mensal</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Valor</span><span>R$80</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Situação</span><span>Atrasado</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__paciente">
                            <div class="box__paciente__header">
                                <div class="box_paciente_left_side">
                                    <div class="paciente_img"><img src=${this.img_modelo}></div>
                                    <span class="pacinte_nome">Peterson</span>
                                </div>
                                <div>Presencial</div>
                                <div class="box_paciente_center">
                                    <span>Segundas</span>
                                    <span>16:00</span>
                                </div>
                                <div class="box_paciente_center">
                                    <div class="ativo_inativo inativo"></div>
                                    <span class="ativo_inativo_text inativo">Inativo</span>
                                </div>

                                <div class="box_paciente_left_right">
                                    <span class="material-icons">expand_more</span>
                                </div>
                            </div>
                            <div class="box__paciente_body ">
                                <div class="box__paciente_body_content">
                                    <div class="info_pessoais">
                                        <div class="info_header">
                                            <span class="material-icons">face</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Idade</span><span>21</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Telefone</span><span>(21)91234-5678</span>
                                        </div>
                                        <div class="info_container">
                                            <span>E-mail</span><span>email@email.com</span>
                                        </div>
                                    </div>
                                    <div class="info_consultas">
                                        <div class="info_header">
                                            <span class="material-icons">article</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Consultas</span><span>17</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Notas</span><span>8</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Faltas</span><span>2</span>
                                        </div>
                                    </div>
                                    <div class="info_financeiras">
                                        <div class="info_header">
                                            <span class="material-icons">monetization_on</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Pagamento</span><span>Mensal</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Valor</span><span>R$80</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Situação</span><span>Atrasado</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__paciente">
                            <div class="box__paciente__header">
                                <div class="box_paciente_left_side">
                                    <div class="paciente_img"><img src=${this.img_modelo}></div>
                                    <span class="pacinte_nome">Fellipe Lorram</span>
                                </div>
                                <div>Presencial</div>
                                <div class="box_paciente_center">
                                    <span>Segundas</span>
                                    <span>16:00</span>
                                </div>
                                <div class="box_paciente_center">
                                    <div class="ativo_inativo"></div>
                                    <span class="ativo_inativo_text">Ativo</span>
                                </div>
                                <div class="box_paciente_left_right">
                                    <span class="material-icons">expand_more</span>
                                </div>
                            </div>
                            <div class="box__paciente_body ">
                                <div class="box__paciente_body_content">
                                    <div class="info_pessoais">
                                        <div class="info_header">
                                            <span class="material-icons">face</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Idade</span><span>21</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Telefone</span><span>(21)91234-5678</span>
                                        </div>
                                        <div class="info_container">
                                            <span>E-mail</span><span>email@email.com</span>
                                        </div>
                                    </div>
                                    <div class="info_consultas">
                                        <div class="info_header">
                                            <span class="material-icons">article</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Consultas</span><span>17</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Notas</span><span>8</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Faltas</span><span>2</span>
                                        </div>
                                    </div>
                                    <div class="info_financeiras">
                                        <div class="info_header">
                                            <span class="material-icons">monetization_on</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Pagamento</span><span>Mensal</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Valor</span><span>R$80</span>
                                        </div>
                                        <div class="info_container">
                                            <span>Situação</span><span>Atrasado</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
         `;
    }
}

