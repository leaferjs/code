import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200)
const rect2 = Rect.one({ fill: 'blue' }, 300, 100, 200, 200)

leafer.addMany(rect, rect2)

setTimeout(() => {

    leafer.remove('Rect') // [!code hl] // 移除所有Rect元素

}, 2000)
