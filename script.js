'use strict'

const DomElement = function (selector, height, width, bg, fontSize, position) {
    let newElement;

    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.position = position
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
        newElement.style.position = `${this.position}`

        document.body.insertAdjacentElement('afterbegin', newElement)
    }
    this.arrowKey = function (event) {
        const upDown = newElement.offsetTop;
        const rightLeft = newElement.offsetLeft;

        if (event.keyCode === 38) {
            newElement.style.top = upDown - 10 + 'px';
        }
        if (event.keyCode === 40) {
            newElement.style.top = upDown + 10 + 'px';
        }
        if (event.keyCode === 39) {
            newElement.style.left = rightLeft + 10 + 'px';
        }
        if (event.keyCode === 37) {
            newElement.style.left = rightLeft - 10 + 'px';
        }
    }
}

document.addEventListener('DOMContentLoaded', (() => {
    const newSquare = new DomElement('.square', 100, 100, 'purple', 0, 'absolute');

    newSquare.createElement();

    window.addEventListener('keydown', newSquare.arrowKey)
}))







