import { Leafer, Rect, ZoomEvent, LeafHelper } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    type: 'draw'
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(ZoomEvent.ZOOM, function (e) { // [!code hl:4]
    const center = { x: e.x, y: e.y }
    LeafHelper.zoomOfWorld(leafer, center, e.scale)
})