// #创建 Ellipse [绘制扇形圆环]
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:8]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    fill: "rgb(50,205,121)"
})

leafer.add(ellipse)