// #创建 Path [使用 pen 绘制]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path = new Path({
    fill: 'rgb(50,205,121)'
})

leafer.add(path)

path.windingRule = 'evenodd' // [!code hl:2] 
path.pen.roundRect(0, 0, 100, 100, 30).drawArc(50, 50, 25)
