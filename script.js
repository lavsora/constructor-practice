'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    let newElement;

    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.createElement = function () {
        if (this.selector.startsWith('.', 0)) {
            newElement = document.createElement('div')

            newElement.classList.add(`${this.selector.substr(1)}`)

            newElement.textContent = 'Hello, I`m block'

        } else if (this.selector.startsWith('#', 0)) {
            newElement = document.createElement('p')

            newElement.id = `${this.selector.substr(1)}`

            newElement.textContent = 'Hello, I`m paragraph'
        }

        newElement.style.height = `${this.height}px`
        newElement.style.width = `${this.width}px`
        newElement.style.background = `${this.bg}`
        newElement.style.fontSize = `${this.fontSize}px`

        document.body.insertAdjacentElement('afterbegin', newElement)
    }
}

const newDiv = new DomElement('.block', 100, 200, 'gray', 30);
const newP = new DomElement('#block', 200, 400, 'yellow', 30);

newDiv.createElement()
newP.createElement()







