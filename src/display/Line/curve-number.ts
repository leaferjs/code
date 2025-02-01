// #创建 Line [绘制 0.2 曲率的曲线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],  // [x,y, x,y ...]
    curve: 0.2,
    strokeWidth: 5,
    stroke: 'rgb(50,205,121)'
})

leafer.add(line)