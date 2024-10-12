import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200)

leafer.add(rect)

setTimeout(() => {

    rect.destroy() // [!code hl] // 等同于 rect.remove() => rect.destroy()

}, 2000)
