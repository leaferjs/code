import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],  // [x,y, x,y ...]
    curve: true,
    fill: 'rgb(50,205,121)'
})

leafer.add(polygon)