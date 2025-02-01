// #创建 Ellipse [绘制圆]
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:6]
    width: 100,
    height: 100,
    fill: "rgb(50,205,121)"
})

leafer.add(ellipse)