export const navBar = () => {
    const nav = document.querySelector("nav");
    const burger = document.querySelector(".burger");
    // mob nav bar
    const toggleNav = () => {
        nav.classList.toggle("nav-active");
    }
    burger.addEventListener('click', toggleNav);
    // fixed on scroll
    window.onscroll = () => {
        if (window.pageYOffset >= 10) {
            nav.classList.add("nav-fixed");
        } else {
            nav.classList.remove("nav-fixed")
        };
    }
}