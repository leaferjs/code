import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        scale: 0.2
    }
})

leafer.add(rect)