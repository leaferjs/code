// #箭头样式 [标注箭头]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    startArrow: 'mark',// [!code hl:2]
    endArrow: 'mark',
    strokeWidth: 5,
    stroke: 'rgb(50,205,121)'
})

leafer.add(arrow)