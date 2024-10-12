import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    around: 'center', // [!code hl:2]
    scale: 2, // scaleX = scaleY = 2
    draggable: true,
    fill: '#4DCB71'
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))