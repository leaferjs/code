import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 0, 0, 100, 100)

app.tree.add(rect)


const resize = true // [!code hl:5]

rect.scaleOf({ x: 0, y: 0 }, 2, 2, resize) // scale值将转为宽高

console.log(rect.scaleX, rect.scaleY, rect.width, rect.height)  // 1, 1, 200, 200