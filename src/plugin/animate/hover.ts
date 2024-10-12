import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate'
import '@leafer-in/state'

const leafer = new Leafer({ view: window })


const rect = new Rect({
    x: 0,
    y: 50,
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    origin: 'center',
    hoverStyle: {
        scaleX: 1.5,
        scaleY: 1.5,
        transition: true,
        // easeIn: true,
        // easeOut: true,
    },
    pressStyle: {
        rotation: 90,
        transition: true,
    }
})

leafer.add(rect)

