import { App, Rect } from 'leafer-ui'
import { EditorEvent } from '@leafer-in/editor'

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: 'rgb(50,205,121)', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: 'rgb(50,205,121)', editable: true }, 300, 100))

app.editor.on(EditorEvent.SELECT, (e) => { // [!code hl:3]
    console.log(e.editor.list)
})