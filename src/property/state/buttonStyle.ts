import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    hoverStyle: { fill: 'rgba(50,205,121, 0.8)' }, // [!code hl:2]
    pressStyle: { fill: 'rgba(50,205,121, 1)' },
    cursor: 'pointer'
})

leafer.add(rect)