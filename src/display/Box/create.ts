// #创建 Box [标准创建]
import { Leafer, Box, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: 'gray' })

const box = new Box({ // [!code hl:4]
    width: 100,
    height: 100,
    fill: '#FF4B4B'
})

const rect = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(rect)