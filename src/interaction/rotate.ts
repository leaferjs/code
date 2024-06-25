import { Leafer, Rect, RotateEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(RotateEvent.ROTATE, (e: RotateEvent) => {
    rect.rotation += e.rotation
    console.log('rotate', e)
})

const { interaction } = leafer

leafer.waitReady(() => {  // [!code hl:6]

    // origin is {x: 100, y: 100}
    interaction.rotate({ x: 100, y: 100, rotation: 30 })

})