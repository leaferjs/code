import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:5]
    width: 100,
    height: 100,
    corners: 5,
    fill: 'rgb(50,205,121)'
})

leafer.add(star)