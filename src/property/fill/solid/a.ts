// #纯色填充
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: { // [!code hl:4]
        type: 'solid',
        color: '#32cd79'
    },
})

leafer.add(rect)