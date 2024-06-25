import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    zoom: { min: 0.02, max: 256 } // [!code hl]
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)