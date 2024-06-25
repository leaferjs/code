import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:6]
    width: 100,
    height: 100,
    corners: 3,
    innerRadius: 0.15,
    fill: 'rgb(50,205,121)'
})

leafer.add(star)