import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.add({ // [!code hl:8]
    tag: 'Rect', // 必须要有类名tag
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79'
})