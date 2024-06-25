import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'
import { ScrollBar } from '@leafer-in/scroll'

const app = new App({ view: window, fill: '#000', editor: {} })

new ScrollBar(app, { theme: { fill: '#32cd79' } })  // [!code hl:1]

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 2400))