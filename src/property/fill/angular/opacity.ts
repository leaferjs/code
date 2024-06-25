import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:10]
        type: 'angular',
        opacity: 0.5,
        stops: [
            { offset: 0, color: { r: 255, g: 75, b: 75 } },
            { offset: 0.3, color: { r: 254, g: 176, b: 39 } },
            { offset: 0.7, color: { r: 121, g: 203, b: 77 } },
            { offset: 1, color: { r: 255, g: 75, b: 75 } }
        ]
    }
})

leafer.add(rect)