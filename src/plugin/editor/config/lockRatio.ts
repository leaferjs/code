import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({  // [!code hl:4]
    view: window,
    editor: { lockRatio: true }
})

const rect = Rect.one({ editable: true, fill: 'rgb(50,205,121)', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.target = rect