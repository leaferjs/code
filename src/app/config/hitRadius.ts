import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    pointer: { hitRadius: 0 } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))