import { Leafer, Rect, PointerButton, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(PointerEvent.DOWN, (e) => {
    console.log('down', e)
})

rect.on(PointerEvent.TAP, (e) => {
    console.log('tap', e)
})

const { interaction } = leafer

leafer.waitReady(() => { // [!code hl:12]

    interaction.pointerDown({ x: 100, y: 100 })
    interaction.pointerUp()

    interaction.pointerDown({ x: 100, y: 100, buttons: PointerButton.MIDDLE })
    interaction.pointerUp()

    interaction.pointerDown({ x: 100, y: 100, buttons: PointerButton.RIGHT })
    interaction.pointerUp()

})



