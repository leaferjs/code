// #创建 Star [绘制星光]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:6]
    width: 100,
    height: 100,
    corners: 4,
    innerRadius: 0.1,
    fill: 'rgb(50,205,121)'
})

leafer.add(star)