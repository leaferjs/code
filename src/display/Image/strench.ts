import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:3]
    url: '/image/leafer.jpg',
    draggable: true
})

leafer.add(image)