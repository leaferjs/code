import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'radial',
        from: { type: 'percent', x: 0.2, y: 0.2 },
        to: { type: 'percent', x: 0.8, y: 0.8 },
        stops: ['#FF4B4B', '#FEB027']
    },
})

leafer.add(rect)