import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    hittable: false // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))