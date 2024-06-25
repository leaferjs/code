import { Leafer, Rect, RenderEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(RenderEvent.BEFORE, function () { // [!code hl:3]
    // render before (Layout has ended)
})  
