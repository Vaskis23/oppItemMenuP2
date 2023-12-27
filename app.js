let menu = new MenuItem([
    new MenuItem("Brand", "/"),
    new MenuItem("+1234456789", "tel:+123456789"),
    new MenuItem("Services", "/our-services"),
    new MenuItem("Team", "/our-team"),
    new MenuItem("Contacs", "/our-contacts"),
])

let headerTop = document.querySelector('top')
headerTop.innerHTML = menu.render()