// #创建 Polygon [绘制三角形]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:5]
    width: 100,
    height: 100,
    sides: 3,
    fill: '#32cd79'
})

leafer.add(polygon)