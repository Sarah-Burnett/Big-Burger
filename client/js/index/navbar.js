export const navBar = () => {
    const nav = document.querySelector("nav");
    // mob nav bar
    const toggleNav = () => nav.classList.toggle("nav-active")
    document.querySelector(".burger").addEventListener('click', toggleNav);
    // fixed on scroll
    window.onscroll = () => {
        if (window.pageYOffset >= 10) {
            nav.classList.add("nav-fixed");
        } else {
            nav.classList.remove("nav-fixed")
        };
    }
}