import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({  // [!code hl:7]
    view: window,
    editor: {
        point: { cornerRadius: [0, 0, 10, 0] },
        middlePoint: { width: 12, height: 4, cornerRadius: 2 }
    }
})

const rect = Rect.one({ editable: true, fill: 'rgb(50,205,121)', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.target = rect