import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:8]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 1,
    stroke: "rgb(50,205,121)",
    strokeWidth: 10,
    strokeAlign: 'center',
    strokeCap: 'round'
})

leafer.add(ellipse)