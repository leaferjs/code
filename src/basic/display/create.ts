import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:7]
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79' // 背景色
})

leafer.add(rect)