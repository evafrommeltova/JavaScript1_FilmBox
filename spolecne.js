// ukol 3
const hamburger_menu = document.getElementById("menu-polozky")
const menu_tlacitko = document.getElementById("menu-tlacitko")

const ShowMenu = () => {
    hamburger_menu.classList.toggle("show")
       
    if (hamburger_menu.classList.contains("show")) {
        menu_tlacitko.innerHTML = '<i class="fas fa-times"></i>'
    } else {
        menu_tlacitko.innerHTML = '<i class="fas fa-bars"></i>'
    }
}

document.addEventListener('click', ShowMenu)