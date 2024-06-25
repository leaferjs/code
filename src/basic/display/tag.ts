import { Leafer, UI } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = UI.one({ // [!code hl:8]
    tag: 'Rect',
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79'
})

leafer.add(rect)