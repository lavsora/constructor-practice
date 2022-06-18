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

document.addEventListener('DOMContentLoaded', (() => {
    const newSquare = new DomElement('square', 100, 100, 'green', 0);

    newSquare.createElement();

    const squareElement = document.querySelector('.square')

    const arrowKey = (event) => {
        if (event.keyCode === 38) {
            const up = squareElement.offsetTop;
            squareElement.style.top = up - 10 + 'px';
        }
        if (event.keyCode === 40) {
            const down = squareElement.offsetTop;
            squareElement.style.top = down + 10 + 'px';
        }
        if (event.keyCode === 39) {
            const right = squareElement.offsetLeft;
            squareElement.style.left = right + 10 + 'px';
        }
        if (event.keyCode === 37) {
            const left = squareElement.offsetLeft;
            squareElement.style.left = left - 10 + 'px';
        }
    }

    window.addEventListener('keydown', arrowKey)
}))







