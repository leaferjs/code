// #模拟平移事件
import { Leafer, Rect, MoveEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(MoveEvent.MOVE, (e) => {
    console.log('move', e)
})

const { interaction } = leafer

leafer.waitReady(() => {  // [!code hl:5]

    interaction.move({ x: 100, y: 100, moveX: -100, moveY: -100 })

})