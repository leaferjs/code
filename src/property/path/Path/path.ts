// #创建 Path [使用路径数据]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path = new Path({
    windingRule: 'evenodd',  // [!code hl:2] 
    path: 'X0 0 100 100 30M75 50P50 50 25',
    fill: 'rgb(50,205,121)'
})

leafer.add(path)
