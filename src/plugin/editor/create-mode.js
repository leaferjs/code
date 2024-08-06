import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor'


const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.editor.select(app.tree.children[0])

setTimeout(() => {

    // 2秒后进入创建图形模式 // [!code hl:3]
    app.editor.visible = false
    app.tree.hitChildren = false

    // 创建图形（拖拽）
    let rect

    app.on(DragEvent.START, () => {
        rect = new Rect({ editable: true, fill: 'rgb(50,205,121)' })
        app.tree.add(rect)
    })

    app.on(DragEvent.DRAG, (e) => {
        if (rect) rect.set(e.getPageBounds())
    })

}, 2000)