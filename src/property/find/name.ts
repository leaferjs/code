import { Leafer, Rect, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ name: 'hello', fill: '#32cd79', stroke: 'black' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ name: 'hello', fill: '#32cd79', stroke: 'black', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(ellipse)

console.log(
    leafer.find(function (item) {  // [!code hl:3] 
        return item.name === 'hello' ? 1 : 0 // [rect1, ellipse]
    })
)