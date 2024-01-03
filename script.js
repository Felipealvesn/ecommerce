let show = true;

const menuSection = document.querySelector("#menu-section")
const menuHamburguer = document.querySelector("#menu-hamburguer")

menuHamburguer.addEventListener("click", () => {
    document.body.style.overflow = show ?  'hidden' : 'intial'

    menuSection.classList.toggle('on', show)
    show = !show;

})
