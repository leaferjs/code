import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 0, y: 0, width: 100, height: 100, fill: '#FF4A2C' })

const around = new Rect({ // [!code hl:10]
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    around: 'center',
    rotation: 45,
    draggable: true,
    fill: '#4DCB71'
})

leafer.add(rect)
leafer.add(around)