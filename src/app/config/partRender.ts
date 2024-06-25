import { Leafer, Rect, Debug } from 'leafer-ui'

const leafer = new Leafer({ // [!code hl:4]
    view: window,
    usePartRender: false
})

Debug.showRepaint = true

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)