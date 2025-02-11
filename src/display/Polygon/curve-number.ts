// #创建 Polygon [绘制 0.2 曲率的平滑多边形]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],  // [x,y, x,y ...]
    curve: 0.2,
    fill: '#32cd79'
})

leafer.add(polygon)