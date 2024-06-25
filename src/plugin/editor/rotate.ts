import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)

app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))


app.editor.select(rect) // 选中 rect

setTimeout(() => {

    // 手动旋转到45度 // [!code hl:5]
    const rotation = 45

    // 围绕中心旋转到指定 rotation， 需减去元素的 rotation，如下：
    app.editor.rotateOf('center', rotation - rect.rotation)

}, 2000)
