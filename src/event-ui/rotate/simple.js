// #监听旋转交互事件
import { Leafer, Rect, RotateEvent, LeafHelper } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    type: 'draw'
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(RotateEvent.ROTATE, function (e) { // [!code hl:4]
    const center = { x: e.x, y: e.y }
    LeafHelper.rotateOfWorld(leafer, center, e.rotation)
})