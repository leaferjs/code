import { Leafer, Pen, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:8]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#79CB4D' }, { offset: 1, color: '#FEB027' }] } })
pen.roundRect(0, 0, 100, 100, 30)

pen.add(new Ellipse({ x: 20, y: 20, width: 60, height: 60, innerRadius: 0.5, startAngle: -60, endAngle: 180, fill: 'white' }))

leafer.add(pen)