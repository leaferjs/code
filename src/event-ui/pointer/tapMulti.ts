import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    pointer: {
        tapMore: false // [!code hl]
    }
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

rect.on(PointerEvent.TAP, () => {
    console.log('tap')
})

rect.on(PointerEvent.DOUBLE_TAP, () => {
    console.log('double_tap')
})

rect.on(PointerEvent.LONG_TAP, () => {
    console.log('long_tap')
})

rect.on(PointerEvent.LONG_PRESS, () => {
    console.log('long_press')
})