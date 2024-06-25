import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:5]
    width: 100,
    height: 100,
    sides: 3,
    fill: 'rgb(50,205,121)'
})

leafer.add(polygon)