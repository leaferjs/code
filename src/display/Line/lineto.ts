// #创建 Line [绘制到目标点的直线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:5]
    toPoint: { x: 100, y: 50 },
    strokeWidth: 5,
    stroke: 'rgb(50,205,121)'
})

leafer.add(line)