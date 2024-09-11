import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    y: 100,
    cornerRadius: 50,
    fill: '#32cd79',
    animation: { // [!code hl:6]
        style: { x: 500, cornerRadius: 0, fill: '#ffcd00' }, // style keyframe
        // options
        duration: 1,
        direction: 'alternate'
    }
})

leafer.add(rect)