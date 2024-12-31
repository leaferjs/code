import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })
// [!code hl:3]
// 元素.one( data, x?, y?, width?, height?)
const rect = Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200)

leafer.add(rect)