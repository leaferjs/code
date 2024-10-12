import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window })


const rect = new Rect({
    x: 0,
    y: 50,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    animation: {
        keyframes: [{ style: { x: 100, scale: 0.5 } }, { style: { x: 200, scale: 1.5 }, duration: 2 }, { style: { x: 400, scale: 1 }, duration: 2 }],
        loop: true,
    }
})

leafer.add(rect)

setTimeout(() => {

    rect.__animate.pause()
    rect.__animate.seek(3)

    setTimeout(() => {

        rect.__animate.play()
        rect.__animate.seek(1)

    }, 1000)

}, 1000)

console.log(rect.animate())
