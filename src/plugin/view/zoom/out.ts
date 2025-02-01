// #视图控制 [缩小]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom('out') // [!code hl:1]

}, 1000)
