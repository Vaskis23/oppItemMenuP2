class MenuItem {
    constructor (title, url, icon = null) {
        this.title = title;
        this.url = url;
        this.icon = icon;

        if (url.match(/^[-a-z\/:0-9]+$/) !== null) {
            this.url = url;
        } else {
            console.error("ERROR: Неверный формат URL");
        }
    }

    render() {
        let iconHtml = this.icon ? `<i class="${this.icon}"></i>` : '';
        return `<a href="${this.url}">${iconHtml} ${this.title}</a>`;
    }

    static validateBootstrapIcon(icon) {
        const regex = /^bi-[a-z-]+$/;
        return regex.test(icon);
    }
}


    //HW1: add icon to constructor
    //HW2: refactor render() -> to show the icon if it exists
    //HW3: validate the formula for a bootstrap icon - regex

    //MenuItem (url, title, icon = null)



    // render () {
    //     return `
    //         <a href="${this.url}">${this.title}</a>
    //     `
    // }





class Menu {
    constructor (items) {
        this.items = items
    }


    render() {
        return `<nav>` + this.items.map(item => item.render()).join() + `</nav>`
    }
}