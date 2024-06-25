import { Leafer, Group, Rect, MoveEvent, ZoomEvent } from 'leafer-ui'

const leafer = new Leafer({ // [!code hl:4]
    view: window,
    type: 'custom'
})

const zoomLayer = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(zoomLayer)
zoomLayer.add(rect)

leafer.on(MoveEvent.BEFORE_MOVE, function (e: MoveEvent) { // [!code hl:10]
    //  custom ...
    zoomLayer.moveWorld(e.moveX, e.moveY)
})

leafer.on(ZoomEvent.BEFORE_ZOOM, function (e: ZoomEvent) {
    // custom ...
    const center = { x: e.x, y: e.y }
    zoomLayer.scaleOfWorld(center, e.scale)
})