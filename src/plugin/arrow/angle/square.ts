// #箭头样式 [角度箭头 - 箭头变得更大一些]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    strokeCap: 'square', // [!code hl:1]
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(arrow)