import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:6]
    width: 100,
    height: 100,
    fill: 'rgb(50,205,121)',
    cornerRadius: [0, 40, 20, 40]
})

leafer.add(rect)