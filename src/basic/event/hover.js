// #region listen
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79', // 背景色
    stroke: 'black', // 边框
    strokeWidth: 2, // 边框粗细
    draggable: true
})

leafer.add(rect)


function onEnter(e) { // [!code hl:10]
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#32cd79'
}

rect.on(PointerEvent.ENTER, onEnter)
rect.on(PointerEvent.LEAVE, onLeave)
// #endregion listen