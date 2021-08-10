export default ({ navigateTo }) => {
    document.querySelectorAll('.nav_link').forEach(link => {
        if (window.location.href === link.href) link.classList.add('active');
    });


    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();

            document.querySelectorAll('.nav_link').forEach(link => {
                link.classList.remove('active');
            });


            //e.target.classList.add('active');
            navigateTo(e.target.href);
            if (window.location.href === e.target.href) e.target.classList.add('active');

        }

        if (e.target.matches("[class='link_text']") || e.target.matches("[class='material-icons link_icon']")) {
            e.preventDefault();

            document.querySelectorAll('.nav_link').forEach(link => {
                link.classList.remove('active');
            });
            e.target.parentElement.classList.add('active');

            navigateTo(e.target.parentElement.href);
        }
    });

    
}