import { Leafer, Rect, PointerEvent, UIEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

Object.defineProperty(UIEvent.prototype, 'evt', {
    get() { return this.origin }
})

function onEnter(e) {
    e.current.fill = '#42dd89'
    console.log(e.evt)
}

function onLeave(e) {
    e.current.fill = '#32cd79'
}

PointerEvent.changeName(PointerEvent.ENTER, 'pointerenter')  // [!code hl:5]
PointerEvent.changeName(PointerEvent.LEAVE, 'pointerleave')

rect.on('pointerenter', onEnter)
rect.on('pointerleave', onLeave)