// #around 属性 [围绕坐标(50,50) 为中心缩放 1.5 倍]
import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    around: 'center', // [!code hl:2]
    scale: 1.5, // scaleX = scaleY = 1.5
    fill: '#4DCB71',
    draggable: true
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))