import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgb(50,205,121)'
})

leafer.add(rect)

rect.windingRule = 'evenodd' // [!code hl:2] 
rect.pen.roundRect(0, 0, 100, 100, 30).drawArc(50, 50, 25)
