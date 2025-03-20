// #图形编辑器 [创建图形]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件(可选)


const app = new App({ view: window, editor: {}, fill: '#333' })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '2秒后，按下鼠标拖动可创建矩形', fill: '#999', fontSize: 16 })


app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 300))

app.editor.select(app.tree.children[2])

setTimeout(() => {

    // 2秒后进入创建图形模式 // [!code hl:3]
    app.editor.visible = false
    app.tree.hitChildren = false

    // 创建矩形（拖拽）
    let rect: Rect

    app.on(DragEvent.START, () => {
        rect = new Rect({ editable: true, fill: '#32cd79' })
        app.tree.add(rect)
    })

    app.on(DragEvent.DRAG, (e: DragEvent) => {
        if (rect) rect.set(e.getPageBounds()) // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
    })

}, 2000)
