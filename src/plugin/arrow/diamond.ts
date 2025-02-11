// #箭头样式 [菱形箭头]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    endArrow: 'diamond',  // [!code hl:1]
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(arrow)