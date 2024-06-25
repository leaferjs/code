import { Leafer, Rect, MoveEvent } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    type: 'draw'
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(MoveEvent.MOVE, function (e: MoveEvent) { // [!code hl:4]
    leafer.moveWorld(e.moveX, e.moveY)
})