'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.createElement = function () {
            const square = document.createElement('div')

            square.classList.add(`${this.selector}`)

            square.style.position = `absolute`
            square.style.height = `${this.height}px`
            square.style.width = `${this.width}px`
            square.style.background = `${this.bg}`

            document.body.insertAdjacentElement('afterbegin', square)
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








