import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ // [!code hl:4]
    view: window,
    pointer: { through: true }
})

const data = { x: 100, y: 100, fill: '#32cd00' }

const bottomRect = new Rect(data)
leafer.add(bottomRect)

const rect = new Rect(data)
leafer.add(rect)

rect.on(PointerEvent.DOWN, (e: PointerEvent) => {
    console.log(e.throughPath) //{ list: [bottomRect, rect, leafer] }
})