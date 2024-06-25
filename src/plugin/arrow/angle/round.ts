import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    strokeCap: 'round', // [!code hl:2]
    strokeJoin: 'round',
    strokeWidth: 5,
    stroke: 'rgb(50,205,121)'
})

leafer.add(arrow)