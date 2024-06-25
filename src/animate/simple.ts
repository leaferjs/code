import { Leafer, Rect, PointerEvent, RenderEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const rect = Rect.one({ fill: '#32cd79' }, 0, 30)
leafer.add(rect)

const event = leafer.on_(RenderEvent.NEXT, () => { // [!code hl:5]
    rect.rotateOf('center', 5)
    rect.move(5, 0)
    if (rect.x > 700) rect.x = 0
})

rect.on(PointerEvent.DOWN, () => {
    leafer.off_(event)
})