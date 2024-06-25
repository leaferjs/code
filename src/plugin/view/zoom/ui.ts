import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400)
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom(rect, [100, 50]) // [!code hl:1]

}, 1000)
