import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'cover',
    }
})

leafer.add(rect)