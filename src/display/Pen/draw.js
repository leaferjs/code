import { Leafer, DragEvent, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen()
leafer.add(pen)

leafer.on(DragEvent.START, (e) => {
    const inner = e.getInnerPoint(pen)
    pen.setStyle({ stroke: 'black', strokeWidth: 10, strokeCap: 'round', strokeJoin: 'round' })
    pen.moveTo(inner.x, inner.y)
})

leafer.on(DragEvent.DRAG, (e) => {
    const inner = e.getInnerPoint(pen)
    pen.lineTo(inner.x, inner.y)
})