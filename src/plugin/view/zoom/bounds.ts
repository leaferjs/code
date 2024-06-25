import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom({ x: 650, y: 400, width: 100, height: 100 }, [100, 20, 50, 20]) // [!code hl:1]

}, 1000)
