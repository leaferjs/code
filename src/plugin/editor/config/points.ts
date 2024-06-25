import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({  // [!code hl:9]
    view: window,
    editor: {
        point: { cornerRadius: 0 },
        middlePoint: {},
        rotatePoint: { width: 16, height: 16 },
        rect: { dashPattern: [3, 2] }
    }
})

const rect = Rect.one({ editable: true, fill: 'rgb(50,205,121)', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.target = rect