import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    endArrow: 'arrow',  // [!code hl:3]
    strokeCap: 'round',
    strokeJoin: 'round',
    strokeWidth: 5,
    stroke: 'rgb(50,205,121)'
})

leafer.add(arrow)