'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.createElement = function () {
        if (this.selector.startsWith('.', 0)) {
            const div = document.createElement('div')

            div.classList.add(`${this.selector.substr(1)}`)

            div.style.height = `${this.height}px`
            div.style.width = `${this.width}px`
            div.style.background = `${this.bg}`
            div.style.fontSize = `${this.fontSize}px`

            div.textContent = 'Hello, I`m block'

            document.body.insertAdjacentElement('afterbegin', div)

        } else if (this.selector.startsWith('#', 0)) {
            const p = document.createElement('p')

            p.id = `${this.selector.substr(1)}`

            p.style.height = `${this.height}px`
            p.style.width = `${this.width}px`
            p.style.background = `${this.bg}`
            p.style.fontSize = `${this.fontSize}px`

            p.textContent = 'Hello, I`m paragraph'

            document.body.insertAdjacentElement('beforeend', p)
        }
    }
}

const newDiv = new DomElement('.block', 100, 200, 'gray', 30);
const newP = new DomElement('#block', 200, 400, 'yellow', 30);

newDiv.createElement()
newP.createElement()







