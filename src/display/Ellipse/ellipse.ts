// #创建 Ellipse [绘制椭圆]
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:5]
    width: 50,
    height: 100,
    fill: "rgb(50,205,121)"
})

leafer.add(ellipse)