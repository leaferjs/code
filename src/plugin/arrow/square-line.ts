// #箭头样式 [方形箭头（线性）]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    endArrow: 'square-line',  // [!code hl:1]
    strokeWidth: 5,
    stroke: 'rgb(50,205,121)'
})

leafer.add(arrow)