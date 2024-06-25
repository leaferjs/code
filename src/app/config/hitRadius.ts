import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ // [!code hl:4]
    view: window,
    pointer: { hitRadius: 0 }
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)