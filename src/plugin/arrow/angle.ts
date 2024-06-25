import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({  // [!code hl:5]
    y: 50,
    strokeWidth: 5,
    stroke: 'rgb(50,205,121)'
})

leafer.add(arrow)