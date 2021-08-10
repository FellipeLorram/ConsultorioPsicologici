export default class {
    constructor(params) {
        this.params = params

    }

    setTitle(title) {
        document.title = title
    }

    async getEjs() {
        return "";
    }

  

    frontEndEvents() {
        const toggleSideBar = document.querySelector('#menuButton');
        const main = document.querySelector('.main');
        const navigation = document.querySelector('.navigation');

        toggleSideBar.addEventListener('click', () => {
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        });

        const accordionItemHeaders = document.querySelectorAll(".box__paciente__header");

        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", () => {

                accordionItemHeader.classList.toggle("active");
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                    accordionItemBody.style.maxHeight = 0;
                }

            });
        });
    }

}