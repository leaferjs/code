import { Leafer, DragEvent, Pen } from 'leafer-ui'
import '@leafer-in/viewport'

const leafer = new Leafer({ view: window, type: 'design' })

const pen = new Pen()
leafer.add(pen)

leafer.on(DragEvent.START, (e: DragEvent) => {
    const point = e.getPagePoint() // 转换事件为 page 坐标 = pen.getPagePoint(e)  // [!code hl]
    pen.setStyle({ stroke: 'black', strokeWidth: 10, strokeCap: 'round', strokeJoin: 'round' })
    pen.moveTo(point.x, point.y)
})

leafer.on(DragEvent.DRAG, (e: DragEvent) => {
    const point = e.getPagePoint() // 转换事件为 page 坐标 = pen.getPagePoint(e)  // [!code hl]
    pen.lineTo(point.x, point.y)
})