// #等待元素被添加到应用中时，执行回调
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ fill: '#32cd79' })

rect.waitLeafer(() => { // [!code hl:3]
    rect.draggable = true
})

leafer.add(rect)