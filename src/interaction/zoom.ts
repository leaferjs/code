// #模拟缩放事件
import { Leafer, Rect, ZoomEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(ZoomEvent.ZOOM, (e) => {
    console.log('zoom', e)
})

const { interaction } = leafer

leafer.waitReady(() => {  // [!code hl:6]

    // origin is {x: 100, y: 100}
    interaction.zoom({ x: 100, y: 100, scale: 0.2 })

})